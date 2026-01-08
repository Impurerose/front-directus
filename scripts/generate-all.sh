#!/bin/bash

echo "🚀 Generador de Landing Pages Estáticas"
echo "========================================"
echo ""
echo "Generando todas las secciones..."
echo ""

node build-complete.mjs && \
node build-quoter.mjs && \
node build-complete-part2.mjs && \
node build-complete-part3.mjs && \
node build-complete-final.mjs

echo ""
echo "✅ ¡Listo! Revisa el archivo: a365/brasil.html"
echo ""
echo "Estructura generada:"
echo "1. Hero + Primera sección"
echo "2. Cotizador (Single-SPA)"
echo "3-7. Contenido de requisitos y FAQs"
echo "8. Planes"
echo "9. PreFooter"
echo ""
echo "Para generar otro país:"
echo "1. Edita los scripts y cambia 'Brasil' por el país deseado"
echo "2. Ejecuta: npm run build:html"
