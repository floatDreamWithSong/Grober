import { NumericOperation } from ".";
import { NumericValue } from "../type";

export abstract class RestoreShield<T extends NumericValue> extends NumericOperation<T> {
  constructor(value: T) {
    super(value);
  }
}

export abstract class ConsumeShield<T extends NumericValue> extends NumericOperation<T> {
  constructor(value: T) {
    super(value);
  }
}

export abstract class IncreaseMaxShield<T extends NumericValue> extends NumericOperation<T> {
  constructor(value: T) {
    super(value);
  }
}
export abstract class DecreaseMaxShield<T extends NumericValue> extends NumericOperation<T> {
  constructor(value: T) {
    super(value);
  }
}