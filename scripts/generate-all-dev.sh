#!/bin/bash

echo "🚀 Generador de Landing Pages Estáticas (DEV MODE)"
echo "==================================================="
echo ""
echo "Generando todas las secciones..."
echo ""

node scripts/build-complete-dev.mjs && \
node scripts/build-quoter.mjs && \
node scripts/build-complete-part2.mjs && \
node scripts/build-complete-part3.mjs && \
node scripts/build-complete-final-dev.mjs

echo ""
echo "✅ ¡Listo! Revisa el archivo: a365/brasil-dev.html"
echo ""
echo "Estructura generada:"
echo "1. Hero + Primera sección"
echo "2. Cotizador (Single-SPA)"
echo "3-7. Contenido de requisitos y FAQs"
echo "8. Planes"
echo "9. PreFooter"
echo ""
echo "📦 Assets locales:"
echo "   - CSS: ./assets/quoter.min.css"
echo "   - JS: ./assets/a365-quoter.js"
echo ""
echo "Para copiar los assets del quoter:"
echo "   cp /home/impurerose/dev/directus/cdn-assets/quoter/v1.3.3/* /home/impurerose/dev/directus/a365/assets/"
echo ""
echo "Para probar localmente:"
echo "   cd /home/impurerose/dev/directus/a365"
echo "   python3 -m http.server 8080"
echo "   Abrir: http://localhost:8080/brasil-dev.html"
