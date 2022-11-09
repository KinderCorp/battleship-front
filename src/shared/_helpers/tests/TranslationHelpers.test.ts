import TranslationHelpers from '@helpers/TranslationHelpers';

const { translate } = TranslationHelpers;

describe('helpers/TranslationHelpers', () => {
  it('should have defined methods', () => {
    expect(translate).toBeDefined();
  });
});
