import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const destino = 'Brasil';

// Leer data de requisitos
const dataPath = path.join(__dirname, '..', 'src', 'data', 'requisitos.json');
const { accordionAduanas } = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

console.log('🚀 Generando HTML de Requisitos - Sección 3...\n');

// SECCIÓN 3: Accordion Aduanas
const section3 = `
<!-- Accordion - Aduanas y Artículos Prohibidos -->
<div class="bg-[#f2f2f2] w-full py-8 2xl:py-16 px-4 2xl:px-[185px]">
  <div class="max-w-[390px] md:max-w-[548px] 2xl:max-w-[792px] flex flex-col mx-auto">
    <div class="flex flex-col gap-10 w-full">
      <h2 class="text-center text-3xl 2xl:text-4xl leading-[40px] font-semibold text-[#0059ba]">¿Qué debes saber de las aduanas y artículos prohibidos para viajar a ${destino}?</h2>
      <div class="flex flex-col gap-4 w-full" data-accordion-group>
${accordionAduanas.map(item => `        <div data-accordion-item class="bg-white p-4 w-full flex flex-col rounded-lg">
          <button data-accordion-button class="flex items-center gap-2 w-full text-left">
            <i class="ph-duotone ph-airplane-takeoff text-[#7BD0C2]" style="font-size: 32px;"></i>
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
</div>`;

fs.writeFileSync(path.join(__dirname, '..', 'a365', 'requisitos-section3.txt'), section3);
console.log('✅ Sección 3 guardada en a365/requisitos-section3.txt');
console.log('\n📋 Siguiente paso: node scripts/build-requisitos-final.mjs');
