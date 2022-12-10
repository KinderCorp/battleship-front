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
}

export default ArrayHelpers;
