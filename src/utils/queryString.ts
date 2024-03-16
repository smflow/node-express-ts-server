export class QueryString {
  static isNumber<E extends string>(val: E) {
    return !Number.isNaN(Number(val));
  }
  static isBoolean<E extends string>(val: E) {
    const e = val.toLowerCase();
    return e === "true" || e === 'false';
  }
}