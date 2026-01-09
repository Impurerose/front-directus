import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const destino = 'Brasil';

console.log('🚀 Generando HTML de Requisitos - Sección 2...\n');

// Leer data de requisitos
const dataPath = path.join(__dirname, '..', 'src', 'data', 'requisitos.json');
const { accordionDocumentos } = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

// SECCIÓN 2: ImageText Principal + Accordion Documentos + 3x ImageText (Seguro, Visa, Vacunas)
const section2 = `
<!-- ImageText Principal - ¿Qué necesito para viajar? -->
<div class="bg-white w-full py-9 2xl:py-16 pt-12 pb-12 2xl:pb-20 px-4">
  <div class="flex flex-col 2xl:flex-row 2xl:gap-32 items-center 2xl:px-20 max-w-[834px] 2xl:max-w-[1366px] mx-auto">
    <div class="h-[360px] w-full max-w-[390px] 2xl:max-w-[486px] shrink-0 relative">
      <img alt="Viajar a ${destino}" class="absolute inset-0 w-full h-full object-cover rounded-lg" src="https://placehold.co/256x256">
    </div>
    <div class="flex flex-col 2xl:gap-10 w-full max-w-[390px] md:max-w-[548px] 2xl:max-w-[486px] shrink-0">
      <h2 class="2xl:text-5xl leading-[56px] font-semibold text-[#0059ba] text-3xl pt-8 pb-4">¿Qué necesito para viajar a ${destino}?</h2>
      <p class="text-base leading-6 text-[#70777c]">Viajar a este destino abre las puertas a un universo de diversidad cultural, paisajes impresionantes y una energía contagiosa. Desde las playas paradisíacas hasta la selva exuberante, este país ofrece experiencias únicas para todos los gustos. Prepararte adecuadamente con un seguro de viaje te permitirá disfrutar al máximo de tu aventura.</p>
    </div>
  </div>
</div>

<!-- Accordion - Documentos Necesarios -->
<div class="bg-[#f2f2f2] mx-auto w-full py-8 2xl:py-16 max-w-full md:max-w-[834px] 2xl:max-w-[1366px]">
  <div class="max-w-[390px] md:max-w-[548px] 2xl:max-w-[1366px] mx-auto px-4 2xl:px-[185px]">
    <div class="max-w-[792px] flex flex-col mx-auto">
      <div class="flex flex-col gap-10 w-full">
        <h2 class="text-center text-3xl 2xl:text-4xl leading-[40px] font-semibold text-[#0059ba]">Documentos necesarios para ingresar a ${destino}</h2>
        <div class="flex flex-col gap-4 w-full" data-accordion-group>
${accordionDocumentos.map(item => `          <div data-accordion-item class="bg-white p-4 w-full flex flex-col rounded-lg">
            <button data-accordion-button class="flex items-center gap-2 w-full text-left">
              <i class="ph-duotone ph-files text-[#7BD0C2]" style="font-size: 32px;"></i>
              <h3 class="flex-1 text-base font-semibold leading-6 text-[#31363a]">${item.title}</h3>
              <i data-icon-up class="ph ph-caret-up text-[#006fe8] hidden" style="font-size: 20px;"></i>
              <i data-icon-down class="ph ph-caret-down text-[#006fe8]" style="font-size: 20px;"></i>
            </button>
            <div data-accordion-content class="accordion-content grid grid-rows-[0fr] opacity-0">
              <div class="overflow-hidden"><p class="pt-2 text-base leading-6 text-[#31363a]">${item.content}</p></div>
            </div>
          </div>`).join('\n')}
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ImageText - ¿Es obligatorio el seguro? -->
<div class="bg-white w-full py-9 2xl:py-16 pt-12 pb-12 2xl:pb-20 px-4">
  <div class="flex flex-col 2xl:flex-row-reverse justify-end 2xl:gap-32 items-center 2xl:px-20 max-w-[834px] 2xl:max-w-[1366px] mx-auto">
    <div class="h-[360px] w-full max-w-[390px] 2xl:max-w-[486px] shrink-0 relative">
      <img alt="Seguro de viaje" class="absolute inset-0 w-full h-full object-cover rounded-lg" src="https://placehold.co/486x360">
    </div>
    <div class="flex flex-col 2xl:gap-10 w-full max-w-[390px] md:max-w-[548px] 2xl:max-w-[486px] shrink-0">
      <h2 class="2xl:text-4xl leading-[40px] font-semibold text-[#0059ba] text-3xl pt-8 pb-4">¿Es obligatorio el seguro de viaje para ${destino}?</h2>
      <p class="text-base leading-6 text-[#70777c]">Aunque no siempre es obligatorio, contar con un seguro de viaje es altamente recomendable para cualquier destino internacional. Un seguro te protege ante emergencias médicas, cancelaciones de vuelos, pérdida de equipaje y muchas otras situaciones imprevistas que pueden ocurrir durante tu viaje.</p>
    </div>
  </div>
</div>

<!-- ImageText - ¿Necesitas Visa? -->
<div class="bg-white w-full py-9 2xl:py-16 pt-12 pb-12 2xl:pb-20 px-4">
  <div class="flex flex-col 2xl:flex-row 2xl:gap-32 items-center 2xl:px-20 max-w-[834px] 2xl:max-w-[1366px] mx-auto">
    <div class="h-[360px] w-full max-w-[390px] 2xl:max-w-[486px] shrink-0 relative">
      <img alt="Visa para viajar" class="absolute inset-0 w-full h-full object-cover rounded-lg" src="https://placehold.co/486x360">
    </div>
    <div class="flex flex-col 2xl:gap-10 w-full max-w-[390px] md:max-w-[548px] 2xl:max-w-[486px] shrink-0">
      <h2 class="2xl:text-4xl leading-[40px] font-semibold text-[#0059ba] text-3xl pt-8 pb-4">¿Necesitas Visa para ingresar a ${destino}?</h2>
      <p class="text-base leading-6 text-[#70777c]">Los requisitos de visa varían según tu nacionalidad y el propósito de tu viaje. Muchos países latinoamericanos tienen acuerdos de reciprocidad que permiten el ingreso sin visa para estancias turísticas de corta duración. Es fundamental verificar los requisitos específicos para tu caso antes de comprar tus boletos.</p>
    </div>
  </div>
</div>

<!-- ImageText - ¿Qué vacunas son obligatorias? -->
<div class="bg-white w-full py-9 2xl:py-16 pt-12 pb-12 2xl:pb-20 px-4">
  <div class="flex flex-col 2xl:flex-row-reverse justify-end 2xl:gap-32 items-center 2xl:px-20 max-w-[834px] 2xl:max-w-[1366px] mx-auto">
    <div class="h-[360px] w-full max-w-[390px] 2xl:max-w-[486px] shrink-0 relative">
      <img alt="Vacunas obligatorias" class="absolute inset-0 w-full h-full object-cover rounded-lg" src="https://placehold.co/486x360">
    </div>
    <div class="flex flex-col 2xl:gap-10 w-full max-w-[390px] md:max-w-[548px] 2xl:max-w-[486px] shrink-0">
      <h2 class="2xl:text-4xl leading-[40px] font-semibold text-[#0059ba] text-3xl pt-8 pb-4">¿Qué vacunas son obligatorias para viajar a ${destino}?</h2>
      <p class="text-base leading-6 text-[#70777c]">Dependiendo de las zonas que planees visitar, algunas vacunas pueden ser recomendadas u obligatorias. La vacuna contra la fiebre amarilla es frecuentemente requerida para ciertas regiones. Es importante consultar con un centro de vacunación internacional con suficiente anticipación, ya que algunas vacunas requieren ser aplicadas semanas antes del viaje.</p>
    </div>
  </div>
</div>`;

fs.writeFileSync(path.join(__dirname, '..', 'a365', 'requisitos-section2.txt'), section2);
console.log('✅ Sección 2 guardada en a365/requisitos-section2.txt');
console.log('\n📋 Siguiente paso: node scripts/build-requisitos-part3.mjs');
