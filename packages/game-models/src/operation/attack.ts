import { NumericOperation } from ".";
import { NumericValue } from "../type";

export abstract class IncreaseAttack<
  T extends NumericValue,
> extends NumericOperation<T> {
  constructor(value: T) {
    super(value);
  }
}

export abstract class DecreaseAttack<
  T extends NumericValue,
> extends NumericOperation<T> {
  constructor(value: T) {
    super(value);
  }
}

export abstract class IncreaseMaxAttack<
  T extends NumericValue,
> extends NumericOperation<T> {
  constructor(value: T) {
    super(value);
  }
}
export abstract class DecreaseMaxAttack<
  T extends NumericValue,
> extends NumericOperation<T> {
  constructor(value: T) {
    super(value);
  }
}
