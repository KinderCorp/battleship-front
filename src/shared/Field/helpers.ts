import StringHelpers from '@helpers/StringHelpers';

/**
 * Get id for fields.
 *
 * @param {string[]} args Arguments infinite
 * @return {string|void}
 */
export const getFieldId = (...args: string[]): string => {
  if ([...args].every((arg) => StringHelpers.isEmpty(arg))) return '';

  return ['field', ...args].join('-');
};
