import React from "react";
import { useTranslation } from "react-i18next";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Expertise from "./components/sections/Expertise";
import Cases from "./components/sections/Cases";
import Contact from "./components/sections/Contact";

export default function App() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      <Header data={t("Components.Header", { returnObjects: true })} />
      <Hero data={t("Components.Hero", { returnObjects: true })} />
      <About data={t("Components.About", { returnObjects: true })} />
      <Services data={t("Components.Services", { returnObjects: true })} />
      <Expertise data={t("Components.Expertise", { returnObjects: true })} />
      <Cases data={t("Components.Cases", { returnObjects: true })} />
      <Contact data={t("Components.Contact", { returnObjects: true })} />
      <Footer data={t("Components.Footer", { returnObjects: true })} />
    </div>
  );
}
