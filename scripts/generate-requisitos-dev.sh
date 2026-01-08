#!/bin/bash

echo "🚀 Generador de Landing de Requisitos (DESARROLLO)"
echo "==================================================="
echo ""
echo "Generando todas las secciones..."
echo ""

node build-requisitos-dev.mjs && \
node build-quoter.mjs && \
node build-requisitos-part2.mjs && \
node build-requisitos-part3.mjs && \
node build-requisitos-final-dev.mjs

echo ""
echo "✅ ¡Listo! Revisa el archivo: a365/requisitos-dev.html"
echo ""
echo "Estructura generada:"
echo "1. Hero - Requisitos para viajar a Brasil en 2025"
echo "2. Cotizador (Single-SPA) con bg-bg-alt-secondary"
echo "3. ImageText - ¿Qué necesito para viajar?"
echo "4. Accordion - Documentos necesarios"
echo "5-7. 3x ImageText - Seguro, Visa, Vacunas"
echo "8. Accordion - Aduanas y artículos prohibidos"
echo "9. FAQs - Preguntas frecuentes"
echo "10. Blog - Últimas guías"
echo "11. PreFooter - CTA final"
echo ""
echo "📦 Assets locales (localhost):"
echo "   - Quoter: localhost:5006/a365-quoter.js"
echo "   - API: localhost:5001/a365-api.js"
echo "   - Core: localhost:5003/a365-core.js"
echo "   - DSys: localhost:5057/a365-dsys.js"
echo "   - Blog API: localhost:3001/br/wp-json/wp/v2/posts"
echo ""
echo "Para probar localmente:"
echo "   cd /home/impurerose/dev/directus/a365"
echo "   python3 -m http.server 8080"
echo "   Abrir: http://localhost:8080/requisitos-dev.html"
echo ""
echo "⚠️  Asegúrate de que todos los servidores locales estén corriendo:"
echo "   - Quoter: npm run dev en /quoter"
echo "   - API: npm run dev en /api"
echo "   - Core: npm run dev en /core"
echo "   - DSys: npm run dev en /dsys"
