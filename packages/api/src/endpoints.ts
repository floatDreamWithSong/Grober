import { API_PATHS } from "./types";

// HTTP方法类型
export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

// API端点定义接口
export interface ApiEndpoint {
  method: HttpMethod;
  path: string;
  description: string;
}

// 定义所有API端点
export const API_ENDPOINTS: Record<string, ApiEndpoint> = {
  // 认证相关端点
  LOGIN: {
    method: "POST",
    path: API_PATHS.AUTH.LOGIN,
    description: "用户登录",
  },
  REGISTER: {
    method: "POST",
    path: API_PATHS.AUTH.REGISTER,
    description: "用户注册",
  },
  LOGOUT: {
    method: "POST",
    path: API_PATHS.AUTH.LOGOUT,
    description: "用户登出",
  },
  REFRESH_TOKEN: {
    method: "POST",
    path: API_PATHS.AUTH.REFRESH,
    description: "刷新访问令牌",
  },

  // 用户相关端点
  GET_PROFILE: {
    method: "GET",
    path: API_PATHS.USERS.PROFILE,
    description: "获取用户信息",
  },
  UPDATE_PROFILE: {
    method: "PUT",
    path: API_PATHS.USERS.UPDATE,
    description: "更新用户信息",
  },

  // 游戏相关端点
  START_GAME: {
    method: "POST",
    path: API_PATHS.GAME.START,
    description: "开始游戏会话",
  },
  END_GAME: {
    method: "POST",
    path: API_PATHS.GAME.END,
    description: "结束游戏会话",
  },
  GET_GAME_SESSIONS: {
    method: "GET",
    path: API_PATHS.GAME.SESSIONS,
    description: "获取游戏会话列表",
  },
  GET_GAME_SESSION: {
    method: "GET",
    path: API_PATHS.GAME.SESSION(":id"),
    description: "获取特定游戏会话",
  },
  UPDATE_GAME_SESSION: {
    method: "PUT",
    path: API_PATHS.GAME.SESSION(":id"),
    description: "更新游戏会话",
  },

  // 排行榜相关端点
  GET_LEADERBOARD: {
    method: "GET",
    path: API_PATHS.LEADERBOARD.TOP,
    description: "获取排行榜",
  },
  GET_USER_RANKING: {
    method: "GET",
    path: API_PATHS.LEADERBOARD.USER(":userId"),
    description: "获取用户排名",
  },
} as const;

// 导出用于类型检查的端点名称
export type EndpointName = keyof typeof API_ENDPOINTS;
