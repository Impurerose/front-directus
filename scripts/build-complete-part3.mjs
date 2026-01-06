import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Generando secciones finales...\n');

// SECCIÓN 6: Cards (Coberturas)
const section6 = `
<section class="w-full bg-[#F2F2F2] py-8 pb-12 lg:py-16">
  <div class="px-4 lg:px-0 mx-auto max-w-[358px] md:max-w-[548px] lg:max-w-[792px]">
    <!-- Título -->
    <h2 class="lg:text-center text-[#0059BA] font-semibold leading-9 lg:leading-10 text-3xl lg:text-4xl p-0 mt-0 mb-6 lg:mb-10">
      ¿Qué debe incluir tu seguro de viaje para [Destino]?
    </h2>

    <!-- Grid 2x4 con 8 coverage cards -->
    <div class="w-full">
      <div class="grid grid-cols-2 lg:grid-cols-4 text-center gap-x-4 gap-y-2 lg:gap-x-6 lg:gap-y-8">
        <div class="border border-[#E7F2FF] bg-white w-full lg:h-[160px] rounded-xl flex items-center flex-col justify-center px-[10px] py-6 gap-2 lg:gap-y-4">
          <div class="size-10 lg:size-10 flex-shrink-0">
            <i class="ph-duotone ph-first-aid text-[#7BD0C2]" style="font-size: 40px;"></i>
          </div>
          <span class="text-base lg:text-xl font-semibold text-[#31363A]">Asistencia médica</span>
        </div>
        <div class="border border-[#E7F2FF] bg-white w-full lg:h-[160px] rounded-xl flex items-center flex-col justify-center px-[10px] py-6 gap-2 lg:gap-y-4">
          <div class="size-10 lg:size-10 flex-shrink-0">
            <i class="ph-duotone ph-heartbeat text-[#7BD0C2]" style="font-size: 40px;"></i>
          </div>
          <span class="text-base lg:text-xl font-semibold text-[#31363A]">Enfermedades preexistentes</span>
        </div>
        <div class="border border-[#E7F2FF] bg-white w-full lg:h-[160px] rounded-xl flex items-center flex-col justify-center px-[10px] py-6 gap-2 lg:gap-y-4">
          <div class="size-10 lg:size-10 flex-shrink-0">
            <i class="ph-duotone ph-suitcase text-[#7BD0C2]" style="font-size: 40px;"></i>
          </div>
          <span class="text-base lg:text-xl font-semibold text-[#31363A]">Pérdida de equipaje</span>
        </div>
        <div class="border border-[#E7F2FF] bg-white w-full lg:h-[160px] rounded-xl flex items-center flex-col justify-center px-[10px] py-6 gap-2 lg:gap-y-4">
          <div class="size-10 lg:size-10 flex-shrink-0">
            <i class="ph-duotone ph-pill text-[#7BD0C2]" style="font-size: 40px;"></i>
          </div>
          <span class="text-base lg:text-xl font-semibold text-[#31363A]">Medicamentos</span>
        </div>
        <div class="border border-[#E7F2FF] bg-white w-full lg:h-[160px] rounded-xl flex items-center flex-col justify-center px-[10px] py-6 gap-2 lg:gap-y-4">
          <div class="size-10 lg:size-10 flex-shrink-0">
            <i class="ph-duotone ph-stethoscope text-[#7BD0C2]" style="font-size: 40px;"></i>
          </div>
          <span class="text-base lg:text-xl font-semibold text-[#31363A]">Hospitalización</span>
        </div>
        <div class="border border-[#E7F2FF] bg-white w-full lg:h-[160px] rounded-xl flex items-center flex-col justify-center px-[10px] py-6 gap-2 lg:gap-y-4">
          <div class="size-10 lg:size-10 flex-shrink-0">
            <i class="ph-duotone ph-globe-hemisphere-west text-[#7BD0C2]" style="font-size: 40px;"></i>
          </div>
          <span class="text-base lg:text-xl font-semibold text-[#31363A]">Cobertura mundial</span>
        </div>
        <div class="border border-[#E7F2FF] bg-white w-full lg:h-[160px] rounded-xl flex items-center flex-col justify-center px-[10px] py-6 gap-2 lg:gap-y-4">
          <div class="size-10 lg:size-10 flex-shrink-0">
            <i class="ph-duotone ph-tooth text-[#7BD0C2]" style="font-size: 40px;"></i>
          </div>
          <span class="text-base lg:text-xl font-semibold text-[#31363A]">Odontología</span>
        </div>
        <div class="border border-[#E7F2FF] bg-white w-full lg:h-[160px] rounded-xl flex items-center flex-col justify-center px-[10px] py-6 gap-2 lg:gap-y-4">
          <div class="size-10 lg:size-10 flex-shrink-0">
            <i class="ph-duotone ph-hospital text-[#7BD0C2]" style="font-size: 40px;"></i>
          </div>
          <span class="text-base lg:text-xl font-semibold text-[#31363A]">Internaciones</span>
        </div>
      </div>
    </div>
  </div>
</section>`;

fs.writeFileSync(path.join(__dirname, '..', 'a365', 'brasil-section6.txt'), section6);
console.log('✅ Sección 6 (Cards) guardada');

// SECCIÓN 7: Requirements
const section7 = `
<section class="w-full bg-[#F2F2F2] py-8 lg:py-16">
  <div class="mx-auto max-w-[358px] px-4 md:max-w-[548px] lg:max-w-[996px] lg:px-0">
    <!-- Título -->
    <h2 class="mb-6 mt-0 p-0 text-3xl font-semibold leading-9 text-[#0059BA] lg:mb-10 lg:text-4xl lg:leading-10">
      Requisitos para viajar a [Destino]
    </h2>

    <!-- Grid 2x2 de requirement cards -->
    <div class="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
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

    <!-- CTA Button -->
    <div class="w-full lg:flex lg:justify-end">
      <div class="w-full lg:w-auto">
        <button class="whitespace-nowrap overflow-hidden text-ellipsis font-semibold rounded-xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-offset-0 text-lg py-[10px] h-[48px] bg-[#BDEDE7] text-[#31363A] hover:bg-[#A8E5DD] active:bg-[#93DDD3] focus:bg-[#BDEDE7] focus:ring-[#7BD0C2] focus:ring-opacity-100 px-4 w-full lg:w-fit flex items-center justify-center gap-2">
          Ver todos los requisitos
          <i class="ph ph-arrow-right flex-shrink-0" style="font-size: 16px; font-weight: bold;"></i>
        </button>
      </div>
    </div>
  </div>
</section>`;

fs.writeFileSync(path.join(__dirname, '..', 'a365', 'brasil-section7.txt'), section7);
console.log('✅ Sección 7 (Requirements) guardada');

console.log('\n📋 Ejecuta: node scripts/build-complete-final.mjs');
