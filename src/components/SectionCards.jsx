import React from "react";
import {
  FirstAid,
  Heartbeat,
  Suitcase,
  Pill,
  Stethoscope,
  GlobeHemisphereWest,
  Tooth,
  Hospital,
} from "@phosphor-icons/react";
import Button from "./Button";
import { ArrowRight } from "@phosphor-icons/react";

const SectionCards = () => {
  // 8 coverage items con iconos
  const coverageItems = [
    {
      Icon: FirstAid,
      title: "Asistencia médica",
    },
    {
      Icon: Heartbeat,
      title: "Enfermedades preexistentes",
    },
    {
      Icon: Suitcase,
      title: "Pérdida de equipaje",
    },
    {
      Icon: Pill,
      title: "Medicamentos",
    },
    {
      Icon: Stethoscope,
      title: "Médico online 24hs",
    },
    {
      Icon: GlobeHemisphereWest,
      title: "Cobertura mundial",
    },
    {
      Icon: Tooth,
      title: "Odontología",
    },
    {
      Icon: Hospital,
      title: "Internaciones",
    },
  ];

  return (
    <section className="w-full bg-[#F2F2F2] py-8 pb-12 mx-auto full 2xl:py-16 max-w-full md:max-w-[834px] 2xl:max-w-[1366px]">
      <div className="px-4 2xl:px-0 2xl:max-w-[748px] md:max-w-[548px] max-w-[548px] mx-auto">
        {/* Título */}
        <h2 className="text-center text-[#0059BA] font-semibold leading-9 2xl:leading-10 text-3xl 2xl:text-4xl p-0 mt-0 mb-6 2xlmb-10">
          ¿Qué debe incluir tu seguro de viaje para [Destino]?
        </h2>

        {/* Grid 2x4 con 8 coverage cards */}
        <div className="w-full">
          <div className="grid grid-cols-2 2xl:grid-cols-4 text-center gap-x-4 gap-y-2 2xl:gap-x-6 2xl:gap-y-8 mx-auto">
            {coverageItems.map((item, index) => {
              const Icon = item.Icon;
              return (
                <div
                  key={index}
                  className="border border-[#E7F2FF] bg-white w-full 2xl:h-[160px] rounded-xl flex items-center flex-col justify-center px-[10px] py-6 gap-2 2xl:gap-y-4"
                >
                  {/* Wrapper div para iconos */}
                  <div className="size-10 2xl:size-10 flex-shrink-0">
                    <Icon
                      color="#7BD0C2"
                      weight="duotone"
                      size={40}
                      className="w-full h-full"
                    />
                  </div>
                  <span className="text-base 2xl:text-xl font-semibold text-[#31363A]">
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionCards;
