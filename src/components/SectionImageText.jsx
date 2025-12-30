export default function SectionImageText({
  title,
  description,
  imageSrc,
  reverse = false,
  titleSize = "medium", // "large" (text-5xl) or "medium" (text-4xl)
}) {
  const titleClasses =
    titleSize === "large"
      ? "2xl:text-5xl leading-[56px]"
      : "2xl:text-4xl leading-[40px]";

  return (
    <div className="bg-white w-full tf-py-9 2xl:py-16 pt-12 pb-12 2xl:pb-20">
      <div
        className={`flex flex-col ${
          reverse ? "2xl:flex-row-reverse justify-end" : "2xl:flex-row"
        } 2xl:gap-32 items-center 2xl:px-20 max-w-[834px] 2xl:max-w-[1366px] mx-auto`}
      >
        {/* Imagen */}
        <div className="h-[360px] w-full max-w-[390px] 2xl:max-w-[486px] shrink-0 relative">
          <img
            alt=""
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
            src={imageSrc}
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col 2xl:gap-10 w-full max-w-[390px] md:max-w-[548px] 2xl:max-w-[486px] shrink-0">
          {/* Título */}
          <h2
            className={`${titleClasses} font-semibold text-[#0059ba] whitespace-pre-wrap text-3xl pt-8 pb-4`}
          >
            {title}
          </h2>

          {/* Descripción */}
          <div className="w-full">
            <p className="text-base leading-6 text-[#70777c]">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
