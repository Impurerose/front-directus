import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const destino = 'Brasil';

console.log('🚀 Generando HTML de Destinos - Sección 2...\n');

// SECCIÓN 2: ImageText Principal + ImageText Seguro + SectionCards + SectionPlans + SectionRequirements
const section2 = `
<!-- ImageText Principal - ¿Qué necesito para viajar? -->
<div class="bg-white w-full py-9 2xl:py-16 pt-12 pb-12 2xl:pb-20 px-4">
  <div class="flex flex-col 2xl:flex-row 2xl:gap-32 items-center 2xl:px-20 max-w-[834px] 2xl:max-w-[1366px] mx-auto">
    <div class="h-[360px] w-full max-w-[390px] 2xl:max-w-[486px] shrink-0 relative">
      <img alt="Viajar a ${destino}" class="absolute inset-0 w-full h-full object-cover rounded-lg" src="https://placehold.co/486x360">
    </div>
    <div class="flex flex-col 2xl:gap-10 w-full max-w-[390px] md:max-w-[548px] 2xl:max-w-[486px] shrink-0">
      <h2 class="2xl:text-5xl leading-[56px] font-semibold text-[#0059ba] text-3xl pt-8 pb-4">¿Qué necesito para viajar a ${destino}?</h2>
      <p class="text-base leading-6 text-[#70777c]">Viajar a este destino abre las puertas a un universo de diversidad cultural, paisajes impresionantes y una energía contagiosa. Desde las playas paradisíacas hasta la selva exuberante, este país ofrece experiencias únicas para todos los gustos. Prepararte adecuadamente con un seguro de viaje te permitirá disfrutar al máximo de tu aventura.</p>
    </div>
  </div>
</div>

<!-- ImageText - ¿Es obligatorio el seguro? -->
<div class="bg-white w-full py-9 2xl:py-16 pt-12 pb-12 2xl:pb-20 px-4">
  <div class="flex flex-col 2xl:flex-row-reverse justify-end 2xl:gap-32 items-center 2xl:px-20 max-w-[834px] 2xl:max-w-[1366px] mx-auto">
    <div class="h-[360px] w-full max-w-[390px] 2xl:max-w-[486px] shrink-0 relative">
      <img alt="Seguro de viaje" class="absolute inset-0 w-full h-full object-cover rounded-lg" src="https://placehold.co/256x256/0ea5e9/ffffff">
    </div>
    <div class="flex flex-col 2xl:gap-10 w-full max-w-[390px] md:max-w-[548px] 2xl:max-w-[486px] shrink-0">
      <h2 class="2xl:text-4xl leading-[40px] font-semibold text-[#0059ba] text-3xl pt-8 pb-4">¿Es obligatorio el seguro de viaje para ${destino}?</h2>
      <p class="text-base leading-6 text-[#70777c]">Aunque no siempre es obligatorio, contar con un seguro de viaje es altamente recomendable para cualquier destino internacional. Un seguro te protege ante emergencias médicas, cancelaciones de vuelos, pérdida de equipaje y muchas otras situaciones imprevistas que pueden ocurrir durante tu viaje.</p>
    </div>
  </div>
</div>

<!-- SectionCards - ¿Qué debe incluir tu seguro? -->
<section class="w-full bg-[#F2F2F2] py-8 pb-12 mx-auto full 2xl:py-16 max-w-full md:max-w-[834px] 2xl:max-w-[1366px]">
  <div class="px-4 2xl:px-0 2xl:max-w-[748px] md:max-w-[548px] max-w-[548px] mx-auto">
    <h2 class="text-center text-[#0059BA] font-semibold leading-9 2xl:leading-10 text-3xl 2xl:text-4xl p-0 mt-0 mb-6 2xlmb-10">
      ¿Qué debe incluir tu seguro de viaje para ${destino}?
    </h2>
    <div class="w-full">
      <div class="grid grid-cols-2 2xl:grid-cols-4 text-center gap-x-4 gap-y-2 2xl:gap-x-6 2xl:gap-y-8 mx-auto">
        <div class="border border-[#E7F2FF] bg-white w-full 2xl:h-[160px] rounded-xl flex items-center flex-col justify-center px-[10px] py-6 gap-2 2xl:gap-y-4">
          <div class="size-10 2xl:size-10 flex-shrink-0">
            <i class="ph-duotone ph-first-aid" style="font-size: 40px; color: #7BD0C2;"></i>
          </div>
          <span class="text-base 2xl:text-xl font-semibold text-[#31363A]">Asistencia médica</span>
        </div>
        <div class="border border-[#E7F2FF] bg-white w-full 2xl:h-[160px] rounded-xl flex items-center flex-col justify-center px-[10px] py-6 gap-2 2xl:gap-y-4">
          <div class="size-10 2xl:size-10 flex-shrink-0">
            <i class="ph-duotone ph-heartbeat" style="font-size: 40px; color: #7BD0C2;"></i>
          </div>
          <span class="text-base 2xl:text-xl font-semibold text-[#31363A]">Enfermedades preexistentes</span>
        </div>
        <div class="border border-[#E7F2FF] bg-white w-full 2xl:h-[160px] rounded-xl flex items-center flex-col justify-center px-[10px] py-6 gap-2 2xl:gap-y-4">
          <div class="size-10 2xl:size-10 flex-shrink-0">
            <i class="ph-duotone ph-suitcase" style="font-size: 40px; color: #7BD0C2;"></i>
          </div>
          <span class="text-base 2xl:text-xl font-semibold text-[#31363A]">Pérdida de equipaje</span>
        </div>
        <div class="border border-[#E7F2FF] bg-white w-full 2xl:h-[160px] rounded-xl flex items-center flex-col justify-center px-[10px] py-6 gap-2 2xl:gap-y-4">
          <div class="size-10 2xl:size-10 flex-shrink-0">
            <i class="ph-duotone ph-pill" style="font-size: 40px; color: #7BD0C2;"></i>
          </div>
          <span class="text-base 2xl:text-xl font-semibold text-[#31363A]">Medicamentos</span>
        </div>
        <div class="border border-[#E7F2FF] bg-white w-full 2xl:h-[160px] rounded-xl flex items-center flex-col justify-center px-[10px] py-6 gap-2 2xl:gap-y-4">
          <div class="size-10 2xl:size-10 flex-shrink-0">
            <i class="ph-duotone ph-stethoscope" style="font-size: 40px; color: #7BD0C2;"></i>
          </div>
          <span class="text-base 2xl:text-xl font-semibold text-[#31363A]">Médico online 24hs</span>
        </div>
        <div class="border border-[#E7F2FF] bg-white w-full 2xl:h-[160px] rounded-xl flex items-center flex-col justify-center px-[10px] py-6 gap-2 2xl:gap-y-4">
          <div class="size-10 2xl:size-10 flex-shrink-0">
            <i class="ph-duotone ph-globe-hemisphere-west" style="font-size: 40px; color: #7BD0C2;"></i>
          </div>
          <span class="text-base 2xl:text-xl font-semibold text-[#31363A]">Cobertura mundial</span>
        </div>
        <div class="border border-[#E7F2FF] bg-white w-full 2xl:h-[160px] rounded-xl flex items-center flex-col justify-center px-[10px] py-6 gap-2 2xl:gap-y-4">
          <div class="size-10 2xl:size-10 flex-shrink-0">
            <i class="ph-duotone ph-tooth" style="font-size: 40px; color: #7BD0C2;"></i>
          </div>
          <span class="text-base 2xl:text-xl font-semibold text-[#31363A]">Odontología</span>
        </div>
        <div class="border border-[#E7F2FF] bg-white w-full 2xl:h-[160px] rounded-xl flex items-center flex-col justify-center px-[10px] py-6 gap-2 2xl:gap-y-4">
          <div class="size-10 2xl:size-10 flex-shrink-0">
            <i class="ph-duotone ph-hospital" style="font-size: 40px; color: #7BD0C2;"></i>
          </div>
          <span class="text-base 2xl:text-xl font-semibold text-[#31363A]">Internaciones</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- SectionPlans - Nuestros planes -->
<section class="w-full bg-[#E3DEF9] py-8 2xl:py-12 max-w-full md:max-w-[834px] 2xl:max-w-[1366px] mx-auto">
  <div class="px-4 2xl:px-0 mx-auto max-w-[358px] md:max-w-[548px] 2xl:max-w-[1200px]">
    <h2 class="text-center text-[#0059BA] font-semibold text-3xl 2xl:text-4xl mb-8 2xl:mb-12">
      Nuestros planes para viajar a ${destino}
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-8">
      <!-- Plan 1 -->
      <div class="flex flex-col relative">
        <div class="rounded-t-xl h-[100px] flex items-center justify-center px-4 pt-6 pb-4" style="background-color: #0059BA;">
          <h3 class="text-white font-semibold text-3xl">World cover</h3>
        </div>
        <div class="bg-white border border-[#E7F2FF] rounded-b-xl p-4 flex flex-col gap-3 flex-1">
          <div class="flex items-start gap-2">
            <div class="size-6 flex-shrink-0">
              <i class="ph ph-shield-plus" style="font-size: 24px; color: #7BD0C2;"></i>
            </div>
            <p class="text-sm text-[#70777C] leading-5">
              <span class="font-semibold">USD 200.000</span> <span class="font-normal">de Asistencia medica</span>
            </p>
          </div>
          <div class="flex items-start gap-2">
            <div class="size-6 flex-shrink-0">
              <i class="ph ph-first-aid-kit" style="font-size: 24px; color: #7BD0C2;"></i>
            </div>
            <p class="text-sm text-[#70777C] leading-5">
              <span class="font-semibold">USD 10.000</span> <span class="font-normal">de Asistencia por enfermedad preexistente</span>
            </p>
          </div>
          <div class="flex items-start gap-2">
            <div class="size-6 flex-shrink-0">
              <i class="ph ph-suitcase-rolling" style="font-size: 24px; color: #7BD0C2;"></i>
            </div>
            <p class="text-sm text-[#70777C] leading-5">
              <span class="font-semibold">USD 1.000</span> <span class="font-normal">por pérdida de equipaje</span>
            </p>
          </div>
        </div>
      </div>

      <!-- Plan 2 - El más elegido -->
      <div class="flex flex-col relative">
        <div class="absolute left-4 -top-5 px-3 py-2 rounded-full z-10" style="background-color: #D3EFD4;">
          <p class="text-sm font-semibold text-[#31363A]">El más elegido</p>
        </div>
        <div class="rounded-t-xl h-[100px] flex items-center justify-center px-4 pt-6 pb-4" style="background-color: #31319B;">
          <h3 class="text-white font-semibold text-3xl">Premium cover</h3>
        </div>
        <div class="bg-white border border-[#E7F2FF] rounded-b-xl p-4 flex flex-col gap-3 flex-1">
          <div class="flex items-start gap-2">
            <div class="size-6 flex-shrink-0">
              <i class="ph ph-shield-plus" style="font-size: 24px; color: #7BD0C2;"></i>
            </div>
            <p class="text-sm text-[#70777C] leading-5">
              <span class="font-semibold">USD 200.000</span> <span class="font-normal">de Asistencia medica</span>
            </p>
          </div>
          <div class="flex items-start gap-2">
            <div class="size-6 flex-shrink-0">
              <i class="ph ph-first-aid-kit" style="font-size: 24px; color: #7BD0C2;"></i>
            </div>
            <p class="text-sm text-[#70777C] leading-5">
              <span class="font-semibold">USD 10.000</span> <span class="font-normal">de Asistencia por enfermedad preexistente</span>
            </p>
          </div>
          <div class="flex items-start gap-2">
            <div class="size-6 flex-shrink-0">
              <i class="ph ph-suitcase-rolling" style="font-size: 24px; color: #7BD0C2;"></i>
            </div>
            <p class="text-sm text-[#70777C] leading-5">
              <span class="font-semibold">USD 1.000</span> <span class="font-normal">por pérdida de equipaje</span>
            </p>
          </div>
        </div>
      </div>

      <!-- Plan 3 -->
      <div class="flex flex-col relative">
        <div class="rounded-t-xl h-[100px] flex items-center justify-center px-4 pt-6 pb-4" style="background-color: #0059BA;">
          <h3 class="text-white font-semibold text-3xl">World cover</h3>
        </div>
        <div class="bg-white border border-[#E7F2FF] rounded-b-xl p-4 flex flex-col gap-3 flex-1">
          <div class="flex items-start gap-2">
            <div class="size-6 flex-shrink-0">
              <i class="ph ph-shield-plus" style="font-size: 24px; color: #7BD0C2;"></i>
            </div>
            <p class="text-sm text-[#70777C] leading-5">
              <span class="font-semibold">USD 200.000</span> <span class="font-normal">de Asistencia medica</span>
            </p>
          </div>
          <div class="flex items-start gap-2">
            <div class="size-6 flex-shrink-0">
              <i class="ph ph-first-aid-kit" style="font-size: 24px; color: #7BD0C2;"></i>
            </div>
            <p class="text-sm text-[#70777C] leading-5">
              <span class="font-semibold">USD 10.000</span> <span class="font-normal">de Asistencia por enfermedad preexistente</span>
            </p>
          </div>
          <div class="flex items-start gap-2">
            <div class="size-6 flex-shrink-0">
              <i class="ph ph-suitcase-rolling" style="font-size: 24px; color: #7BD0C2;"></i>
            </div>
            <p class="text-sm text-[#70777C] leading-5">
              <span class="font-semibold">USD 1.000</span> <span class="font-normal">por pérdida de equipaje</span>
            </p>
          </div>
        </div>
      </div>

      <!-- Plan 4 - Plan recomendado -->
      <div class="flex flex-col relative">
        <div class="absolute left-4 -top-5 px-3 py-2 rounded-full z-10" style="background-color: #CFF6FF;">
          <p class="text-sm font-semibold text-[#31363A]">Plan recomendado</p>
        </div>
        <div class="rounded-t-xl h-[100px] flex items-center justify-center px-4 pt-6 pb-4" style="background-color: #31319B;">
          <h3 class="text-white font-semibold text-3xl">World cover</h3>
        </div>
        <div class="bg-white border border-[#E7F2FF] rounded-b-xl p-4 flex flex-col gap-3 flex-1">
          <div class="flex items-start gap-2">
            <div class="size-6 flex-shrink-0">
              <i class="ph ph-shield-plus" style="font-size: 24px; color: #7BD0C2;"></i>
            </div>
            <p class="text-sm text-[#70777C] leading-5">
              <span class="font-semibold">USD 200.000</span> <span class="font-normal">de Asistencia medica</span>
            </p>
          </div>
          <div class="flex items-start gap-2">
            <div class="size-6 flex-shrink-0">
              <i class="ph ph-first-aid-kit" style="font-size: 24px; color: #7BD0C2;"></i>
            </div>
            <p class="text-sm text-[#70777C] leading-5">
              <span class="font-semibold">USD 10.000</span> <span class="font-normal">de Asistencia por enfermedad preexistente</span>
            </p>
          </div>
          <div class="flex items-start gap-2">
            <div class="size-6 flex-shrink-0">
              <i class="ph ph-suitcase-rolling" style="font-size: 24px; color: #7BD0C2;"></i>
            </div>
            <p class="text-sm text-[#70777C] leading-5">
              <span class="font-semibold">USD 1.000</span> <span class="font-normal">por pérdida de equipaje</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- SectionRequirements - Requisitos para viajar -->
<section class="w-full bg-[#F2F2F2] py-8 2xl:py-16 max-w-full md:max-w-[834px] 2xl:max-w-[1366px] mx-auto">
  <div class="mx-auto max-w-[358px] px-4 md:max-w-[548px] 2xl:max-w-[996px] 2xl:px-0">
    <h2 class="mb-6 mt-0 p-0 text-3xl font-semibold leading-9 text-[#0059BA] 2xl:mb-10 2xl:text-4xl 2xl:leading-10">
      Requisitos para viajar a ${destino}
    </h2>
    <div class="mb-6 grid grid-cols-1 gap-6 2xl:grid-cols-2">
      <div class="flex flex-col gap-4 rounded-xl border border-[#E7F2FF] bg-white p-6">
        <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center">
          <i class="ph-duotone ph-laptop" style="font-size: 40px; color: #31319B;"></i>
        </div>
        <div class="flex w-full flex-col gap-1">
          <h3 class="text-xl font-semibold leading-7 text-[#31363A]">Requisito 1</h3>
          <p class="text-base leading-6 text-[#70777C]">Lorem ipsum dolor sit amet consectetur. Est potenti vitae non nulla feugiat adipiscing cras. Suspendisse mi lacus risus cursus a.</p>
        </div>
      </div>
      <div class="flex flex-col gap-4 rounded-xl border border-[#E7F2FF] bg-white p-6">
        <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center">
          <i class="ph-duotone ph-hand-heart" style="font-size: 40px; color: #31319B;"></i>
        </div>
        <div class="flex w-full flex-col gap-1">
          <h3 class="text-xl font-semibold leading-7 text-[#31363A]">Requisito 2</h3>
          <p class="text-base leading-6 text-[#70777C]">Lorem ipsum dolor sit amet consectetur. Est potenti vitae non nulla feugiat adipiscing cras. Suspendisse mi lacus risus cursus a.</p>
        </div>
      </div>
      <div class="flex flex-col gap-4 rounded-xl border border-[#E7F2FF] bg-white p-6">
        <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center">
          <i class="ph-duotone ph-suitcase-rolling" style="font-size: 40px; color: #31319B;"></i>
        </div>
        <div class="flex w-full flex-col gap-1">
          <h3 class="text-xl font-semibold leading-7 text-[#31363A]">Requisito 3</h3>
          <p class="text-base leading-6 text-[#70777C]">Lorem ipsum dolor sit amet consectetur. Est potenti vitae non nulla feugiat adipiscing cras. Suspendisse mi lacus risus cursus a.</p>
        </div>
      </div>
      <div class="flex flex-col gap-4 rounded-xl border border-[#E7F2FF] bg-white p-6">
        <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center">
          <i class="ph-duotone ph-paw-print" style="font-size: 40px; color: #31319B;"></i>
        </div>
        <div class="flex w-full flex-col gap-1">
          <h3 class="text-xl font-semibold leading-7 text-[#31363A]">Requisito 4</h3>
          <p class="text-base leading-6 text-[#70777C]">Lorem ipsum dolor sit amet consectetur. Est potenti vitae non nulla feugiat adipiscing cras. Suspendisse mi lacus risus cursus a.</p>
        </div>
      </div>
    </div>
    <div class="w-full 2xl:flex 2xl:justify-end">
      <button class="inline-flex items-center justify-center gap-2 px-4 py-[10px] h-[48px] text-lg font-semibold rounded-xl bg-[#BDEDE7] text-[#31363A] hover:bg-[#A8E5DD] active:bg-[#93DDD3] focus:bg-[#BDEDE7] focus:ring-4 focus:ring-[#7BD0C2] focus:ring-opacity-100 transition-all duration-300 w-full 2xl:w-auto focus:outline-none">
        Ver todos los requisitos
        <i class="ph-bold ph-arrow-right" style="font-size: 16px;"></i>
      </button>
    </div>
  </div>
</section>`;

fs.writeFileSync(path.join(__dirname, '..', 'a365', 'destinos-section2.txt'), section2);
console.log('✅ Sección 2 guardada en a365/destinos-section2.txt');
console.log('\n📋 Siguiente paso: node scripts/build-destinos-final.mjs');
