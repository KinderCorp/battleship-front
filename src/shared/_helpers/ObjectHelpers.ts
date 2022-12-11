class ObjectHelpers {
  /**
   * Check if the given argument is an object or not.
   *
   * @param {any} value Value to check
   * @return {boolean}
   */
  static isObject(value: any): boolean {
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
   * Make a deep clone of the object.
   *
   * @param {any} value Value to copy
   * @return {any}
   */
  static deepClone(value: any): any {
    return this.isEmpty(value) ? value : JSON.parse(JSON.stringify(value));
  }
}

export default ObjectHelpers;
