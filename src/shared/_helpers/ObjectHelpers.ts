import ArrayHelpers from '@helpers/ArrayHelpers';

class ObjectHelpers {
  /**
   * Check if the given argument is an object or not.
   *
   * @param {unknown} value Value to check
   * @return {boolean}
   */
  static isObject(value: unknown): value is Record<string, any> {
    return !!value && Object.getPrototypeOf(value) === Object.prototype;
  }

  /**
   * Check if an object has at least one property.
   *
   * @param {unknown} value Value to check
   * @return {boolean}
   */
  static isEmpty(value: unknown): boolean {
    return this.isObject(value) ? Object.keys(value).length === 0 : true;
  }

  /**
   * Make a deep copy of nested objects or arrays.
   *
   * @template T
   * @param {T} value Value to copy
   * @return {T}
   */
  static deepClone<T>(value: T): T {
    // Return the value if it is not an object
    if (typeof value !== 'object' || value === null) return value;

    // Create an array or object to hold the values
    const output = ArrayHelpers.isArray(value) ? [] : ({} as Record<string, any>);

    // Recursively (deep) copy for nested objects, including arrays
    for (const key in value) {
      output[key] = this.deepClone(value[key]);
    }

    return output as T;
  }
}

export default ObjectHelpers;
