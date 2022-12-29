import ArrayHelpers from '@helpers/ArrayHelpers';

class ObjectHelpers {
  /**
   * Check if the given argument is an object or not.
   *
   * @param {any} value Value to check
   * @return {boolean}
   */
  static isObject(value: any): value is Record<string, any> {
    return !!value && Object.getPrototypeOf(value) === Object.prototype;
  }

  /**
   * Check if an object has at least one property.
   *
   * @param {any} value Value to check
   * @return {boolean}
   */
  static isEmpty(value: any): boolean {
    return this.isObject(value) ? Object.keys(value).length === 0 : true;
  }

  /**
   * Make a deep copy of nested objects or arrays.
   *
   * @param {any} value Value to copy
   * @return {any}
   */
  static deepClone(value: any): any {
    // Return the value if it is not an object
    if (typeof value !== 'object' || value === null) return value;

    // Create an array or object to hold the values
    const output = ArrayHelpers.isArray(value) ? [] : ({} as Record<string, any>);

    // Recursively (deep) copy for nested objects, including arrays
    for (const key in value) {
      output[key] = this.deepClone(value[key]);
    }

    return output;
  }
}

export default ObjectHelpers;
