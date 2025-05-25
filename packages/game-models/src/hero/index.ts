import { Card } from "../card";
import { Effect } from "../effect";
import { Operation } from "../operation";

type PlayerCallback = (player: Player) => void;

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
}

interface HeroStatus {
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
  // 状态计算相关，但注意只进行逻辑编排，实际计算应该让依赖类实现
  ApplyCard(card: Card): void;
  ApplyOperation(operation: Operation): void;
  ApplyEffect(effect: Effect): void;
  RemoveEffect(effect: Effect): void;
  // 生命周期相关
  onCreated?:(callback: PlayerCallback)=> void;
  onDestory?:(callback: PlayerCallback)=> void;
}

export interface TurnBasedPlayer extends Player {
  // 回合制生命周期特有的钩子
  beforeTurnStart?:(callback: PlayerCallback)=> void;
  afterTurnStart?:(callback: PlayerCallback)=> void;
  beforeTurnEnd?:(callback: PlayerCallback)=> void;
  afterTurnEnd?:(callback: PlayerCallback)=> void;
}