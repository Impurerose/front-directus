import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const destino = 'Brasil';

console.log('🚀 Generando HTML de Requisitos - Sección 2...\n');

// SECCIÓN 2: 3x ImageText (Seguro obligatorio, Visa, Vacunas)
const section2 = `
<!-- ImageText - ¿Es obligatorio el seguro? -->
<div class="bg-white w-full py-9 2xl:py-16">
  <div class="flex flex-col 2xl:flex-row-reverse 2xl:gap-32 items-center 2xl:px-20 max-w-[834px] 2xl:max-w-[1366px] mx-auto">
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
<div class="bg-white w-full py-9 2xl:py-16">
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
<div class="bg-white w-full py-9 2xl:py-16">
  <div class="flex flex-col 2xl:flex-row-reverse 2xl:gap-32 items-center 2xl:px-20 max-w-[834px] 2xl:max-w-[1366px] mx-auto">
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
