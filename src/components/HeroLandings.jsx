/*

HeaderLandingIndividualTablet.svg
HeaderLandingIndividualMobile.svg
HeaderLandingIndividualDesktop.svg

https://assistcdn.s3.us-west-1.amazonaws.com/temporal/

*/

export default function HeroLandings({
  destino = "[Destino]",
  customTitle = null,
}) {
  return (
    <div className="w-full max-w-[390px] md:max-w-[834px] 2xl:max-w-[1366px] mx-auto min-h-[400px] bg-sky-200">
      <div
        className="
        flex flex-col md:items-start justify-start 2xl:justify-center pt-[44px] 2xl:pt-0
        bg-[url('https://assistcdn.s3.us-west-1.amazonaws.com/temporal/HeaderLandingIndividualMobile.svg')]
        md:bg-[url('https://assistcdn.s3.us-west-1.amazonaws.com/temporal/HeaderLandingIndividualTablet.svg')]
        2xl:bg-[url('https://assistcdn.s3.us-west-1.amazonaws.com/temporal/HeaderLandingIndividualDesktop.svg')]
        bg-no-repeat md:max-w-[834px] 2xl:max-w-[910px] h-[400px]"
      >
        {customTitle ? (
          <h1 className="text-4xl 2xl:text-7xl text-white pl-4 md:pl-[144px] max-w-full 2xl:max-w-[588px]">
            {customTitle}
          </h1>
        ) : (
          <h1 className="flex flex-row 2xl:flex-col gap-3 text-4xl 2xl:text-7xl text-white pl-4 md:pl-[142px] 2xl:pl-[84px] py-16 2xl:py-[118px]">
            <span>Seguro de viaje a</span>
            <span className="font-semibold">{destino}</span>
          </h1>
        )}
      </div>
    </div>
  );
}
