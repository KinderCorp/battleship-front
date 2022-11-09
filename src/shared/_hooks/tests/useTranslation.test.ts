import { renderHook } from '@testing-library/react-hooks';

import * as translationsConstants from '@translation/constants';
import useTranslation from '@hooks/useTranslation';

describe('hooks/useTranslation', () => {
  const { result } = renderHook(() => useTranslation());
  const translate = result.current.translate;

  it('should have defined methods', () => {
    expect(translate).toBeDefined();
  });

  it('should return the expected translations', () => {
    expect(translate('test.key')).toBe('Clé de test');
    expect(translate('')).toBe('');
    expect(translate('test.unknownKey')).toBe('test.unknownKey');
    expect(translate(undefined)).toBe('');
    expect(translate()).toBe('');
    expect(translate('test.keyWithReplacedValue')).toBe(
      'Pour moi, c’est un {value}. Un {value}, tout le monde sait ce que c’est…',
    );
  });

  it('should return the expected translations with the replaced keys', () => {
    expect(translate('test.keyWithReplacedValue', { value: 'malheur' })).toBe(
      'Pour moi, c’est un malheur. Un malheur, tout le monde sait ce que c’est…',
    );
  });

  it('should return the expected translations with specific language', () => {
    expect(translate('test.key', {}, translationsConstants.LANGUAGES.FR)).toBe('Clé de test');
  });
});
