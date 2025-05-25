import { NumericOperation } from ".";
import { NumericValue } from "../type";

export abstract class IncreaseArmor<T extends NumericValue> extends NumericOperation<T> {
  constructor(value: T) {
    super(value);
  }
}
export abstract class DecreaseArmor<T extends NumericValue> extends NumericOperation<T> {
  constructor(value: T) {
    super(value);
  }
}

export abstract class IncreaseMaxArmor<T extends NumericValue> extends NumericOperation<T> {
  constructor(value: T) {
    super(value);
  }
}
export abstract class DecreaseMaxArmor<T extends NumericValue> extends NumericOperation<T> {
  constructor(value: T) {
    super(value);
  }
}