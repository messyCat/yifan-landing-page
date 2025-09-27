import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App";
import "./index.css";
import "./styles/globals.css";
import "./styles/safari-compatibility.css";

import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import en from "./locales/en.json";
import zh from "./locales/zh.json";

// 初始化i18n
i18next.init({
  lng: "zh",
  fallbackLng: "zh",
  resources: {
    en: { translation: en },
    zh: { translation: zh },
  },
});

createRoot(document.getElementById("root")!).render(
  <I18nextProvider i18n={i18next}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </I18nextProvider>
);
