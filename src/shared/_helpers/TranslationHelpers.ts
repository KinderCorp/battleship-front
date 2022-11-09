import * as translationsConstants from '@translation/constants';
import { LANGUAGE } from '@translation/models';
import ObjectHelpers from '@helpers/ObjectHelpers';

const { DEFAULT_LANGUAGE, TRANSLATIONS } = translationsConstants;

const locale = DEFAULT_LANGUAGE;

type Translation = {
  translate: (
    key: string,
    keysToReplace: Record<string, string>,
    lang: LANGUAGE,
  ) => string;
};

/**
 * Translation helpers.
 *
 * @return {Translation}
 */
const TranslationHelpers = (): Translation => {
  /**
   * Return the asking translation according the lang.
   *
   * @param {string} key Key to translate
   * @param {Record<string, string>} keysToReplace Keys to replace in the translation
   * @param {LANGUAGE} lang Language
   * @return {string}
   */
  const translate = (
    key: string,
    keysToReplace: Record<string, string> = {},
    lang: LANGUAGE = locale,
  ): string => {
    const language = lang || locale;
    const translation = TRANSLATIONS?.[language]?.[key] ?? null;

    if (!ObjectHelpers.isEmpty(keysToReplace)) {
      return Object.keys(keysToReplace).reduce(
        (newTranslation, key) =>
          newTranslation.replaceAll(`{${key}}`, keysToReplace[key]),
        translation,
      );
    }

    return translation || key;
  };

  return { translate };
};

export default TranslationHelpers;
