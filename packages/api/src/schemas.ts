import { z } from "zod";

export const usernameSchema = z.string().min(3).max(20);
export const emailSchema = z.string().email();
export const passwordSchema = z.string().min(6).max(20);
export const verifyCodeSchema = z.string().length(6);

export const RequestVerifyCodeSchema = z.object({
  email: emailSchema,
});

export const RegisterSchema = z.object({
  username: usernameSchema,
  password: passwordSchema,
  email: emailSchema,
  verifyCode: verifyCodeSchema,
});

export const LoginSchema = z.object({
  // 可以是用户名或邮箱
  usernameOrEmail: z.union([usernameSchema, emailSchema]),
  password: passwordSchema,
});

export type RequestVerifyCode = z.infer<typeof RequestVerifyCodeSchema>;
export type Register = z.infer<typeof RegisterSchema>;
export type Login = z.infer<typeof LoginSchema>;
