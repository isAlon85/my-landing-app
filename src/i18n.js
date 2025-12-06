import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      heroTitle: "Welcome to the Future",
      heroSubtitle: "Join thousands of users transforming their workflow",
      ctaButton: "Get Started Free",
      newsletterTitle: "Stay Updated",
      newsletterInputPlaceholder: "Enter your email",
      newsletterSuccess: "Successfully subscribed!",
      newsletterError: "Something went wrong. Try again.",
    },
  },
  es: {
    translation: {
      heroTitle: "Bienvenido al Futuro",
      heroSubtitle:
        "Únete a miles de usuarios transformando su flujo de trabajo",
      ctaButton: "Comenzar Gratis",
      newsletterTitle: "Mantente Actualizado",
      newsletterInputPlaceholder: "Ingresa tu email",
      newsletterSuccess: "¡Suscrito exitosamente!",
      newsletterError: "Algo salió mal. Inténtalo de nuevo.",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
