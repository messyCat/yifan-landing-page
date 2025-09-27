import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { MapPin, Phone, Mail, CheckCircle } from "lucide-react";
import { DynamicIcon } from "../ui/dynamic-icon";
import { ImageWithFallback } from "../ui/image-with-fallback";
interface ContactProps {
  data: any;
}

export default function Contact({ data }: ContactProps) {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-blue-600 to-blue-500 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{data.title}</h2>
          {/* <p className="text-xl opacity-90">{data.brief}</p> */}
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact Information */}
          <div className="space-y-8">
            {data.information.list.map((info: any, index: number) => (
              <div className="flex items-start space-x-4" key={index}>
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <DynamicIcon
                    name={info.icon}
                    className="w-8 h-8 text-white"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{info.label}</h3>
                  <p className="opacity-90">{info.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Contact Information */}
          {data.wechat_infomation && (
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20">
              <div className="text-center space-y-6">
                {/* Title */}
                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    {data.wechat_infomation.title}
                  </h3>
                  <p className="opacity-90 leading-relaxed mb-6">
                    {data.wechat_infomation.desc}
                  </p>
                </div>

                {/* QR Code */}
                <div className="w-48 h-48 bg-white rounded-3xl p-2 mx-auto shadow-2xl">
                  <ImageWithFallback
                    src={data.wechat_infomation.qr_code_image}
                    alt="WeChat QR Code"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>

                {/* WeChat ID */}
                <div className="p-3 bg-white/20 rounded-xl mb-4">
                  <p className="text-sm font-medium">
                    {data.wechat_infomation.name_prefix +
                      data.wechat_infomation.name}
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-left">
                {data.wechat_infomation.features.map(
                  (feature: string, index: number) => (
                    <div
                      key={index + feature}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
