import { Injectable, Logger } from '@nestjs/common';
import { CosService } from '../../common/utils/cos/cos.service';
import { EmailService } from 'src/common/utils/email/email.service';
import { InjectRedis } from '@nestjs-modules/ioredis';
import Redis from 'ioredis';
import { EXCEPTIONS } from 'src/common/exceptions';
import { JwtUtils } from 'src/common/utils/jwt/jwt.service';
import { emailSchema, Login, Register } from '@grober/api';
import { PrismaService } from 'src/common/utils/prisma/prisma.service';

@Injectable()
export class UserService {

  private readonly logger = new Logger(UserService.name);
  constructor(
    private readonly cosService: CosService,
    private readonly prismaService: PrismaService,
    private readonly emailService: EmailService,
    private readonly jwtUtils: JwtUtils,
    @InjectRedis() private readonly redisService: Redis,
  ) { }

  private validateEmail(email: string) {
    return emailSchema.safeParse(email).success;
  }

  async sendVerifyCode(email: string): Promise<void> {
    // 检查邮箱格式
    if (!this.validateEmail(email)) {
      throw EXCEPTIONS.EMAIL_AUTH_ERROR;
    }
    // 检查邮箱是否已经绑定
    let code = await this.redisService.get(email);
    if (code) {
      throw EXCEPTIONS.VERIFY_CODE_SEND_TOO_FREQUENTLY;
    }
    // 发送验证码
    code = Math.floor(Math.random() * 1000000)
      .toString()
      .padStart(6, '0');
    await this.emailService.sendVerificationCode(email, code);
    // 缓存验证码，有效期为 5 分钟
    await this.redisService.set(email, code, 'EX', 5 * 60);
  }

  async verifyCode(body: Register) {
    const { email, verifyCode: code, username, password } = body;
    const _code = await this.redisService.get(email);
    if (_code != code) {
      throw EXCEPTIONS.VERIFY_CODE_ERROR;
    }
    // 绑定成功，删除验证码
    await this.redisService.del(email);
    // 创建用户
    const user = await this.prismaService.user.create({
      data: {
        email,
        username,
        password,
      },
    });

    // 签发新的 JWT
    return this.createJwtToken(user.userType, user.id);
  }

  async login(body: Login) {
    const { usernameOrEmail, password } = body;
    // 检查用户名或邮箱格式
    const user = !this.validateEmail(usernameOrEmail)
      ? // 如果不是邮箱格式，则认为是用户名
      await this.prismaService.user.findUnique({
        where: {
          username: usernameOrEmail,
        },
      })
      : // 如果是邮箱格式，则认为是邮箱
      await this.prismaService.user.findUnique({
        where: {
          email: usernameOrEmail,
        },
      });

    if (!user) {
      throw EXCEPTIONS.USER_NOT_FOUND;
    }
    // 检查密码
    if (user.password !== password) {
      throw EXCEPTIONS.WRONG_PASSWORD;
    }
    // 签发新的 JWT
    return this.createJwtToken(user.userType, user.id);
  }
  
  private createJwtToken(userType: number, id: number) {
    this.logger.log(`用户${id}登录成功, jwtToken: ${userType}`);
    return this.jwtUtils.sign({
      userType,
      iat: Math.floor(Date.now() / 1000),
      id,
    });
  }
}
