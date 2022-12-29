class ArrayHelpers {
  /**
   * Get a random item in the array.
   *
   * @param {unknown[]} array Array
   * @return {any}
   */
  static getRandomItem(array: unknown[]): any {
    return array[Math.floor(Math.random() * array.length)];
  }

  /**
   * Check if a value is an array.
   *
   * @param {unknown} value Value to check
   * @return {boolean}
   */
  static isArray(value: unknown): value is any[] {
    return Array.isArray(value);
  }

  /**
   * Check if an array has at least one item.
   *
   * @param {unknown} value Value to check
   * @return {boolean}
   */
  static isEmpty(value: unknown): boolean {
    return this.isArray(value) ? value.length === 0 : true;
  }
}

export default ArrayHelpers;
