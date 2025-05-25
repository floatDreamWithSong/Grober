import { Player } from "../entities";
import { Operation } from "../operation";

export abstract class Effect {
  operations: Operation[];
  duration: number;
  constructor(opts: Operation[], dur: number){
    this.duration = dur;
    this.operations = opts;
  }
  abstract applyTo(player: Player): void;
}