import { Caculators } from "../caculator";
import { createEmptyHeroAttribute, Player } from "../hero";
import { VariableHeroAttribute } from "../hero";
export type OperationCaculator = (user: Player, target: Player, value: number) => VariableHeroAttribute
export class Operation {
  value: number // 数值
  caculator: OperationCaculator
  constructor(value: number, caculator: OperationCaculator) {
    this.value = value;
    this.caculator = caculator;
  }
  apply(user: Player, target: Player): VariableHeroAttribute {
    return this.caculator(user, target, this.value)
  }
}

export class NormalDamage extends Operation { // 
  constructor(value: number) {
    super(value, (user, target, value) => {
      const diff = createEmptyHeroAttribute()
      const damage = Caculators.defaultDamage(user, target, value)
      if(target.shield > 0) {
        diff.shield = Math.min(target.shield, damage)
        diff.health = damage - diff.shield
      } else {
        diff.health = damage
      }
      return diff
    })
  }
}

export class NormalDamageByMaxHealthPercent extends Operation {
  constructor(value: number) {
    super(value, (user, target, value) => {
      const diff = createEmptyHeroAttribute()
      const damage = Caculators.percent(user, target, value, target.maxHealth)
      if(target.shield > 0) {
        diff.shield = Math.min(target.shield, damage)
        diff.health = damage - diff.shield
      } else {
        diff.health = damage
      }
      return diff
    })
  }
}
export class NormalHeal extends Operation {
  constructor(value: number) {
    super(value, (user, target, value) => {
      const diff = createEmptyHeroAttribute()
      diff.health = value
      return diff
    })
  }
}

export class HealByMaxHealthPercent extends Operation {
  constructor(value: number) {
    super(value, (user, target, value) => {
      const diff = createEmptyHeroAttribute()
      diff.health = Caculators.percent(user, target, value, target.maxHealth)
      return diff
    })
  }
}
export class NormalIncreaseMaxHealth extends Operation {
  constructor(value: number) {
    super(value, (user, target, value) => {
      const diff = createEmptyHeroAttribute()
      diff.maxHealth = value
      return diff
    })
  }
}

export class IncreaseMaxHealthByBaseHealth extends Operation {
  constructor(value: number) {
    super(value, (user, target, value) => {
      const diff = createEmptyHeroAttribute()
      diff.maxHealth = Caculators.percent(user, target, value, target.baseHealth)
      return diff
    })
  }
}
export class NormalEnergyRecovery extends Operation {
  constructor(value: number) {
    super(value, (user, target, value) => {
      const diff = createEmptyHeroAttribute()
      diff.energy = value
      return diff
    })
  }
}

export class EnergyRecoveryByMaxEnergyPercent extends Operation {
  constructor(value: number) {
    super(value, (user, target, value) => {
      const diff = createEmptyHeroAttribute()
      diff.energy = Caculators.percent(user, target, value, target.maxEnergy)
      return diff
    })
  }
}

export class NormalShieldRecovery extends Operation {
  constructor(value: number) {
    super(value, (user, target, value) => {
      const diff = createEmptyHeroAttribute()
      diff.shield = value
      return diff
    })
  }
}