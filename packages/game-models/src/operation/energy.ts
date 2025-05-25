import { NumericOperation } from ".";
import { NumericValue } from "../type";

export abstract class RestoreEnergy<T extends NumericValue> extends NumericOperation<T> {
  constructor(value: T) {
    super(value);
  }
}

export abstract class ConsumeEnergy<T extends NumericValue> extends NumericOperation<T> {
  constructor(value: T) {
    super(value);
  }
}

export abstract class IncreaseMaxEnergy<T extends NumericValue> extends NumericOperation<T> {
  constructor(value: T) {
    super(value);
  }
}
export abstract class DecreaseMaxEnergy<T extends NumericValue> extends NumericOperation<T> {
  constructor(value: T) {
    super(value);
  }
}