import { NormalDamageByMaxHealthPercent, Operation } from "../operation";

export const SpecialEffectType = {
  slience: "silence", // 沉默, 不可出牌，但是回合结束后仍然触发钩子
  stun: "stun", // 眩晕，相当于沉默+回合结束不触发钩子
} as const;

export type SpecialEffectType = keyof typeof SpecialEffectType;

export interface SpecialEffectStatus {
  type: SpecialEffectType; // 特殊状态类型
}

export abstract class Effect {
  operations?: Operation[]
  specialStatus?: SpecialEffectStatus[]
  duration: number; // -1 标识无尽 -2 标识不可移除
  maxOverlap: number; // 最大叠加次数
  fromPlayerId: number;
  overlapCount: number; // 当前叠加次数
  constructor(dur: number, fromPlayerId: number, operations?: Operation[], specialStatus?: SpecialEffectStatus[], maxOverlap: number = 1,) {
    this.operations = operations;
    this.duration = dur;
    this.specialStatus = specialStatus;
    this.maxOverlap = maxOverlap;
    this.fromPlayerId = fromPlayerId;
    this.overlapCount = 0; // 初始叠加次数为0
  }
}

// 卡牌效果：烧伤
export class BurnEffect extends Effect {
  constructor(fromPlayerId: number) {
    super(
      3, // 无尽效果
      fromPlayerId,
      [new NormalDamageByMaxHealthPercent(0.02)], // 假设烧伤每回合造成2%的最大生命值伤害
      void 0, // 无额外状态
      3 // 最大叠加次数为3次
    );
  }
}

// 卡牌效果：麻痹
export class ParalysisEffect extends Effect {
  constructor(fromPlayerId: number) {
    super(
      2, // 持续2回合
      fromPlayerId,
      void 0, // 无额外操作
      [{ type: "stun" }], // 特殊状态描述
      1 // 最大叠加次数为1次
    );
  }
}