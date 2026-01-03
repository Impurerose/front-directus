import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Ensamblando HTML completo...\n');

// SECCIÓN 8: Plans
const section8 = `
<section class="w-full bg-[#E3DEF9] py-12 lg:py-20">
  <div class="px-4 lg:px-0 mx-auto max-w-[358px] md:max-w-[548px] lg:max-w-[1200px]">
    
    <!-- Título -->
    <h2 class="text-center text-[#0059BA] font-semibold text-3xl lg:text-4xl mb-8 lg:mb-12">
      Nuestros planes para viajar a [Destino]
    </h2>

    <!-- Grid de 4 planes -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      
      <!-- Plan 1: World cover (sin badge) -->
      <div class="flex flex-col relative">
        <div class="rounded-t-xl h-[100px] flex items-center justify-center px-4 pt-6 pb-4" style="background-color: #0059BA;">
          <h3 class="text-white font-semibold text-3xl">World cover</h3>
        </div>
        <div class="bg-white border border-[#E7F2FF] rounded-b-xl p-4 flex flex-col gap-3 flex-1">
          <div class="flex items-start gap-2">
            <div class="size-6 flex-shrink-0">
              <i class="ph ph-shield-plus text-[#7BD0C2]" style="font-size: 24px;"></i>
            </div>
            <p class="text-sm text-[#70777C] leading-5">
              <span class="font-semibold">USD 200.000</span> de Asistencia medica
            </p>
          </div>
          <div class="flex items-start gap-2">
            <div class="size-6 flex-shrink-0">
              <i class="ph ph-first-aid-kit text-[#7BD0C2]" style="font-size: 24px;"></i>
            </div>
            <p class="text-sm text-[#70777C] leading-5">
              <span class="font-semibold">USD 10.000</span> de Asistencia por enfermedad preexistente
            </p>
          </div>
          <div class="flex items-start gap-2">
            <div class="size-6 flex-shrink-0">
              <i class="ph ph-suitcase-rolling text-[#7BD0C2]" style="font-size: 24px;"></i>
            </div>
            <p class="text-sm text-[#70777C] leading-5">
              <span class="font-semibold">USD 1.000</span> por pérdida de equipaje
            </p>
          </div>
        </div>
      </div>

      <!-- Plan 2: Premium cover (con badge) -->
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
              <i class="ph ph-shield-plus text-[#7BD0C2]" style="font-size: 24px;"></i>
            </div>
            <p class="text-sm text-[#70777C] leading-5">
              <span class="font-semibold">USD 200.000</span> de Asistencia medica
            </p>
          </div>
          <div class="flex items-start gap-2">
            <div class="size-6 flex-shrink-0">
              <i class="ph ph-first-aid-kit text-[#7BD0C2]" style="font-size: 24px;"></i>
            </div>
            <p class="text-sm text-[#70777C] leading-5">
              <span class="font-semibold">USD 10.000</span> de Asistencia por enfermedad preexistente
            </p>
          </div>
          <div class="flex items-start gap-2">
            <div class="size-6 flex-shrink-0">
              <i class="ph ph-suitcase-rolling text-[#7BD0C2]" style="font-size: 24px;"></i>
            </div>
            <p class="text-sm text-[#70777C] leading-5">
              <span class="font-semibold">USD 1.000</span> por pérdida de equipaje
            </p>
          </div>
        </div>
      </div>

      <!-- Plan 3: World cover (sin badge) -->
      <div class="flex flex-col relative">
        <div class="rounded-t-xl h-[100px] flex items-center justify-center px-4 pt-6 pb-4" style="background-color: #0059BA;">
          <h3 class="text-white font-semibold text-3xl">World cover</h3>
        </div>
        <div class="bg-white border border-[#E7F2FF] rounded-b-xl p-4 flex flex-col gap-3 flex-1">
          <div class="flex items-start gap-2">
            <div class="size-6 flex-shrink-0">
              <i class="ph ph-shield-plus text-[#7BD0C2]" style="font-size: 24px;"></i>
            </div>
            <p class="text-sm text-[#70777C] leading-5">
              <span class="font-semibold">USD 200.000</span> de Asistencia medica
            </p>
          </div>
          <div class="flex items-start gap-2">
            <div class="size-6 flex-shrink-0">
              <i class="ph ph-first-aid-kit text-[#7BD0C2]" style="font-size: 24px;"></i>
            </div>
            <p class="text-sm text-[#70777C] leading-5">
              <span class="font-semibold">USD 10.000</span> de Asistencia por enfermedad preexistente
            </p>
          </div>
          <div class="flex items-start gap-2">
            <div class="size-6 flex-shrink-0">
              <i class="ph ph-suitcase-rolling text-[#7BD0C2]" style="font-size: 24px;"></i>
            </div>
            <p class="text-sm text-[#70777C] leading-5">
              <span class="font-semibold">USD 1.000</span> por pérdida de equipaje
            </p>
          </div>
        </div>
      </div>

      <!-- Plan 4: World cover (con badge) -->
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
              <i class="ph ph-shield-plus text-[#7BD0C2]" style="font-size: 24px;"></i>
            </div>
            <p class="text-sm text-[#70777C] leading-5">
              <span class="font-semibold">USD 200.000</span> de Asistencia medica
            </p>
          </div>
          <div class="flex items-start gap-2">
            <div class="size-6 flex-shrink-0">
              <i class="ph ph-first-aid-kit text-[#7BD0C2]" style="font-size: 24px;"></i>
            </div>
            <p class="text-sm text-[#70777C] leading-5">
              <span class="font-semibold">USD 10.000</span> de Asistencia por enfermedad preexistente
            </p>
          </div>
          <div class="flex items-start gap-2">
            <div class="size-6 flex-shrink-0">
              <i class="ph ph-suitcase-rolling text-[#7BD0C2]" style="font-size: 24px;"></i>
            </div>
            <p class="text-sm text-[#70777C] leading-5">
              <span class="font-semibold">USD 1.000</span> por pérdida de equipaje
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>`;

// SECCIÓN 9: PreFooter
const section9 = `
<div class="w-full flex justify-center">
  <div class="w-full max-w-[1366px] prefooter-container h-[340px] flex flex-col items-center justify-end pb-8">
    <div class="w-full max-w-[358px] lg:max-w-[998px] rounded-3xl bg-white bg-opacity-85 py-4 lg:py-8 px-4 lg:px-10 flex flex-col lg:flex-row items-center lg:justify-between">
      
      <img src="https://assistcdn.s3.us-west-1.amazonaws.com/assets/site/logo.svg" alt="Assist 365 Logo" class="mb-4 lg:mb-0">
      
      <h2 class="text-2xl lg:text-4xl font-semibold text-[#0059BA] mb-4 lg:mb-0 text-center lg:text-left px-4 lg:px-0">
        En tu viaje, <strong>a tu lado.</strong>
      </h2>
      
      <div class="w-full lg:w-auto flex justify-start mt-4 lg:mt-0">
        <button class="whitespace-nowrap overflow-hidden text-ellipsis font-semibold rounded-xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-offset-0 text-lg py-[10px] h-[48px] bg-[#006FE8] focus:bg-[#0059BA] text-white hover:bg-[#0059BA] active:bg-[#004A9C] focus:ring-[#C2DFFF] focus:ring-opacity-100 px-4 w-full lg:w-fit flex items-center justify-center gap-2">
          Cotizá tu asistencia
          <i class="ph ph-arrow-right flex-shrink-0" style="font-size: 20px; font-weight: bold;"></i>
        </button>
      </div>

    </div>
  </div>
</div>`;

// JavaScript
const javascript = `
<script>
  // Inicializar accordions
  document.addEventListener('DOMContentLoaded', function() {
    const groups = document.querySelectorAll('[data-accordion-group]');
    
    groups.forEach(group => {
      const items = group.querySelectorAll('[data-accordion-item]');
      
      items.forEach(item => {
        const button = item.querySelector('[data-accordion-button]');
        const content = item.querySelector('[data-accordion-content]');
        const iconUp = item.querySelector('[data-icon-up]');
        const iconDown = item.querySelector('[data-icon-down]');
        
        button.addEventListener('click', () => {
          const isOpen = content.classList.contains('grid-rows-[1fr]');
          
          if (isOpen) {
            content.classList.remove('grid-rows-[1fr]', 'opacity-100');
            content.classList.add('grid-rows-[0fr]', 'opacity-0');
            iconUp.classList.add('hidden');
            iconDown.classList.remove('hidden');
          } else {
            content.classList.remove('grid-rows-[0fr]', 'opacity-0');
            content.classList.add('grid-rows-[1fr]', 'opacity-100');
            iconUp.classList.remove('hidden');
            iconDown.classList.add('hidden');
          }
        });
      });
    });
  });
</script>
</body>
</html>`;

// Leer todas las secciones
const section1 = fs.readFileSync(path.join(__dirname, '..', 'dist', 'brasil-section1.txt'), 'utf-8');
const section2 = fs.readFileSync(path.join(__dirname, '..', 'dist', 'brasil-section2.txt'), 'utf-8');
const section3 = fs.readFileSync(path.join(__dirname, '..', 'dist', 'brasil-section3.txt'), 'utf-8');
const section4 = fs.readFileSync(path.join(__dirname, '..', 'dist', 'brasil-section4.txt'), 'utf-8');
const section5 = fs.readFileSync(path.join(__dirname, '..', 'dist', 'brasil-section5.txt'), 'utf-8');
const section6 = fs.readFileSync(path.join(__dirname, '..', 'dist', 'brasil-section6.txt'), 'utf-8');
const section7 = fs.readFileSync(path.join(__dirname, '..', 'dist', 'brasil-section7.txt'), 'utf-8');

// Combinar todo
const completeHTML = section1 + section2 + section3 + section4 + section5 + section6 + section7 + section8 + section9 + javascript;

// Guardar archivo completo
fs.writeFileSync(path.join(__dirname, '..', 'dist', 'brasil.html'), completeHTML, 'utf-8');

console.log('✅ Sección 8 (Plans) generada');
console.log('✅ Sección 9 (PreFooter) generada');
console.log('✅ JavaScript de accordions incluido');
console.log('\n🎉 ¡Archivo completo generado: dist/brasil.html!\n');
console.log('📁 Archivo listo para usar en Directus');
console.log('🔧 Incluye todas las secciones con accordions funcionales');
