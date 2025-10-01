import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App";
import "./index.css";
import "./styles/globals.css";
import "./styles/safari-compatibility.css";
import "./styles/lang-diff.css";

import { I18nextProvider } from "react-i18next";
import { initializeI18n } from "./locales";

// 初始化国际化配置
const i18n = initializeI18n();

createRoot(document.getElementById("root")!).render(
  <I18nextProvider i18n={i18n}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </I18nextProvider>
);
