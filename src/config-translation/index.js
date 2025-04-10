import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import translationEN from '../locales/en/translation.json'
import translationVI from '../locales/vi/translation.json'
import translationCN from '../locales/cn/translation.json'

const resources = {
  en: { translation: translationEN },
  vi: { translation: translationVI },
  cn: { translation: translationCN },
};

i18next.use(initReactI18next).init({
  lng: 'vi', // if you're using a language detector, do not define the lng option
  debug: false, // check kiem tra xem co bi loi khong
  resources
})