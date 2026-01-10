import React from "react";
import {
  Laptop,
  HandHeart,
  SuitcaseRolling,
  PawPrint,
  ArrowRight,
} from "@phosphor-icons/react";
import Button from "./Button";

/**
 * SectionRequirements - Grid de 4 cards con requisitos de viaje
 * Similar a Feature2 pero con 2x2 grid y botón CTA
 */
export const SectionRequirements = ({
  title = "Requisitos para viajar a [Destino]",
  requirements = [],
  buttonLabel = "Ver todos los requisitos",
  onButtonClick = () => {},
}) => {
  // Default requirements si no se pasan props
  const defaultRequirements = [
    {
      Icon: Laptop,
      title: "Requisito 1",
      description:
        "Lorem ipsum dolor sit amet consectetur. Est potenti vitae non nulla feugiat adipiscing cras. Suspendisse mi lacus risus cursus a.",
    },
    {
      Icon: HandHeart,
      title: "Requisito 2",
      description:
        "Lorem ipsum dolor sit amet consectetur. Est potenti vitae non nulla feugiat adipiscing cras. Suspendisse mi lacus risus cursus a.",
    },
    {
      Icon: SuitcaseRolling,
      title: "Requisito 3",
      description:
        "Lorem ipsum dolor sit amet consectetur. Est potenti vitae non nulla feugiat adipiscing cras. Suspendisse mi lacus risus cursus a.",
    },
    {
      Icon: PawPrint,
      title: "Requisito 4",
      description:
        "Lorem ipsum dolor sit amet consectetur. Est potenti vitae non nulla feugiat adipiscing cras. Suspendisse mi lacus risus cursus a.",
    },
  ];

  const items = requirements.length > 0 ? requirements : defaultRequirements;

  return (
    <section className="w-full bg-[#F2F2F2] py-8 2xl:py-16 max-w-full md:max-w-[834px] 2xl:max-w-[1366px] mx-auto">
      <div className="mx-auto max-w-[358px] px-4 md:max-w-[548px] 2xl:max-w-[996px] 2xl:px-0">
        {/* Título */}
        <h2 className="mb-6 mt-0 p-0 text-3xl font-semibold leading-9 text-[#0059BA] 2xl:mb-10 2xl:text-4xl 2xl:leading-10">
          {title}
        </h2>

        {/* Grid 2x2 de requirement cards */}
        <div className="mb-6 grid grid-cols-1 gap-6 2xl:grid-cols-2">
          {items.map((item, index) => {
            const Icon = item.Icon;
            return (
              <div
                key={index}
                className="flex flex-col gap-4 rounded-xl border border-[#E7F2FF] bg-white p-6"
              >
                {/* Icon */}
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center">
                  <Icon size={40} weight="duotone" color="#31319B" />
                </div>

                {/* Text content */}
                <div className="flex w-full flex-col gap-1">
                  <h3 className="text-xl font-semibold leading-7 text-[#31363A]">
                    {item.title}
                  </h3>
                  <p className="text-base leading-6 text-[#70777C]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="w-full 2xl:flex 2xl:justify-end">
          <Button
            onClick={onButtonClick}
            variant="alt"
            color="primary"
            icon={<ArrowRight size={16} weight="bold" />}
            iconPosition="right"
            fullWidth={false}
            size="large"
            classes="w-full 2xl:w-auto"
          >
            {buttonLabel}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SectionRequirements;
