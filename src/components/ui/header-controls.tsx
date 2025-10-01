import React from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import {
  changeLanguage,
  getCurrentLanguage,
  getLanguageDisplayName,
} from "../../locales";

interface HeaderControlsProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  className?: string;
}

// 定义支持的语言列表
/* const languages = [
    { code: 'en', label: 'En' },
    { code: 'zh', label: '中文' },
    // ...添加更多语言
]; */

export default function HeaderControls({
  isMenuOpen,
  setIsMenuOpen,
  className = "",
}: HeaderControlsProps) {
  const currentLang = getCurrentLanguage();
  const currentLanguage = getLanguageDisplayName();

  const handleLanguageChange = () => {
    const newLanguage = currentLang === "en" ? "zh" : "en";
    changeLanguage(newLanguage);
  };

  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      {/* Language Switch */}
      <button
        onClick={handleLanguageChange}
        className="flex items-center space-x-1 px-3 py-1 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
      >
        <span className="text-sm font-medium">{currentLanguage}</span>
        <ChevronDown className="w-4 h-4" />
      </button>

      {/* Mobile menu button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden p-2 rounded-lg hover:bg-gray-100"
      >
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
    </div>
  );
}
