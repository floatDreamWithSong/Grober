import { z } from 'zod'

// 用户相关schemas
export const UserSchema = z.object({
  id: z.string(),
  username: z.string().min(3).max(20),
  email: z.string().email(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export const CreateUserSchema = z.object({
  username: z.string().min(3).max(20),
  email: z.string().email(),
  password: z.string().min(6),
})

export const LoginSchema = z.object({
  username: z.string().min(3).max(20),
  password: z.string().min(6),
})

// 游戏相关schemas
export const GameSessionSchema = z.object({
  id: z.string(),
  userId: z.string(),
  score: z.number().min(0),
  level: z.number().min(1),
  startTime: z.date(),
  endTime: z.date().optional(),
  status: z.enum(['active', 'completed', 'abandoned']),
})

export const CreateGameSessionSchema = z.object({
  userId: z.string(),
})

export const UpdateGameSessionSchema = z.object({
  score: z.number().min(0).optional(),
  level: z.number().min(1).optional(),
  endTime: z.date().optional(),
  status: z.enum(['active', 'completed', 'abandoned']).optional(),
})

// 排行榜相关schemas
export const LeaderboardEntrySchema = z.object({
  id: z.string(),
  userId: z.string(),
  username: z.string(),
  score: z.number(),
  level: z.number(),
  completedAt: z.date(),
})

export const GetLeaderboardSchema = z.object({
  limit: z.number().min(1).max(100).default(10),
  offset: z.number().min(0).default(0),
})

// API响应schemas
export const ApiResponseSchema = <T>(dataSchema: z.ZodSchema<T>) => z.object({
  success: z.boolean(),
  data: dataSchema.optional(),
  error: z.string().optional(),
  timestamp: z.date(),
})

export const ApiErrorSchema = z.object({
  success: z.literal(false),
  error: z.string(),
  timestamp: z.date(),
}) 