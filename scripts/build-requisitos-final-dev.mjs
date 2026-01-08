import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Ensamblando HTML completo de Requisitos (DEV MODE)...\n');

const destino = 'Brasil';
const geo = 'br';

// Leer data de requisitos
const dataPath = path.join(__dirname, '..', 'src', 'data', 'requisitos.json');
const { faqItems } = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

// SECCIÓN FAQs con background shape lila
const sectionFaqs = `
<!-- FAQs Section -->
<div class="relative w-full z-50 px-4 md:px-0 pb-12 2xl:pb-0 2xl:h-[520px] my-12 2xl:my-28">
  
  <!-- Background Shape -->
  <div 
    class="absolute w-full h-[646px] right-0 top-0 z-[1] mt-32 2xl:mt-0"
    style="background-image: url(https://assistcdn.s3.us-west-1.amazonaws.com/assets/site/home/img/faq_background.svg); background-repeat: no-repeat; background-position: top right;"
  ></div>

  <!-- Content -->
  <div class="w-full mx-auto max-w-[390px] md:max-w-[548px] 2xl:max-w-[1366px] relative z-10">
    <div class="flex flex-col 2xl:flex-row items-center 2xl:items-start justify-between mx-auto max-w-[1200px] w-full">
      
      <!-- Left Column - Title -->
      <div class="flex flex-col items-start justify-start md:max-w-[548px] 2xl:max-w-full md:mt-12 lg:mt-0">
        <i class="ph-duotone ph-info text-[#7BD0C2]" style="font-size: 48px;"></i>
        <h2 class="text-[29px] pb-6 leading-9 2xl:text-4xl font-semibold text-[#0059ba] 2xl:max-w-[384px] sm:max-w-full mt-6 2xl:mt-8">
          Todo lo que necesitás saber para viajar a ${destino}
        </h2>
      </div>

      <!-- Right Column - FAQs -->
      <div class="w-full md:max-w-[548px] max-w-[690px] 2xl:min-w-[690px] mt-2 2xl:mt-0">
        <div class="flex flex-col gap-4" data-accordion-group>
${faqItems.map(item => `          <div data-accordion-item class="p-4 w-full flex flex-col gap-2 rounded-lg transition-all bg-[#f2f2f2]">
            <button data-accordion-button class="flex items-center justify-between gap-2 w-full text-left">
              <p class="flex-1 text-base font-semibold leading-6 text-[#31363a]">${item.title}</p>
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
  </div>
</div>
`;

// SECCIÓN Blog con layout complejo bg-[#CFF6FF]
const sectionBlog = `
<!-- Blog Section -->
<div class="w-full flex items-center justify-center py-16" data-blog-section>
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
        <a href="#" data-blog-cta class="hidden 2xl:flex items-center justify-center gap-2 px-4 py-[10px] bg-[#006FE8] text-white font-semibold rounded-xl hover:bg-[#0059BA] transition-colors text-lg h-[48px]">
          Ir al blog
          <i class="ph ph-arrow-right" style="font-size: 16px; font-weight: bold;"></i>
        </a>
      </div>

      <!-- Right section - Blog cards -->
      <div class="flex flex-col 2xl:flex-row gap-4 flex-1">
        
        <!-- Primary card - First post (blogPosts[2]) -->
        <div class="bg-white rounded-xl p-6 flex flex-col gap-6 2xl:max-w-[376px] flex-1" data-blog-main>
          <div class="w-full h-[184px] overflow-hidden rounded-lg">
            <img src="https://placehold.co/328x184" alt="Blog" class="w-full h-full object-cover">
          </div>
          <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-1">
              <h3 class="text-xl font-semibold text-[#31363A]" data-blog-title>Cargando artículo...</h3>
              <p class="text-base text-[#70777C] leading-6" data-blog-desc>Cargando descripción...</p>
            </div>
            <a href="#" data-blog-link class="inline-flex items-center gap-2 px-4 py-2 bg-[#F2F2F2] text-[#31363A] font-semibold rounded-xl hover:bg-[#E7F2FF] transition-colors w-fit text-sm">
              Leer más
              <i class="ph ph-arrow-right" style="font-size: 16px; font-weight: bold;"></i>
            </a>
          </div>
        </div>

        <!-- Secondary cards container -->
        <div class="flex flex-col gap-4 2xl:w-[440px]">
          
          <!-- Secondary card 2 (blogPosts[1]) with AirplaneTilt icon -->
          <div class="bg-white border border-[#E7F2FF] rounded-xl p-6 flex gap-6" data-blog-secondary-1>
            <div class="flex-shrink-0">
              <i class="ph ph-airplane-tilt text-[#7BD0C2]" style="font-size: 40px;"></i>
            </div>
            <div class="flex flex-col gap-4">
              <div class="flex flex-col gap-1">
                <h3 class="text-xl font-semibold text-[#31363A]" data-blog-title>Cargando artículo...</h3>
                <p class="text-base text-[#70777C] leading-6" data-blog-desc>Cargando descripción...</p>
              </div>
              <a href="#" data-blog-link class="inline-flex items-center gap-2 px-4 py-2 bg-[#F2F2F2] text-[#31363A] font-semibold rounded-xl hover:bg-[#E7F2FF] transition-colors w-fit text-sm">
                Leer más
                <i class="ph ph-arrow-right" style="font-size: 16px; font-weight: bold;"></i>
              </a>
            </div>
          </div>

          <!-- Secondary card 3 (blogPosts[0]) with Mountains icon -->
          <div class="bg-white border border-[#E7F2FF] rounded-xl p-6 flex gap-6" data-blog-secondary-2>
            <div class="flex-shrink-0">
              <i class="ph ph-mountains text-[#7BD0C2]" style="font-size: 40px;"></i>
            </div>
            <div class="flex flex-col gap-4">
              <div class="flex flex-col gap-1">
                <h3 class="text-xl font-semibold text-[#31363A]" data-blog-title>Cargando artículo...</h3>
                <p class="text-base text-[#70777C] leading-6" data-blog-desc>Cargando descripción...</p>
              </div>
              <a href="#" data-blog-link class="inline-flex items-center gap-2 px-4 py-2 bg-[#F2F2F2] text-[#31363A] font-semibold rounded-xl hover:bg-[#E7F2FF] transition-colors w-fit text-sm">
                Leer más
                <i class="ph ph-arrow-right" style="font-size: 16px; font-weight: bold;"></i>
              </a>
            </div>
          </div>

        </div>
      </div>

      <!-- Mobile CTA button -->
      <a href="#" data-blog-cta class="2xl:hidden inline-flex items-center justify-center gap-2 px-4 py-[10px] bg-[#006FE8] text-white font-semibold rounded-xl hover:bg-[#0059BA] transition-colors text-lg h-[48px] w-full">
        Ir al blog
        <i class="ph ph-arrow-right" style="font-size: 16px; font-weight: bold;"></i>
      </a>

    </div>
  </div>
</div>
`;

// SECCIÓN PreFooter (igual que producción)
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

// JavaScript (igual que producción, pero con localhost para blog)
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
  // Fetch desde API de producción
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
      
      // Actualizar posts secundarios
      const secondaryPost1 = blogContainer.querySelector('[data-blog-secondary-1]');
      if (secondaryPost1 && processedPosts[1]) {
        const title = secondaryPost1.querySelector('[data-blog-title]');
        const desc = secondaryPost1.querySelector('[data-blog-desc]');
        const link = secondaryPost1.querySelector('[data-blog-link]');
        
        if (title) title.textContent = processedPosts[1].title;
        if (desc) desc.textContent = processedPosts[1].description;
        if (link) link.href = processedPosts[1].link;
      }
      
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

// Scripts Single-SPA para DESARROLLO (localhost)
const singleSpaScripts = `
  <!-- SystemJS para cargar módulos -->
  <script src="https://cdn.jsdelivr.net/npm/systemjs@6.14.2/dist/system.min.js"></script>

  <!-- SystemJS Import Map (LOCALHOST) -->
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
        console.log('🚀 Cargando cotizador para ${destino} (DEV MODE)...');
        
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
          
          console.log('✅ Cotizador montado correctamente (DEV)');
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

// Combinar todo
const completeHTML = section1 + sectionQuoter + section2 + section3 + sectionFaqs + sectionBlog + sectionPreFooter + javascript + singleSpaScripts;

// Guardar archivo completo
fs.writeFileSync(path.join(__dirname, '..', 'a365', 'requisitos-dev.html'), completeHTML, 'utf-8');

console.log('✅ Sección FAQs generada');
console.log('✅ Sección Blog generada');
console.log('✅ Sección PreFooter generada');
console.log('✅ JavaScript de accordions y blog incluido');
console.log('✅ Single-SPA scripts incluidos (DESARROLLO - localhost)');
console.log('\n🎉 ¡Archivo completo generado: a365/requisitos-dev.html!\n');
console.log('📁 Archivo listo para desarrollo local');
console.log('🔧 URLs localhost: quoter(5006), api(5001), core(5003), dsys(5057)');
console.log('🌎 Configurado para Brasil (BR)');
console.log('\n📝 Para probar:');
console.log('   cd /home/impurerose/dev/directus/a365');
console.log('   python3 -m http.server 8080');
console.log('   Abrir: http://localhost:8080/requisitos-dev.html');
