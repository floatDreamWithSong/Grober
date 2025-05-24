import { z } from 'zod'
import {
  UserSchema,
  CreateUserSchema,
  LoginSchema,
  GameSessionSchema,
  CreateGameSessionSchema,
  UpdateGameSessionSchema,
  LeaderboardEntrySchema,
  GetLeaderboardSchema,
  ApiResponseSchema,
  ApiErrorSchema,
} from './schemas'

// 基于schemas推断的类型
export type User = z.infer<typeof UserSchema>
export type CreateUser = z.infer<typeof CreateUserSchema>
export type Login = z.infer<typeof LoginSchema>

export type GameSession = z.infer<typeof GameSessionSchema>
export type CreateGameSession = z.infer<typeof CreateGameSessionSchema>
export type UpdateGameSession = z.infer<typeof UpdateGameSessionSchema>

export type LeaderboardEntry = z.infer<typeof LeaderboardEntrySchema>
export type GetLeaderboard = z.infer<typeof GetLeaderboardSchema>

export type ApiResponse<T> = z.infer<ReturnType<typeof ApiResponseSchema<T>>>
export type ApiError = z.infer<typeof ApiErrorSchema>

// 游戏状态相关类型
export type GameStatus = 'active' | 'completed' | 'abandoned'

// API路径常量
export const API_PATHS = {
  // 认证相关
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
  },
  // 用户相关
  USERS: {
    PROFILE: '/users/profile',
    UPDATE: '/users/profile',
  },
  // 游戏相关
  GAME: {
    SESSIONS: '/game/sessions',
    SESSION: (id: string) => `/game/sessions/${id}`,
    START: '/game/start',
    END: '/game/end',
  },
  // 排行榜相关
  LEADERBOARD: {
    TOP: '/leaderboard/top',
    USER: (userId: string) => `/leaderboard/user/${userId}`,
  },
} as const 