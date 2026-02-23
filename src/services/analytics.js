/**
 * Analytics Service
 * Sistema centralizado de tracking para eventos de dataLayer
 * @module services/analytics
 */

/**
 * Formatea timestamp en formato compatible con analytics
 * @returns {string} Fecha en formato YYYY-MM-DD HH:mm:ss
 */
const formatTimestamp = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

/**
 * Obtiene el current_section basado en la URL actual
 * Extrae la última parte del path y genera "landing [última-parte]"
 * @returns {string} Current section (ej: "landing yendo-a-colombia")
 */
const getCurrentSection = () => {
  try {
    if (typeof window === 'undefined') {
      return 'landing';
    }
    
    const pathname = window.location.pathname;
    const parts = pathname.split('/').filter(part => part.length > 0);
    
    if (parts.length === 0) {
      return 'landing';
    }
    
    const lastPart = parts[parts.length - 1];
    return `landing ${lastPart}`;
  } catch (error) {
    console.error('[Analytics] Error obteniendo current_section:', error);
    return 'landing';
  }
};

/**
 * Función core para enviar eventos al dataLayer
 * @private
 * @param {Object} eventData - Datos del evento a enviar
 */
const pushToDataLayer = (eventData) => {
  try {
    // Asegurar que dataLayer existe
    if (typeof window === 'undefined') {
      console.warn('[Analytics] window no disponible');
      return;
    }

    if (!window.dataLayer) {
      console.warn('[Analytics] dataLayer no inicializado');
      window.dataLayer = [];
    }

    // Enviar evento
    window.dataLayer.push(eventData);
    
    // Log en desarrollo
    if (import.meta.env.DEV) {
      console.log('📊 [Analytics] Evento enviado:', eventData);
    }
  } catch (error) {
    console.error('[Analytics] Error enviando evento:', error);
  }
};

/**
 * Trackea cuando el usuario hace click en un FAQ para expandirlo
 * Se dispara al ABRIR un acordeón de preguntas frecuentes
 * El current_section se genera automáticamente desde la URL actual
 * 
 * @example
 * trackFaqDropdownClick();
 */
export const trackFaqDropdownClick = () => {
  try {
    pushToDataLayer({
      event: 'lp_click_faq_dropdown',
      eventProperties: {
        timestamp_event: formatTimestamp(),
        current_section: getCurrentSection(),
      }
    });
  } catch (error) {
    console.error('[Analytics] Error tracking FAQ click:', error);
  }
};

/**
 * Trackea cuando el usuario hace click en el CTA del blog
 * Se dispara al hacer click en "Ir al blog"
 * El current_section se genera automáticamente desde la URL actual
 * 
 * @example
 * trackBlogCtaClick();
 */
export const trackBlogCtaClick = () => {
  try {
    pushToDataLayer({
      event: 'lp_blog_cta_click',
      eventProperties: {
        timestamp_event: formatTimestamp(),
        current_section: getCurrentSection(),
      }
    });
  } catch (error) {
    console.error('[Analytics] Error tracking blog CTA click:', error);
  }
};

/**
 * Trackea cuando el usuario hace click en "Cotizá tu asistencia" desde el PreFooter
 * Se dispara al hacer click en el CTA principal del PreFooter
 * El current_section se genera automáticamente desde la URL actual
 * 
 * @example
 * trackQuoteTravelInsurance();
 */
export const trackQuoteTravelInsurance = () => {
  try {
    pushToDataLayer({
      event: 'cko_quote_travel_insurance',
      eventProperties: {
        timestamp_event: formatTimestamp(),
        current_section: getCurrentSection(),
      }
    });
  } catch (error) {
    console.error('[Analytics] Error tracking quote travel insurance:', error);
  }
};
