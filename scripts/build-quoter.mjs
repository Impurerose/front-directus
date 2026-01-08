import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const destino = 'Brasil';

console.log('🎯 Generando sección del Cotizador...\n');

// Sección del Cotizador - va después del Hero (sección 2)
const sectionQuoter = `
<section id="quoter-section" class="bg-gradient-to-b from-gray-50 to-white py-12 lg:py-20">
  <div class="container mx-auto px-4 lg:px-0 max-w-[358px] md:max-w-[548px] lg:max-w-[1200px]">
    
    <!-- Título -->
    <h2 class="text-center text-[#0059BA] font-semibold text-3xl lg:text-4xl mb-8 lg:mb-12">
      Cotizá tu seguro de viaje a ${destino}
    </h2>
    
    <!-- Mount Point del Cotizador -->
    <div 
      id="quoter-mount"
      data-geo="BR"
      class="max-w-4xl mx-auto"
    >
      <!-- Este div será reemplazado por el cotizador real cuando se cargue Single-SPA -->
    </div>
    
  </div>
</section>
`;

// Guardar sección
const outputPath = path.join(__dirname, '..', 'a365', 'brasil-section-quoter.txt');
fs.writeFileSync(outputPath, sectionQuoter, 'utf-8');

console.log('✅ Sección del Cotizador generada: a365/brasil-section-quoter.txt');
console.log('📍 Posición: Segunda sección (después del Hero)');
console.log('🔧 Mount point: #quoter-mount');
console.log('🌎 Geo: BR (Brasil)\n');
