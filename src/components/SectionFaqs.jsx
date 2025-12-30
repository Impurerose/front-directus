import { useState } from "react";
import { Info, CaretUp, CaretDown } from "@phosphor-icons/react";

export default function SectionFaqs({ title, items }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative w-full z-50 px-4 md:px-0 pb-12 2xl:pb-0 2xl:h-[520px] my-12 2xl:my-28">
      {/* Background Shape */}
      <div 
        className="absolute w-full h-[646px] right-0 top-0 z-[1] mt-32 2xl:mt-0"
        style={{
          backgroundImage: "url(https://assistcdn.s3.us-west-1.amazonaws.com/assets/site/home/img/faq_background.svg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top right"
        }}
      />

      {/* Content */}
      <div className="w-full mx-auto max-w-[390px] md:max-w-[548px] 2xl:max-w-[1366px] relative z-10">
        <div className="flex flex-col 2xl:flex-row items-center 2xl:items-start justify-between mx-auto max-w-[1200px] w-full">
          {/* Left Column - Title */}
          <div className="flex flex-col items-start justify-start md:max-w-[548px] 2xl:max-w-full md:mt-12 lg:mt-0">
            <Info size={48} weight="duotone" className="text-[#7BD0C2]" />
            <h2 className="text-[29px] pb-6 leading-9 2xl:text-4xl font-semibold text-[#0059ba] 2xl:max-w-[384px] sm:max-w-full mt-6 2xl:mt-8">
              {title}
            </h2>
          </div>

          {/* Right Column - FAQs */}
          <div className="w-full md:max-w-[548px] max-w-[690px] 2xl:min-w-[690px] mt-2 2xl:mt-0">
            <div className="flex flex-col gap-4">
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`p-4 w-full flex flex-col gap-2 rounded-lg transition-all ${
                    openIndex === index
                      ? "bg-white border border-[#c2dfff]"
                      : "bg-[#f2f2f2]"
                  }`}
                >
                  {/* Accordion Title */}
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="flex items-center justify-between gap-2 w-full text-left"
                  >
                    <p className="flex-1 text-base font-semibold leading-6 text-[#31363a]">
                      {item.title}
                    </p>
                    {openIndex === index ? (
                      <CaretUp
                        size={20}
                        className="text-[#006fe8] shrink-0 transition-transform duration-300"
                      />
                    ) : (
                      <CaretDown
                        size={20}
                        className="text-[#006fe8] shrink-0 transition-transform duration-300"
                      />
                    )}
                  </button>

                  {/* Accordion Content */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      openIndex === index
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pt-2 text-base leading-6 text-[#31363a]">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
