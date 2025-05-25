import { z } from "zod";

// 正整数
export const PositiveIntegerValidator = z.number().refine(
  (val) => {
    return val > 0 && Number.isInteger(val);
  },
  {
    message: "PositiveInteger must be greater than 0",
  },
);

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
