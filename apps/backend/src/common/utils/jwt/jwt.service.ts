import { Injectable } from '@nestjs/common';
import { Configurations } from 'src/common/config';
import { JwtPayload } from 'src/types/jwt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtUtils {
  constructor(private readonly jwtService: JwtService) {}

  sign(payload: JwtPayload): string {
    return this.jwtService.sign(
      {
        ...payload,
      },
      {
        secret: Configurations.JWT_SECRET,
        expiresIn: Configurations.JWT_EXPIRATION_TIME,
      },
    );
  }

  verify(token: string) {
    const payload = this.jwtService.verify<JwtPayload>(token, {
      secret: Configurations.JWT_SECRET,
    });
    return payload;
  }
}
