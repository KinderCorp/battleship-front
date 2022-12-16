import type { IntRange } from '@core/models';

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

  /**
   * Parse a number.
   *
   * @param {any} value Value to convert
   * @param {number} radix Base of the number
   * @return {number}
   */
  static parseInt(value: any, radix?: IntRange<2, 36>): number {
    return parseInt(value, radix || 10);
  }
}

export default NumberHelpers;
