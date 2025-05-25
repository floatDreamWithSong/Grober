import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { ZodPipe } from 'src/common/pipes/zod-validate.pipe';
import { API_ENDPOINTS, Login, Register } from '@grober/api';
import { Public } from 'src/common/decorators/public.decorator';

@Controller(API_ENDPOINTS.AUTH.path)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post(API_ENDPOINTS.AUTH.sub.SEND_VERIFY_CODE.path)
  @Public()
  async sendVerifyCode(@Body('email', ZodPipe.emailSchema) email: string) {
    return this.userService.sendVerifyCode(email);
  }

  @Post(API_ENDPOINTS.AUTH.sub.REGISTER.path)
  @Public()
  async verifyCode(@Body(ZodPipe.RegisterSchema) body: Register) {
    return this.userService.verifyCode(body);
  }

  @Post(API_ENDPOINTS.AUTH.sub.LOGIN.path)
  @Public()
  async login(@Body(ZodPipe.LoginSchema) body: Login) {
    return this.userService.login(body);
  }
}
