# Fix del Z-Index del Cotizador

## 📋 Problema
El sidebar del cotizador quedaba **debajo** del navbar y otros elementos de la página, haciendo imposible su uso.

## ✅ Solución Aplicada
Se implementó un sistema de **z-index dinámico** que permite:
- El wrapper del cotizador tiene z-index **bajo** (queda debajo del navbar)
- Solo el `#quoter-mount` sube su z-index cuando se abre el sidebar
- El overlay tiene un z-index bajo para no interferir

---

## 🔧 Cambios en el HTML Final

### **CAMBIO 1: Wrapper del Cotizador** 
📍 **Ubicación:** Línea ~58 (justo después del Hero)

**❌ ANTES (no funcionaba):**
```html
<div class="w-full py-6 bg-bg-alt-secondary max-w-full md:max-w-[834px] xl:max-w-[1366px] mx-auto relative z-10 quoter-container-wrapper">
```

**✅ AHORA (funciona):**
```html
<div class="quoter-container-wrapper w-full py-6 bg-bg-alt-secondary max-w-full md:max-w-[834px] xl:max-w-[1366px] mx-auto">
```

**🔍 Diferencias:**
- ✅ Clase `quoter-container-wrapper` movida al **inicio**
- ❌ **Removido:** `relative z-10` del wrapper

---

### **CAMBIO 2: Div #quoter-mount**
📍 **Ubicación:** Línea ~62-66 (dentro del wrapper)

**❌ ANTES (no funcionaba):**
```html
<div 
  id="quoter-mount"
  data-geo="BR"
  class="max-w-[926px] mx-auto"
  style="position: relative;"
>
```

**✅ AHORA (funciona):**
```html
<div 
  id="quoter-mount"
  data-geo="BR"
  class="max-w-[926px] mx-auto relative z-[10001]"
>
```

**🔍 Diferencias:**
- ✅ **Agregado:** `relative z-[10001]` en las clases
- ❌ **Removido:** Atributo `style="position: relative;"`

---

### **CAMBIO 3: Overlay del Cotizador**
📍 **Ubicación:** Línea ~597-598 (antes de inicializar el cotizador)

**❌ ANTES (no funcionaba):**
```html
<div id="quoter-overlay" class="fixed inset-0 bg-black/25 z-[10000] hidden"></div>
```

**✅ AHORA (funciona):**
```html
<div id="quoter-overlay" class="fixed inset-0 bg-black/25 z-[98] hidden"></div>
```

**🔍 Diferencias:**
- ✅ **Cambiado:** z-index de `z-[10000]` → `z-[98]`

---

### **CAMBIO 4: Funciones JavaScript**
📍 **Ubicación:** Línea ~603-621 (script de inicialización)

**❌ ANTES (no funcionaba):**
```javascript
window.showQuoterOverlay = function() {
  var overlay = document.getElementById('quoter-overlay');
  if (overlay) overlay.classList.remove('hidden');
};

window.hideQuoterOverlay = function() {
  var overlay = document.getElementById('quoter-overlay');
  if (overlay) overlay.classList.add('hidden');
};
```

**✅ AHORA (funciona):**
```javascript
window.showQuoterOverlay = function() {
  var overlay = document.getElementById('quoter-overlay');
  var quoterMount = document.getElementById('quoter-mount');
  if (overlay) overlay.classList.remove('hidden');
  // Subir z-index SOLO del quoter-mount, no del container azul
  if (quoterMount) {
    quoterMount.style.zIndex = '9999';
  }
};

window.hideQuoterOverlay = function() {
  var overlay = document.getElementById('quoter-overlay');
  var quoterMount = document.getElementById('quoter-mount');
  if (overlay) overlay.classList.add('hidden');
  // Restaurar z-index del quoter-mount
  if (quoterMount) {
    quoterMount.style.zIndex = '';
  }
};
```

**🔍 Diferencias:**
- ✅ **Agregada:** Variable `quoterMount` en ambas funciones
- ✅ **Agregada:** Manipulación dinámica del z-index:
  - `showQuoterOverlay()`: Sube z-index a `9999`
  - `hideQuoterOverlay()`: Restaura z-index (quita el inline style)
- ✅ **Agregados:** Comentarios explicativos

---

## 📊 Resumen de Z-Index

| Elemento | Z-Index | Comportamiento |
|----------|---------|----------------|
| **Wrapper del cotizador** | Sin z-index | Queda debajo del navbar |
| **#quoter-mount (cerrado)** | `z-[10001]` | Alto, pero el sidebar está dentro |
| **#quoter-mount (abierto)** | `9999` (inline) | Se eleva dinámicamente vía JS |
| **#quoter-overlay** | `z-[98]` | Bajo, no interfiere con el navbar |

---

## 🎯 Cómo Funciona

1. **Estado inicial:**
   - Wrapper: sin z-index (queda debajo del navbar)
   - `#quoter-mount`: tiene `z-[10001]` estático en las clases
   - Overlay: oculto con `z-[98]`

2. **Al abrir el sidebar:**
   - Se ejecuta `showQuoterOverlay()`
   - Se muestra el overlay con `z-[98]`
   - Se agrega `style="z-index: 9999"` al `#quoter-mount` (sube dinámicamente)
   - El sidebar queda **por encima** de todo

3. **Al cerrar el sidebar:**
   - Se ejecuta `hideQuoterOverlay()`
   - Se oculta el overlay
   - Se remueve el inline style del `#quoter-mount` (vuelve a `z-[10001]`)

---

## 📁 Archivos Afectados

### ✅ Con fix aplicado:
- `/a365/destinos.html`
- `/a365/destinos-dev.html`
- `/a365/requisitos.html`
- `/a365/requisitos-dev.html`

### 🔧 Scripts de generación:
- `/scripts/build-quoter.mjs` - Genera la sección del cotizador
- `/scripts/build-requisitos-final.mjs` - Genera requisitos.html
- `/scripts/build-requisitos-final-dev.mjs` - Genera requisitos-dev.html
- `/scripts/build-destinos-final.mjs` - Genera destinos.html
- `/scripts/build-destinos-final-dev.mjs` - Genera destinos-dev.html

### ⚛️ Componente React:
- `/src/components/SectionQuoter.jsx` - Componente del cotizador

---

## 🚀 Aplicar a Otros HTMLs Manualmente

Si tienes un HTML sin estos cambios, busca y reemplaza:

### 1️⃣ Wrapper del cotizador (busca por `quoter-container-wrapper`):
```html
<!-- Remover 'relative z-10' si existe -->
<div class="quoter-container-wrapper w-full py-6 bg-bg-alt-secondary ...">
```

### 2️⃣ #quoter-mount (busca por `id="quoter-mount"`):
```html
<!-- Agregar 'relative z-[10001]' en class -->
<div 
  id="quoter-mount"
  data-geo="BR"
  class="max-w-[926px] mx-auto relative z-[10001]"
>
```

### 3️⃣ Overlay (busca por `id="quoter-overlay"`):
```html
<!-- Cambiar z-index a z-[98] -->
<div id="quoter-overlay" class="fixed inset-0 bg-black/25 z-[98] hidden"></div>
```

### 4️⃣ Funciones JS (busca por `window.showQuoterOverlay`):
```javascript
// Agregar manipulación del quoterMount
window.showQuoterOverlay = function() {
  var overlay = document.getElementById('quoter-overlay');
  var quoterMount = document.getElementById('quoter-mount');
  if (overlay) overlay.classList.remove('hidden');
  if (quoterMount) quoterMount.style.zIndex = '9999';
};

window.hideQuoterOverlay = function() {
  var overlay = document.getElementById('quoter-overlay');
  var quoterMount = document.getElementById('quoter-mount');
  if (overlay) overlay.classList.add('hidden');
  if (quoterMount) quoterMount.style.zIndex = '';
};
```

---

## 📝 Notas Importantes

- ⚠️ **NO** cambiar el z-index del wrapper a un valor alto
- ✅ El z-index alto (`9999`) solo se aplica **dinámicamente** al `#quoter-mount`
- ✅ El overlay tiene z-index bajo (`98`) para no interferir
- ✅ Esta solución permite que el navbar quede por encima del cotizador cerrado
- ✅ Cuando se abre el sidebar, el `#quoter-mount` sube su z-index dinámicamente

---

## 🔗 Referencias

- Documentación original: `/docs/QUOTER_IMPLEMENTATION_STATUS.md`
- Plan de integración: `/docs/QUOTER_INTEGRATION_PLAN.md`

---

**Fecha de actualización:** Enero 15, 2026  
**Versión:** 1.0
