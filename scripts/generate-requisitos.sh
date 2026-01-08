#!/bin/bash

echo "🚀 Generador de Landing de Requisitos (PRODUCCIÓN)"
echo "==================================================="
echo ""
echo "Generando todas las secciones..."
echo ""

node build-requisitos.mjs && \
node build-quoter.mjs && \
node build-requisitos-part2.mjs && \
node build-requisitos-part3.mjs && \
node build-requisitos-final.mjs

echo ""
echo "✅ ¡Listo! Revisa el archivo: a365/requisitos.html"
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
echo "📦 Assets remotos:"
echo "   - Single-SPA: assist-365.com"
echo "   - Quoter: assist-365.com/quoter/a365-quoter.js?v=101"
echo "   - Blog API: assist-365.com/blog/br/wp-json/wp/v2/posts"
echo ""
echo "🌐 Listo para producción en Directus"
