import type { Dispatch, SetStateAction } from 'react';

import * as translationsConstants from '@translation/constants';
import type { LANGUAGE } from '@translation/models';
const { DEFAULT_LANGUAGE } = translationsConstants;

export type UseTranslation = {
  language: string;
  setLanguage: Dispatch<SetStateAction<typeof DEFAULT_LANGUAGE>>;
  translate: (key?: string, keysToReplace?: Record<string, string>, lang?: LANGUAGE) => string;
};
