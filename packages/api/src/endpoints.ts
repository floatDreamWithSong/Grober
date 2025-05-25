// HTTP方法类型
export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

// API端点定义接口
export interface ApiEndpoint {
  path: string;
  description?: string;
  sub: Record<
    string,
    {
      method: HttpMethod;
      path: string;
      description?: string;
    }
  >;
}

// 定义所有API端点
export const API_ENDPOINTS: Record<"AUTH" | string, ApiEndpoint> = {
  // 认证相关端点
  AUTH: {
    path: "/auth",
    description: "Authentication endpoints",
    sub: {
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
    },
  },
} as const;
// 导出用于类型检查的端点名称
export type EndpointName = keyof typeof API_ENDPOINTS;
