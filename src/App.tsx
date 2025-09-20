import React, { useState } from 'react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import { Label } from './components/ui/label';
// import introBg from '/images/intro-bg.jpg';
import { 
  Languages, 
  Mic, 
  Globe, 
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  CheckCircle,
  Award,
  Users,
  Zap,
  Target
} from 'lucide-react';
// import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('EN');

  const heroImage = "https://images.unsplash.com/photo-1603201667230-bd139210db18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nJTIwb2ZmaWNlfGVufDF8fHx8MTc1ODMxNjcwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

  const services = [
    {
      icon: Languages,
      title: "Translation",
      titleCN: "翻译服务",
      description: "Professional document translation with cultural nuance and technical precision.",
      descriptionCN: "专业文档翻译，兼顾文化内涵与技术精度。"
    },
    {
      icon: Mic,
      title: "Interpretation",
      titleCN: "口译服务",
      description: "Real-time interpretation for meetings, conferences, and business events.",
      descriptionCN: "为会议、研讨会和商务活动提供实时口译服务。"
    },
    {
      icon: Globe,
      title: "Localization",
      titleCN: "本地化服务",
      description: "Cultural adaptation of content for specific markets and audiences.",
      descriptionCN: "针对特定市场和受众的内容文化适配。"
    }
  ];

  const clients = [
    { name: "Baidu", logo: "百度" },
    { name: "ChinaGas", logo: "中燃" },
    { name: "TechCorp", logo: "科技" },
    { name: "GlobalTrade", logo: "全球贸易" },
    { name: "Innovation Co", logo: "创新" },
    { name: "FutureTech", logo: "未来科技" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                {language === 'EN' ? 'TransLink Pro' : '译联专业'}
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">
                {language === 'EN' ? 'Home' : '首页'}
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
                {language === 'EN' ? 'About' : '关于'}
              </a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">
                {language === 'EN' ? 'Services' : '服务'}
              </a>
              <a href="#expertise" className="text-gray-700 hover:text-blue-600 transition-colors">
                {language === 'EN' ? 'Expertise' : '专长'}
              </a>
              <a href="#cases" className="text-gray-700 hover:text-blue-600 transition-colors">
                {language === 'EN' ? 'Cases' : '案例'}
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                {language === 'EN' ? 'Contact' : '联系'}
              </a>
            </div>

            {/* Language Switch & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setLanguage(language === 'EN' ? 'CN' : 'EN')}
                className="flex items-center space-x-1 px-3 py-1 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <span className="text-sm font-medium">{language}</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">
                  {language === 'EN' ? 'Home' : '首页'}
                </a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
                  {language === 'EN' ? 'About' : '关于'}
                </a>
                <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">
                  {language === 'EN' ? 'Services' : '服务'}
                </a>
                <a href="#expertise" className="text-gray-700 hover:text-blue-600 transition-colors">
                  {language === 'EN' ? 'Expertise' : '专长'}
                </a>
                <a href="#cases" className="text-gray-700 hover:text-blue-600 transition-colors">
                  {language === 'EN' ? 'Cases' : '案例'}
                </a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                  {language === 'EN' ? 'Contact' : '联系'}
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        id="home" 
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-500"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url('images/intro-bg.jpg')` }}
        />
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {language === 'EN' ? (
              <>Bridging Languages,<br />Connecting Worlds</>
            ) : (
              <>连接语言世界<br />构建沟通桥梁</>
            )}
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            {language === 'EN' 
              ? 'Professional Chinese-English translation services that empower global communication and business success.'
              : '专业的中英文翻译服务，助力全球沟通与商业成功。'
            }
          </p>
          <Button 
            className="px-8 py-4 text-lg bg-orange-500 hover:bg-orange-600 border-0 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            {language === 'EN' ? 'Get a Quote' : '获取报价'}
          </Button>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {language === 'EN' ? 'About TransLink Pro' : '关于译联专业'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'EN' 
                ? 'Your trusted partner in professional language services'
                : '您值得信赖的专业语言服务伙伴'
              }
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8 lg:p-12">
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">120+</div>
                    <div className="text-gray-600 text-sm">
                      {language === 'EN' ? 'Expert Linguists' : '专业译员'}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">30+</div>
                    <div className="text-gray-600 text-sm">
                      {language === 'EN' ? 'Language Pairs' : '语言对'}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                    <div className="text-gray-600 text-sm">
                      {language === 'EN' ? 'Years Experience' : '年专业经验'}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">1000+</div>
                    <div className="text-gray-600 text-sm">
                      {language === 'EN' ? 'Projects Completed' : '完成项目'}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {language === 'EN' ? (
                <>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    TransLink Pro is a leading language service provider based in Beijing, China. We specialize in delivering professional, high-quality, and efficient translation services, offering expert interpretation, language consulting, and international communication solutions.
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Our team consists of over 120 professional translators, interpreters, and foreign language experts, all graduates from top-tier domestic and international universities. We cover more than 30 language pairs, meeting diverse global communication needs.
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    With our exceptional service quality, we are proud to serve numerous listed companies and renowned enterprises as their trusted language service provider, helping them achieve seamless cross-cultural communication and global business success.
                  </p>
                </>
              ) : (
                <>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    北京译帆科技信息咨询有限公司是总部位于北京的语言供应商，秉承"专业、优质、高效、守信"的理念，提供专业的口笔译、语言咨询及国际传播服务。
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    公司专职译员、兼职译员、外审专家约120人，均毕业于海内外高翻学院。我们的语言服务涵盖30个语种，可满足国内外客户提出的各类语言服务需求。
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    凭借卓越的服务质量，我们更多家上市公司及知名企业的语言供应商，为客户提供优质的跨文化沟通和全球业务成功支持。
                  </p>
                </>
              )}
              
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  {language === 'EN' ? 'ISO Certified' : 'ISO认证'}
                </div>
                <div className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                  {language === 'EN' ? '24/7 Support' : '24小时服务'}
                </div>
                <div className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  {language === 'EN' ? 'Confidential' : '严格保密'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {language === 'EN' ? 'Our Services' : '我们的服务'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'EN' 
                ? 'Comprehensive language solutions tailored to your business needs'
                : '为您的业务需求量身定制的全面语言解决方案'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">
                      {language === 'EN' ? service.title : service.titleCN}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-gray-600 text-base leading-relaxed">
                      {language === 'EN' ? service.description : service.descriptionCN}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Service Advantages */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {language === 'EN' ? 'Why Choose TransLink Pro' : '为什么选择译联专业'}
              </h3>
              <p className="text-lg text-gray-600">
                {language === 'EN' 
                  ? 'Five core advantages that set us apart in the language services industry'
                  : '五大核心优势，让我们在语言服务行业中脱颖而出'
                }
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Comprehensive */}
              <div className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl flex items-center justify-center mb-4">
                  <CheckCircle className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {language === 'EN' ? 'Comprehensive' : '全面'}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {language === 'EN' 
                    ? 'Integrated service package including translation, interpreting, editing, DTP and localization.'
                    : '全面提供口笔译、审校、编辑、DTP及本地化工程一体化服务'
                  }
                </p>
              </div>

              {/* Authoritative */}
              <div className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-600 to-orange-500 rounded-2xl flex items-center justify-center mb-4">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {language === 'EN' ? 'Authoritative' : '权威'}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {language === 'EN' 
                    ? 'Certified translation services with specialized translation seal from Beijing Municipal Public Security Bureau.'
                    : '翻译文件可加盖北京市备案的中英文翻译专用章（No.11010524558G6）'
                  }
                </p>
              </div>

              {/* Professional */}
              <div className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl flex items-center justify-center mb-4">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {language === 'EN' ? 'Professional' : '专业'}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {language === 'EN' 
                    ? 'In strict compliance with codes of conduct and relevant industry quality standards.'
                    : '严格遵守行业行为规范及相关质量标准'
                  }
                </p>
              </div>

              {/* Efficient */}
              <div className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-600 to-orange-500 rounded-2xl flex items-center justify-center mb-4">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {language === 'EN' ? 'Efficient' : '高效'}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {language === 'EN' 
                    ? 'Dedicated project management in fast response to customer requirements.'
                    : '根据客户要求提供专题化项目管理服务，保证服务需求快速响应'
                  }
                </p>
              </div>

              {/* High-quality */}
              <div className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl md:col-span-2 lg:col-span-1">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl flex items-center justify-center mb-4">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {language === 'EN' ? 'High-Quality' : '高质'}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {language === 'EN' 
                    ? 'Strict quality monitoring using alignment tools, OCR tools, QA tools, DTP software, engineering processing software, and CAT tools.'
                    : '使用语料对齐工具、文字识别工具、质量保证工具、排版软件、工程处理软件和计算机辅助翻译工具等，对项目质量进行严格把控'
                  }
                </p>
              </div>
            </div>

            {/* Additional certification info */}
            <div className="mt-12 text-center">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full text-white text-sm font-medium">
                <Award className="w-4 h-4 mr-2" />
                {language === 'EN' 
                  ? 'Beijing Translation Seal Certification No. 11010524558G6'
                  : '北京市翻译专用章备案号：11010524558G6'
                }
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {language === 'EN' ? 'ESG & CSR Report Expertise' : 'ESG与CSR报告专业翻译'}
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  {language === 'EN' 
                    ? 'We specialize in translating Environmental, Social, and Governance (ESG) reports and Corporate Social Responsibility (CSR) documents. Our expert linguists understand the nuanced terminology and regulatory requirements across different markets.'
                    : '我们专业翻译环境、社会和治理（ESG）报告以及企业社会责任（CSR）文件。我们的专业语言学家深谙不同市场的专业术语和监管要求。'
                  }
                </p>
                <p>
                  {language === 'EN' 
                    ? 'With deep knowledge of sustainability frameworks, financial regulations, and corporate governance standards, we ensure your reports maintain their integrity and impact across cultural boundaries.'
                    : '凭借对可持续发展框架、金融法规和公司治理标准的深入了解，我们确保您的报告在跨文化传播中保持其完整性和影响力。'
                  }
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600">
                    {language === 'EN' ? 'ESG Reports' : 'ESG报告'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
                  <div className="text-gray-600">
                    {language === 'EN' ? 'Accuracy Rate' : '准确率'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-gray-600">
                    {language === 'EN' ? 'Industry Sectors' : '行业领域'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">24h</div>
                  <div className="text-gray-600">
                    {language === 'EN' ? 'Turnaround' : '交付时间'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Cases Section */}
      <section id="cases" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {language === 'EN' ? 'Trusted by Leading Companies' : '领先企业的信赖选择'}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'EN' 
                ? 'We are proud to serve industry leaders across various sectors'
                : '我们很荣幸为各行业领军企业提供服务'
              }
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clients.map((client, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800 mb-1">{client.logo}</div>
                  <div className="text-sm text-gray-500">{client.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === 'EN' ? 'Get in Touch' : '联系我们'}
            </h2>
            <p className="text-xl opacity-90">
              {language === 'EN' 
                ? 'Ready to bridge the language gap? Let\'s start the conversation.'
                : '准备好跨越语言障碍了吗？让我们开始对话。'
              }
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {language === 'EN' ? 'Office Address' : '办公地址'}
                  </h3>
                  <p className="opacity-90">
                    {language === 'EN' 
                      ? '123 Business District, Financial Tower, Beijing 100000, China'
                      : '中国北京市商务区金融大厦123号 100000'
                    }
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {language === 'EN' ? 'Phone' : '电话'}
                  </h3>
                  <p className="opacity-90">+86 (010) 1234-5678</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {language === 'EN' ? 'Email' : '邮箱'}
                  </h3>
                  <p className="opacity-90">contact@translinkpro.com</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl">
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
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent mb-4 md:mb-0">
              {language === 'EN' ? 'TransLink Pro' : '译联专业'}
            </div>
            <div className="text-gray-400 text-sm">
              {language === 'EN' 
                ? '© 2024 TransLink Pro. All rights reserved.'
                : '© 2024 译联专业。保留所有权利。'
              }
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}