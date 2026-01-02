# ✅ Setup SSG Completado - HTML Estático para Directus

## 🎉 Estado Actual

Tu proyecto ahora tiene un sistema SSG (Static Site Generation) configurado que te permite:
- Desarrollar en React con componentes modulares
- Generar HTML estático listo para Directus
- Mantener data en archivos JSON separados

---

## 📂 Archivos Creados

| Archivo | Descripción |
|---------|-------------|
| `dist/mexico.html` | Template HTML con placeholder |
| `dist/mexico-demo.html` | Demo parcial del HTML final |
| `src/data/mexico.json` | Data del destino México |
| `scripts/generate-template.mjs` | Generador de templates |
| `scripts/help.sh` | Script de ayuda |
| `README-SSG.md` | Documentación completa |

---

## 🚀 Cómo Generar el HTML Final

### **Método Recomendado (Manual pero Simple)**

#### **Paso 1: Iniciar el servidor de desarrollo**
```bash
npm run dev
```

#### **Paso 2: Abrir en el navegador**
- Abre: http://localhost:5173 (o el puerto que indique)
- Verifica que todo se vea bien

#### **Paso 3: Copiar el HTML renderizado**

**Opción A - Usando DevTools (Más fácil):**
1. Presiona `F12` para abrir DevTools
2. Ve a la pestaña **Console**
3. Pega este comando y presiona Enter:
   ```javascript
   copy(document.querySelector('#root').outerHTML)
   ```
4. El HTML completo ahora está en tu clipboard

**Opción B - Manualmente:**
1. Click derecho → "Inspeccionar"
2. En el panel de Elements, busca `<div id="root">`
3. Click derecho en ese div → "Copy" → "Copy outerHTML"

#### **Paso 4: Completar el template**
1. Abre `dist/mexico.html` en tu editor
2. Busca el comentario: `<!-- PASO 1: COPIAR HTML AQUÍ -->`
3. Elimina el comentario completo
4. Pega el HTML que copiaste
5. Guarda el archivo

#### **Paso 5: Verificar**
1. Abre `dist/mexico.html` en tu navegador
2. Verifica que:
   - Los estilos se vean bien
   - Los accordions funcionen
   - Los iconos aparezcan

#### **Paso 6: Copiar a Directus**
1. Abre `dist/mexico.html` completo
2. Selecciona TODO (Ctrl+A)
3. Copia (Ctrl+C)
4. Pega en Directus
5. ¡Listo! 🎉

---

## 📝 Scripts Disponibles

```bash
# Desarrollo
npm run dev              # Servidor de desarrollo

# Generar templates
npm run export           # Genera dist/mexico.html

# Ayuda
npm run help             # Muestra instrucciones

# Build (opcional)
npm run build           # Build Vite (no necesario para Directus)
```

---

## 🔄 Agregar Nuevos Destinos

### **1. Crear archivo de data**
```bash
cp src/data/mexico.json src/data/brasil.json
```

### **2. Editar contenido**
```json
// src/data/brasil.json
{
  "destino": "Brasil",
  "accordionItems": [...],
  "faqItems": [...]
}
```

### **3. Actualizar generador**
```javascript
// scripts/generate-template.mjs (línea ~12)
const destinations = {
  mexico: { destino: 'México' },
  brasil: { destino: 'Brasil' },  // ← Agregar
};
```

### **4. Generar template**
```bash
npm run export
# Ahora tendrás dist/brasil.html
```

### **5. Repetir el proceso de copiado**
- Cambia los datos en App.jsx o crea una nueva ruta
- O simplemente carga `src/data/brasil.json` en main.jsx

---

## 💡 Tips Útiles

### **Ver el HTML generado antes de copiar a Directus**
```bash
# En otra terminal
cd dist
python3 -m http.server 8000

# Abre http://localhost:8000/mexico.html
```

### **Validar el HTML**
```bash
# Instalar validator
npm install -g html-validator-cli

# Validar
html-validator dist/mexico.html
```

### **Editar rápidamente la data**
```bash
# Editar data
code src/data/mexico.json

# Reiniciar dev server
npm run dev
```

---

## 🐛 Troubleshooting

### **Los accordions no funcionan**
✅ Verifica que hayas copiado TODO el HTML del `<div id="root">`  
✅ Revisa que los atributos `data-accordion-*` estén presentes  
✅ Abre la consola del navegador (F12) y busca errores  

### **Los estilos no se aplican**
✅ Verifica que el CDN de Tailwind esté cargando  
✅ Revisa la conexión a internet  
✅ Abre Network en DevTools y verifica `cdn.tailwindcss.com`  

### **Los iconos no aparecen**
✅ Verifica que Phosphor Icons CDN esté cargando  
✅ Los iconos React se convierten a `<i>` tags con clases  
✅ Busca `ph-` en el HTML copiado  

### **El servidor no inicia en el puerto 5173**
✅ Normal, Vite usa otro puerto disponible  
✅ Revisa la salida del terminal para ver el puerto actual  
✅ Usa el URL que muestra Vite  

---

## 📊 Estructura del HTML Final

```html
<!DOCTYPE html>
<html>
<head>
  <!-- CDN scripts -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/@phosphor-icons/web"></script>
  
  <!-- Tailwind config -->
  <script>...</script>
  
  <!-- Custom styles -->
  <style>...</style>
</head>
<body>
  <!-- TODO el contenido de tu app -->
  <div>...</div>
  
  <!-- JavaScript para accordions -->
  <script>...</script>
</body>
</html>
```

---

## 🎯 Resumen del Proceso

```mermaid
graph LR
    A[Editar src/data/mexico.json] --> B[npm run dev]
    B --> C[Abrir localhost:5173]
    C --> D[F12 → Console → copy(...)]
    D --> E[Editar dist/mexico.html]
    E --> F[Pegar HTML]
    F --> G[Verificar en navegador]
    G --> H[Copiar a Directus]
```

---

## 📚 Archivos de Referencia

- [README-SSG.md](README-SSG.md) - Documentación completa
- [PLAN-HTML-ESTATICO.md](PLAN-HTML-ESTATICO.md) - Plan técnico
- [dist/mexico-demo.html](dist/mexico-demo.html) - Ejemplo parcial

---

## ✨ Próximos Pasos Sugeridos

1. **Probar el workflow completo** con México
2. **Crear data para Brasil** y generar su HTML
3. **Documentar proceso** en tu equipo
4. **Automatizar** con un script si vas a hacer muchos destinos

---

**Última actualización:** 2 de enero de 2026  
**Versión:** 1.0.0
