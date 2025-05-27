import { Player } from "../hero";

export const Caculators = {
  defaultDamage: (user: Player, target: Player, value: number) => {
    return -(user.attack - target.armor) * value
  },
  unchanged: (user: Player, target: Player, value: number) => {
    return value
  },
  percent: (user: Player, target: Player, value: number, dependencyValue: number) => {
    return Math.ceil(dependencyValue * value)
  }
}