import { Card } from "../card";
import { Effect } from "../effect";
import { Operation } from "../operation";

// 英雄作为行为主体，收到来自外部的信号会综合自身状态进行逻辑编排
export interface Hero {
  // 这里仅仅是数值，不包含状态，状态应由玩家实例来维护
  id: number; // 英雄唯一标识符
  name: string; // 英雄名
  maxHealth: number; // 英雄最大生命值
  baseHealth: number; // 英雄基础生命值
  maxEnergy: number; // 英雄最大能量值
  baseEnergy: number; // 英雄基础能量值
  maxShield: number; // 英雄最大护盾值
  baseShield: number; // 英雄基础护盾值
  maxArmor: number; // 英雄最大护甲值
  baseArmor: number; // 英雄基础护甲值
  maxAttack: number; // 英雄最大攻击力
  baseAttack: number; // 英雄基础攻击力
  extraEnergyRecovery: number; // 额外能量恢复
  extraShieldRecovery: number;
}

export const CaculateType = {
  NORMAL: 'NORMAL', // 普通数值计算
  SETTER: 'SETTER', // 设置为固定值
  RATIO: 'RATIO' // 比率计算
} as const;
export type CaculateType = keyof typeof CaculateType;


export type filterStartWith<K extends string, start extends string> = K extends `${start}${infer _}`?K:never
export type MaxAttribute = filterStartWith<keyof Hero,'max'>
export type BaseAttribute = filterStartWith<keyof Hero, 'base'>

export type OmitKeys<T, K extends keyof T> = Omit<T, K>
export type VariableHeroAttribute = OmitKeys<Hero, 'id' | 'name' | BaseAttribute> & HeroStatus
export type CaculatorLike = (user: Player, target: Player, opt: Operation) => VariableHeroAttribute

export interface HeroStatus {
  health: number; // 当前生命值
  energy: number; // 当前能量值
  shield: number; // 当前护盾值
  armor: number; // 当前护甲值
  attack: number; // 当前攻击力
}

export interface Player extends Hero, HeroStatus {
  // 这里包含状态
  effects: Effect[]; // 当前玩家身上的效果
  cards: Card[]; // 当前玩家手牌

  useCard(cardIndex: number): Card;
  addCard(card: Card): void;
  // 生命周期相关
  // onCreated?: () => void;
  // onDestory?: () => void;
}

export interface TurnBasedPlayer extends Player {
  // 回合制生命周期特有的钩子
  // 这里的回合制指的是游戏回合，而不是玩家回合，每个回合中双方玩家都可以进行任意次操作，回合仅仅是用于效果计算和状态更新
}

export const createEmptyHeroAttribute = (): VariableHeroAttribute => ({
  armor: 0,
  attack: 0,
  energy: 0,
  health: 0,
  shield: 0,
  maxArmor: 0,
  maxAttack: 0,
  maxEnergy: 0,
  maxHealth: 0,
  maxShield: 0,
  extraEnergyRecovery: 0,
  extraShieldRecovery: 0
})

export * from './heros'