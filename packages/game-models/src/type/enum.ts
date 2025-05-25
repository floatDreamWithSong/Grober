import { z } from "zod";
// 卡牌类型枚举
export const CardType = z.enum([
  "Attack", // 攻击
  "Defense", // 防御
  "Support", // 支援
  "Buff", // 增益
  "Exhaust", // 消耗
  "Special", // 特殊
]);
export type CardType = z.infer<typeof CardType>;
