import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import HeaderControls from '../ui/header-controls';

interface HeaderProps {
  data: any;
}

export default function Header({ data }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {  t  } = useTranslation();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              {t('Global.company_short_name')}
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {data.menu && data.menu.map((item: any) => (
              <a href={item.href} key={item.name} className="text-gray-700 hover:text-blue-600 transition-colors">
                {item.name}
              </a>
            ))}
          </div>

          {/* Language Switch & Mobile Menu */}
          <HeaderControls 
            isMenuOpen={isMenuOpen} 
            setIsMenuOpen={setIsMenuOpen} 
          />
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              {data.menu && data.menu.map((item: any) => (
                <a href={item.href} key={item.name} className="text-gray-700 hover:text-blue-600 transition-colors">
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
