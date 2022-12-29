class StringHelpers {
  /**
   * Check if the value is a string.
   *
   * @param {any} value Value to check
   * @return {boolean}
   */
  static isString(value: any): value is string {
    return typeof value === 'string';
  }

  /**
   * Check if the value is empty.
   *
   * @param {any} value Value to check
   * @return {boolean}
   */
  static isEmpty(value: any): boolean {
    return !(this.isString(value) && value.trim().length > 0);
  }
}

export default StringHelpers;
