import React from "react";

interface ExpertiseProps {
  data: any;
}

export default function Expertise({ data }: ExpertiseProps) {
  return (
    <section id="expertise" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {data.title}
            </h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              {data.description_list.map((desc: string, index: number) => (
                <p key={index}>{desc}</p>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8">
            <div className="grid grid-cols-2 gap-6">
              {data.highlight_stats.map((stats: any, index: number) => (
                <div className="text-center" key={index}>
                  {/* <div
                    className={`${
                      index % 2 === 0 ? "text-blue-600" : "text-orange-600"
                    } text-3xl font-bold mb-2`}
                  >
                    {stats.value}
                  </div> */}
                  <div className={`text-blue-600 text-3xl font-bold mb-2`}>
                    {stats.value}
                  </div>
                  <div className="text-gray-600">{stats.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
