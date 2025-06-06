export class AppException extends Error {
  constructor(
    public readonly code: number,
    public readonly message: string,
    public readonly details?: any,
  ) {
    super(message);
  }
}

export class ClientException extends AppException {
  static clientExceptionIterator = 1;

  constructor(message: string, overwritePrefix: boolean = true, details?: any) {
    if (overwritePrefix) {
      super(40000 + ClientException.clientExceptionIterator++, message, details);
    } else {
      super(40000 + ClientException.clientExceptionIterator++, `客户端错误: ${message}`, details);
    }
  }
}

export class NoEffectRequestException extends ClientException {
  constructor(message: string, overwritePrefix: boolean = true, details?: any) {
    if (overwritePrefix) {
      super(message, overwritePrefix, details);
    } else {
      super(`无效果请求: ${message}`, overwritePrefix, details);
    }
  }
}

export class ServerException extends AppException {
  static serverExceptionIterator = 1;

  constructor(message: string, overwritePrefix: boolean = true, details?: any) {
    if (overwritePrefix) {
      super(50000 + ServerException.serverExceptionIterator++, message, details);
    } else {
      super(50000 + ServerException.serverExceptionIterator++, `服务器错误: ${message}`, details);
    }
  }
}
export class AuthException extends AppException {
  constructor(message: string, details?: any) {
    super(50001, message, details);
  }
}

export const EXCEPTIONS = {
  VERIFY_CODE_ERROR: new AuthException('验证码错误'),
  EMAIL_ALREADY_BOUND: new AuthException('邮箱已被绑定'),
  EMAIL_AUTH_ERROR: new AuthException('不是被认证的邮箱类型'),
  VERIFY_CODE_SEND_TOO_FREQUENTLY: new AuthException('验证码发送太频繁'),
  USER_NOT_FOUND: new AuthException('用户不存在'),
  WRONG_PASSWORD: new AuthException('密码错误'),
};
