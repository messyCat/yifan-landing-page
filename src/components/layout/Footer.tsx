import React from "react";
import { useTranslation } from "react-i18next";

const LAUNCH_TIME = 2025;

/**
 * 根据起始年份和当前年份生成年份字符串
 * @param startYear 起始年份
 * @returns 当前年份 <= 起始年份时返回起始年份，否则返回"起始年份-当前年份"
 */
function getYearStartEnd(startYear: number): string {
  const currentYear = new Date().getFullYear();

  if (currentYear <= startYear) {
    return startYear.toString();
  } else {
    return `${startYear}-${currentYear}`;
  }
}

interface FooterProps {
  data: any;
}

export default function Footer({ data }: FooterProps) {
  const { t } = useTranslation();

  const copyright = t("Components.Footer.copyright_fmt", {
    year_start_end: getYearStartEnd(LAUNCH_TIME),
  });

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
          <div className="text-gray-400 text-sm text-center">{copyright}</div>

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
