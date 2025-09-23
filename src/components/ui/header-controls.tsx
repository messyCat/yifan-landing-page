import React from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

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
  className = '' 
}: HeaderControlsProps) {
  const { i18n } = useTranslation();
  
  const currentLanguage = i18n.language === 'en' ? 'EN' : '中文';
  
  const handleLanguageChange = () => {
    const newLanguage = i18n.language === 'en' ? 'zh' : 'en';
    i18n.changeLanguage(newLanguage);
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
