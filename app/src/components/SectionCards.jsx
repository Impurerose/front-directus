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
    <section className="w-full bg-[#F2F2F2] py-8 pb-12 lg:py-16">
      <div className="px-4 lg:px-0 mx-auto max-w-[358px] md:max-w-[548px] lg:max-w-[792px]">
        {/* Título */}
        <h2 className="lg:text-center text-[#0059BA] font-semibold leading-9 lg:leading-10 text-3xl lg:text-4xl p-0 mt-0 mb-6 lg:mb-10">
          ¿Qué debe incluir tu seguro de viaje para [Destino]?
        </h2>

        {/* Grid 2x4 con 8 coverage cards */}
        <div className="w-full">
          <div className="grid grid-cols-2 lg:grid-cols-4 text-center gap-x-4 gap-y-2 lg:gap-x-6 lg:gap-y-8">
            {coverageItems.map((item, index) => {
              const Icon = item.Icon;
              return (
                <div
                  key={index}
                  className="border border-[#E7F2FF] bg-white w-full lg:h-[160px] rounded-xl flex items-center flex-col justify-center px-[10px] py-6 gap-2 lg:gap-y-4"
                >
                  {/* Wrapper div para iconos */}
                  <div className="size-10 lg:size-10 flex-shrink-0">
                    <Icon
                      color="#7BD0C2"
                      weight="duotone"
                      size={40}
                      className="w-full h-full"
                    />
                  </div>
                  <span className="text-base lg:text-xl font-semibold text-[#31363A]">
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
