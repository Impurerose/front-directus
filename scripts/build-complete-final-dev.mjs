import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Ensamblando HTML completo (DEV MODE)...\n');

const destino = 'Brasil';

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

      <!-- Plan 2: World cover (sin badge) -->
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

<script>
  // Fetch y renderizado del blog desde WordPress API
  (async function loadBlogPosts() {
    const geo = 'br'; // Brasil
    const blogContainer = document.querySelector('[data-blog-section]');
    
    if (!blogContainer) {
      console.warn('Blog section not found');
      return;
    }
    
    try {
      const url = 'https://assist-365.com/blog/' + geo + '/wp-json/wp/v2/posts?per_page=3';
      const response = await fetch(url);
      
      if (!response.ok) throw new Error('Error fetching posts');
      
      const posts = await response.json();
      
      // Procesar posts
      const processedPosts = posts.map(post => {
        // Buscar thumbnail en schema.@graph
        let thumbnailUrl = '';
        if (post.schema && post.schema['@graph']) {
          const graphItem = post.schema['@graph'].find(
            item => item.thumbnailUrl
          );
          if (graphItem) thumbnailUrl = graphItem.thumbnailUrl;
        }
        
        // Truncar descripción a 100 caracteres
        let description = post.yoast_head_json?.description || '';
        if (description.length > 100) {
          description = description.substring(0, 100) + '...';
        } else if (description.length > 0 && !description.endsWith('...')) {
          description = description + '...';
        }
        
        return {
          title: post.title?.rendered || '',
          description,
          link: post.link || '',
          thumbnailUrl: thumbnailUrl || 'https://placehold.co/328x184'
        };
      });
      
      // Actualizar post principal (imagen grande) - índice 2
      const mainPost = blogContainer.querySelector('[data-blog-main]');
      if (mainPost && processedPosts[2]) {
        const img = mainPost.querySelector('img');
        const title = mainPost.querySelector('[data-blog-title]');
        const desc = mainPost.querySelector('[data-blog-desc]');
        const link = mainPost.querySelector('[data-blog-link]');
        
        if (img) {
          img.src = processedPosts[2].thumbnailUrl;
          img.alt = processedPosts[2].title;
        }
        if (title) title.textContent = processedPosts[2].title;
        if (desc) desc.textContent = processedPosts[2].description;
        if (link) link.href = processedPosts[2].link;
      }
      
      // Actualizar post secundario 1 - índice 1
      const secondaryPost1 = blogContainer.querySelector('[data-blog-secondary-1]');
      if (secondaryPost1 && processedPosts[1]) {
        const title = secondaryPost1.querySelector('[data-blog-title]');
        const desc = secondaryPost1.querySelector('[data-blog-desc]');
        const link = secondaryPost1.querySelector('[data-blog-link]');
        
        if (title) title.textContent = processedPosts[1].title;
        if (desc) desc.textContent = processedPosts[1].description;
        if (link) link.href = processedPosts[1].link;
      }
      
      // Actualizar post secundario 2 - índice 0
      const secondaryPost2 = blogContainer.querySelector('[data-blog-secondary-2]');
      if (secondaryPost2 && processedPosts[0]) {
        const title = secondaryPost2.querySelector('[data-blog-title]');
        const desc = secondaryPost2.querySelector('[data-blog-desc]');
        const link = secondaryPost2.querySelector('[data-blog-link]');
        
        if (title) title.textContent = processedPosts[0].title;
        if (desc) desc.textContent = processedPosts[0].description;
        if (link) link.href = processedPosts[0].link;
      }
      
      // Actualizar botones "Ir al blog"
      const blogLinks = blogContainer.querySelectorAll('[data-blog-cta]');
      const blogUrl = geo === 'br' 
        ? 'https://assist-365.com/blog/br' 
        : 'https://assist-365.com/blog';
      blogLinks.forEach(link => {
        link.href = blogUrl;
      });
      
      console.log('✅ Blog posts loaded successfully');
      
    } catch (error) {
      console.error('❌ Error loading blog posts:', error);
      // Mantener placeholders si falla el fetch
    }
  })();
</script>
</body>
</html>`;

// Leer todas las secciones
const section1 = fs.readFileSync(path.join(__dirname, '..', 'a365', 'brasil-section1.txt'), 'utf-8');
const sectionQuoter = fs.readFileSync(path.join(__dirname, '..', 'a365', 'brasil-section-quoter.txt'), 'utf-8');
const section2 = fs.readFileSync(path.join(__dirname, '..', 'a365', 'brasil-section2.txt'), 'utf-8');
const section3 = fs.readFileSync(path.join(__dirname, '..', 'a365', 'brasil-section3.txt'), 'utf-8');
const section4 = fs.readFileSync(path.join(__dirname, '..', 'a365', 'brasil-section4.txt'), 'utf-8');
const section5 = fs.readFileSync(path.join(__dirname, '..', 'a365', 'brasil-section5.txt'), 'utf-8');
const section6 = fs.readFileSync(path.join(__dirname, '..', 'a365', 'brasil-section6.txt'), 'utf-8');
const section7 = fs.readFileSync(path.join(__dirname, '..', 'a365', 'brasil-section7.txt'), 'utf-8');

// Scripts para montar el Cotizador (LOCAL)
const singleSpaScripts = `
  <!-- SystemJS para cargar módulos -->
  <script src="https://cdn.jsdelivr.net/npm/systemjs@6.14.2/dist/system.min.js"></script>

  <!-- SystemJS Import Map (LOCAL) -->
  <script type="systemjs-importmap">
  {
    "imports": {
      "single-spa": "https://cdn.jsdelivr.net/npm/single-spa@5.9.5/lib/system/single-spa.min.js",
      "react": "https://cdn.jsdelivr.net/npm/react@17.0.2/umd/react.production.min.js",
      "react-dom": "https://cdn.jsdelivr.net/npm/react-dom@17.0.2/umd/react-dom.production.min.js",
      "react-router-dom": "https://cdn.jsdelivr.net/npm/react-router-dom@6.26.2/dist/umd/react-router-dom.production.min.js",
      "@a365/api": "http://localhost:5001/a365-api.js",
      "@a365/authorization-sdk": "http://localhost:4046/a365-authorization-sdk.js",
      "@a365/core": "http://localhost:5049/a365-core.js",
      "@a365/dsys": "http://localhost:5057/a365-dsys.js",
      "@a365/quoter": "http://localhost:5007/a365-quoter.js"
    }
  }
  </script>

  <!-- Overlay del Cotizador -->
  <div id="quoter-overlay" class="fixed inset-0 bg-black/25 z-[98] hidden"></div>

  <!-- Inicializar Cotizador -->
  <script>
    // Funciones globales para controlar el overlay (similar a accordion)
    window.showQuoterOverlay = function() {
      var overlay = document.getElementById('quoter-overlay');
      if (overlay) {
        overlay.classList.remove('hidden');
        console.log('✅ Overlay mostrado');
      }
    };

    window.hideQuoterOverlay = function() {
      var overlay = document.getElementById('quoter-overlay');
      if (overlay) {
        overlay.classList.add('hidden');
        console.log('✅ Overlay ocultado');
      }
    };

    (function() {
      // Configuración de Brasil
      var geoConfig = {
        country_code: 'BR',
        entity_id: '3',
        country_id: '31',
        language: 'pt'
      };

      // Guardar en localStorage
      Object.keys(geoConfig).forEach(function(key) {
        localStorage.setItem(key, geoConfig[key]);
      });

      // Montar cotizador cuando cargue la página
      window.addEventListener('load', function() {
        console.log('🚀 Cargando cotizador para ${destino}... (DEV MODE)');
        console.log('📍 Geo:', geoConfig);
        
        // Cargar todas las dependencias necesarias
        Promise.all([
          System.import('react'),
          System.import('react-dom'),
          System.import('@a365/core'),
          System.import('@a365/dsys'),
          System.import('@a365/quoter')
        ]).then(function(modules) {
          var React = modules[0];
          var ReactDOM = modules[1];
          var quoterModule = modules[4];
          
          console.log('✅ Dependencias cargadas');
          console.log('Quoter module:', quoterModule);
          
          // Obtener el componente Quoter
          var Quoter = quoterModule.Quoter || quoterModule.default;
          var container = document.getElementById('quoter-mount');
          
          if (!container) {
            console.error('❌ No se encontró el contenedor #quoter-mount');
            return;
          }
          
          if (!Quoter) {
            console.error('❌ No se encontró el componente Quoter en el módulo');
            return;
          }
          
          // Estados para el quoter (simulando useState)
          var quoterState = {
            isOpen: false,
            overlay: false,
            openMod: null
          };
          
          // Callbacks para los setters (usando funciones globales)
          var setIsOpen = function(value) {
            quoterState.isOpen = value;
            console.log('setIsOpen:', value);
          };
          
          var setOverlay = function(value) {
            quoterState.overlay = value;
            console.log('setOverlay:', value);
            // Usar funciones globales para controlar overlay
            if (value) {
              window.showQuoterOverlay();
            } else {
              window.hideQuoterOverlay();
            }
          };
          
          var setOpenMod = function(value) {
            quoterState.openMod = value;
            console.log('setOpenMod:', value);
          };
          
          // Configuración del quoter (similar a APP_CONFIGURATION en home)
          var quoterConfig = {
            country_code: 'BR',
            entity_id: '3',
            country_id: '31',
            language: 'pt'
          };
          
          // Función fetchProducts (puede ser vacía por ahora)
          var fetchProducts = function(e) {
            console.log('fetchProducts:', e);
          };
          
          // Props completos para el Quoter
          var quoterProps = {
            fetchProducts: fetchProducts,
            init: quoterConfig,
            mode: 'default',
            isOpen: quoterState.isOpen,
            setIsOpen: setIsOpen,
            setOverlay: setOverlay,
            overlay: quoterState.overlay,
            openMod: quoterState.openMod,
            setOpenMod: setOpenMod,
            visible: true,
            geo: 'BR'
          };
          
          // Montar el componente directamente con ReactDOM
          ReactDOM.render(
            React.createElement(Quoter, quoterProps),
            container
          );
          
          console.log('✅ Cotizador montado correctamente con todos los props (localhost)');
        }).catch(function(err) {
          console.error('❌ Error cargando cotizador:', err);
        });
      });
    })();
  </script>
`;

// Combinar todo (Cotizador va como 2da sección, justo después del Hero)
const completeHTML = section1 + sectionQuoter + section2 + section3 + section4 + section5 + section6 + section7 + section8 + section9 + javascript + singleSpaScripts;

// Guardar archivo completo
fs.writeFileSync(path.join(__dirname, '..', 'a365', 'brasil-dev.html'), completeHTML, 'utf-8');

console.log('✅ Sección Cotizador cargada (posición 2)');
console.log('✅ Sección 8 (Plans) generada');
console.log('✅ Sección 9 (PreFooter) generada');
console.log('✅ JavaScript de accordions incluido');
console.log('✅ Single-SPA scripts incluidos (LOCAL MODE)');
console.log('\n🎉 ¡Archivo completo generado: a365/brasil-dev.html!\n');
console.log('📁 Archivo listo para desarrollo local');
console.log('🔧 Incluye todas las secciones con accordions funcionales');
console.log('🎯 Cotizador integrado con Single-SPA (React 17)');
console.log('🌎 Configurado para Brasil (BR, entity:3, country:31)');
console.log('⚠️  Assets cargados desde ./assets/ (copiar archivos del quoter)');
