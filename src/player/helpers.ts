import NumberHelpers from '@helpers/NumberHelpers';

/**
 * Generate random guest player pseudo.
 *
 * @return {string}
 */
export const generateGuestPseudo = (): string => {
  return `Player_${NumberHelpers.randomNumber(100, 1000)}`;
};
