class NumberHelpers {
  /**
   * Generate random number in given range.
   *
   * @param {number} min Minimum value
   * @param {number} max Maximum value
   * @return {number}
   */
  static randomNumber(min: number, max: number): number {
    return Math.round(Math.random() * (max - min) + min);
  }
}

export default NumberHelpers;
