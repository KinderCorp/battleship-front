class StringHelpers {
  /**
   * Parse a value to string.
   *
   * @param {unknown} value Value to convert
   * @return {string}
   */
  static parseString(value: unknown): string {
    return String(value);
  }

  /**
   * Check if the value is a string.
   *
   * @param {unknown} value Value to check
   * @return {boolean}
   */
  static isString(value: unknown): value is string {
    return typeof value === 'string';
  }

  /**
   * Check if the value is empty.
   *
   * @param {unknown} value Value to check
   * @return {boolean}
   */
  static isEmpty(value: unknown): boolean {
    return !(this.isString(value) && value.trim().length > 0);
  }
}

export default StringHelpers;
