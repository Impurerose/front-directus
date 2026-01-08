import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const destino = 'Brasil';

// Leer data
const dataPath = path.join(__dirname, '..', 'src', 'data', 'mexico.json');
const { accordionItems, faqItems } = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

console.log('🚀 Generando HTML completo para Brasil...\n');

// SECCIÓN 1: Header + Hero + ImageText #1 + Accordion #1
const section1 = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Seguro de viaje a ${destino} - Assist 365</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/@phosphor-icons/web"></script>
  
  <!-- Quoter CSS -->
  <link rel="stylesheet" href="https://assistcdn.s3.us-west-1.amazonaws.com/quoter/core_tailwind.css">
  <link rel="stylesheet" href="https://assistcdn.s3.us-west-1.amazonaws.com/quoter/quoter.min.css">
  
  <script>
    tailwind.config = { theme: { extend: { screens: { '2xl': '1440px' } } } }
  </script>
  <style>
    .prefooter-container { background: url('https://assistcdn.s3.us-west-1.amazonaws.com/assets/img/home/PreFooterMobile.jpg') no-repeat; background-size: cover; background-position: center; }
    @media screen and (min-width: 391px) and (max-width: 834px) { .prefooter-container { background: url('https://assistcdn.s3.us-west-1.amazonaws.com/assets/img/home/PreFooterTablet.jpg') no-repeat; background-size: cover; } }
    @media screen and (min-width: 835px) { .prefooter-container { background: url('https://assistcdn.s3.us-west-1.amazonaws.com/assets/img/home/PreFooterDesktop.jpg') no-repeat; background-size: cover; } }
    .accordion-content { transition: grid-template-rows 300ms, opacity 300ms; display: grid; }
    .grid-rows-\\[0fr\\] { grid-template-rows: 0fr; }
    .grid-rows-\\[1fr\\] { grid-template-rows: 1fr; }
  </style>
</head>
<body>
<div class="w-full max-w-[390px] md:max-w-[834px] 2xl:max-w-[1366px] mx-auto min-h-[400px] bg-sky-200">
  <div class="bg-[url('https://assistcdn.s3.us-west-1.amazonaws.com/temporal/HeaderLandingIndividualMobile.svg')] md:bg-[url('https://assistcdn.s3.us-west-1.amazonaws.com/temporal/HeaderLandingIndividualTablet.svg')] 2xl:bg-[url('https://assistcdn.s3.us-west-1.amazonaws.com/temporal/HeaderLandingIndividualDesktop.svg')] bg-no-repeat md:max-w-[834px] 2xl:max-w-[910px] h-[400px]">
    <h1 class="flex flex-row 2xl:flex-col gap-3 text-4xl 2xl:text-7xl text-white pl-4 md:pl-[142px] 2xl:pl-[84px] py-16 2xl:py-[118px]">
      <span>Seguro de viaje a</span><span class="font-semibold">${destino}</span>
    </h1>
  </div>
</div>
<div class="bg-white w-full py-9 2xl:py-16 pt-12 pb-12 2xl:pb-20">
  <div class="flex flex-col 2xl:flex-row 2xl:gap-32 items-center 2xl:px-20 max-w-[834px] 2xl:max-w-[1366px] mx-auto">
    <div class="h-[360px] w-full max-w-[390px] 2xl:max-w-[486px] shrink-0 relative">
      <img alt="" class="absolute inset-0 w-full h-full object-cover rounded-lg" src="https://placehold.co/486x360">
    </div>
    <div class="flex flex-col 2xl:gap-10 w-full max-w-[390px] md:max-w-[548px] 2xl:max-w-[486px] shrink-0">
      <h2 class="2xl:text-5xl leading-[56px] font-semibold text-[#0059ba] text-3xl pt-8 pb-4">¿Qué necesito para viajar a ${destino}?</h2>
      <p class="text-base leading-6 text-[#70777c]">Lorem ipsum dolor sit amet consectetur. Dictum molestie in tellus vitae.</p>
    </div>
  </div>
</div>
<div class="bg-[#f2f2f2] w-full py-8 2xl:py-16 px-4 2xl:px-[185px]">
  <div class="max-w-[390px] md:max-w-[548px] 2xl:max-w-[792px] flex flex-col mx-auto">
    <div class="flex flex-col gap-10 w-full">
      <h2 class="text-center text-3xl 2xl:text-4xl leading-[40px] font-semibold text-[#0059ba]">Documentos necesarios para ingresar a ${destino}</h2>
      <div class="flex flex-col gap-4 w-full" data-accordion-group>
${accordionItems.map(item => `        <div data-accordion-item class="bg-white p-4 w-full flex flex-col rounded-lg">
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

fs.writeFileSync(path.join(__dirname, '..', 'a365', 'brasil-section1.txt'), section1);
console.log('✅ Sección 1 guardada');

// SECCIÓN 2: ImageText #2, #3, #4
const section2 = `
<div class="bg-white w-full py-9 2xl:py-16">
  <div class="flex flex-col 2xl:flex-row-reverse 2xl:gap-32 items-center 2xl:px-20 max-w-[834px] 2xl:max-w-[1366px] mx-auto">
    <div class="h-[360px] w-full max-w-[390px] 2xl:max-w-[486px] shrink-0 relative">
      <img alt="" class="absolute inset-0 w-full h-full object-cover rounded-lg" src="https://placehold.co/486x360">
    </div>
    <div class="flex flex-col 2xl:gap-10 w-full max-w-[390px] md:max-w-[548px] 2xl:max-w-[486px] shrink-0">
      <h2 class="text-3xl leading-10 font-semibold text-[#0059ba] pt-8 pb-4">Título sección 2</h2>
      <p class="text-base leading-6 text-[#70777c]">Lorem ipsum dolor sit amet consectetur.</p>
    </div>
  </div>
</div>
<div class="bg-white w-full py-9 2xl:py-16">
  <div class="flex flex-col 2xl:flex-row 2xl:gap-32 items-center 2xl:px-20 max-w-[834px] 2xl:max-w-[1366px] mx-auto">
    <div class="h-[360px] w-full max-w-[390px] 2xl:max-w-[486px] shrink-0 relative">
      <img alt="" class="absolute inset-0 w-full h-full object-cover rounded-lg" src="https://placehold.co/486x360">
    </div>
    <div class="flex flex-col 2xl:gap-10 w-full max-w-[390px] md:max-w-[548px] 2xl:max-w-[486px] shrink-0">
      <h2 class="text-3xl leading-10 font-semibold text-[#0059ba] pt-8 pb-4">Título sección 3</h2>
      <p class="text-base leading-6 text-[#70777c]">Lorem ipsum dolor sit amet consectetur.</p>
    </div>
  </div>
</div>
<div class="bg-white w-full py-9 2xl:py-16">
  <div class="flex flex-col 2xl:flex-row-reverse 2xl:gap-32 items-center 2xl:px-20 max-w-[834px] 2xl:max-w-[1366px] mx-auto">
    <div class="h-[360px] w-full max-w-[390px] 2xl:max-w-[486px] shrink-0 relative">
      <img alt="" class="absolute inset-0 w-full h-full object-cover rounded-lg" src="https://placehold.co/486x360">
    </div>
    <div class="flex flex-col 2xl:gap-10 w-full max-w-[390px] md:max-w-[548px] 2xl:max-w-[486px] shrink-0">
      <h2 class="text-3xl leading-10 font-semibold text-[#0059ba] pt-8 pb-4">Título sección 4</h2>
      <p class="text-base leading-6 text-[#70777c]">Lorem ipsum dolor sit amet consectetur.</p>
    </div>
  </div>
</div>`;

fs.writeFileSync(path.join(__dirname, '..', 'a365', 'brasil-section2.txt'), section2);
console.log('✅ Sección 2 guardada');

console.log('\n📋 Ejecuta: node scripts/build-complete-part2.mjs');
