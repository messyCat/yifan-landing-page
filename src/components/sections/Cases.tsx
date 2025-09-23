import React from "react";

interface CasesProps {
  data: any;
  language: string;
}

export default function Cases({ data, language }: CasesProps) {
  const clients = [
    { name: "Baidu", logo: "百度" },
    { name: "ChinaGas", logo: "中燃" },
    { name: "TechCorp", logo: "科技" },
    { name: "GlobalTrade", logo: "全球贸易" },
    { name: "Innovation Co", logo: "创新" },
    { name: "FutureTech", logo: "未来科技" },
  ];

  return (
    <section id="cases" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {language === "EN"
              ? "Trusted by Leading Companies"
              : "领先企业的信赖选择"}
          </h2>
          <p className="text-xl text-gray-600">
            {language === "EN"
              ? "We are proud to serve industry leaders across various sectors"
              : "我们很荣幸为各行业领军企业提供服务"}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow flex items-center justify-center"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800 mb-1">
                  {client.logo}
                </div>
                <div className="text-sm text-gray-500">{client.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
