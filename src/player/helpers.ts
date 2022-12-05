import NumberHelpers from '@helpers/NumberHelpers';

/**
 * Generate random guest player pseudo.
 *
 * @return {string}
 */
export const generatePseudo = (): string => {
  return `Player_${NumberHelpers.randomNumber(100, 1000)}`;
};
