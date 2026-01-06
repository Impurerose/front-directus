#!/bin/bash

echo "🚀 Generador de Landing Pages Estáticas"
echo "========================================"
echo ""
echo "Generando todas las secciones..."
echo ""

node build-complete.mjs && \
node build-complete-part2.mjs && \
node build-complete-part3.mjs && \
node build-complete-final.mjs

echo ""
echo "✅ ¡Listo! Revisa el archivo: a365/brasil.html"
echo ""
echo "Para generar otro país:"
echo "1. Edita los scripts y cambia 'Brasil' por el país deseado"
echo "2. Ejecuta: npm run build:html"
