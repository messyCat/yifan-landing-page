import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { DynamicIcon } from "../ui/dynamic-icon";

interface ServicesProps {
  data: any;
}

// 优势卡片组件
interface AdvantageCardProps {
  advantage: any;
  index: number;
  authorizationCode?: string;
}

const AdvantageCard = React.memo(
  ({ advantage, index, authorizationCode }: AdvantageCardProps) => {
    const isBlueTheme = index % 2 === 1;
    const bgGradient = isBlueTheme
      ? "from-blue-50 to-blue-100"
      : "from-orange-50 to-orange-100";
    const iconGradient = isBlueTheme
      ? "from-blue-600 to-blue-500"
      : "from-orange-600 to-orange-500";
    const textColor = isBlueTheme ? "text-blue-600" : "text-orange-600";

    return (
      <div
        className={`${bgGradient} flex flex-col items-center text-center p-6 bg-gradient-to-br rounded-2xl`}
      >
        <div
          className={`${iconGradient} w-14 h-14 bg-gradient-to-br rounded-2xl flex items-center justify-center mb-4`}
        >
          <DynamicIcon name={advantage.icon} className="w-7 h-7 text-white" />
        </div>
        <h4 className="text-lg font-semibold text-gray-900 mb-3">
          {advantage.title}
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed">
          {advantage.description}
        </p>
        {advantage.id === "Authoritative" && authorizationCode && (
          <div className="mt-1">
            <div
              className={`${textColor} inline-flex items-center px-1 py-1 rounded-full text-xs font-medium`}
            >
              {authorizationCode}
            </div>
          </div>
        )}
      </div>
    );
  }
);

AdvantageCard.displayName = "AdvantageCard";

export default function Services({ data }: ServicesProps) {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {data.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {data.brief}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {data.main_service_list.map((service, index) => {
            return (
              <Card
                key={index}
                className="rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <DynamicIcon
                      name={service.icon}
                      className="w-8 h-8 text-white"
                    />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Service Advantages */}
        {data.service_advantage && (
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {data.service_advantage.title}
              </h3>
              <p className="text-lg text-gray-600">
                {data.service_advantage.brief}
              </p>
            </div>

            <div className="flex flex-col items-center">
              {/* First row - 2 items */}
              <div className="grid md:grid-cols-2 gap-8 mb-8 w-full md:max-w-3xl">
                {data.service_advantage.advantage_list
                  .slice(0, 2)
                  .map((advantage, index) => (
                    <AdvantageCard
                      key={index + advantage.id}
                      advantage={advantage}
                      index={index}
                      authorizationCode={
                        data.service_advantage.authorization_code
                      }
                    />
                  ))}
              </div>

              {/* Second row - 3 items */}
              {data.service_advantage.advantage_list.length > 2 && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {data.service_advantage.advantage_list
                    .slice(2)
                    .map((advantage, index) => (
                      <AdvantageCard
                        key={index + 2 + advantage.id}
                        advantage={advantage}
                        index={index + 2}
                        authorizationCode={
                          data.service_advantage.authorization_code
                        }
                      />
                    ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
