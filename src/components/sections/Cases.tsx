import React, { useState, useMemo, memo } from "react";
import { useTranslation } from "react-i18next";
import { ImageWithFallback } from "../ui/image-with-fallback";
import { useImagePreloader } from "../../hooks/useImagePreloader";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
// import { printNetworkReport } from "../../utils/networkMonitor";
import { debugLog, debugConfig } from "../../config/debug";

interface CasesProps {
  data: any;
}

// 行业数据类型定义
interface Industry {
  id: string;
  name: string;
  title: string;
  description: string;
  image?: string;
  clients?: Array<{ name: string }>;
}

// 优化的图片显示组件，使用 memo 避免不必要的重新渲染
const IndustryImage = memo<{
  industries: Industry[];
  selectedIndustry: string;
  isImageLoaded: (url: string) => boolean;
}>(({ industries, selectedIndustry, isImageLoaded }) => {
  debugLog.componentState("🖼️ [IndustryImage] 组件渲染", {
    selectedIndustry,
    totalIndustries: industries.length,
  });

  return (
    <div className="relative h-64 lg:h-full min-h-[400px]">
      {industries.map((industry: Industry) => {
        const isSelected = industry.id === selectedIndustry;

        if (!industry.image) return null;

        return (
          <div
            key={industry.id}
            className={`absolute inset-0 transition-opacity duration-300 ${
              isSelected ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <ImageWithFallback
              src={industry.image}
              alt={industry.name}
              className="w-full h-full object-cover"
              // 预加载所有图片，但只显示当前选中的
              loading={isSelected ? "eager" : "lazy"}
            />
          </div>
        );
      })}

      {/* 渐变遮罩 */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-20"></div>
    </div>
  );
});

IndustryImage.displayName = "IndustryImage";

export default function Cases({ data }: CasesProps) {
  const { t } = useTranslation();
  const [selectedIndustry, setSelectedIndustry] = useState("automotive");

  // 使用 Intersection Observer 监测组件是否即将进入视口
  const { elementRef, hasIntersected } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "400px", // 提前300px开始预加载
  });

  // 收集所有行业的图片URLs用于预加载
  const allImageUrls = useMemo(() => {
    const urls = data.industries
      .map((industry: any) => industry.image)
      .filter((url: string) => url && url.trim() !== "");

    /* debugLog.componentState("🎯 [Cases组件] 收集到的图片URLs:", {
      总数: urls.length,
      URLs: urls,
    }); */

    return urls;
  }, [data.industries]);

  // 只有当组件即将进入视口时才开始预加载
  const { isImageLoaded, isPreloading, getPreloadedImage } = useImagePreloader(
    allImageUrls,
    {
      delay: 100, // 较短的延迟，因为已经是在即将可见时才触发
      priority: "low",
      enabled: hasIntersected, // 只有当组件即将可见时才启用预加载
    }
  );

  const currentIndustry: Industry =
    data.industries.find((ind: Industry) => ind.id === selectedIndustry) ||
    data.industries[0];

  // 监控预加载状态变化
  React.useEffect(() => {
    debugLog.componentState("🔄 [Cases组件] 预加载状态更新:", {
      hasIntersected,
      isPreloading,
      currentImage: currentIndustry.image,
      isCurrentImageLoaded: currentIndustry.image
        ? isImageLoaded(currentIndustry.image)
        : false,
    });
  }, [hasIntersected, isPreloading, currentIndustry.image, isImageLoaded]);

  return (
    <section id="cases" className="py-20 bg-gray-50" ref={elementRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {data.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {data.brief}
          </p>
        </div>

        {/* Industry Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {data.industries.map((industry: Industry) => (
            <button
              key={industry.id}
              onClick={() => {
                debugLog.componentState("🔄 [Cases组件] 切换行业:", {
                  from: selectedIndustry,
                  to: industry.id,
                  imageLoaded: industry.image
                    ? isImageLoaded(industry.image)
                    : false,
                });
                setSelectedIndustry(industry.id);

                /* // 延迟打印网络报告，给图片加载时间
                setTimeout(() => {
                  printNetworkReport();
                }, 500); */
              }}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-colors duration-50 ${
                selectedIndustry === industry.id
                  ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {industry.name}
            </button>
          ))}
        </div>

        {/* Industry Showcase */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Content Side */}
            {/* <div className="p-8 lg:p-12 flex flex-col justify-center"> */}
            <div className="p-8 lg:p-12 flex flex-col justify-between min-h-522 lg:min-h-610">
              <div className="mb-6">
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                  {currentIndustry.name}
                  {" " + t("Global.sector")}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  {currentIndustry.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {currentIndustry.description}
                </p>
              </div>

              {/* Client Logos */}
              {currentIndustry.clients && (
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {data.partners}
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {currentIndustry.clients.map(
                      (client: { name: string }, index: number) => (
                        <div
                          key={index}
                          className="bg-gray-50 rounded-xl p-4 text-center"
                        >
                          <div className="text-base font-medium text-gray-800">
                            {client.name}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}

              {/* <div className="mt-8">
                <Button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-3 rounded-xl border-0 transform hover:scale-105 transition-all duration-200">
                  {language === "EN" ? "Learn More" : "了解更多"}
                </Button>
              </div> */}
            </div>

            {/* Image Side */}
            <IndustryImage
              industries={data.industries}
              selectedIndustry={selectedIndustry}
              isImageLoaded={isImageLoaded}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
