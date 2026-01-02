import { renderToStaticMarkup } from 'react-dom/server';
import React from 'react';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Simular iconos de Phosphor como SVG strings
const PhosphorIcons = {
  Files: ({ size = 32, className = '' }) => React.createElement('i', {
    className: `ph-duotone ph-files ${className}`,
    style: { fontSize: `${size}px` }
  }),
  CaretUp: ({ size = 20, className = '' }) => React.createElement('i', {
    className: `ph ph-caret-up ${className}`,
    style: { fontSize: `${size}px` }
  }),
  CaretDown: ({ size = 20, className = '' }) => React.createElement('i', {
    className: `ph ph-caret-down ${className}`,
    style: { fontSize: `${size}px` }
  }),
  Info: ({ size = 48, className = '' }) => React.createElement('i', {
    className: `ph-duotone ph-info ${className}`,
    style: { fontSize: `${size}px` }
  }),
  AirplaneTilt: ({ size = 40, className = '' }) => React.createElement('i', {
    className: `ph ph-airplane-tilt ${className}`,
    style: { fontSize: `${size}px` }
  }),
  Mountains: ({ size = 40, className = '' }) => React.createElement('i', {
    className: `ph ph-mountains ${className}`,
    style: { fontSize: `${size}px` }
  }),
  ArrowRight: ({ size = 16, className = '' }) => React.createElement('i', {
    className: `ph-bold ph-arrow-right ${className}`,
    style: { fontSize: `${size}px` }
  }),
  FirstAid: ({ size = 40, className = '' }) => React.createElement('i', {
    className: `ph-duotone ph-first-aid ${className}`,
    style: { fontSize: `${size}px` }
  }),
  Heartbeat: ({ size = 40, className = '' }) => React.createElement('i', {
    className: `ph-duotone ph-heartbeat ${className}`,
    style: { fontSize: `${size}px` }
  }),
  Suitcase: ({ size = 40, className = '' }) => React.createElement('i', {
    className: `ph-duotone ph-suitcase ${className}`,
    style: { fontSize: `${size}px` }
  }),
  Pill: ({ size = 40, className = '' }) => React.createElement('i', {
    className: `ph-duotone ph-pill ${className}`,
    style: { fontSize: `${size}px` }
  }),
  Stethoscope: ({ size = 40, className = '' }) => React.createElement('i', {
    className: `ph-duotone ph-stethoscope ${className}`,
    style: { fontSize: `${size}px` }
  }),
  GlobeHemisphereWest: ({ size = 40, className = '' }) => React.createElement('i', {
    className: `ph-duotone ph-globe-hemisphere-west ${className}`,
    style: { fontSize: `${size}px` }
  }),
  Tooth: ({ size = 40, className = '' }) => React.createElement('i', {
    className: `ph-duotone ph-tooth ${className}`,
    style: { fontSize: `${size}px` }
  }),
  Hospital: ({ size = 40, className = '' }) => React.createElement('i', {
    className: `ph-duotone ph-hospital ${className}`,
    style: { fontSize: `${size}px` }
  }),
  Laptop: ({ size = 40, className = '' }) => React.createElement('i', {
    className: `ph-duotone ph-laptop ${className}`,
    style: { fontSize: `${size}px` }
  }),
  HandHeart: ({ size = 40, className = '' }) => React.createElement('i', {
    className: `ph-duotone ph-hand-heart ${className}`,
    style: { fontSize: `${size}px` }
  }),
  SuitcaseRolling: ({ size = 40, className = '' }) => React.createElement('i', {
    className: `ph-duotone ph-suitcase-rolling ${className}`,
    style: { fontSize: `${size}px` }
  }),
  PawPrint: ({ size = 40, className = '' }) => React.createElement('i', {
    className: `ph-duotone ph-paw-print ${className}`,
    style: { fontSize: `${size}px` }
  }),
  ShieldPlus: ({ size = 24, className = '' }) => React.createElement('i', {
    className: `ph ph-shield-plus ${className}`,
    style: { fontSize: `${size}px` }
  }),
  FirstAidKit: ({ size = 24, className = '' }) => React.createElement('i', {
    className: `ph ph-first-aid-kit ${className}`,
    style: { fontSize: `${size}px` }
  })
};

console.log('📦 Preparando generación de HTML estático...\n');
console.log('ℹ️  Este script genera una aproximación del HTML.');
console.log('   Para el HTML final perfecto, sigue estos pasos:\n');
console.log('1. Ejecuta: npm run dev');
console.log('2. Abre http://localhost:5174 en tu navegador');
console.log('3. Click derecho → Inspeccionar');
console.log('4. Copia el HTML del <div id="root">...</div>');
console.log('5. Pégalo en dist/mexico.html donde dice "PASO 1"\n');
console.log('='.repeat(60) + '\n');
