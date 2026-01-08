import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Ensamblando HTML completo de Requisitos (PRODUCCIÓN)...\n');

const destino = 'Brasil';
const geo = 'br';

// Leer data de requisitos
const dataPath = path.join(__dirname, '..', 'src', 'data', 'requisitos.json');
const { faqItems } = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

// SECCIÓN FAQs
const sectionFaqs = `
<!-- FAQs Section -->
<section class="w-full bg-[#f2f2f2] py-12 lg:py-20">
  <div class="px-4 lg:px-0 mx-auto max-w-[358px] md:max-w-[548px] lg:max-w-[792px]">
    
    <!-- Título -->
    <h2 class="text-center text-[#0059BA] font-semibold text-3xl lg:text-4xl mb-8 lg:mb-12">
      Todo lo que necesitás saber para viajar a ${destino}
    </h2>

    <!-- Accordion FAQs -->
    <div class="flex flex-col gap-4 w-full" data-accordion-group>
${faqItems.map(item => `      <div data-accordion-item class="bg-white p-4 w-full flex flex-col rounded-lg">
        <button data-accordion-button class="flex items-center gap-2 w-full text-left">
          <i class="ph-duotone ph-question text-[#7BD0C2]" style="font-size: 32px;"></i>
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
</section>`;

// SECCIÓN Blog
const sectionBlog = `
<!-- Blog Section -->
<section class="w-full bg-white py-12 lg:py-20" data-blog-section>
  <div class="px-4 lg:px-0 mx-auto max-w-[358px] md:max-w-[548px] lg:max-w-[1200px]">
    
    <!-- Título -->
    <h2 class="text-center text-[#0059BA] font-semibold text-3xl lg:text-4xl mb-8 lg:mb-12">
      Descubrí nuestras últimas guías
    </h2>

    <!-- Grid de 2 columnas -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
      
      <!-- Columna Izquierda: Post Principal -->
      <div class="flex flex-col gap-4" data-blog-main>
        <div class="w-full h-[184px] lg:h-[328px] rounded-xl overflow-hidden bg-gray-200">
          <img src="https://placehold.co/328x184" alt="Blog post" class="w-full h-full object-cover">
        </div>
        <h3 class="text-xl lg:text-2xl font-semibold text-[#0059BA]" data-blog-title>Cargando artículo...</h3>
        <p class="text-sm lg:text-base text-[#70777C]" data-blog-desc>Cargando descripción...</p>
        <a href="#" data-blog-link class="text-[#006FE8] font-semibold text-sm lg:text-base hover:underline inline-flex items-center gap-2">
          Leer más
          <i class="ph ph-arrow-right" style="font-size: 20px;"></i>
        </a>
      </div>

      <!-- Columna Derecha: 2 Posts Secundarios -->
      <div class="flex flex-col gap-6">
        
        <!-- Post Secundario 1 -->
        <div class="flex flex-col gap-3" data-blog-secondary-1>
          <h3 class="text-lg lg:text-xl font-semibold text-[#0059BA]" data-blog-title>Cargando artículo...</h3>
          <p class="text-sm text-[#70777C]" data-blog-desc>Cargando descripción...</p>
          <a href="#" data-blog-link class="text-[#006FE8] font-semibold text-sm hover:underline inline-flex items-center gap-2">
            Leer más
            <i class="ph ph-arrow-right" style="font-size: 20px;"></i>
          </a>
        </div>

        <div class="border-t border-gray-200"></div>

        <!-- Post Secundario 2 -->
        <div class="flex flex-col gap-3" data-blog-secondary-2>
          <h3 class="text-lg lg:text-xl font-semibold text-[#0059BA]" data-blog-title>Cargando artículo...</h3>
          <p class="text-sm text-[#70777C]" data-blog-desc>Cargando descripción...</p>
          <a href="#" data-blog-link class="text-[#006FE8] font-semibold text-sm hover:underline inline-flex items-center gap-2">
            Leer más
            <i class="ph ph-arrow-right" style="font-size: 20px;"></i>
          </a>
        </div>

      </div>

    </div>

    <!-- CTA: Ir al blog -->
    <div class="mt-8 lg:mt-12 text-center">
      <a href="https://assist-365.com/blog/${geo}" data-blog-cta class="inline-flex items-center gap-2 px-6 py-3 bg-[#006FE8] text-white font-semibold rounded-xl hover:bg-[#0059BA] transition-colors">
        Ver todas las guías
        <i class="ph ph-arrow-right" style="font-size: 20px;"></i>
      </a>
    </div>

  </div>
</section>`;

// SECCIÓN PreFooter
const sectionPreFooter = `
<!-- PreFooter Section -->
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

// JavaScript para Accordions y Blog
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
    const geo = '${geo}';
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
        let thumbnailUrl = '';
        if (post.schema && post.schema['@graph']) {
          const graphItem = post.schema['@graph'].find(item => item.thumbnailUrl);
          if (graphItem) thumbnailUrl = graphItem.thumbnailUrl;
        }
        
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
      
      // Actualizar post principal (índice 2)
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
      
      // Actualizar post secundario 1 (índice 1)
      const secondaryPost1 = blogContainer.querySelector('[data-blog-secondary-1]');
      if (secondaryPost1 && processedPosts[1]) {
        const title = secondaryPost1.querySelector('[data-blog-title]');
        const desc = secondaryPost1.querySelector('[data-blog-desc]');
        const link = secondaryPost1.querySelector('[data-blog-link]');
        
        if (title) title.textContent = processedPosts[1].title;
        if (desc) desc.textContent = processedPosts[1].description;
        if (link) link.href = processedPosts[1].link;
      }
      
      // Actualizar post secundario 2 (índice 0)
      const secondaryPost2 = blogContainer.querySelector('[data-blog-secondary-2]');
      if (secondaryPost2 && processedPosts[0]) {
        const title = secondaryPost2.querySelector('[data-blog-title]');
        const desc = secondaryPost2.querySelector('[data-blog-desc]');
        const link = secondaryPost2.querySelector('[data-blog-link]');
        
        if (title) title.textContent = processedPosts[0].title;
        if (desc) desc.textContent = processedPosts[0].description;
        if (link) link.href = processedPosts[0].link;
      }
      
      console.log('✅ Blog posts loaded successfully');
      
    } catch (error) {
      console.error('❌ Error loading blog posts:', error);
    }
  })();
</script>
</body>
</html>`;

// Scripts Single-SPA para montar el Cotizador (PRODUCCIÓN)
const singleSpaScripts = `
  <!-- SystemJS para cargar módulos -->
  <script src="https://cdn.jsdelivr.net/npm/systemjs@6.14.2/dist/system.min.js"></script>

  <!-- SystemJS Import Map -->
  <script type="systemjs-importmap">
  {
    "imports": {
      "single-spa": "https://cdn.jsdelivr.net/npm/single-spa@5.9.5/lib/system/single-spa.min.js",
      "react": "https://cdn.jsdelivr.net/npm/react@17.0.2/umd/react.production.min.js",
      "react-dom": "https://cdn.jsdelivr.net/npm/react-dom@17.0.2/umd/react-dom.production.min.js",
      "react-router-dom": "https://cdn.jsdelivr.net/npm/react-router-dom@6.26.2/dist/umd/react-router-dom.production.min.js",
      "@a365/api": "https://assist-365.com/api/a365-api.js?v=101",
      "@a365/authorization-sdk": "https://assist-365.com/modules/authorization-sdk/a365-authorization-sdk.js?v=101",
      "@a365/core": "https://assist-365.com/core/a365-core.js?v=101",
      "@a365/dsys": "https://assist-365.com/dsys/a365-dsys.js?v=101",
      "@a365/quoter": "https://assist-365.com/quoter/a365-quoter.js?v=101"
    }
  }
  </script>

  <!-- Overlay del Cotizador -->
  <div id="quoter-overlay" class="fixed inset-0 bg-black/25 z-[98] hidden"></div>

  <!-- Inicializar Cotizador -->
  <script>
    window.showQuoterOverlay = function() {
      var overlay = document.getElementById('quoter-overlay');
      if (overlay) overlay.classList.remove('hidden');
    };

    window.hideQuoterOverlay = function() {
      var overlay = document.getElementById('quoter-overlay');
      if (overlay) overlay.classList.add('hidden');
    };

    (function() {
      var geoConfig = {
        country_code: 'BR',
        entity_id: '3',
        country_id: '31',
        language: 'pt'
      };

      Object.keys(geoConfig).forEach(function(key) {
        localStorage.setItem(key, geoConfig[key]);
      });

      window.addEventListener('load', function() {
        console.log('🚀 Cargando cotizador para ${destino}...');
        
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
          
          var Quoter = quoterModule.Quoter || quoterModule.default;
          var container = document.getElementById('quoter-mount');
          
          if (!container || !Quoter) {
            console.error('❌ Error: contenedor o componente no encontrado');
            return;
          }
          
          var quoterState = {
            isOpen: false,
            overlay: false,
            openMod: null
          };
          
          var setIsOpen = function(value) {
            quoterState.isOpen = value;
          };
          
          var setOverlay = function(value) {
            quoterState.overlay = value;
            if (value) {
              window.showQuoterOverlay();
            } else {
              window.hideQuoterOverlay();
            }
          };
          
          var setOpenMod = function(value) {
            quoterState.openMod = value;
          };
          
          var quoterProps = {
            fetchProducts: function(e) { console.log('fetchProducts:', e); },
            init: geoConfig,
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
          
          ReactDOM.render(
            React.createElement(Quoter, quoterProps),
            container
          );
          
          console.log('✅ Cotizador montado correctamente');
        }).catch(function(err) {
          console.error('❌ Error cargando cotizador:', err);
        });
      });
    })();
  </script>
`;

// Leer secciones
const section1 = fs.readFileSync(path.join(__dirname, '..', 'a365', 'requisitos-section1.txt'), 'utf-8');
const sectionQuoter = fs.readFileSync(path.join(__dirname, '..', 'a365', 'brasil-section-quoter.txt'), 'utf-8');
const section2 = fs.readFileSync(path.join(__dirname, '..', 'a365', 'requisitos-section2.txt'), 'utf-8');
const section3 = fs.readFileSync(path.join(__dirname, '..', 'a365', 'requisitos-section3.txt'), 'utf-8');

// Combinar todo (orden: Hero → Quoter → ImageText → Accordions → FAQs → Blog → PreFooter)
const completeHTML = section1 + sectionQuoter + section2 + section3 + sectionFaqs + sectionBlog + sectionPreFooter + javascript + singleSpaScripts;

// Guardar archivo completo
fs.writeFileSync(path.join(__dirname, '..', 'a365', 'requisitos.html'), completeHTML, 'utf-8');

console.log('✅ Sección FAQs generada');
console.log('✅ Sección Blog generada');
console.log('✅ Sección PreFooter generada');
console.log('✅ JavaScript de accordions y blog incluido');
console.log('✅ Single-SPA scripts incluidos (PRODUCCIÓN)');
console.log('\n🎉 ¡Archivo completo generado: a365/requisitos.html!\n');
console.log('📁 Archivo listo para producción');
console.log('🔧 Estructura: Hero → Quoter(bg-alt-secondary) → 4xImageText → 2xAccordion → FAQs → Blog → PreFooter');
console.log('🎯 Cotizador integrado con Single-SPA (React 17)');
console.log('🌎 Configurado para Brasil (BR)');
