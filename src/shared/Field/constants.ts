import RegexHelpers from '@helpers/RegexHelpers';

export const INPUT_PATTERNS = {
  ALL: RegexHelpers.all().source,
  EMAIL: RegexHelpers.email().source,
  NUMERIC: RegexHelpers.number().source,
};
