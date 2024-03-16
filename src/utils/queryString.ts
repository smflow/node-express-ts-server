export class QueryString {
  static isNumber<E extends string>(val: E) {
    const cv = Number(val);
    return !Number.isNaN(cv) && isFinite(cv);
  }
  static isBoolean<E extends string>(val: E) {
    const e = val.toLowerCase();
    return e === "true" || e === 'false';
  }
}