#!/bin/bash

echo "🚀 Generador de Landing de Destinos (PRODUCCIÓN)"
echo "================================================"
echo ""
echo "Generando todas las secciones..."
echo ""

node build-destinos.mjs && \
node build-quoter.mjs && \
node build-destinos-part2.mjs && \
node build-destinos-final.mjs

echo ""
echo "✅ ¡Listo! Revisa el archivo: a365/destinos.html"
echo ""
echo "Estructura generada:"
echo "1. Hero - Requisitos para viajar a Brasil en 2025"
echo "2. Cotizador (Single-SPA) con bg-bg-alt-secondary"
echo "3. ImageText - ¿Qué necesito para viajar?"
echo "4. ImageText - ¿Es obligatorio el seguro?"
echo "5. SectionCards - ¿Qué debe incluir tu seguro? (8 coberturas)"
echo "6. SectionPlans - Nuestros planes (4 planes)"
echo "7. SectionRequirements - Requisitos para viajar (Grid 2x2)"
echo "8. FAQs - Preguntas frecuentes"
echo "9. Blog - Últimas guías"
echo "10. PreFooter - CTA final"
echo ""
echo "📦 Assets remotos:"
echo "   - Single-SPA: assist-365.com"
echo "   - Quoter: assist-365.com/quoter/a365-quoter.js?v=101"
echo "   - Blog API: assist-365.com/blog/ar/wp-json/wp/v2/posts"
echo ""
echo "🌐 Listo para producción en Directus"
