import { useState } from "react";
import { Files, CaretUp, CaretDown } from "@phosphor-icons/react";

export default function SectionAccordion({ title, items }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#f2f2f2] mx-auto w-bg-[#f2f2f2]full py-8 2xl:py-16 max-w-full md:max-w-[834px] 2xl:max-w-[1366px]">
      <div className="max-w-[390px] md:max-w-[548px] 2xl:max-w-[1366px] mx-auto px-4 2xl:px-[185px]">
        <div className="max-w-[792px] flex flex-col mx-auto">
        <div className="flex flex-col gap-10 w-full">
          {/* Title */}
          <div className="w-full">
            <h2 className="text-center text-3xl 2xl:text-4xl leading-[40px] font-semibold text-[#0059ba] w-full">
              {title}
            </h2>
          </div>

          {/* Accordion Items */}
          <div className="flex flex-col gap-4 w-full" data-accordion-group>
            {items.map((item, index) => (
              <div
                key={index}
                data-accordion-item
                className={`bg-white p-4 w-full flex flex-col rounded-lg ${
                  openIndex === index ? "border border-[#c2dfff]" : ""
                }`}
              >
                {/* Accordion Title */}
                <button
                  data-accordion-button
                  onClick={() => toggleAccordion(index)}
                  className="flex items-center gap-2 w-full text-left"
                >
                  <Files
                    size={32}
                    weight="duotone"
                    className="text-[#7BD0C2] shrink-0 flex-none"
                  />
                  <h3 className="flex-1 text-base font-semibold leading-6 text-[#31363a] my-auto">
                    {item.title}
                  </h3>
                  {openIndex === index ? (
                    <CaretUp
                      data-icon-up
                      size={20}
                      className="text-[#006fe8] shrink-0 transition-transform duration-300 flex-none"
                    />
                  ) : (
                    <CaretDown
                      data-icon-down
                      size={20}
                      className="text-[#006fe8] shrink-0 transition-transform duration-300 flex-none"
                    />
                  )}
                </button>

                {/* Accordion Content */}
                <div
                  data-accordion-content
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
