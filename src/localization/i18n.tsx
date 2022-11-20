import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  fallbackLng: "en",
  resources: {
    en: {
      translation: {
        columns: {
          name: "name",
          status: "status",
          gender: "gender",
          species: "species",
          created: "create",
          origin: "origin",
          detail: "detail",
        },
        buttons: {
          back: "back",
          more: "load more",
        },
      },
    },
    sk: {
      translation: {
        columns: {
          name: "meno",
          status: "status",
          gender: "pohlavie",
          species: "druh",
          created: "vytvoreny",
          origin: "povod",
          detail: "detail",
        },
        buttons: {
          back: "spat",
          more: "zobrazit viac",
        },
      },
    },
  },
});
