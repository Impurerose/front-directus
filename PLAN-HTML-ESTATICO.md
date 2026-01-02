# Plan: Conversión de App.jsx a HTML Estático para Directus

**Fecha:** 2 de enero de 2026  
**Archivo destino:** `directus-static.html`  
**Objetivo:** Convertir toda la aplicación React en un archivo HTML estático único, funcional y listo para usar en Directus.

---

## 📋 Resumen Ejecutivo

Crear un archivo HTML autónomo que replique exactamente la funcionalidad y apariencia de `App.jsx` y todos sus componentes, con:
- ✅ Tailwind CSS vía CDN
- ✅ Phosphor Icons vía CDN
- ✅ JavaScript vanilla para interactividad (accordions)
- ✅ Data completamente hardcodeada
- ✅ Sin dependencias de build tools
- ✅ Listo para copiar y pegar en Directus

---

## 🏗️ Estructura del Archivo

### 1. **HEAD Section**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Seguro de viaje a [Destino] - Assist 365</title>
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- Phosphor Icons CDN -->
  <script src="https://unpkg.com/@phosphor-icons/web"></script>
  
  <!-- Configuración Tailwind personalizada -->
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
  </script>
  
  <!-- Estilos personalizados inline -->
  <style>
    /* Animaciones de accordion */
    /* Background de PreFooter */
    /* Transiciones suaves */
  </style>
</head>
```

---

### 2. **BODY Section - Componentes en orden**

#### **Componente 1: HeroLandings**
- **Propósito:** Hero principal con imagen de fondo responsive
- **Elementos:**
  - Container: `max-w-[390px] md:max-w-[834px] 2xl:max-w-[1366px]`
  - Background images responsive (Mobile/Tablet/Desktop)
  - Título: "Seguro de viaje a **[Destino]**"
- **Imágenes:**
  - Mobile: `HeaderLandingIndividualMobile.svg`
  - Tablet: `HeaderLandingIndividualTablet.svg`
  - Desktop: `HeaderLandingIndividualDesktop.svg`

```html
<div class="w-full max-w-[390px] md:max-w-[834px] 2xl:max-w-[1366px] mx-auto min-h-[400px] bg-sky-200">
  <!-- Hero content -->
</div>
```

---

#### **Componente 2: SectionImageText #1**
- **Props:**
  - title: "¿Qué necesito para viajar a [Destino]?"
  - titleSize: "large" (text-5xl)
  - reverse: false
  - imageSrc: "https://placehold.co/486x360"
  - description: Lorem ipsum... (texto completo)

```html
<div class="bg-white w-full py-9 2xl:py-16 pt-12 pb-12 2xl:pb-20">
  <!-- Flex container con imagen y texto -->
</div>
```

---

#### **Componente 3: SectionAccordion #1**
- **Props:**
  - title: "Documentos necesarios para ingresar a [Destino]"
  - items: 4 accordion items
- **Data hardcodeada:**
  ```javascript
  const accordionItems = [
    {
      title: "Item requisito",
      content: "Lorem ipsum dolor sit amet..."
    },
    // ... 3 más
  ]
  ```
- **Funcionalidad JavaScript:**
  - Estado inicial: primer item abierto (index 0)
  - Click toggle: abrir/cerrar item
  - Animación: grid-rows-[1fr] / grid-rows-[0fr]
  - Icono dinámico: CaretUp / CaretDown
  - Border azul cuando abierto
- **Iconos:**
  - Files (duotone, #7BD0C2, size 32)
  - CaretUp / CaretDown (#006fe8, size 20)

```html
<div class="bg-[#f2f2f2] w-full py-8 2xl:py-16 px-4 2xl:px-[185px]">
  <!-- Accordion items -->
</div>
```

---

#### **Componente 4: SectionImageText #2**
- **Props:**
  - title: "¿Es obligatorio el seguro de viaje para [Destino]?"
  - reverse: true
  - imageSrc: "https://placehold.co/256x256"

---

#### **Componente 5: SectionImageText #3**
- **Props:**
  - title: "¿Necesitas Visa para ingresar a [Destino]?"
  - reverse: false
  - imageSrc: "https://placehold.co/256x256"

---

#### **Componente 6: SectionImageText #4**
- **Props:**
  - title: "¿Qué vacunas son obligatorias para viajar a [Destino]?"
  - reverse: true
  - imageSrc: "https://placehold.co/256x256"

---

#### **Componente 7: SectionAccordion #2**
- **Props:**
  - title: "¿Qué debes saber de las aduanas y artículos prohibidos para viajar a [Destino]?"
  - items: 4 accordion items (misma data)
- **Funcionalidad:** Idéntica al accordion #1, pero estado independiente

---

#### **Componente 8: SectionFaqs**
- **Props:**
  - title: "Todo lo que necesitás saber para viajar a [Destino]"
  - items: 5 FAQ items
- **Data hardcodeada:**
  ```javascript
  const faqItems = [
    {
      title: "Pregunta frecuente destino",
      content: "Lorem ipsum dolor sit amet..."
    },
    // ... 4 más
  ]
  ```
- **Layout:**
  - Background decorativo: `faq_background.svg`
  - Icono Info (duotone, #7BD0C2, size 48)
  - Flex column en mobile, row en desktop
  - Título a la izquierda, FAQs a la derecha
- **Funcionalidad:** Similar a SectionAccordion pero con diseño diferente

```html
<div class="relative w-full z-50 px-4 md:px-0 pb-12 2xl:pb-0 2xl:h-[520px] my-12 2xl:my-28">
  <!-- Background shape -->
  <!-- Content con título y FAQs -->
</div>
```

---

#### **Componente 9: SectionBlog**
- **Data hardcodeada:**
  ```javascript
  const blogPosts = [
    {
      id: 1,
      title: "Última entrada del blog",
      description: "Lorem ipsum...",
      image: "https://placehold.co/328x184",
      variant: "primary"
    },
    {
      id: 2,
      title: "Entrada del blog 2",
      description: "Lorem ipsum...",
      icon: "AirplaneTilt", // Phosphor icon
      variant: "secondary"
    },
    {
      id: 3,
      title: "Entrada del blog 3",
      description: "Lorem ipsum...",
      icon: "Mountains",
      variant: "secondary"
    }
  ]
  ```
- **Layout:**
  - Background: `#CFF6FF`
  - Título + CTA a la izquierda
  - 3 cards a la derecha (1 primary con imagen, 2 secondary con iconos)
  - Botón "Ir al blog" (desktop) / "Leer más" (mobile)

```html
<div class="w-full flex items-center justify-center py-16">
  <div class="bg-[#CFF6FF] rounded-3xl p-6 2xl:p-12">
    <!-- Blog cards -->
  </div>
</div>
```

---

#### **Componente 10: SectionCards**
- **Data hardcodeada:**
  ```javascript
  const coverageItems = [
    { Icon: "FirstAid", title: "Asistencia médica" },
    { Icon: "Heartbeat", title: "Enfermedades preexistentes" },
    { Icon: "Suitcase", title: "Pérdida de equipaje" },
    { Icon: "Pill", title: "Medicamentos" },
    { Icon: "Stethoscope", title: "Médico online 24hs" },
    { Icon: "GlobeHemisphereWest", title: "Cobertura mundial" },
    { Icon: "Tooth", title: "Odontología" },
    { Icon: "Hospital", title: "Internaciones" }
  ]
  ```
- **Layout:**
  - Background: `#F2F2F2`
  - Título: "¿Qué debe incluir tu seguro de viaje para [Destino]?"
  - Grid 2x4: `grid-cols-2 lg:grid-cols-4`
  - Cards blancas con border `#E7F2FF`
  - Iconos duotone #7BD0C2, size 40

```html
<section class="w-full bg-[#F2F2F2] py-8 pb-12 lg:py-16">
  <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
    <!-- 8 coverage cards -->
  </div>
</section>
```

---

#### **Componente 11: SectionRequirements**
- **Data hardcodeada:**
  ```javascript
  const requirements = [
    {
      Icon: "Laptop",
      title: "Requisito 1",
      description: "Lorem ipsum dolor sit amet..."
    },
    { Icon: "HandHeart", title: "Requisito 2", description: "..." },
    { Icon: "SuitcaseRolling", title: "Requisito 3", description: "..." },
    { Icon: "PawPrint", title: "Requisito 4", description: "..." }
  ]
  ```
- **Layout:**
  - Background: `#F2F2F2`
  - Título: "Requisitos para viajar a [Destino]"
  - Grid 2x2: `grid-cols-1 lg:grid-cols-2`
  - Botón CTA: "Ver todos los requisitos"
  - Iconos duotone #31319B, size 40

```html
<section class="w-full bg-[#F2F2F2] py-8 lg:py-16">
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <!-- 4 requirement cards -->
  </div>
</section>
```

---

#### **Componente 12: SectionPlans**
- **Data hardcodeada:**
  ```javascript
  const plans = [
    {
      id: 1,
      name: "World cover",
      color: "#0059BA",
      badge: null,
      features: [
        {
          icon: "ShieldPlus",
          amount: "USD 200.000",
          description: "de Asistencia medica"
        },
        {
          icon: "FirstAidKit",
          amount: "USD 10.000",
          description: "de Asistencia por enfermedad preexistente"
        },
        {
          icon: "SuitcaseRolling",
          amount: "USD 1.000",
          description: "por pérdida de equipaje"
        }
      ]
    },
    {
      id: 2,
      name: "Premium cover",
      color: "#31319B",
      badge: { text: "El más elegido", bgColor: "#D3EFD4" },
      features: [...]
    },
    {
      id: 3,
      name: "World cover",
      color: "#0059BA",
      badge: null,
      features: [...]
    },
    {
      id: 4,
      name: "World cover",
      color: "#31319B",
      badge: { text: "Plan recomendado", bgColor: "#CFF6FF" },
      features: [...]
    }
  ]
  ```
- **Layout:**
  - Background: `#E3DEF9`
  - Título: "Nuestros planes para viajar a [Destino]"
  - Grid 4 columnas: `grid-cols-1 md:grid-cols-2 lg:grid-cols-4`
  - Badges absolutos en -top-5
  - Header con color dinámico
  - Body con features (iconos #7BD0C2)

```html
<section class="w-full bg-[#E3DEF9] py-12 lg:py-20">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    <!-- 4 plan cards -->
  </div>
</section>
```

---

#### **Componente 13: PreFooter**
- **Layout:**
  - Background image con clase CSS personalizada
  - Altura: 340px
  - Card blanca con opacity-85
  - Logo + Título + Botón CTA
  - Botón: "Cotizá tu asistencia"
- **CSS personalizado:**
  ```css
  .prefooter-container {
    background-image: url('https://assistcdn.s3.us-west-1.amazonaws.com/assets/site/home/img/pre_footer_background.svg');
    background-size: cover;
    background-position: center;
  }
  ```

```html
<div class="w-full flex justify-center">
  <div class="prefooter-container h-[340px]">
    <div class="bg-white bg-opacity-85 rounded-3xl">
      <!-- Logo, título, CTA -->
    </div>
  </div>
</div>
```

---

## 🎯 Funcionalidad JavaScript

### **Accordion Toggle (para SectionAccordion y SectionFaqs)**

```javascript
<script>
  // Estado de accordions
  let accordion1State = 0; // Primer accordion
  let accordion2State = 0; // Segundo accordion
  let faqState = 0;        // FAQs

  // Función toggle genérica
  function toggleAccordion(accordionGroup, index) {
    const items = document.querySelectorAll(`[data-accordion="${accordionGroup}"]`);
    
    items.forEach((item, i) => {
      const content = item.querySelector('.accordion-content');
      const iconUp = item.querySelector('.icon-up');
      const iconDown = item.querySelector('.icon-down');
      const container = item;
      
      if (i === index) {
        // Toggle item actual
        const isOpen = content.classList.contains('grid-rows-[1fr]');
        
        if (isOpen) {
          // Cerrar
          content.classList.remove('grid-rows-[1fr]', 'opacity-100');
          content.classList.add('grid-rows-[0fr]', 'opacity-0');
          iconUp.classList.add('hidden');
          iconDown.classList.remove('hidden');
          container.classList.remove('border', 'border-[#c2dfff]');
        } else {
          // Abrir
          content.classList.remove('grid-rows-[0fr]', 'opacity-0');
          content.classList.add('grid-rows-[1fr]', 'opacity-100');
          iconUp.classList.remove('hidden');
          iconDown.classList.add('hidden');
          container.classList.add('border', 'border-[#c2dfff]');
        }
      } else {
        // Cerrar otros items (opcional)
        // content.classList.remove('grid-rows-[1fr]', 'opacity-100');
        // content.classList.add('grid-rows-[0fr]', 'opacity-0');
      }
    });
  }

  // Event listeners al cargar página
  document.addEventListener('DOMContentLoaded', function() {
    // Accordion 1
    const accordion1Buttons = document.querySelectorAll('[data-accordion="accordion1"] button');
    accordion1Buttons.forEach((btn, index) => {
      btn.addEventListener('click', () => toggleAccordion('accordion1', index));
    });

    // Accordion 2
    const accordion2Buttons = document.querySelectorAll('[data-accordion="accordion2"] button');
    accordion2Buttons.forEach((btn, index) => {
      btn.addEventListener('click', () => toggleAccordion('accordion2', index));
    });

    // FAQs
    const faqButtons = document.querySelectorAll('[data-accordion="faqs"] button');
    faqButtons.forEach((btn, index) => {
      btn.addEventListener('click', () => toggleAccordion('faqs', index));
    });
  });
</script>
```

---

## 📦 Recursos Externos (CDN)

### **1. Tailwind CSS**
```html
<script src="https://cdn.tailwindcss.com"></script>
```

### **2. Phosphor Icons**
```html
<script src="https://unpkg.com/@phosphor-icons/web"></script>
```

**Uso:**
```html
<i class="ph-duotone ph-files" style="color: #7BD0C2; font-size: 32px;"></i>
<i class="ph ph-caret-up" style="color: #006fe8; font-size: 20px;"></i>
<i class="ph ph-caret-down" style="color: #006fe8; font-size: 20px;"></i>
```

### **3. Imágenes de Assist365**
Todas desde S3:
- Hero backgrounds: `https://assistcdn.s3.us-west-1.amazonaws.com/temporal/Header*.svg`
- FAQ background: `https://assistcdn.s3.us-west-1.amazonaws.com/assets/site/home/img/faq_background.svg`
- PreFooter background: `https://assistcdn.s3.us-west-1.amazonaws.com/assets/site/home/img/pre_footer_background.svg`
- Logo: `https://assistcdn.s3.us-west-1.amazonaws.com/assets/site/logo.svg`
- Placeholders: `https://placehold.co/{width}x{height}`

---

## 🎨 Iconos Phosphor Necesarios

| Icono | Uso | Color | Size | Weight |
|-------|-----|-------|------|--------|
| `ph-files` | SectionAccordion | #7BD0C2 | 32 | duotone |
| `ph-caret-up` | Accordion abierto | #006fe8 | 20 | regular |
| `ph-caret-down` | Accordion cerrado | #006fe8 | 20 | regular |
| `ph-info` | SectionFaqs | #7BD0C2 | 48 | duotone |
| `ph-airplane-tilt` | SectionBlog | #7BD0C2 | 40 | regular |
| `ph-mountains` | SectionBlog | #7BD0C2 | 40 | regular |
| `ph-arrow-right` | Botones CTA | varies | 16-20 | bold |
| `ph-first-aid` | SectionCards | #7BD0C2 | 40 | duotone |
| `ph-heartbeat` | SectionCards | #7BD0C2 | 40 | duotone |
| `ph-suitcase` | SectionCards | #7BD0C2 | 40 | duotone |
| `ph-pill` | SectionCards | #7BD0C2 | 40 | duotone |
| `ph-stethoscope` | SectionCards | #7BD0C2 | 40 | duotone |
| `ph-globe-hemisphere-west` | SectionCards | #7BD0C2 | 40 | duotone |
| `ph-tooth` | SectionCards | #7BD0C2 | 40 | duotone |
| `ph-hospital` | SectionCards | #7BD0C2 | 40 | duotone |
| `ph-laptop` | SectionRequirements | #31319B | 40 | duotone |
| `ph-hand-heart` | SectionRequirements | #31319B | 40 | duotone |
| `ph-suitcase-rolling` | SectionRequirements/Plans | #31319B/#7BD0C2 | 40/24 | duotone/regular |
| `ph-paw-print` | SectionRequirements | #31319B | 40 | duotone |
| `ph-shield-plus` | SectionPlans | #7BD0C2 | 24 | regular |
| `ph-first-aid-kit` | SectionPlans | #7BD0C2 | 24 | regular |

---

## 🎨 Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| Primary Blue | `#006FE8` | Botones primarios |
| Dark Blue | `#0059BA` | Títulos, hover states |
| Darker Blue | `#004A9C` | Active states |
| Purple | `#31319B` | Plan headers, iconos requirements |
| Teal | `#7BD0C2` | Iconos principales |
| Light Blue | `#C2DFFF` | Focus rings, borders |
| Light Cyan | `#CFF6FF` | Blog background, badges |
| Light Gray | `#F2F2F2` | Section backgrounds |
| Border Blue | `#E7F2FF` | Card borders |
| Text Dark | `#31363A` | Títulos secundarios |
| Text Gray | `#70777C` | Descripciomes |
| Disabled Gray | `#C8C9CB` | Botones disabled |
| Light Purple | `#E3DEF9` | Plans background |
| Green | `#D3EFD4` | Badge "El más elegido" |

---

## 📱 Breakpoints Responsive

```javascript
// Tailwind config personalizada
screens: {
  'sm': '640px',   // mobile
  'md': '768px',   // tablet (834px)
  'lg': '1024px',  // desktop
  'xl': '1280px',  // large desktop
  '2xl': '1440px'  // extra large (1366px)
}
```

### **Anchos máximos por breakpoint:**
- Mobile: `max-w-[390px]`
- Tablet: `md:max-w-[548px]` o `md:max-w-[834px]`
- Desktop: `2xl:max-w-[1366px]` o `2xl:max-w-[1296px]`

---

## ✅ Checklist de Implementación

### **HTML Structure:**
- [ ] DOCTYPE y meta tags
- [ ] CDN scripts (Tailwind + Phosphor)
- [ ] Configuración Tailwind personalizada
- [ ] Estilos CSS inline para animations
- [ ] HeroLandings
- [ ] SectionImageText × 4
- [ ] SectionAccordion × 2
- [ ] SectionFaqs
- [ ] SectionBlog
- [ ] SectionCards
- [ ] SectionRequirements
- [ ] SectionPlans
- [ ] PreFooter

### **Data Hardcodeada:**
- [ ] accordionItems (4 items)
- [ ] faqItems (5 items)
- [ ] blogPosts (3 posts)
- [ ] coverageItems (8 items)
- [ ] requirements (4 items)
- [ ] plans (4 plans con features)

### **JavaScript:**
- [ ] Función toggleAccordion genérica
- [ ] Event listeners para accordion1
- [ ] Event listeners para accordion2
- [ ] Event listeners para FAQs
- [ ] Estado inicial (primer item abierto)
- [ ] Animaciones smooth

### **Iconos Phosphor:**
- [ ] Todos los iconos implementados con clases correctas
- [ ] Colores, tamaños y weights correctos
- [ ] Cambio dinámico CaretUp/CaretDown

### **Responsive:**
- [ ] Mobile-first approach
- [ ] Breakpoints md, lg, 2xl correctos
- [ ] Flex direction changes
- [ ] Grid columns changes
- [ ] Hidden/visible elements por breakpoint

### **Testing:**
- [ ] Abrir/cerrar accordions funciona
- [ ] Solo un item abierto a la vez (opcional)
- [ ] Animaciones smooth
- [ ] Responsive en mobile/tablet/desktop
- [ ] Todos los iconos visibles
- [ ] Imágenes cargan correctamente
- [ ] Botones tienen hover states

---

## 🚀 Pasos para Usar en Directus

1. Crear nuevo "Page" o "Article" en Directus
2. Copiar todo el contenido de `directus-static.html`
3. Pegar en el editor HTML/WYSIWYG
4. Guardar y publicar
5. Verificar que CDNs carguen correctamente
6. Probar funcionalidad de accordions
7. Verificar responsive en diferentes dispositivos

---

## 📝 Notas Importantes

- **No usar React:** Todo debe ser HTML vanilla + JavaScript
- **No usar JSX:** Sintaxis HTML estándar
- **Data inline:** No archivos externos JSON
- **CSS inline:** Todo en `<style>` tag o inline styles
- **JavaScript al final:** Antes de `</body>` para mejor performance
- **Event listeners:** Usar `DOMContentLoaded` para garantizar que DOM esté listo
- **Accesibilidad:** Mantener estructura semántica (h1, h2, section, button)
- **SEO-friendly:** Títulos jerárquicos correctos

---

## 🔧 Mantenimiento Futuro

### **Para cambiar contenido:**
1. Buscar la sección por comentario HTML: `<!-- SectionImageText #1 -->`
2. Modificar texto directamente
3. Para accordions: buscar `data-accordion="accordion1"`
4. Para cambiar colores: buscar el color hex en el archivo

### **Para agregar items:**
1. Copiar estructura HTML de un item existente
2. Duplicar y modificar contenido
3. Actualizar event listeners si es accordion

### **Para cambiar imágenes:**
1. Buscar URL de imagen: `src="https://..."`
2. Reemplazar por nueva URL
3. Mantener aspect ratios correctos

---

## 📄 Archivo Final

**Nombre:** `directus-static.html`  
**Tamaño estimado:** ~15-20 KB  
**Compatibilidad:** Todos los navegadores modernos  
**Dependencias:** CDN (requiere conexión a internet)

---

**Estado:** ✅ Plan completo - Listo para implementación  
**Última actualización:** 2 de enero de 2026
