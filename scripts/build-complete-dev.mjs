import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const destino = 'Brasil';

// Leer data
const dataPath = path.join(__dirname, '..', 'src', 'data', 'mexico.json');
const { accordionItems, faqItems } = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

console.log('🚀 Generando HTML completo para Brasil (DEV MODE)...\n');

// SECCIÓN 1: Header + Hero + ImageText #1 + Accordion #1
const section1 = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Seguro de viaje a ${destino} - Assist 365</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/@phosphor-icons/web"></script>
  
  <!-- Quoter CSS (DEV - localhost) -->
  <link rel="stylesheet" href="http://localhost:5057/core_tailwind.css">
  <link rel="stylesheet" href="http://localhost:5007/quoter.min.css">
  
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
    <div class="flex items-center justify-center px-4 mb-5 md:px-0 md:mb-0">
      <img src="https://assistcdn.s3.us-west-1.amazonaws.com/assets/img/products/seguro-viaje-brasil-800x600.jpg" alt="Brasil" class="2xl:w-[560px] 2xl:h-[420px] md:w-[358px] md:h-[268px] w-[358px] h-[268px] rounded-2xl object-cover">
    </div>
    <div class="flex flex-col w-full max-w-[358px] md:max-w-full 2xl:max-w-[564px] px-4 md:px-0 2xl:px-0">
      <h2 class="text-4xl font-semibold text-[#0059BA] mb-8">Información general de ${destino}</h2>
      <p class="text-[#31363A] text-base">
        Viajar a Brasil abre las puertas a un universo de diversidad cultural, paisajes impresionantes y una energía contagiosa.
        Desde las playas de Copacabana hasta la selva amazónica, este país ofrece experiencias únicas para todos los gustos.
        Prepararte adecuadamente con un seguro de viaje te permitirá disfrutar al máximo de tu aventura brasileña.
      </p>
    </div>
  </div>
</div>

<div class="bg-white w-full py-9 2xl:py-16" data-accordion-group>
  <div class="2xl:px-20 max-w-[834px] 2xl:max-w-[1366px] mx-auto">
    <div class="flex items-center justify-center mb-4 md:mb-8">
      <h2 class="text-4xl font-semibold text-[#0059BA] px-4">Requisitos para viajar a ${destino}</h2>
    </div>
    
    ${accordionItems.map((item, idx) => `
    <div class="border-b border-[#E7F2FF] px-4" data-accordion-item>
      <button class="w-full flex items-center justify-between py-4 text-left" data-accordion-button>
        <h3 class="text-lg font-semibold text-[#31363A]">${item.question}</h3>
        <div class="flex-shrink-0 ml-4">
          <i class="ph ph-caret-down text-[#0059BA] ${idx === 0 ? 'hidden' : ''}" style="font-size: 24px;" data-icon-down></i>
          <i class="ph ph-caret-up text-[#0059BA] ${idx === 0 ? '' : 'hidden'}" style="font-size: 24px;" data-icon-up></i>
        </div>
      </button>
      <div class="accordion-content overflow-hidden ${idx === 0 ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}" data-accordion-content>
        <div class="overflow-hidden">
          <div class="pb-4">
            <p class="text-[#70777C] text-base">${item.answer}</p>
          </div>
        </div>
      </div>
    </div>
    `).join('')}
  </div>
</div>
`;

// Guardar la sección 1
fs.writeFileSync(path.join(__dirname, '..', 'a365', 'brasil-section1.txt'), section1, 'utf-8');

console.log('✅ Sección 1 generada (Header + Hero + ImageText + Accordion)');
console.log('📁 Archivo: a365/brasil-section1.txt');
console.log('⚠️  CSS del cotizador apunta a: ./assets/quoter.min.css (LOCAL)');
