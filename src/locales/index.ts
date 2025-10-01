// 导出语言管理相关功能
export {
  initializeI18n,
  changeLanguage,
  getCurrentLanguage,
  getSupportedLanguages,
  getLanguageDisplayName,
} from "./languageManager";

// 导出语言资源
export { default as en } from "./en.json";
export { default as zh } from "./zh.json";