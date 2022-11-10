import FRENCH_TRANSLATION from '@translation/languages/fr.json';
import type { LANGUAGE } from '@translation/models';

export const LANGUAGES: Record<Uppercase<LANGUAGE>, LANGUAGE> = { FR: 'fr' };
export const DEFAULT_LANGUAGE: LANGUAGE = LANGUAGES.FR;

export const TRANSLATIONS: Record<LANGUAGE, Record<string, string>> = {
  [LANGUAGES.FR]: FRENCH_TRANSLATION,
};
