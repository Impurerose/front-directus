import React from "react";
import { AirplaneTilt, Mountains, ArrowRight } from "@phosphor-icons/react";
import Button from "./Button";

const SectionBlog = () => {
  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Última entrada del blog",
      description:
        "Lorem ipsum dolor sit amet consectetur. Neque augue venenatis et risus pellentesque donec tellus vel tortor. Laoreet augue faucibus.",
      image: "https://placehold.co/328x184",
      variant: "primary",
    },
    {
      id: 2,
      title: "Entrada del blog 2",
      description:
        "Lorem ipsum dolor sit amet consectetur. Neque augue venenatis et risus pellentesque donec tellus vel tortor. Laoreet augue faucibus.",
      icon: <AirplaneTilt size={40} className="text-[#7BD0C2]" />,
      variant: "secondary",
    },
    {
      id: 3,
      title: "Entrada del blog 3",
      description:
        "Lorem ipsum dolor sit amet consectetur. Neque augue venenatis et risus pellentesque donec tellus vel tortor. Laoreet augue faucibus.",
      icon: <Mountains size={40} className="text-[#7BD0C2]" />,
      variant: "secondary",
    },
  ];

  return (
    <div className="w-full flex items-center justify-center py-16">
      <div className="w-full max-w-[390px] md:max-w-[548px] 2xl:max-w-[1296px] -px-4 -md:px-6">
        <div className="bg-[#CFF6FF] rounded-3xl p-6 2xl:p-12 flex flex-col 2xl:flex-row gap-8 2xl:gap-[86px]">
          {/* Left section - Title and CTA */}
          <div className="flex flex-col justify-center 2xl:w-[282px] flex-shrink-0">
            <h2 className="text-4xl font-semibold text-[#0059BA] mb-3">
              Guías y consejos para viajeros
            </h2>
            <p className="text-2xl text-[#31363A] leading-8 2xl:mb-6">
              Explorá nuestro blog para descubrir destinos y prepararte mejor para cada aventura.
            </p>
            <Button
              variant="default"
              color="primary"
              size="large"
              icon={<ArrowRight size={16} weight="bold" />}
              iconPosition="right"
              classes="hidden 2xl:flex"
            >
              Ir al blog
            </Button>
          </div>

          {/* Right section - Blog cards */}
          <div className="flex flex-col 2xl:flex-row gap-4 flex-1">
            {/* Primary card - First post */}
            <div className="bg-white rounded-xl p-6 flex flex-col gap-6 2xl:max-w-[376px] flex-1">
              <div className="w-full h-[184px] overflow-hidden rounded-lg">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-semibold text-[#31363A]">
                    {blogPosts[0].title}
                  </h3>
                  <p className="text-base text-[#70777C] leading-6">
                    {blogPosts[0].description}
                  </p>
                </div>
                <Button
                  variant="default"
                  color="secondary"
                  size="small"
                  icon={<ArrowRight size={16} weight="bold" />}
                  iconPosition="right"
                  classes="w-fit"
                >
                  Leer más
                </Button>
              </div>
            </div>

            {/* Secondary cards container */}
            <div className="flex flex-col gap-4 2xl:w-[440px]">
              {/* Secondary card 2 */}
              <div className="bg-white border border-[#E7F2FF] rounded-xl p-6 flex gap-6">
                <div className="flex-shrink-0">{blogPosts[1].icon}</div>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-semibold text-[#31363A]">
                      {blogPosts[1].title}
                    </h3>
                    <p className="text-base text-[#70777C] leading-6">
                      {blogPosts[1].description}
                    </p>
                  </div>
                  <Button
                    variant="default"
                    color="secondary"
                    size="small"
                    icon={<ArrowRight size={16} weight="bold" />}
                    iconPosition="right"
                    classes="w-fit"
                  >
                    Leer más
                  </Button>
                </div>
              </div>

              {/* Secondary card 3 */}
              <div className="bg-white border border-[#E7F2FF] rounded-xl p-6 flex gap-6">
                <div className="flex-shrink-0">{blogPosts[2].icon}</div>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-semibold text-[#31363A]">
                      {blogPosts[2].title}
                    </h3>
                    <p className="text-base text-[#70777C] leading-6">
                      {blogPosts[2].description}
                    </p>
                  </div>
                  <Button
                    variant="default"
                    color="secondary"
                    size="small"
                    icon={<ArrowRight size={16} weight="bold" />}
                    iconPosition="right"
                    classes="w-fit"
                  >
                    Leer más
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile CTA button */}
          <Button
            variant="default"
            color="primary"
            size="large"
            icon={<ArrowRight size={16} weight="bold" />}
            iconPosition="right"
            fullWidth={true}
            classes="2xl:hidden"
          >
            Ir al blog
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SectionBlog;
