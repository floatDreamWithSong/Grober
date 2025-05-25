import { NumericOperation } from ".";
import { NumericValue } from "../type";

export abstract class Damage<T extends NumericValue> extends NumericOperation<T> {
  constructor(value: T) {
    super(value);
  }
}

export abstract class Heal<T extends NumericValue> extends NumericOperation<T> {
  constructor(value: T) {
    super(value);
  }
}

export abstract class IncreaseMaxHealth<T extends NumericValue> extends NumericOperation<T> {
  constructor(value: T) {
    super(value);
  }
}
export abstract class DecreaseMaxHealth<T extends NumericValue> extends NumericOperation<T> {
  constructor(value: T) {
    super(value);
  }
}