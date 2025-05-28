
// 进攻型卡牌

import { Card, CardArgs } from ".";
import { NormalDamage, NormalHeal } from "../operation";

export abstract class AttackerCard extends Card {
  constructor(args: Omit<CardArgs, "type">) {
    super({ ...args, type: "Attack" });
  }
}

// 卡牌：撞击
export class Hit extends AttackerCard {
  constructor(ownerId: number) {
    super({
      ownerId,
      name: "撞击",
      cost: 10,
      speed: 2,
      operations: [
        new NormalDamage(20) // 造成20点伤害
      ]
    });
  }
}

// 卡牌：火球术
export class Fireball extends AttackerCard {
  constructor(ownerId: number) {
    super({
      ownerId,
      name: "火球术",
      cost: 30,
      speed: 3,
      operations: [
        new NormalDamage(50) // 造成50点伤害
      ]
    });
  }
}

// 支援型卡牌
export class SupportCard extends Card {
  constructor(args: Omit<CardArgs, "type">) {
    super({ ...args, type: "Support" });
  }
}

// 卡牌：急救包
export class FirstAid extends SupportCard {
  constructor(ownerId: number) {
    super({
      ownerId,
      name: "急救包",
      cost: 10,
      speed: 10,
      operations: [
        new NormalHeal(20) // 治愈20点生命值
      ]
    });
  }
}