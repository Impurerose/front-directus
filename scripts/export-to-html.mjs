import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);

// Usaremos vite para hacer el build y luego extraeremos el HTML
import { build } from 'vite';

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

// Template HTML completo
function getHTMLTemplate(destino, destinationKey) {
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
    
    .grid-rows-0 {
      grid-template-rows: 0fr;
    }
    
    .grid-rows-1 {
      grid-template-rows: 1fr;
    }
  </style>
</head>
<body>
  <div id="root"></div>
  
  <!-- Inline React App Data -->
  <script>
    window.__DESTINATION_DATA__ = ${JSON.stringify({ ...data, destino })};
  <\/script>
  
  <!-- React will render here - placeholder for manual insertion -->
  <!-- NOTA: Después del build, copiar el contenido renderizado aquí -->
  
  <!-- Accordion Interactive Logic -->
  <script>
    document.addEventListener('DOMContentLoaded', function() {
      // Inicializar todos los accordions
      initAccordions();
    });
    
    function initAccordions() {
      // Encontrar todos los grupos de accordion
      const accordionGroups = document.querySelectorAll('[data-accordion-group]');
      
      accordionGroups.forEach((group, groupIndex) => {
        const items = group.querySelectorAll('[data-accordion-item]');
        
        items.forEach((item, itemIndex) => {
          const button = item.querySelector('[data-accordion-button]');
          const content = item.querySelector('[data-accordion-content]');
          const iconUp = item.querySelector('[data-icon-up]');
          const iconDown = item.querySelector('[data-icon-down]');
          
          // Estado inicial: primer item abierto
          if (itemIndex === 0) {
            content.classList.add('grid-rows-[1fr]', 'opacity-100');
            content.classList.remove('grid-rows-[0fr]', 'opacity-0');
            if (iconUp) iconUp.classList.remove('hidden');
            if (iconDown) iconDown.classList.add('hidden');
            item.classList.add('border', 'border-[#c2dfff]');
          } else {
            content.classList.add('grid-rows-[0fr]', 'opacity-0');
            content.classList.remove('grid-rows-[1fr]', 'opacity-100');
            if (iconUp) iconUp.classList.add('hidden');
            if (iconDown) iconDown.classList.remove('hidden');
            item.classList.remove('border', 'border-[#c2dfff]');
          }
          
          // Click handler
          if (button) {
            button.addEventListener('click', function(e) {
              e.preventDefault();
              toggleAccordionItem(item, content, iconUp, iconDown);
            });
          }
        });
      });
    }
    
    function toggleAccordionItem(item, content, iconUp, iconDown) {
      const isOpen = content.classList.contains('grid-rows-[1fr]');
      
      if (isOpen) {
        // Cerrar
        content.classList.remove('grid-rows-[1fr]', 'opacity-100');
        content.classList.add('grid-rows-[0fr]', 'opacity-0');
        if (iconUp) iconUp.classList.add('hidden');
        if (iconDown) iconDown.classList.remove('hidden');
        item.classList.remove('border', 'border-[#c2dfff]');
      } else {
        // Abrir
        content.classList.remove('grid-rows-[0fr]', 'opacity-0');
        content.classList.add('grid-rows-[1fr]', 'opacity-100');
        if (iconUp) iconUp.classList.remove('hidden');
        if (iconDown) iconDown.classList.add('hidden');
        item.classList.add('border', 'border-[#c2dfff]');
      }
    }
  <\/script>
</body>
</html>`;
}

// Función principal de exportación
async function exportToHTML() {
  console.log('🚀 Iniciando exportación a HTML estático...\n');
  
  try {
    // Crear carpeta dist si no existe
    const distPath = path.join(__dirname, '..', 'dist');
    if (!fs.existsSync(distPath)) {
      fs.mkdirSync(distPath, { recursive: true });
    }
    
    // Generar HTML template para cada destino
    for (const [key, destData] of Object.entries(destinations)) {
      console.log(`📄 Generando template HTML para: ${destData.destino}...`);
      
      // Crear HTML template
      const htmlTemplate = getHTMLTemplate(destData.destino, key);
      
      // Guardar archivo
      const outputPath = path.join(distPath, `${key}-template.html`);
      fs.writeFileSync(outputPath, htmlTemplate, 'utf-8');
      
      console.log(`✅ Template generado: dist/${key}-template.html`);
    }
    
    console.log('\n📋 Próximos pasos:');
    console.log('1. Ejecutar: npm run dev');
    console.log('2. Abrir el navegador en http://localhost:5173');
    console.log('3. Inspeccionar elemento y copiar todo el HTML del body');
    console.log('4. Pegar en el template generado reemplazando <div id="root"></div>');
    console.log('\nO mejor aún, vamos a crear un approach más simple...\n');
    
  } catch (error) {
    console.error('❌ Error durante la exportación:', error);
    process.exit(1);
  }
}

// Ejecutar
exportToHTML();
