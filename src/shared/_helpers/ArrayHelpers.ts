class ArrayHelpers {
  /**
   * Get a random item in the array.
   *
   * @param {any[]} array Array
   * @return {any}
   */
  static getRandomItem(array: any[]): any {
    return array[Math.floor(Math.random() * array.length)];
  }

  /**
   * Check if a value is an array.
   *
   * @param {any} value Value to check
   * @return {boolean}
   */
  static isArray(value: any): boolean {
    return Array.isArray(value);
  }

  /**
   * Check if an array has at least one item.
   *
   * @param {any} value Value to check
   * @return {boolean}
   */
  static isEmpty(value: any): boolean {
    return this.isArray(value) ? value.length === 0 : true;
  }
}

export default ArrayHelpers;
