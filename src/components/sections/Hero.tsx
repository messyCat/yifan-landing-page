import React from "react";
import { Button } from "../ui/button";

interface HeroProps {
  data: any;
}

export default function Hero({ data }: HeroProps) {
  return (
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
          {data.slogans.map((slogan: string, index: number) => (
            <div key={slogan} className="mb-3">
              {slogan}
              {index < data.slogans.length - 1 && <br />}
            </div>
          ))}
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          {data.description}
        </p>
        <Button
          asChild
          className="px-8 py-4 text-lg bg-orange-500 hover:bg-orange-600 border-0 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
        >
          <a href="#contact">{data.button}</a>
        </Button>
      </div>
    </section>
  );
}
