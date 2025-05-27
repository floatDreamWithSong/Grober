import { HeroStatus } from "../hero";
import { Operation } from "../operation";

export abstract class Effect {
  operations: Operation[]
  additionStatus: HeroStatus
  duration: number; // -1 标识无尽 -2 标识不可移除
  maxOverlap: number; // 最大叠加次数
  fromPlayerId: number;
  constructor(operations: Operation[], dur: number, additionStatus: HeroStatus, maxOverlap: number = 1, fromPlayerId: number) {
    this.operations = operations;
    this.duration = dur;
    this.additionStatus = additionStatus;
    this.maxOverlap = maxOverlap;
    this.fromPlayerId = fromPlayerId;
  }
}
