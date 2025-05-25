import { NumericValue } from "../type";
import { Player } from '../hero/index';
export abstract class Operation {}

export abstract class NumericOperation<T extends NumericValue> extends Operation {
  value: T;
  constructor(value: T) {
    super()
    this.value = value
  }
  abstract applyTo(Player: Player): void;
}

export * from "./attack";
export * from "./armor";
export * from "./health";
export * from "./shield";
export * from "./energy";
