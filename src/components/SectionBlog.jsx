import React, { useState, useEffect } from "react";
import { AirplaneTilt, Mountains, ArrowRight } from "@phosphor-icons/react";
import Button from "./Button";

const SectionBlog = ({ geo = "ar" }) => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const url = `https://assist-365.com/blog/${geo}/wp-json/wp/v2/posts?per_page=3`;
        const response = await fetch(url);
        if (!response.ok) throw new Error("Error fetching posts");

        const allPosts = await response.json();

        const processedPosts = allPosts.map((post) => {
          // Buscar la URL de la miniatura en schema.@graph
          let thumbnailUrl = "";
          if (post.schema && post.schema["@graph"]) {
            const graphItem = post.schema["@graph"].find(
              (item) => item.thumbnailUrl
            );
            if (graphItem) {
              thumbnailUrl = graphItem.thumbnailUrl;
            }
          }

          let description = post.yoast_head_json?.description || "";
          if (description.length > 100) {
            description = description.substring(0, 100) + "...";
          } else if (description.length > 0 && !description.endsWith("...")) {
            description = description + "...";
          }

          return {
            id: post.id,
            title: post.title?.rendered || "",
            description: description,
            link: post.link || "",
            thumbnailUrl,
          };
        });

        setBlogPosts(processedPosts);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, [geo]);

  const goToBlog = () => {
    const country = (geo || "").toLowerCase();
    const url =
      country === "br"
        ? "https://assist-365.com/blog/br"
        : "https://assist-365.com/blog";
    window.open(url, "_blank", "noopener,noreferrer");
  };

  if (loading) {
    return (
      <div className="w-full flex items-center justify-center py-16">
        <div className="text-center">
          <p className="text-lg text-gray-600">Cargando posts del blog...</p>
        </div>
      </div>
    );
  }

  if (!blogPosts || blogPosts.length === 0) {
    return null;
  }

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
              onClick={goToBlog}
            >
              Ir al blog
            </Button>
          </div>

          {/* Right section - Blog cards */}
          <div className="flex flex-col 2xl:flex-row gap-4 flex-1">
            {/* Primary card - First post */}
            {blogPosts[2] && (
              <div className="bg-white rounded-xl p-6 flex flex-col gap-6 2xl:max-w-[376px] flex-1">
                <div className="w-full h-[184px] overflow-hidden rounded-lg">
                  <img
                    src={blogPosts[2].thumbnailUrl || "https://placehold.co/328x184"}
                    alt={blogPosts[2].title}
                    className="w-full h-full object-cover"
                  />
                </div>
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
                    onClick={() => window.open(blogPosts[2].link, "_blank", "noopener,noreferrer")}
                  >
                    Leer más
                  </Button>
                </div>
              </div>
            )}

            {/* Secondary cards container */}
            <div className="flex flex-col gap-4 2xl:w-[440px]">
              {/* Secondary card 2 */}
              {blogPosts[1] && (
                <div className="bg-white border border-[#E7F2FF] rounded-xl p-6 flex gap-6">
                  <div className="flex-shrink-0">
                    <AirplaneTilt size={40} className="text-[#7BD0C2]" />
                  </div>
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
                      onClick={() => window.open(blogPosts[1].link, "_blank", "noopener,noreferrer")}
                    >
                      Leer más
                    </Button>
                  </div>
                </div>
              )}

              {/* Secondary card 3 */}
              {blogPosts[0] && (
                <div className="bg-white border border-[#E7F2FF] rounded-xl p-6 flex gap-6">
                  <div className="flex-shrink-0">
                    <Mountains size={40} className="text-[#7BD0C2]" />
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
                      onClick={() => window.open(blogPosts[0].link, "_blank", "noopener,noreferrer")}
                    >
                      Leer más
                    </Button>
                  </div>
                </div>
              )}
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
            onClick={goToBlog}
          >
            Ir al blog
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SectionBlog;
