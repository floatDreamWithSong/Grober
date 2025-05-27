// HTTP方法类型
export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

// API端点定义接口
interface ApiController<T extends string> {
  path: string;
  description?: string;
  sub: Record<T, ApiEndpoint>;
}

interface ApiEndpoint {
  method: HttpMethod;
  path: string;
  description?: string;
}

const createApis = <T extends string>(config: Record<T,ApiEndpoint>) => {
  return config;
}

const createController = <T extends string>(config: ApiController<T>) => {
  return config;
}

export const API_ENDPOINTS = {
  // 认证相关端点
  AUTH: createController({
    path:'/auth',
    description: "Authentication endpoints",
    sub: createApis({
      SEND_VERIFY_CODE: {
        method: "POST",
        path: "/sendVerifyCode",
        description: "Send verification code to email",
      },
      REGISTER: {
        method: "POST",
        path: "/register",
        description: "User registration endpoint",
      },
      LOGIN: {
        method: "POST",
        path: "/login",
        description: "User login endpoint",
      },
      LOGOUT: {
        method: "POST",
        path: "/logout",
        description: "User logout endpoint",
      },
    }),
  }),
  GAME: createController({
    path:'/game',
    description:'Game endpoints',
    sub:createApis({

    })
  })
};

// 导出用于类型检查的控制器
export type ControllerType = keyof typeof API_ENDPOINTS;

// 导出用于类型检查的API
export type ApiType<T extends ControllerType> = keyof (typeof API_ENDPOINTS)[T]['sub']

{
  // 测试
  const a:ApiType<'AUTH'> = 'SEND_VERIFY_CODE'
  // @ts-expect-error ApiType 类型不匹配
  const b:ApiType<'AUTH'> = 'SEND_VERIFY_CODE123131'
  // @ts-expect-error ControllerType 类型不匹配
  const c:ControllerType = 'AUTH123123'
}