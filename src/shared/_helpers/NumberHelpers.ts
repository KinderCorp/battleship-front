import type { IntRange } from '@core/models';
import StringHelpers from '@helpers/StringHelpers';

class NumberHelpers {
  /**
   * Check if the value is a number.
   *
   * @param {unknown} value Value to check
   * @return {boolean}
   */
  static isNumber(value: unknown): value is number {
    return typeof value === 'number';
  }

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
   * Parse a value to number.
   *
   * @param {unknown} value Value to convert
   * @param {number} radix Base of the number
   * @return {number}
   */
  static parseInt(value: unknown, radix?: IntRange<2, 36>): number {
    return parseInt(StringHelpers.parseString(value), radix || 10);
  }
}

export default NumberHelpers;
