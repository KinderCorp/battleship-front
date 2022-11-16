import { useCallback, useEffect, useState } from 'react';

import * as translationsConstants from '@translation/constants';
import type { LANGUAGE } from '@translation/models';
import ObjectHelpers from '@helpers/ObjectHelpers';
import type { UseTranslation } from '@hooks/models';

const { DEFAULT_LANGUAGE, TRANSLATIONS } = translationsConstants;

let currentLanguage = DEFAULT_LANGUAGE;

/**
 * Hook useTranslation.
 *
 * @return {UseTranslation}
 */
const useTranslation = (): UseTranslation => {
  const [language, setLanguage] = useState(currentLanguage);

  useEffect(() => {
    currentLanguage = language;
  }, [language]);

  /**
   * Return the asking translation according the lang.
   *
   * @param {string} key Key to translate
   * @param {Record<string, string>} keysToReplace Keys to replace in the translation
   * @param {LANGUAGE} lang Language
   * @return {string}
   */
  const translate = useCallback(
    (key = '', keysToReplace: Record<string, string> = {}, lang: LANGUAGE = language): string => {
      let translation = TRANSLATIONS?.[lang]?.[key] ?? null;

      // Remplace keys
      if (!ObjectHelpers.isEmpty(keysToReplace)) {
        translation = Object.keys(keysToReplace).reduce(
          (newTranslation, key) => newTranslation.replaceAll(`{${key}}`, keysToReplace[key]),
          translation,
        );
      }

      return translation || key || '';
    },
    [language],
  );

  return { language, setLanguage, translate };
};

export default useTranslation;
