import FRENCH_TRANSLATION from '@translation/languages/fr.json';
import type { LANGUAGE } from '@translation/models';

export const FRENCH = 'fr';

export const LANGUAGES: LANGUAGE[] = [FRENCH];
export const DEFAULT_LANGUAGE: LANGUAGE = FRENCH;

export const TRANSLATIONS: Record<LANGUAGE, Record<string, string>> = {
  [FRENCH]: FRENCH_TRANSLATION,
};
