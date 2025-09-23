import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { MapPin, Phone, Mail } from "lucide-react";
import { DynamicIcon } from "../ui/dynamic-icon";

interface ContactProps {
  data: any;
  language: string;
}

export default function Contact({ data, language }: ContactProps) {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-blue-600 to-blue-500 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{data.title}</h2>
          <p className="text-xl opacity-90">
            {data.brief}
            {language === "EN"
              ? "Ready to bridge the language gap? Let's start the conversation."
              : "准备好跨越语言障碍了吗？让我们开始对话。"}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
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

          {/* Contact Form */}
          {/* <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-white text-xl">
                {language === 'EN' ? 'Send us a message' : '发送消息'}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-white">
                    {language === 'EN' ? 'Name' : '姓名'}
                  </Label>
                  <Input 
                    id="name" 
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70 rounded-xl"
                    placeholder={language === 'EN' ? 'Your name' : '您的姓名'}
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-white">
                    {language === 'EN' ? 'Email' : '邮箱'}
                  </Label>
                  <Input 
                    id="email" 
                    type="email"
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70 rounded-xl"
                    placeholder={language === 'EN' ? 'your@email.com' : '您的邮箱'}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="subject" className="text-white">
                  {language === 'EN' ? 'Subject' : '主题'}
                </Label>
                <Input 
                  id="subject"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 rounded-xl"
                  placeholder={language === 'EN' ? 'How can we help?' : '我们如何为您服务？'}
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-white">
                  {language === 'EN' ? 'Message' : '消息'}
                </Label>
                <Textarea 
                  id="message"
                  rows={4}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 rounded-xl resize-none"
                  placeholder={language === 'EN' ? 'Tell us about your project...' : '告诉我们您的项目详情...'}
                />
              </div>
              <Button className="w-full bg-orange-500 hover:bg-orange-600 border-0 rounded-xl py-3 transform hover:scale-105 transition-all duration-200">
                {language === 'EN' ? 'Send Message' : '发送消息'}
              </Button>
            </CardContent>
          </Card> */}
        </div>
      </div>
    </section>
  );
}
