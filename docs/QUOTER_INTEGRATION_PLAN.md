# 📋 Plan de Integración del Cotizador en Landings Directus

**Fecha:** Enero 2026  
**Objetivo:** Integrar el cotizador de @a365/quoter en las landings HTML estáticas generadas para Directus

---

## 🎯 Contexto del Proyecto

### Arquitectura Actual

#### **Proyecto Directus (Landing Generator)**
- **Tecnología**: React 19 + Vite
- **Output**: HTML estático con CSS y JS inline
- **Flujo**: 
  1. Desarrollo en React (`npm run dev`)
  2. Build genera HTML renderizado
  3. Se copia manualmente a Directus CMS
  4. **Sin hidratación** - HTML estático sin interactividad React

#### **@a365/quoter (Cotizador)**
- **Tecnología**: React 17 + Webpack + Single-SPA
- **Arquitectura**: Micro-frontend configurado para Single-SPA
- **Build existente**: `a365/a365-builds/quoter/a365-quoter.js` (~168kb)
- **CSS**: `quoter.scope.css` + `quoter.min.css` (Tailwind con prefijos)
- **Formato**: SystemJS module (System.register)

### Requerimientos

1. ✅ El cotizador **NO necesita `fetchProducts`** en este contexto
2. ✅ Solo captura datos y **redirige a `/products`**
3. ✅ Debe funcionar en HTML estático (sin servidor React)
4. ✅ Debe ser mantenible y actualizable
5. ✅ Peso optimizado para landings

---

## 📊 Análisis de Opciones

### **Opción A: Single-SPA con Script Tags** ⭐ RECOMENDADA

**Descripción**: Cargar Single-SPA runtime + cotizador vía CDN en el HTML estático.

#### Ventajas
- ✅ **Cero cambios en el cotizador** - usa el build existente
- ✅ **Implementación inmediata** - solo modificar HTML template
- ✅ **Build probado en producción** - sin riesgos
- ✅ **Cacheable** - CDNs públicos para single-spa/systemjs
- ✅ **Actualizable** - cambias cotizador sin regenerar landings

#### Desventajas
- ⚠️ Múltiples requests HTTP (6 archivos)
- ⚠️ Setup más verboso en HTML
- ⚠️ Dependencia de CDNs externos

#### Peso Total
```
SystemJS:         ~15kb gzipped
single-spa:       ~18kb gzipped
single-spa-react: ~3kb gzipped
React 17:         ~40kb gzipped
React DOM 17:     ~130kb gzipped
Cotizador:        ~60kb gzipped
────────────────────────────
TOTAL:            ~266kb gzipped
Requests:         6 archivos
```

#### Implementación
```html
<!-- 1. CSS del cotizador -->
<link rel="stylesheet" href="https://cdn.assist365.com/quoter/quoter.min.css">

<!-- 2. Container -->
<div id="quoter-mount"></div>

<!-- 3. Dependencies -->
<script src="https://cdn.jsdelivr.net/npm/systemjs@6.14.2/dist/system.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/single-spa@5.9.5/lib/system/single-spa.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/single-spa-react@5.1.4/lib/system/single-spa-react.min.js"></script>

<!-- 4. Import Map -->
<script type="systemjs-importmap">
{
  "imports": {
    "react": "https://cdn.jsdelivr.net/npm/react@17.0.2/umd/react.production.min.js",
    "react-dom": "https://cdn.jsdelivr.net/npm/react-dom@17.0.2/umd/react-dom.production.min.js",
    "@a365/quoter": "https://cdn.assist365.com/quoter/a365-quoter.js"
  }
}
</script>

<!-- 5. Bootstrap -->
<script>
  localStorage.setItem('country_code', 'AR');
  localStorage.setItem('entity_id', '1');
  localStorage.setItem('country_id', '11');
  localStorage.setItem('language', 'es');

  System.import('@a365/quoter').then(() => {
    singleSpa.registerApplication({
      name: '@a365/quoter',
      app: () => System.import('@a365/quoter'),
      activeWhen: () => true,
      customProps: {
        domElement: document.getElementById('quoter-mount')
      }
    });
    singleSpa.start();
  });
</script>
```

---

### **Opción B: Bundle Standalone**

**Descripción**: Crear un nuevo build del cotizador como librería standalone (sin Single-SPA).

#### Ventajas
- ✅ API más simple y limpia
- ✅ Menos dependencias externas
- ✅ HTML más minimalista
- ✅ Un solo request (+ CSS)

#### Desventajas
- ❌ Requiere **refactorizar el cotizador** (2-4 horas)
- ❌ Crear nuevo webpack config (library mode)
- ❌ Testing completo requerido
- ❌ Mantener dos builds (single-spa + standalone)

#### Peso Total
```
React 17 + ReactDOM + Cotizador: ~250kb gzipped
Requests: 2 archivos (JS + CSS)
```

#### Implementación
```html
<link rel="stylesheet" href="https://cdn.assist365.com/quoter/v2.0/a365-quoter.min.css">

<div 
  data-a365-quoter
  data-geo="ar"
  data-mode="default"
  data-redirect-url="https://assist-365.com/ar/products"
></div>

<script src="https://cdn.assist365.com/quoter/v2.0/a365-quoter.min.js"></script>
```

**Tiempo estimado**: 2-3 días de desarrollo + testing

---

### **Opción C: Iframe Sandbox**

**Descripción**: Cotizador en iframe desde otro dominio.

#### Ventajas
- ✅ Máximo aislamiento (CSS, JS, versiones)
- ✅ Actualizable sin regenerar landings
- ✅ No aumenta peso del HTML

#### Desventajas
- ❌ Comunicación compleja (postMessage)
- ❌ Requiere servidor para iframe
- ❌ SEO limitado
- ❌ Problemas de altura dinámica

**Recomendación**: Solo si se necesita aislamiento total.

---

## 🚀 Plan Recomendado: Opción A (Single-SPA)

### Timeline
- **Tiempo total**: 4-6 horas
- **Fase 1**: Setup (2h)
- **Fase 2**: Testing (2h)
- **Fase 3**: Deploy (2h)

---

## 📝 Pasos de Implementación

### **FASE 1: Preparación del Cotizador** (1 hora)

#### 1.1. Verificar Build Existente
```bash
cd /home/impurerose/dev/assist365front/quoter

# Verificar que existe el build
ls -lh a365/a365-builds/quoter/

# Debería mostrar:
# - a365-quoter.js
# - a365-quoter.js.map
# - quoter CSS files
```

#### 1.2. Subir a CDN (S3/Cloudflare/etc)
```bash
# Opción 1: AWS S3
aws s3 sync a365/a365-builds/quoter/ \
  s3://cdn.assist365.com/quoter/v1.3.3/ \
  --acl public-read \
  --cache-control "public, max-age=31536000"

# Opción 2: Servidor propio
rsync -avz a365/a365-builds/quoter/ \
  user@server:/var/www/cdn/quoter/v1.3.3/
```

**URLs resultantes:**
- `https://cdn.assist365.com/quoter/v1.3.3/a365-quoter.js`
- `https://cdn.assist365.com/quoter/v1.3.3/quoter.min.css`
- `https://cdn.assist365.com/quoter/v1.3.3/quoter.scope.css`

---

### **FASE 2: Modificar Proyecto Directus** (2 horas)

#### 2.1. Crear Componente QuoterSection

**Archivo**: `/home/impurerose/dev/directus/src/components/SectionQuoter.jsx`

```jsx
import React from 'react';

/**
 * Sección del cotizador
 * En el HTML generado se reemplazará por el mount point
 */
const SectionQuoter = ({ destino, geo = 'ar' }) => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-12 lg:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-[#0059BA] font-semibold text-3xl lg:text-4xl mb-8 lg:mb-12">
          Cotizá tu seguro de viaje a {destino}
        </h2>
        
        {/* Este div será el mount point del cotizador */}
        <div 
          id="quoter-mount"
          className="max-w-4xl mx-auto min-h-[400px]"
          data-geo={geo}
        ></div>
      </div>
    </section>
  );
};

export default SectionQuoter;
```

#### 2.2. Agregar en App.jsx

**Archivo**: `/home/impurerose/dev/directus/src/App.jsx`

```jsx
import SectionQuoter from "./components/SectionQuoter";

function App({ destino = "[Destino]", geo = "ar", ... }) {
  return (
    <>
      <HeroLandings destino={destino} />
      <SectionImageText ... />
      <SectionAccordion ... />
      
      {/* NUEVO: Cotizador */}
      <SectionQuoter destino={destino} geo={geo} />
      
      <SectionFaqs ... />
      <SectionBlog geo={geo} />
      <SectionPlans />
      <PreFooter />
    </>
  );
}
```

#### 2.3. Modificar generate-template.mjs

**Archivo**: `/home/impurerose/dev/directus/scripts/generate-template.mjs`

Agregar el snippet de Single-SPA antes de `</body>`:

```javascript
// Dentro de la función generateHTMLWrapper
function generateHTMLWrapper(destino, destinationKey) {
  const data = loadDestinationData(destinationKey);
  const geoConfig = {
    mexico: { code: 'MX', entity: 2, country: 142 },
    brasil: { code: 'BR', entity: 3, country: 31 },
    argentina: { code: 'AR', entity: 1, country: 11 }
  };
  const geo = geoConfig[destinationKey] || geoConfig.argentina;
  
  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Seguro de viaje a ${destino} - Assist 365</title>
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- Phosphor Icons CDN -->
  <script src="https://unpkg.com/@phosphor-icons/web"></script>
  
  <!-- Quoter CSS -->
  <link rel="stylesheet" href="https://cdn.assist365.com/quoter/v1.3.3/quoter.min.css">
  
  <!-- ... resto de styles ... -->
</head>
<body>

<!-- AQUÍ VA EL HTML COPIADO DEL NAVEGADOR -->

<!-- Single-SPA Stack -->
<script src="https://cdn.jsdelivr.net/npm/systemjs@6.14.2/dist/system.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/single-spa@5.9.5/lib/system/single-spa.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/single-spa-react@5.1.4/lib/system/single-spa-react.min.js"></script>

<script type="systemjs-importmap">
{
  "imports": {
    "react": "https://cdn.jsdelivr.net/npm/react@17.0.2/umd/react.production.min.js",
    "react-dom": "https://cdn.jsdelivr.net/npm/react-dom@17.0.2/umd/react-dom.production.min.js",
    "@a365/quoter": "https://cdn.assist365.com/quoter/v1.3.3/a365-quoter.js"
  }
}
</script>

<script>
  // Configuración del país
  localStorage.setItem('country_code', '${geo.code}');
  localStorage.setItem('entity_id', '${geo.entity}');
  localStorage.setItem('country_id', '${geo.country}');
  localStorage.setItem('language', 'es');

  // Montar cotizador cuando cargue la página
  window.addEventListener('load', function() {
    System.import('@a365/quoter').then(function() {
      singleSpa.registerApplication({
        name: '@a365/quoter',
        app: function() { return System.import('@a365/quoter'); },
        activeWhen: function() { return true; },
        customProps: {
          domElement: document.getElementById('quoter-mount')
        }
      });
      
      singleSpa.start();
      console.log('✅ Cotizador montado correctamente');
    }).catch(function(err) {
      console.error('❌ Error cargando cotizador:', err);
    });
  });
</script>

</body>
</html>`;
}
```

---

### **FASE 3: Testing Local** (1 hora)

#### 3.1. Test en Desarrollo

```bash
cd /home/impurerose/dev/directus

# Iniciar dev server
npm run dev

# Abrir en navegador
# http://localhost:5173
```

**Verificar:**
- [ ] El cotizador se muestra en la sección correcta
- [ ] Los estilos no tienen conflictos
- [ ] El formulario funciona (destino, fechas, pasajeros)
- [ ] Al cotizar redirige correctamente

#### 3.2. Generar HTML de Prueba

```bash
# Generar template
npm run export:mexico

# Verificar archivo generado
cat a365/mexico.html | grep -A 20 "quoter-mount"
```

#### 3.3. Test del HTML Estático

```bash
# Servir el HTML localmente
cd a365
python3 -m http.server 8080

# Abrir en navegador
# http://localhost:8080/mexico.html
```

**Checklist:**
- [ ] El cotizador se carga correctamente
- [ ] No hay errores en consola
- [ ] La redirección funciona
- [ ] El tracking analytics funciona
- [ ] Responsive (mobile/tablet/desktop)

---

### **FASE 4: Deploy a Producción** (1 hora)

#### 4.1. Generar Todos los Destinos

```bash
cd /home/impurerose/dev/directus

# Generar todos los HTMLs
npm run build:html

# Verificar outputs
ls -lh a365/*.html
```

#### 4.2. Copiar a Directus

1. Abrir Directus CMS
2. Ir a la sección de landings
3. Para cada destino:
   - Abrir el HTML generado (`a365/brasil.html`, etc)
   - Copiar TODO el contenido
   - Pegar en el editor de Directus
   - Guardar

#### 4.3. Verificar en Producción

```bash
# Test URLs
curl -I https://assist-365.com/landing/brasil
curl -I https://assist-365.com/landing/mexico

# Verificar que los scripts cargan
curl https://assist-365.com/landing/brasil | grep "quoter-mount"
```

---

## 🔧 Configuración por País

### Mapeo de Países

```javascript
const geoConfig = {
  'argentina': {
    code: 'AR',
    entity_id: 1,
    country_id: 11,
    lang: 'es',
    redirectUrl: 'https://assist-365.com/ar/products'
  },
  'mexico': {
    code: 'MX',
    entity_id: 2,
    country_id: 142,
    lang: 'es',
    redirectUrl: 'https://assist-365.com/mx/products'
  },
  'brasil': {
    code: 'BR',
    entity_id: 3,
    country_id: 31,
    lang: 'pt',
    redirectUrl: 'https://assist-365.com/br/products'
  },
  'chile': {
    code: 'CL',
    entity_id: 4,
    country_id: 45,
    lang: 'es',
    redirectUrl: 'https://assist-365.com/cl/products'
  },
  'colombia': {
    code: 'CO',
    entity_id: 5,
    country_id: 49,
    lang: 'es',
    redirectUrl: 'https://assist-365.com/co/products'
  }
};
```

---

## 📊 Monitoreo y Analytics

### Eventos a Trackear

El cotizador ya incluye tracking automático:

```javascript
// En QuoterCore/index.js línea ~365
trackQuoteTravelInsurance({
  destination: dest.label,
  departure_date: dates.date_from,
  return_date: dates.date_to,
  passenger_count: paxs.ages_1 + paxs.ages_2,
  passenger_count_u74: paxs.ages_1,
  passenger_count_75_85: paxs.ages_2,
});
```

### Verificar en Google Analytics

```javascript
// En la consola del navegador
dataLayer.forEach(event => {
  if (event.event === 'quote_travel_insurance') {
    console.log('✅ Event tracked:', event);
  }
});
```

---

## ⚠️ Troubleshooting

### Error: "System is not defined"

**Causa**: SystemJS no cargó antes del script
**Solución**: Mover `<script>` del cotizador después de SystemJS

### Error: "Cannot read property 'registerApplication'"

**Causa**: single-spa no cargó
**Solución**: Verificar que single-spa.min.js se carga correctamente

### Error: Estilos rotos

**Causa**: Conflicto con Tailwind del landing
**Solución**: El cotizador usa `quoter.scope.css` que prefija todos los estilos

### Error: "fetchProducts is not a function"

**Causa**: El cotizador espera fetchProducts pero no se usa
**Solución**: Verificar que `config.redirection = true` en StoreReducer

### Cotizador no se muestra

**Checklist:**
1. Verificar que existe `<div id="quoter-mount"></div>`
2. Abrir consola y ver errores
3. Verificar que los scripts cargan (Network tab)
4. Verificar localStorage tiene country_code, entity_id, etc

---

## 🔄 Plan de Actualización del Cotizador

Cuando se actualice el cotizador:

```bash
# 1. Build nuevo del cotizador
cd /home/impurerose/dev/assist365front/quoter
npm run build

# 2. Subir a CDN con nueva versión
aws s3 sync a365/a365-builds/quoter/ \
  s3://cdn.assist365.com/quoter/v1.3.4/ \
  --acl public-read

# 3. Actualizar generate-template.mjs
# Cambiar v1.3.3 → v1.3.4

# 4. Regenerar HTMLs (OPCIONAL)
cd /home/impurerose/dev/directus
npm run build:html

# 5. Copiar a Directus (o esperar a próximo cambio)
```

---

## 📈 Métricas de Éxito

### Performance
- [ ] First Contentful Paint < 2s
- [ ] Cotizador visible < 3s
- [ ] Interactividad < 4s
- [ ] Bundle total < 300kb gzipped

### Funcionalidad
- [ ] 100% de cotizaciones exitosas
- [ ] 0 errores en consola
- [ ] Tracking funcionando
- [ ] Redirección correcta

### UX
- [ ] Responsive en todos los dispositivos
- [ ] Accesible (WCAG AA)
- [ ] Sin flash de contenido no estilizado

---

## 🔐 Consideraciones de Seguridad

### CSP (Content Security Policy)

Si Directus usa CSP, agregar:

```html
<meta http-equiv="Content-Security-Policy" content="
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval'
    https://cdn.jsdelivr.net
    https://cdn.assist365.com
    https://cdn.tailwindcss.com;
  style-src 'self' 'unsafe-inline'
    https://cdn.assist365.com;
  connect-src 'self'
    https://api.assist365.com;
  img-src 'self' data: https:;
">
```

### CORS

Verificar que el CDN permite CORS:

```bash
# Headers necesarios en S3/CDN
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, HEAD
```

---

## 📚 Recursos y Referencias

### Documentación
- [Single-SPA Docs](https://single-spa.js.org/)
- [SystemJS Docs](https://github.com/systemjs/systemjs)
- [single-spa-react](https://single-spa.js.org/docs/ecosystem-react/)

### CDNs
- [jsDelivr](https://www.jsdelivr.com/)
- [unpkg](https://unpkg.com/)

### Testing
- Browser DevTools Network tab
- Lighthouse (Performance)
- React DevTools (verificar mounting)

---

## ✅ Checklist Final

### Antes de Deploy
- [ ] Build del cotizador subido a CDN
- [ ] Template modificado con scripts
- [ ] Testing local exitoso
- [ ] HTML generado verificado
- [ ] Sin errores en consola
- [ ] Tracking funcionando
- [ ] Responsive verificado

### Post-Deploy
- [ ] Verificar en producción
- [ ] Monitorear analytics
- [ ] Verificar performance
- [ ] Documentar versión deployada
- [ ] Notificar al equipo

---

## 🎯 Próximos Pasos (Post-Implementación)

### Corto Plazo (1 semana)
1. Monitorear métricas de uso
2. Recopilar feedback
3. Ajustar configuración si es necesario

### Mediano Plazo (1 mes)
1. Considerar migrar a standalone si el volumen justifica
2. Optimizar bundle (code splitting)
3. Implementar A/B testing

### Largo Plazo (3 meses)
1. Evaluar Web Components
2. Server-side rendering para SEO
3. Progressive Web App features

---

## 👥 Contactos

- **Cotizador**: Equipo @a365/quoter
- **Landing**: Equipo Directus
- **DevOps**: Para deploy a CDN
- **Analytics**: Para tracking y métricas

---

**Fecha de última actualización**: Enero 2026  
**Versión del documento**: 1.0  
**Estado**: ✅ Aprobado para implementación
