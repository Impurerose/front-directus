/**
 * SectionQuoter - Placeholder para el cotizador
 *
 * En DESARROLLO (npm run dev):
 *   - Muestra un placeholder visual del cotizador
 *   - No carga el cotizador real (evita conflictos React 17 vs 19)
 *
 * En PRODUCCIÓN (HTML generado):
 *   - El div#quoter-mount será usado por Single-SPA
 *   - El placeholder se reemplaza por el cotizador real
 */

const SectionQuoter = ({ destino = "[Destino]", geo = "ar" }) => {
  return (
    <div className="w-full py-6 bg-[#0059BA] max-w-full md:max-w-[834px] xl:max-w-[1366px] mx-auto relative z-[100]">
      <div className="px-4 max-w-[390px] md:max-w-[548px] lg:max-w-[1200px] 2xl:max-w-[1366px] mx-auto lg:px-0">
        {/* 
          Mount Point del Cotizador
          En producción, Single-SPA montará el cotizador aquí
        */}
        <div id="quoter-mount" data-geo={geo} className="max-w-[926px] mx-auto">
          {/* 
            PLACEHOLDER VISUAL (solo visible en desarrollo)
            En producción este contenido será reemplazado por el cotizador real
          */}
          <div className="bg-white/80 rounded-2xl p-6 shadow-lg">
            <div className="text-center py-12">
              <div className="inline-block mb-4">
                <svg
                  className="w-16 h-16 text-[#0059BA] animate-pulse"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Cotizador de Seguros
              </h3>
              <p className="text-gray-500 text-sm">
                En el HTML final, aquí se cargará el cotizador interactivo
              </p>

              {/* Mockup visual del formulario */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                <div className="bg-gray-100 rounded-lg p-4 h-14 flex items-center text-left">
                  <span className="text-gray-400 text-sm">
                    ¿A dónde viajás?
                  </span>
                </div>
                <div className="bg-gray-100 rounded-lg p-4 h-14 flex items-center text-left">
                  <span className="text-gray-400 text-sm">¿Cuándo viajás?</span>
                </div>
                <div className="bg-gray-100 rounded-lg p-4 h-14 flex items-center text-left">
                  <span className="text-gray-400 text-sm">¿Cuándo volvés?</span>
                </div>
                <div className="bg-[#0059BA] rounded-lg p-4 h-14 flex items-center justify-center">
                  <span className="text-white font-semibold">Cotizar</span>
                </div>
              </div>

              <div className="mt-6 text-xs text-gray-400">
                💡 Modo desarrollo - El cotizador real se carga en producción
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionQuoter;
