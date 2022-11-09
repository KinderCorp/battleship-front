class ObjectHelpers {
  /**
   * Check if an object has at least one property.
   *
   * @param {any} value Value to check
   * @return {boolean}
   */
  static isEmpty(value: any): boolean {
    return (
      value &&
      Object.keys(value).length === 0 &&
      Object.getPrototypeOf(value) === Object.prototype
    );
  }
}

export default ObjectHelpers;
