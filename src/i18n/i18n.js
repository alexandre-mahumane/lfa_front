import i18n from "i18next";
import enTranslation from "../i18n/translations/en/global.json";
import ptTranslation from "../i18n/translations/pt/global.json";
import { initReactI18next } from "react-i18next";


i18n.use(initReactI18next).init({
  lng: "pt",
  fallbacklng: "en",
  resources: {
    en: {
      translation: enTranslation,
    },
    pt: {
      translation: ptTranslation,
    },
  },
  interpolation: {
    escape: false,
  },
});

export default i18n;
