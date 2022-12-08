/**
 * Generate random guest player pseudo.
 *
 * @return {string}
 */
export const generateGuestPseudo = (): string => {
  // FIXME: try to generate random number without the date
  // return `Player_${NumberHelpers.randomNumber(100, 1000)}`;
  return `Player_${new Date().getTime().toString().slice(-3)}`;
};
