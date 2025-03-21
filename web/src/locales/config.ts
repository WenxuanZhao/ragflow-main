import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

<<<<<<< HEAD
=======
import { LanguageAbbreviation } from '@/constants/common';
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
import translation_en from './en';
import translation_es from './es';
import translation_id from './id';
import translation_ja from './ja';
import translation_pt_br from './pt-br';
import { createTranslationTable, flattenObject } from './until';
import translation_vi from './vi';
import translation_zh from './zh';
import translation_zh_traditional from './zh-traditional';

const resources = {
<<<<<<< HEAD
  en: translation_en,
  zh: translation_zh,
  'zh-TRADITIONAL': translation_zh_traditional,
  id: translation_id,
  ja: translation_ja,
  es: translation_es,
  vi: translation_vi,
  'pt-BR': translation_pt_br,
=======
  [LanguageAbbreviation.En]: translation_en,
  [LanguageAbbreviation.Zh]: translation_zh,
  [LanguageAbbreviation.ZhTraditional]: translation_zh_traditional,
  [LanguageAbbreviation.Id]: translation_id,
  [LanguageAbbreviation.Ja]: translation_ja,
  [LanguageAbbreviation.Es]: translation_es,
  [LanguageAbbreviation.Vi]: translation_vi,
  [LanguageAbbreviation.PtBr]: translation_pt_br,
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
};
const enFlattened = flattenObject(translation_en);
const viFlattened = flattenObject(translation_vi);
const esFlattened = flattenObject(translation_es);
const zhFlattened = flattenObject(translation_zh);
const jaFlattened = flattenObject(translation_ja);
const pt_brFlattened = flattenObject(translation_pt_br);
const zh_traditionalFlattened = flattenObject(translation_zh_traditional);
export const translationTable = createTranslationTable(
  [
    enFlattened,
    viFlattened,
    esFlattened,
    zhFlattened,
    zh_traditionalFlattened,
    jaFlattened,
    pt_brFlattened,
  ],
  ['English', 'Vietnamese', 'Spanish', 'zh', 'zh-TRADITIONAL', 'ja', 'pt-BR'],
);
i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    detection: {
      lookupLocalStorage: 'lng',
    },
<<<<<<< HEAD
    supportedLngs: [
      'en',
      'zh',
      'zh-TRADITIONAL',
      'id',
      'es',
      'vi',
      'ja',
      'pt-BR',
    ],
=======
    supportedLngs: Object.values(LanguageAbbreviation),
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
