import { cn } from "../ui/utils";

interface AboutProps {
  data: any;
}

export default function About({ data }: AboutProps) {
  // const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {data.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {data.brief}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8 lg:p-12">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                {data.highlight_stats.map((stat: any, index: number) => (
                  <div className="text-center" key={index + stat.label}>
                    {/* <div
                      className={`text-3xl font-bold mb-2 ${
                        index % 2 === 0 ? "text-blue-600" : "text-orange-600"
                      }`}
                    >
                      {stat.value}
                    </div> */}
                    <div className={`text-3xl font-bold mb-2 text-blue-600`}>
                      {stat.value}
                    </div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {
              <>
                {data.description_list.map((desc: string, index: number) => (
                  <p
                    className="text-gray-600 text-lg leading-relaxed"
                    key={index}
                  >
                    {desc}
                  </p>
                ))}
              </>
            }

            <div className="flex flex-wrap gap-4 pt-4">
              {data.labels.map((label: any, index: number) => (
                <div
                  className={cn(
                    "px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium",
                    label.class_name
                  )}
                  key={index + label.keyword}
                >
                  {label.keyword}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
