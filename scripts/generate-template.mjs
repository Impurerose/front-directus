import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';
import { promisify } from 'util';

const execPromise = promisify(exec);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Generador de HTML Estático para Directus\n');
console.log('='.repeat(50));
console.log('\n📋 INSTRUCCIONES:\n');
console.log('Enfoque SSG simplificado:');
console.log('1. Ejecuta: npm run dev');
console.log('2. Abre el navegador en: http://localhost:5173');
console.log('3. Click derecho → "Ver código fuente" o "Inspeccionar"');
console.log('4. Copia TODO el HTML renderizado');
console.log('5. Pégalo en el template que generaremos\n');

// Data de destinos
const destinations = {
  mexico: {
    destino: 'México'
  }
};

// Función para cargar data desde JSON
function loadDestinationData(destination) {
  const dataPath = path.join(__dirname, '..', 'src', 'data', `${destination}.json`);
  const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
  return data;
}

// Template HTML base con CDNs y scripts
function generateHTMLWrapper(destino, destinationKey) {
  const data = loadDestinationData(destinationKey);
  
  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Seguro de viaje a ${destino} - Assist 365</title>
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"><\/script>
  
  <!-- Phosphor Icons CDN -->
  <script src="https://unpkg.com/@phosphor-icons/web"><\/script>
  
  <!-- Tailwind Config -->
  <script>
    tailwind.config = {
      theme: {
        extend: {
          screens: {
            '2xl': '1440px'
          }
        }
      }
    }
  <\/script>
  
  <!-- Custom Styles -->
  <style>
    /* PreFooter Background */
    .prefooter-container {
      background-image: url('https://assistcdn.s3.us-west-1.amazonaws.com/assets/site/home/img/pre_footer_background.svg');
      background-size: cover;
      background-position: center;
    }
    
    /* Accordion Animations */
    .accordion-content {
      transition: grid-template-rows 300ms ease-in-out, opacity 300ms ease-in-out;
      display: grid;
    }
    
    /* Grid rows utilities */
    .grid-rows-\\[0fr\\] {
      grid-template-rows: 0fr;
    }
    
    .grid-rows-\\[1fr\\] {
      grid-template-rows: 1fr;
    }
  </style>
</head>
<body>

<!-- 
  ========================================
  PASO 1: COPIAR HTML AQUÍ
  ========================================
  
  Instrucciones:
  1. Ejecuta: npm run dev
  2. Abre http://localhost:5173 en tu navegador
  3. Inspecciona el elemento <body>
  4. Copia TODO el contenido renderizado dentro del body
  5. Pégalo AQUÍ (reemplazando este comentario)
  
  Debe verse algo así:
  
  <div>
    <div class="w-full max-w-[390px]...">Hero content</div>
    <div class="bg-white w-full...">Sections...</div>
    ...
  </div>
-->

  
  <!-- Accordion Interactive Logic -->
  <script>
    // Data del destino (en caso de necesitarla)
    window.__DESTINATION_DATA__ = ${JSON.stringify({ ...data, destino }, null, 2)};
    
    document.addEventListener('DOMContentLoaded', function() {
      console.log('✅ Inicializando accordions...');
      initAccordions();
    });
    
    function initAccordions() {
      // Buscar todos los botones de accordion por sus atributos data
      const accordionButtons = document.querySelectorAll('[data-accordion-button]');
      
      console.log(\`📌 Encontrados \${accordionButtons.length} accordions\`);
      
      accordionButtons.forEach((button, index) => {
        const item = button.closest('[data-accordion-item]');
        const content = item.querySelector('[data-accordion-content]');
        
        // Estado inicial: primer item de cada grupo abierto
        const group = item.closest('[data-accordion-group]');
        const groupItems = group.querySelectorAll('[data-accordion-item]');
        const itemIndex = Array.from(groupItems).indexOf(item);
        
        if (itemIndex === 0) {
          openAccordionItem(item);
        } else {
          closeAccordionItem(item);
        }
        
        // Click handler
        button.addEventListener('click', function(e) {
          e.preventDefault();
          toggleAccordionItem(item);
        });
      });
    }
    
    function toggleAccordionItem(item) {
      const content = item.querySelector('[data-accordion-content]');
      const isOpen = content.classList.contains('grid-rows-[1fr]');
      
      if (isOpen) {
        closeAccordionItem(item);
      } else {
        openAccordionItem(item);
      }
    }
    
    function openAccordionItem(item) {
      const content = item.querySelector('[data-accordion-content]');
      const iconUp = item.querySelector('[data-icon-up]');
      const iconDown = item.querySelector('[data-icon-down]');
      
      content.classList.remove('grid-rows-[0fr]', 'opacity-0');
      content.classList.add('grid-rows-[1fr]', 'opacity-100');
      
      if (iconUp) iconUp.classList.remove('hidden');
      if (iconDown) iconDown.classList.add('hidden');
      
      item.classList.add('border', 'border-[#c2dfff]');
    }
    
    function closeAccordionItem(item) {
      const content = item.querySelector('[data-accordion-content]');
      const iconUp = item.querySelector('[data-icon-up]');
      const iconDown = item.querySelector('[data-icon-down]');
      
      content.classList.remove('grid-rows-[1fr]', 'opacity-100');
      content.classList.add('grid-rows-[0fr]', 'opacity-0');
      
      if (iconUp) iconUp.classList.add('hidden');
      if (iconDown) iconDown.classList.remove('hidden');
      
      item.classList.remove('border', 'border-[#c2dfff]');
    }
  <\/script>
</body>
</html>`;
}

// Main
async function main() {
  try {
    // Crear carpeta dist si no existe
    const distPath = path.join(__dirname, '..', 'dist');
    if (!fs.existsSync(distPath)) {
      fs.mkdirSync(distPath, { recursive: true });
    }
    
    // Generar templates para cada destino
    for (const [key, destData] of Object.entries(destinations)) {
      console.log(`\n📄 Generando template para: ${destData.destino}...`);
      
      const htmlTemplate = generateHTMLWrapper(destData.destino, key);
      const outputPath = path.join(distPath, `${key}.html`);
      
      fs.writeFileSync(outputPath, htmlTemplate, 'utf-8');
      
      console.log(`✅ Template creado: dist/${key}.html`);
    }
    
    console.log('\n' + '='.repeat(50));
    console.log('\n🎉 ¡Templates generados exitosamente!\n');
    console.log('📋 PRÓXIMOS PASOS:\n');
    console.log('1. Ejecuta en otra terminal: npm run dev');
    console.log('2. Abre http://localhost:5173');
    console.log('3. Inspecciona el HTML renderizado del body');
    console.log('4. Copia TODO el contenido');
    console.log('5. Edita dist/mexico.html y pega donde dice "PASO 1"');
    console.log('6. ¡Listo! Copia dist/mexico.html a Directus\n');
    console.log('='.repeat(50) + '\n');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

main();
