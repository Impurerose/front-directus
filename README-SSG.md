# 🚀 SSG - Generador de HTML Estático para Directus

Sistema de generación de sitios estáticos (SSG) que convierte tu aplicación React en HTML puro listo para Directus.

---

## 📋 ¿Qué es esto?

Un setup que te permite:
- ✅ **Desarrollar en React** con hot reload y componentes modulares
- ✅ **Generar HTML estático** con un comando
- ✅ **Copiar y pegar en Directus** sin configuración adicional
- ✅ **Múltiples destinos** con data independiente

---

## 🎯 Workflow Completo

### **Modo Desarrollo (React)**
```bash
npm run dev
```
- Desarrollas con componentes React
- Hot reload automático
- Todas las herramientas modernas

### **Modo Exportación (HTML Estático)**
```bash
npm run export
```
- Genera template HTML en `dist/mexico.html`
- Incluye CDNs (Tailwind + Phosphor Icons)
- JavaScript vanilla para accordions
- Listo para Directus

---

## 📂 Estructura del Proyecto

```
directus/
├── src/
│   ├── components/          # Componentes React (modulares)
│   │   ├── HeroLandings.jsx
│   │   ├── SectionAccordion.jsx
│   │   ├── SectionFaqs.jsx
│   │   └── ...
│   ├── data/               # Data por destino (JSON)
│   │   ├── mexico.json
│   │   ├── brasil.json
│   │   └── espana.json
│   ├── App.jsx             # App principal (recibe props)
│   └── main.jsx
│
├── scripts/
│   └── generate-template.mjs  # Generador de HTML
│
├── dist/                   # Output (HTML generado)
│   └── mexico.html
│
└── package.json
```

---

## 🔧 Cómo Usar

### **Paso 1: Desarrollar en React**

```bash
npm run dev
```

- Abre http://localhost:5173
- Edita componentes en `src/components/`
- Modifica data en `src/data/mexico.json`
- Ve los cambios en tiempo real

### **Paso 2: Generar Template**

```bash
npm run export
```

Esto crea `dist/mexico.html` con:
- HEAD completo (CDNs, meta tags, styles)
- Placeholder para el contenido
- JavaScript de accordions
- Data hardcodeada inline

### **Paso 3: Copiar HTML Renderizado**

Con el servidor dev corriendo (`npm run dev`):

1. Abre http://localhost:5173
2. Click derecho → **Inspeccionar elemento**
3. En DevTools, busca el `<div id="root">` en el HTML
4. Click derecho en el `<div>` principal dentro de `#root`
5. Selecciona **Copy → Copy element**
6. Pega en un editor de texto

### **Paso 4: Completar el Template**

1. Abre `dist/mexico.html` en tu editor
2. Busca el comentario `<!-- PASO 1: COPIAR HTML AQUÍ -->`
3. Pega el HTML que copiaste del navegador
4. Guarda el archivo

### **Paso 5: Copiar a Directus**

1. Abre `dist/mexico.html`
2. Selecciona TODO el contenido (Ctrl+A)
3. Copia (Ctrl+C)
4. Pega en Directus
5. ¡Listo! 🎉

---

## 📝 Agregar Nuevos Destinos

### **1. Crear archivo de data**

```bash
# Copiar template existente
cp src/data/mexico.json src/data/brasil.json
```

### **2. Editar data**

```json
// src/data/brasil.json
{
  "destino": "Brasil",
  "accordionItems": [
    {
      "title": "Documentos para Brasil",
      "content": "..."
    }
  ],
  "faqItems": [...]
}
```

### **3. Actualizar script de generación**

```javascript
// scripts/generate-template.mjs

const destinations = {
  mexico: { destino: 'México' },
  brasil: { destino: 'Brasil' },  // ← Agregar
  espana: { destino: 'España' }   // ← Agregar
};
```

### **4. Generar**

```bash
npm run export
```

Ahora tendrás:
- `dist/mexico.html`
- `dist/brasil.html`
- `dist/espana.html`

---

## 🎨 Personalización

### **Cambiar Estilos**

Edita directamente en los componentes:
```jsx
// src/components/HeroLandings.jsx
<div className="bg-blue-500 text-white">
  ...
</div>
```

### **Cambiar Data**

Edita el JSON:
```json
// src/data/mexico.json
{
  "destino": "México",
  "accordionItems": [
    {
      "title": "Nuevo título",
      "content": "Nuevo contenido"
    }
  ]
}
```

### **Agregar CDNs**

Edita el template generator:
```javascript
// scripts/generate-template.mjs
function generateHTMLWrapper() {
  return `
    <head>
      <script src="https://mi-cdn.com/libreria.js"></script>
    </head>
  `;
}
```

---

## 🐛 Troubleshooting

### **Los accordions no funcionan**

- ✅ Verifica que los `data-accordion-*` attributes estén en el HTML
- ✅ Abre la consola del navegador (F12) y busca errores
- ✅ Confirma que el script de accordions está al final del `<body>`

### **Los estilos no se ven**

- ✅ Verifica que Tailwind CDN esté cargando
- ✅ Abre DevTools → Network → Busca `cdn.tailwindcss.com`
- ✅ Confirma que las clases Tailwind estén en el HTML

### **Los iconos no aparecen**

- ✅ Verifica que Phosphor Icons CDN esté cargando
- ✅ Los iconos de React (`<CaretUp />`) se convierten a SVG en HTML
- ✅ Busca `<svg>` tags en el HTML copiado

---

## 📊 Comparación: Desarrollo vs Producción

| Aspecto | Desarrollo (`npm run dev`) | Producción (`dist/mexico.html`) |
|---------|----------------------------|----------------------------------|
| **Framework** | React + Vite | HTML Vanilla |
| **Componentes** | Modulares (.jsx) | Todo en un archivo |
| **Estilos** | Tailwind (build) | Tailwind CDN |
| **Iconos** | @phosphor-icons/react | Phosphor Web (CDN) |
| **JavaScript** | React hooks | Vanilla JS |
| **Hot Reload** | ✅ | ❌ |
| **Size** | ~500KB (dev) | ~50KB (HTML) |
| **Editable** | Componentes | HTML directo |

---

## 💡 Tips

### **Desarrollo rápido**
```bash
# Terminal 1: Dev server
npm run dev

# Terminal 2: Watch para regenerar
npm run export
```

### **Preview del HTML generado**
```bash
# Después de completar el template
cd dist
python3 -m http.server 8000

# Abre http://localhost:8000/mexico.html
```

### **Validar HTML**
```bash
# Instalar validator
npm install -g html-validator-cli

# Validar
html-validator dist/mexico.html
```

---

## 🚀 Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Inicia servidor de desarrollo |
| `npm run build` | Build de producción (Vite) |
| `npm run export` | Genera templates HTML |
| `npm run preview` | Preview del build |
| `npm run lint` | Linter ESLint |

---

## 📦 Dependencias

### **Runtime (CDN en HTML)**
- Tailwind CSS
- Phosphor Icons Web

### **Development**
- React + React DOM
- Vite
- @phosphor-icons/react
- ESLint

---

## 🎓 Conceptos

### **¿Por qué SSG?**
- Mantienes la DX (Developer Experience) de React
- Produces HTML estático (compatible con cualquier CMS)
- Mejor performance (sin JavaScript pesado)
- SEO-friendly

### **¿Cómo funciona?**
1. Desarrollas en React (componentes modulares)
2. React renderiza en el navegador
3. Copias el HTML renderizado
4. Lo pegas en un template con CDNs
5. El template incluye JavaScript vanilla para interactividad
6. Resultado: HTML autocontenido

---

## 📄 Licencia

MIT - Usa como quieras!

---

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/mejora`)
3. Commit cambios (`git commit -am 'Agregar mejora'`)
4. Push (`git push origin feature/mejora`)
5. Abre un Pull Request

---

**¿Preguntas?** Abre un issue en GitHub.

**Última actualización:** 2 de enero de 2026
