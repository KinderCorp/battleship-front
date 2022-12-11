class ArrayHelpers {
  /**
   * Get a random item in the array.
   *
   * @param {any[]} array Array
   * @return {boolean}
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
  static isArray(value: any): any {
    return Array.isArray(value);
  }

  /**
   * Check if an array has at least one item.
   *
   * @param {any} value Value to check
   * @return {boolean}
   */
  static isEmpty(value: any): any {
    return this.isArray(value) ? value.length === 0 : true;
  }
}

export default ArrayHelpers;
