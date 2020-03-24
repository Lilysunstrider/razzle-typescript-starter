import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resources from "@/assets/i18n";
i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: Object.keys(resources).reduce(
            (acc, cur) => ({ ...acc, [cur]: { translation: resources[cur] } }),
            {}
        ),
        lng: "en",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });
export default i18n;
