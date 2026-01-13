import React from "react";
import {
  ShieldPlus,
  FirstAidKit,
  SuitcaseRolling,
} from "@phosphor-icons/react";

const SectionPlans = ({ plans = [], isLoading = false, destino = "[Destino]" }) => {
  const getIcon = (index) => {
    const icons = [ShieldPlus, FirstAidKit, SuitcaseRolling];
    return icons[index % icons.length];
  };

  if (isLoading) {
    return (
      <section className="w-full bg-[#E3DEF9] py-8 2xl:py-12 max-w-full md:max-w-[834px] 2xl:max-w-[1366px] mx-auto">
        <div className="px-4 2xl:px-0 mx-auto max-w-[358px] md:max-w-[548px] 2xl:max-w-[1200px]">
          <h2 className="text-center text-[#0059BA] font-semibold text-3xl 2xl:text-4xl mb-8 2xl:mb-12">
            Nuestros planes para viajar a {destino}
          </h2>
          <div className="text-center text-[#0059BA]">
            Cargando planes...
          </div>
        </div>
      </section>
    );
  }

  const defaultPlans = [
    {
      id: 1,
      name: "World cover",
      color: "#0059BA",
      badge: null,
      features: [
        {
          icon: ShieldPlus,
          amount: "USD 200.000",
          description: "de Asistencia medica",
        },
        {
          icon: FirstAidKit,
          amount: "USD 10.000",
          description: "de Asistencia por enfermedad preexistente",
        },
        {
          icon: SuitcaseRolling,
          amount: "USD 1.000",
          description: "por pérdida de equipaje",
        },
      ],
    },
    {
      id: 2,
      name: "Premium cover",
      color: "#31319B",
      badge: {
        text: "El más elegido",
        bgColor: "#D3EFD4",
      },
      features: [
        {
          icon: ShieldPlus,
          amount: "USD 200.000",
          description: "de Asistencia medica",
        },
        {
          icon: FirstAidKit,
          amount: "USD 10.000",
          description: "de Asistencia por enfermedad preexistente",
        },
        {
          icon: SuitcaseRolling,
          amount: "USD 1.000",
          description: "por pérdida de equipaje",
        },
      ],
    },
    {
      id: 3,
      name: "World cover",
      color: "#0059BA",
      badge: null,
      features: [
        {
          icon: ShieldPlus,
          amount: "USD 200.000",
          description: "de Asistencia medica",
        },
        {
          icon: FirstAidKit,
          amount: "USD 10.000",
          description: "de Asistencia por enfermedad preexistente",
        },
        {
          icon: SuitcaseRolling,
          amount: "USD 1.000",
          description: "por pérdida de equipaje",
        },
      ],
    },
    {
      id: 4,
      name: "World cover",
      color: "#31319B",
      badge: {
        text: "Plan recomendado",
        bgColor: "#CFF6FF",
      },
      features: [
        {
          icon: ShieldPlus,
          amount: "USD 200.000",
          description: "de Asistencia medica",
        },
        {
          icon: FirstAidKit,
          amount: "USD 10.000",
          description: "de Asistencia por enfermedad preexistente",
        },
        {
          icon: SuitcaseRolling,
          amount: "USD 1.000",
          description: "por pérdida de equipaje",
        },
      ],
    },
  ];

  const displayPlans = plans.length > 0 ? plans : defaultPlans;

  return (
    <section className="w-full bg-[#E3DEF9] py-8 2xl:py-12 max-w-full md:max-w-[834px] 2xl:max-w-[1366px] mx-auto">
      <div className="px-4 2xl:px-0 mx-auto max-w-[358px] md:max-w-[548px] 2xl:max-w-[1200px]">
        {/* Título */}
        <h2 className="text-center text-[#0059BA] font-semibold text-3xl 2xl:text-4xl mb-8 2xl:mb-12">
          Nuestros planes para viajar a {destino}
        </h2>

        {/* Grid de planes */}
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-8">
          {displayPlans.map((plan) => (
            <div key={plan.id} className="flex flex-col relative">
              {/* Badge (si existe) */}
              {plan.badge && (
                <div
                  className="absolute left-4 -top-5 px-3 py-2 rounded-full z-10"
                  style={{ backgroundColor: plan.badge.bgColor }}
                >
                  <p className="text-sm font-semibold text-[#31363A]">
                    {plan.badge.text}
                  </p>
                </div>
              )}

              {/* Header del plan */}
              <div
                className="rounded-t-xl h-[100px] flex items-center justify-center px-4 pt-6 pb-4"
                style={{ backgroundColor: plan.color }}
              >
                <h3 className="text-white font-semibold text-3xl capitalize">
                  {plan.name}
                </h3>
              </div>

              {/* Body con features */}
              <div className="bg-white border border-[#E7F2FF] rounded-b-xl p-4 flex flex-col gap-3 flex-1">
                {plan.features.map((feature, index) => {
                  const Icon = feature.icon || getIcon(index);
                  return (
                    <div key={index} className="flex items-start gap-2">
                      <div className="size-6 flex-shrink-0">
                        <Icon
                          color="#7BD0C2"
                          weight="regular"
                          size={24}
                          className="w-full h-full"
                        />
                      </div>
                      <p className="text-sm text-[#70777C] leading-5">
                        <span className="font-semibold">{feature.amount}</span>{" "}
                        <span className="font-normal">
                          {feature.description}
                        </span>
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionPlans;
