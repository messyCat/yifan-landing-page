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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.service_advantage.advantage_list.map((advantage, index) => (
                <div
                  key={index}
                  className={`${
                    index % 2 === 1
                      ? "from-blue-50 to-blue-100"
                      : "from-orange-50 to-orange-100"
                  } flex flex-col items-center text-center p-6 bg-gradient-to-br rounded-2xl`}
                >
                  <div
                    className={`${
                      index % 2 === 1
                        ? "from-blue-600 to-blue-500"
                        : "from-orange-600 to-orange-500"
                    } w-14 h-14 bg-gradient-to-br rounded-2xl flex items-center justify-center mb-4`}
                  >
                    <DynamicIcon
                      name={advantage.icon}
                      className="w-7 h-7 text-white"
                    />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    {advantage.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Additional certification info */}
            <div className="mt-12 text-center">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full text-white text-sm font-medium">
                <DynamicIcon name="Award" className="w-4 h-4 mr-2" />
                {data.service_advantage.authorization_code}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
