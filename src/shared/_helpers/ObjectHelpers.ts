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
}

export default ObjectHelpers;
