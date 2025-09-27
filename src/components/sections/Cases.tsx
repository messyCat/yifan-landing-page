import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ImageWithFallback } from "../ui/image-with-fallback";

interface CasesProps {
  data: any;
}

export default function Cases({ data }: CasesProps) {
  const { t } = useTranslation();
  const [selectedIndustry, setSelectedIndustry] = useState("automotive");

  const currentIndustry =
    data.industries.find((ind) => ind.id === selectedIndustry) ||
    data.industries[0];

  return (
    <section id="cases" className="py-20 bg-gray-50">
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
          {data.industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => setSelectedIndustry(industry.id)}
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
                    {currentIndustry.clients.map((client, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 rounded-xl p-4 text-center"
                      >
                        <div className="text-base font-medium text-gray-800">
                          {client.name}
                        </div>
                      </div>
                    ))}
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
            <div className="relative h-64 lg:h-full min-h-[400px]">
              {currentIndustry.image && (
                <ImageWithFallback
                  src={currentIndustry.image}
                  alt={currentIndustry.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
