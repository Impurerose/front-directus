import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const destino = 'Brasil';
const dataPath = path.join(__dirname, '..', 'src', 'data', 'mexico.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

console.log('🚀 Generando secciones 3-5...\n');

// SECCIÓN 3: Accordion #2 (Aduanas)
const aduanasItems = data.accordionItems;  // Reutilizamos los mismos para demo
const section3 = `
<div class="bg-[#f2f2f2] w-full py-8 2xl:py-16 px-4 2xl:px-[185px]">
  <div class="max-w-[390px] md:max-w-[548px] 2xl:max-w-[792px] flex flex-col mx-auto">
    <div class="flex flex-col gap-10 w-full">
      <h2 class="text-center text-3xl 2xl:text-4xl leading-[40px] font-semibold text-[#0059ba]">Aduanas y requisitos de entrada a ${destino}</h2>
      <div class="flex flex-col gap-4 w-full" data-accordion-group>
${aduanasItems.map(item => `        <div data-accordion-item class="bg-white p-4 w-full flex flex-col rounded-lg">
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
</div>`;

fs.writeFileSync(path.join(__dirname, '..', 'dist', 'brasil-section3.txt'), section3);
console.log('✅ Sección 3 (Accordion Aduanas) guardada');

// SECCIÓN 4: FAQs
const section4 = `
<div class="bg-[url('https://assistcdn.s3.us-west-1.amazonaws.com/temporal/BackgroundLandingIndividualMobile.svg')] md:bg-[url('https://assistcdn.s3.us-west-1.amazonaws.com/temporal/BackgroundLandingIndividualTablet.svg')] 2xl:bg-[url('https://assistcdn.s3.us-west-1.amazonaws.com/temporal/BackgroundLandingIndividualDesktop.svg')] bg-no-repeat bg-cover w-full py-8 2xl:py-16 px-4 2xl:px-[185px]">
  <div class="max-w-[390px] md:max-w-[548px] 2xl:max-w-[792px] flex flex-col mx-auto">
    <div class="flex flex-col gap-10 w-full">
      <div class="flex items-center gap-2 justify-center">
        <i class="ph-duotone ph-info text-[#7BD0C2]" style="font-size: 48px;"></i>
        <h2 class="text-3xl 2xl:text-4xl leading-[40px] font-semibold text-white">Preguntas frecuentes</h2>
      </div>
      <div class="flex flex-col gap-4 w-full" data-accordion-group>
${data.faqItems.map(item => `        <div data-accordion-item class="bg-white p-4 w-full flex flex-col rounded-lg">
          <button data-accordion-button class="flex items-center gap-2 w-full text-left">
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

fs.writeFileSync(path.join(__dirname, '..', 'dist', 'brasil-section4.txt'), section4);
console.log('✅ Sección 4 (FAQs) guardada');

// SECCIÓN 5: Blog
const section5 = `
<div class="w-full flex items-center justify-center py-16">
  <div class="w-full max-w-[390px] md:max-w-[548px] 2xl:max-w-[1296px]">
    <div class="bg-[#CFF6FF] rounded-3xl p-6 2xl:p-12 flex flex-col 2xl:flex-row gap-8 2xl:gap-[86px]">
      
      <!-- Left section - Title and CTA -->
      <div class="flex flex-col justify-center 2xl:w-[282px] flex-shrink-0">
        <h2 class="text-4xl font-semibold text-[#0059BA] mb-3">
          Guías y consejos para viajeros
        </h2>
        <p class="text-2xl text-[#31363A] leading-8 2xl:mb-6">
          Explorá nuestro blog para descubrir destinos y prepararte mejor para cada aventura.
        </p>
        <div class="hidden 2xl:flex">
          <button class="whitespace-nowrap overflow-hidden text-ellipsis font-semibold rounded-xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-offset-0 text-lg py-[10px] h-[48px] bg-[#006FE8] focus:bg-[#0059BA] text-white hover:bg-[#0059BA] active:bg-[#004A9C] focus:ring-[#C2DFFF] focus:ring-opacity-100 px-4 w-full lg:w-fit flex items-center justify-center gap-2">
            Ir al blog
            <i class="ph ph-arrow-right flex-shrink-0" style="font-size: 16px; font-weight: bold;"></i>
          </button>
        </div>
      </div>

      <!-- Right section - Blog cards -->
      <div class="flex flex-col 2xl:flex-row gap-4 flex-1">
        
        <!-- Primary card - First post with IMAGE -->
        <div class="bg-white rounded-xl p-6 flex flex-col gap-6 2xl:max-w-[376px] flex-1">
          <div class="w-full h-[184px] overflow-hidden rounded-lg">
            <img src="https://placehold.co/328x184" alt="Última entrada del blog" class="w-full h-full object-cover">
          </div>
          <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-1">
              <h3 class="text-xl font-semibold text-[#31363A]">Última entrada del blog</h3>
              <p class="text-base text-[#70777C] leading-6">
                Lorem ipsum dolor sit amet consectetur. Neque augue venenatis et risus pellentesque donec tellus vel tortor. Laoreet augue faucibus.
              </p>
            </div>
            <div class="w-fit">
              <button class="whitespace-nowrap overflow-hidden text-ellipsis font-semibold rounded-xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-offset-0 text-base py-[6px] h-[36px] bg-white border-2 border-[#006FE8] text-[#006FE8] hover:border-[#0059BA] hover:text-[#0059BA] active:border-[#004A9C] active:text-[#004A9C] focus:border-[#0059BA] focus:text-[#0059BA] focus:border-transparent focus:ring-[#006FE8] focus:ring-opacity-100 px-4 w-full lg:w-fit flex items-center justify-center gap-2">
                Leer más
                <i class="ph ph-arrow-right flex-shrink-0" style="font-size: 16px; font-weight: bold;"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- Secondary cards container with ICONS -->
        <div class="flex flex-col gap-4 2xl:w-[440px]">
          
          <!-- Secondary card 2 -->
          <div class="bg-white border border-[#E7F2FF] rounded-xl p-6 flex gap-6">
            <div class="flex-shrink-0">
              <i class="ph-duotone ph-airplane-tilt text-[#7BD0C2]" style="font-size: 40px;"></i>
            </div>
            <div class="flex flex-col gap-4">
              <div class="flex flex-col gap-1">
                <h3 class="text-xl font-semibold text-[#31363A]">Entrada del blog 2</h3>
                <p class="text-base text-[#70777C] leading-6">
                  Lorem ipsum dolor sit amet consectetur. Neque augue venenatis et risus pellentesque donec tellus vel tortor. Laoreet augue faucibus.
                </p>
              </div>
              <div class="w-fit">
                <button class="whitespace-nowrap overflow-hidden text-ellipsis font-semibold rounded-xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-offset-0 text-base py-[6px] h-[36px] bg-white border-2 border-[#006FE8] text-[#006FE8] hover:border-[#0059BA] hover:text-[#0059BA] active:border-[#004A9C] active:text-[#004A9C] focus:border-[#0059BA] focus:text-[#0059BA] focus:border-transparent focus:ring-[#006FE8] focus:ring-opacity-100 px-4 w-full lg:w-fit flex items-center justify-center gap-2">
                  Leer más
                  <i class="ph ph-arrow-right flex-shrink-0" style="font-size: 16px; font-weight: bold;"></i>
                </button>
              </div>
            </div>
          </div>

          <!-- Secondary card 3 -->
          <div class="bg-white border border-[#E7F2FF] rounded-xl p-6 flex gap-6">
            <div class="flex-shrink-0">
              <i class="ph-duotone ph-mountains text-[#7BD0C2]" style="font-size: 40px;"></i>
            </div>
            <div class="flex flex-col gap-4">
              <div class="flex flex-col gap-1">
                <h3 class="text-xl font-semibold text-[#31363A]">Entrada del blog 3</h3>
                <p class="text-base text-[#70777C] leading-6">
                  Lorem ipsum dolor sit amet consectetur. Neque augue venenatis et risus pellentesque donec tellus vel tortor. Laoreet augue faucibus.
                </p>
              </div>
              <div class="w-fit">
                <button class="whitespace-nowrap overflow-hidden text-ellipsis font-semibold rounded-xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-offset-0 text-base py-[6px] h-[36px] bg-white border-2 border-[#006FE8] text-[#006FE8] hover:border-[#0059BA] hover:text-[#0059BA] active:border-[#004A9C] active:text-[#004A9C] focus:border-[#0059BA] focus:text-[#0059BA] focus:border-transparent focus:ring-[#006FE8] focus:ring-opacity-100 px-4 w-full lg:w-fit flex items-center justify-center gap-2">
                  Leer más
                  <i class="ph ph-arrow-right flex-shrink-0" style="font-size: 16px; font-weight: bold;"></i>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- Mobile CTA button -->
      <div class="2xl:hidden w-full">
        <button class="whitespace-nowrap overflow-hidden text-ellipsis font-semibold rounded-xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-offset-0 text-lg py-[10px] h-[48px] bg-[#006FE8] focus:bg-[#0059BA] text-white hover:bg-[#0059BA] active:bg-[#004A9C] focus:ring-[#C2DFFF] focus:ring-opacity-100 px-4 w-full flex items-center justify-center gap-2">
          Ir al blog
          <i class="ph ph-arrow-right flex-shrink-0" style="font-size: 16px; font-weight: bold;"></i>
        </button>
      </div>

    </div>
  </div>
</div>`;

fs.writeFileSync(path.join(__dirname, '..', 'dist', 'brasil-section5.txt'), section5);
console.log('✅ Sección 5 (Blog) guardada');

console.log('\n📋 Ejecuta: node scripts/build-complete-part3.mjs');
