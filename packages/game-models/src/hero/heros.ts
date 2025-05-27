import { Hero } from ".";

function createHeroMap<T extends string>(heroMap: Record<T, Hero>) {
  return heroMap;
}

export const HeroMap = createHeroMap({
  HeroA: { // 战士
    id: 1,
    name: 'HeroA',
    baseArmor: 3,
    maxArmor: 4,
    baseHealth: 600,
    maxHealth: 1000,
    baseAttack: 6,
    maxAttack: 10,
    baseEnergy: 100,
    maxEnergy: 200,
    baseShield: 200,
    maxShield: 300,
    extraEnergyRecovery: 10,
    extraShieldRecovery: 30
  },
  HeroB: { // 法师
    id: 2,
    name: 'HeroB',
    baseArmor: 2,
    maxArmor: 3,
    baseHealth: 400,
    maxHealth: 800,
    baseAttack: 5,
    maxAttack: 8,
    baseEnergy: 200,
    maxEnergy: 300,
    baseShield: 240,
    maxShield: 400,
    extraEnergyRecovery: 14,
    extraShieldRecovery: 10,
  }
})

export type HeroKeys = keyof typeof HeroMap