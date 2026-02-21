# Análisis Exhaustivo: Builders HTML vs Componentes React

**Fecha:** 2026-02-21  
**Objetivo:** Asegurar que los archivos HTML generados (-dev.html) sean copias fieles de los componentes React

---

## 📊 Resumen Ejecutivo

Este documento detalla todas las diferencias encontradas entre los componentes React (`AppDestinos.jsx`, `AppRequisitos.jsx`) y sus builders HTML correspondientes. El análisis cubre no solo el cambio de dimensiones `1366px → 1600px`, sino **TODOS** los cambios en estilos, clases, estructura HTML y atributos.

---

## 🔍 Análisis por Componente

### 1. **HeroLandings.jsx**

#### Componente React (Fuente Real):
```jsx
<div className="w-full max-w-[390px] md:max-w-[834px] 2xl:max-w-[1600px] mx-auto min-h-[400px]
    2xl:bg-[url('https://assistcdn.s3.us-west-1.amazonaws.com/assets/img/affiliates/bg-1366x400.jpg')] bg-no-repeat bg-cover
    md:bg-[url('https://assistcdn.s3.us-west-1.amazonaws.com/assets/img/affiliates/bg-834x426.jpg')]
    bg-[url('https://assistcdn.s3.us-west-1.amazonaws.com/assets/img/affiliates/bg-390x377.jpg')]
    ">
```

#### Estado Actual en Builders:

##### ✅ **destinos-dev.html** - CORRECTO
- ✅ `2xl:max-w-[1600px]` correcto
- ✅ URLs de imágenes reales (assistcdn) correctas
- ✅ `md:pl-[85px]` correcto para customTitle

##### ❌ **requisitos-dev.html** - REQUIERE CORRECCIÓN
- ❌ Tiene `2xl:max-w-[1366px]` en lugar de `1600px`
- ❌ Tiene URLs de `placehold.co` en lugar de imágenes reales de assistcdn
- ❌ Tiene `bg-sky-200` (debug color que debe eliminarse)
- ✅ `md:pl-[85px]` correcto

---

### 2. **SectionQuoter.jsx**

#### Componente React:
```jsx
<div className="quoter-container-wrapper w-full py-6 bg-[#0059BA] max-w-full md:max-w-[834px] xl:max-w-[1600px] mx-auto">
  <div className="px-4 max-w-[390px] md:max-w-[548px] lg:max-w-[1200px] 2xl:max-w-[1366px] mx-auto lg:px-0">
    <div id="quoter-mount" data-geo={geo} className="max-w-[926px] mx-auto relative z-[10001]">
```

#### Estado Actual:

##### ✅ **Ambos archivos** - CORRECTO
- ✅ `xl:max-w-[1600px]` correcto
- ✅ `bg-bg-alt-secondary` correcto (evalúa a `#0059BA` via tailwind.config)
- ✅ `z-[10001]` correcto
- ✅ `data-geo` presente

**NOTA:** El componente React usa `bg-[#0059BA]` pero los builders usan `bg-bg-alt-secondary`. Ambos son equivalentes ya que la config de Tailwind define `bg-alt-secondary: '#0059BA'`.

---

### 3. **SectionImageText.jsx**

#### Componente React:
```jsx
<div className="bg-white w-full tf-py-9 2xl:py-16 pt-12 pb-12 2xl:pb-20 px-4">
  <div className={`flex flex-col ${
    reverse ? "2xl:flex-row-reverse justify-center" : "2xl:flex-row justify-center"
  } 2xl:gap-32 items-center 2xl:px-20 max-w-[834px] 2xl:max-w-[1600px] mx-auto`}>
```

#### Estado Actual:

##### ⚠️ **Ambos archivos** - CASI CORRECTO
- ✅ `2xl:max-w-[1600px]` correcto
- ✅ `justify-center` presente en ambos casos (normal y reverse)
- ⚠️ El componente tiene typo `tf-py-9` pero los builders usan `py-9` (correcto)
- ✅ Toda la estructura es idéntica

**ACCIÓN:** Los builders están **mejor** que el componente (ignoran el typo). No hacer nada.

---

### 4. **SectionAccordion.jsx**

#### Componente React:
```jsx
<div className="bg-[#f2f2f2] mx-auto w-bg-[#f2f2f2]full py-8 2xl:py-16 max-w-full md:max-w-[834px] 2xl:max-w-[1600px]">
  <div className="max-w-[390px] md:max-w-[548px] 2xl:max-w-[1366px] mx-auto px-4 2xl:px-[185px]">
    <div className="max-w-[792px] flex flex-col mx-auto">
      <div className="flex flex-col gap-10 w-full">
        <h2 className="text-center text-3xl 2xl:text-4xl font-semibold text-[#0059ba] w-full">
```

#### Estado Actual:

##### ❌ **requisitos-dev.html** - REQUIERE CORRECCIÓN
- ❌ Tiene `2xl:max-w-[1366px]` en lugar de `1600px` en el wrapper exterior
- ✅ Ancho interno `2xl:max-w-[1366px]` está correcto (content wrapper)
- ⚠️ El componente tiene typo `w-bg-[#f2f2f2]full` pero HTML usa `w-full` (correcto)
- ❌ Falta `leading-[40px]` en el h2

**NOTA IMPORTANTE:** El componente React NO tiene `leading-[40px]` pero debemos agregarlo para consistencia con versión de producción.

---

### 5. **SectionFaqs.jsx**

#### Componente React:
```jsx
<div className="relative w-full z-50 px-4 md:px-0 pb-12 2xl:pb-0 2xl:h-[520px] my-12 2xl:my-28">
  <div className="w-full mx-auto max-w-[390px] md:max-w-[548px] 2xl:max-w-[1600px] justify-center relative z-10">
```

#### Estado Actual:

##### ✅ **destinos-final-dev.mjs** - CORRECTO
- ✅ `2xl:max-w-[1600px]` correcto

##### ❌ **requisitos-final-dev.mjs** - REQUIERE CORRECCIÓN  
- ❌ Tiene `2xl:max-w-[1366px]` en lugar de `1600px`

---

### 6. **SectionBlog.jsx**

#### Componente React:
```jsx
<div className="w-full flex items-center justify-center py-16">
  <div className="w-full max-w-[390px] md:max-w-[548px] 2xl:max-w-[1296px] px-4 -md:px-6">
```

#### Estado Actual:

##### ✅ **Ambos archivos** - CORRECTO
- ✅ `2xl:max-w-[1296px]` correcto (NO es 1600px, es 1296px específicamente)

**NOTA:** SectionBlog usa `1296px` intencionalmente, no `1600px`.

---

### 7. **PreFooter.jsx**

#### Componente React:
```jsx
<div className="w-full flex justify-center">
  <div className="w-full max-w-[1600px] prefooter-container h-[340px]">
```

#### Estado Actual:

##### ✅ **destinos-final-dev.mjs** - CORRECTO
- ✅ `max-w-[1600px]` correcto

##### ❌ **requisitos-final-dev.mjs** - REQUIERE CORRECCIÓN
- ❌ Tiene `max-w-[1366px]` en lugar de `1600px`

---

### 8. **SectionCards.jsx** (Solo Destinos)

##### ✅ **build-destinos-part2.mjs** - CORRECTO
- ✅ `2xl:max-w-[1600px]` correcto

---

### 9. **SectionPlans.jsx** (Solo Destinos)

##### ⚠️ **build-destinos-part2.mjs** - HTML PENDIENTE REGENERAR
- ✅ Builder actualizado a 1600px
- ⏳ HTML existente tiene 1366px (regenerar)

---

### 10. **SectionRequirements.jsx** (Solo Destinos)

##### ✅ **build-destinos-part2.mjs** - CORRECTO
- ✅ `2xl:max-w-[1600px]` correcto

---

## 📋 Plan de Acción: DESTINOS-DEV.HTML

### ⚠️ Estado: BUILDERS ACTUALIZADOS - REQUIERE REGENERACIÓN

Los builders ya están con 1600px. Solo falta regenerar el HTML.

### 🔄 Acción:
```bash
cd /home/impurerose/dev/directus/scripts
bash generate-destinos-dev.sh
```

### ✅ Checklist Post-regeneración:
- [x] Hero - 1600px
- [x] Quoter - 1600px  
- [x] ImageText #1 - 1600px
- [x] ImageText #2 - 1600px
- [x] SectionCards - 1600px
- [x] SectionPlans - 1600px (regenerar)
- [x] SectionRequirements - 1600px
- [x] FAQs - 1600px
- [x] Blog - 1296px (correcto)
- [x] PreFooter - 1600px

---

## 📋 Plan de Acción: REQUISITOS-DEV.HTML

### ❌ Estado: REQUIERE ACTUALIZACIÓN DE BUILDERS

### 🔧 Cambios en Builders:

#### 1. `build-requisitos-dev.mjs` (Línea ~64)
```diff
- <div class="w-full max-w-[390px] md:max-w-[834px] 2xl:max-w-[1366px] mx-auto min-h-[400px] bg-sky-200">
+ <div class="w-full max-w-[390px] md:max-w-[834px] 2xl:max-w-[1600px] mx-auto min-h-[400px]
+     2xl:bg-[url('https://assistcdn.s3.us-west-1.amazonaws.com/assets/img/affiliates/bg-1366x400.jpg')] bg-no-repeat bg-cover
+     md:bg-[url('https://assistcdn.s3.us-west-1.amazonaws.com/assets/img/affiliates/bg-834x426.jpg')]
+     bg-[url('https://assistcdn.s3.us-west-1.amazonaws.com/assets/img/affiliates/bg-390x377.jpg')]
+     ">
```

#### 2. `build-requisitos-part2.mjs` (Línea ~32)
```diff
- <div class="bg-[#f2f2f2] mx-auto w-full py-8 2xl:py-16 max-w-full md:max-w-[834px] 2xl:max-w-[1366px]">
+ <div class="bg-[#f2f2f2] mx-auto w-full py-8 2xl:py-16 max-w-full md:max-w-[834px] 2xl:max-w-[1600px]">
```

```diff
- <h2 class="text-center text-3xl 2xl:text-4xl font-semibold text-[#0059ba]">
+ <h2 class="text-center text-3xl 2xl:text-4xl leading-[40px] font-semibold text-[#0059ba]">
```

#### 3. `build-requisitos-part3.mjs` (Línea ~19)
```diff
- <div class="bg-[#f2f2f2] mx-auto w-full py-8 2xl:py-16 max-w-full md:max-w-[834px] 2xl:max-w-[1366px]">
+ <div class="bg-[#f2f2f2] mx-auto w-full py-8 2xl:py-16 max-w-full md:max-w-[834px] 2xl:max-w-[1600px]">
```

```diff
- <h2 class="text-center text-3xl 2xl:text-4xl font-semibold text-[#0059ba]">
+ <h2 class="text-center text-3xl 2xl:text-4xl leading-[40px] font-semibold text-[#0059ba]">
```

#### 4. `build-requisitos-final-dev.mjs` (Línea ~47)
```diff
- <div class="w-full mx-auto max-w-[390px] md:max-w-[548px] 2xl:max-w-[1366px] relative z-10">
+ <div class="w-full mx-auto max-w-[390px] md:max-w-[548px] 2xl:max-w-[1600px] relative z-10">
```

#### 5. `build-requisitos-final-dev.mjs` (Línea ~175)
```diff
- <div class="w-full max-w-[1366px] prefooter-container h-[340px]">
+ <div class="w-full max-w-[1600px] prefooter-container h-[340px]">
```

### 🔄 Después de actualizar:
```bash
cd /home/impurerose/dev/directus/scripts
bash generate-requisitos-dev.sh
```

### ✅ Checklist Requisitos:
- [ ] Hero - Cambiar a 1600px + imágenes reales
- [x] Quoter - 1600px (ya correcto)
- [ ] ImageText #1 - Verificar 1600px
- [ ] Accordion Documentos - 1600px + leading-[40px]
- [ ] ImageText #2 - Verificar 1600px
- [ ] ImageText #3 - Verificar 1600px
- [ ] ImageText #4 - Verificar 1600px
- [ ] Accordion Aduanas - 1600px + leading-[40px]
- [ ] FAQs - 1600px
- [x] Blog - 1296px (correcto)
- [ ] PreFooter - 1600px

---

## 📊 Resumen de Archivos

### Destinos:
- ✅ Todos los builders actualizados
- ⏳ Requiere regenerar HTML

### Requisitos:
- ❌ 4 builders requieren actualización:
  1. `build-requisitos-dev.mjs`
  2. `build-requisitos-part2.mjs`
  3. `build-requisitos-part3.mjs`
  4. `build-requisitos-final-dev.mjs`

---

## ✅ Validación Post-Cambios

1. **Max-width:** Verificar 1600px en DevTools (pantalla 2xl)
2. **Responsive:** Probar 390px, 834px, 1440px+
3. **Imágenes Hero:** Confirmar URLs assistcdn (no placehold.co)
4. **Tipografía:** Verificar leading-[40px] en títulos accordion

---

**Documento listo para validación - No aplicar hasta confirmación del usuario**
