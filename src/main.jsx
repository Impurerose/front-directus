import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppRequisitos from './AppRequisitos.jsx'
import brasilData from './data/brasil.json'
import requisitosData from './data/requisitos.json'

// Detectar template desde URL: ?template=requisitos
const params = new URLSearchParams(window.location.search);
const template = params.get('template') || 'brasil';

// Seleccionar componente y datos según template
let AppComponent, data;

if (template === 'requisitos') {
  AppComponent = AppRequisitos;
  data = {
    destino: requisitosData.destino,
    geo: 'AR',
    accordionDocumentos: requisitosData.accordionDocumentos,
    accordionAduanas: requisitosData.accordionAduanas,
    faqItems: requisitosData.faqItems
  };
} else {
  // Template Brasil (por defecto)
  AppComponent = App;
  data = {
    destino: brasilData.destino,
    geo: 'BR',
    accordionItems: brasilData.accordionItems,
    faqItems: brasilData.faqItems
  };
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppComponent {...data} />
  </StrictMode>,
)

