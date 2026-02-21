import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const destino = 'Brasil';

console.log('🎯 Generando sección del Cotizador...\n');

// Sección del Cotizador - va después del Hero (sección 2)
// Wrapper con bg-bg-alt-secondary para template Requisitos
const sectionQuoter = `
<div class="quoter-container-wrapper w-full py-6 bg-bg-alt-secondary max-w-full md:max-w-[834px] xl:max-w-[1600px] mx-auto">
  <div class="px-4 max-w-[390px] md:max-w-[548px] lg:max-w-[1200px] 2xl:max-w-[1366px] mx-auto lg:px-0">
    
    <!-- Mount Point del Cotizador -->
    <div 
      id="quoter-mount"
      data-geo="BR"
      class="max-w-[926px] mx-auto relative z-[10001]"
    >
      <!-- Este div será reemplazado por el cotizador real cuando se cargue Single-SPA -->
    </div>
    
  </div>
</div>
`;

// Guardar sección
const outputPath = path.join(__dirname, '..', 'a365', 'brasil-section-quoter.txt');
fs.writeFileSync(outputPath, sectionQuoter, 'utf-8');

console.log('✅ Sección del Cotizador generada: a365/brasil-section-quoter.txt');
console.log('📍 Posición: Segunda sección (después del Hero)');
console.log('🔧 Mount point: #quoter-mount');
console.log('🌎 Geo: BR (Brasil)\n');
