import i18next from "i18next";
import en from "./en.json";
import zh from "./zh.json";

/**
 * 设置HTML标签语言标识的函数
 * 根据当前语言动态设置HTML和Body标签的语言相关属性和类名
 * @param language 语言代码 ('zh' | 'en')
 */
const setHtmlLangAttribute = (language: string) => {
  const htmlElement = document.documentElement;

  // 设置标准 lang 属性（用于SEO和无障碍访问）
  htmlElement.setAttribute("lang", language === "zh" ? "zh-CN" : "en-US");

  // 主要使用body类名（最佳兼容性）
  document.body.className = document.body.className.replace(
    /\blang-\w+\b/g,
    ""
  );
  document.body.classList.add(`lang-${language}`);

  // 可选：为现代浏览器提供data属性（渐进增强）
  /* if (htmlElement.dataset !== undefined) {
    htmlElement.setAttribute("data-language", language);
  } */
};

/**
 * 初始化国际化配置
 * 配置i18next并设置语言变化监听器
 */
export const initializeI18n = () => {
  // 初始化i18n
  i18next.init({
    lng: "zh",
    fallbackLng: "zh",
    resources: {
      en: { translation: en },
      zh: { translation: zh },
    },
  });

  // 初始设置语言标识
  setHtmlLangAttribute(i18next.language);

  // 监听语言变化事件
  i18next.on("languageChanged", (lng) => {
    setHtmlLangAttribute(lng);
  });

  return i18next;
};

/**
 * 手动切换语言
 * @param language 目标语言代码
 */
export const changeLanguage = (language: string) => {
  i18next.changeLanguage(language);
};

/**
 * 获取当前语言
 */
export const getCurrentLanguage = () => {
  return i18next.language;
};

/**
 * 获取支持的语言列表
 */
export const getSupportedLanguages = () => {
  return ["zh", "en"];
};

/**
 * 获取语言显示名称
 * @param language 语言代码
 */
export const getLanguageDisplayName = (language?: string) => {
  const lang = language || getCurrentLanguage();
  return lang === 'en' ? 'EN' : '中文';
};