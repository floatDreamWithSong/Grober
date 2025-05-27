import { z } from "zod";

// 非负
export const NonnegativeNumber = z.number().nonnegative()

export type NonnegativeNumber = z.infer<typeof NonnegativeNumber>

// 非正
export const NonpositiveNumber = z.number().nonpositive()

export type NonpositiveNumber = z.infer<typeof NonpositiveNumber>

// 正整数
export const PositiveIntegerValidator = z.number().nonnegative().int()

export type PositiveInteger = z.infer<typeof PositiveIntegerValidator>;

// 一个介于(0,1]之间的数字
export const RatioValueValidator = z.number().refine(
  (val) => {
    return val > 0 && val <= 1;
  },
  {
    message: "RatioValue must be between 0 and 1",
  },
);

export type RatioValue = z.infer<typeof RatioValueValidator>;

export type NumericValue = RatioValue | PositiveInteger;
