import React from "react";
import { useTranslation } from "react-i18next";

interface FooterProps {
  data: any;
}

export default function Footer({ data }: FooterProps) {
  const { t } = useTranslation();

  /* return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent mb-4 md:mb-0">
            {t("Global.company_short_name")}
          </div>
          <div className="text-gray-400 text-sm">{data.copyright}</div>
        </div>
      </div>
    </footer>
  ); */

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4">
          {/* Logo */}
          <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
            {t("Global.company_short_name")}
          </div>

          {/* Copyright */}
          <div className="text-gray-400 text-sm text-center">
            {data.copyright}
          </div>

          {/* Filing Numbers */}
          <div className="flex items-center gap-3 sm:gap-6 text-center">
            <a
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 text-xs hover:text-blue-400 transition-colors duration-200"
            >
              京ICP备2025141239号
            </a>
            {/* <a
              href="http://www.beian.gov.cn/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 text-xs hover:text-blue-400 transition-colors duration-200 flex items-center gap-1"
            >
              <span>公安备案号</span>
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
