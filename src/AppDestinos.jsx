import HeroLandings from "./components/HeroLandings";
import SectionQuoter from "./components/SectionQuoter";
import SectionImageText from "./components/SectionImageText";
import SectionAccordion from "./components/SectionAccordion";
import SectionFaqs from "./components/SectionFaqs";
import SectionBlog from "./components/SectionBlog";
import PreFooter from "./components/PreFooter";
import SectionCards from "./components/SectionCards";
import SectionPlans from "./components/SectionPlans";
import SectionRequirements from "./components/SectionRequirements";
import SectionImageList from "./components/SectionImageList";

// Data por defecto para desarrollo (modo dev)
const defaultAccordionDocumentos = [
  {
    title: "Pasaporte vigente",
    content:
      "Tu pasaporte debe tener una validez mínima de 6 meses desde la fecha de ingreso. Asegúrate de verificar la fecha de vencimiento antes de viajar.",
  },
  {
    title: "Seguro de viaje",
    content:
      "Es altamente recomendable contratar un seguro de viaje que cubra gastos médicos, cancelaciones y pérdida de equipaje durante tu estadía.",
  },
  {
    title: "Comprobante de alojamiento",
    content:
      "Reserva de hotel, Airbnb o carta de invitación si te hospedas con familiares o amigos.",
  },
  {
    title: "Pasaje de regreso",
    content:
      "Ticket aéreo o comprobante de viaje que demuestre tu fecha de salida del país.",
  },
];

const defaultAccordionAduanas = [
  {
    title: "Productos prohibidos",
    content:
      "No puedes ingresar carnes, lácteos sin procesar, frutas frescas ni productos de origen animal sin la documentación sanitaria correspondiente.",
  },
  {
    title: "Límites de efectivo",
    content:
      "Debes declarar cantidades superiores al límite establecido por la aduana. Consulta los montos actualizados antes de viajar.",
  },
  {
    title: "Electrónicos y tecnología",
    content:
      "Generalmente se permite ingresar dispositivos electrónicos de uso personal. Equipos profesionales pueden requerir documentación adicional.",
  },
  {
    title: "Bebidas alcohólicas y tabaco",
    content:
      "Existen límites específicos para el ingreso de bebidas alcohólicas y productos de tabaco. Verifica las cantidades permitidas.",
  },
];

const defaultFaqItems = [
  {
    title: "¿Necesito visa para viajar?",
    content:
      "Depende de tu nacionalidad. Muchos países de América Latina tienen acuerdos de turismo que permiten el ingreso sin visa por períodos específicos. Consulta con el consulado correspondiente.",
  },
  {
    title: "¿Qué vacunas necesito?",
    content:
      "Algunas vacunas pueden ser recomendadas u obligatorias dependiendo del destino. Consulta con un centro de vacunación internacional antes de tu viaje.",
  },
  {
    title: "¿Cuánto dinero puedo ingresar sin declarar?",
    content:
      "Cada país tiene límites diferentes. Es importante conocer estos montos para evitar problemas en aduana.",
  },
  {
    title: "¿Cuánto tiempo puedo permanecer como turista?",
    content:
      "Generalmente entre 30 y 90 días, dependiendo del país y tu nacionalidad. Este período puede ser prorrogable según las regulaciones locales.",
  },
  {
    title: "¿Necesito certificado de vacunación COVID-19?",
    content:
      "Verifica los requisitos actualizados antes de viajar, ya que las regulaciones sanitarias pueden cambiar.",
  },
];

function AppDestinos({
  destino = "[Destino]",
  geo = "ar",
  accordionDocumentos = defaultAccordionDocumentos,
  accordionAduanas = defaultAccordionAduanas,
  faqItems = defaultFaqItems,
} = {}) {
  return (
    <>
      {/* Navbar mount point - System.import cargará el navbar aquí */}
      <nav id="navbar-mount"></nav>

      {/* Main Content */}
      <main>
        {/* 1. Hero - Requisitos para viajar */}
        <HeroLandings
          destino={destino}
          customTitle={`Requisitos para viajar a ${destino} en 2025`}
        />

        {/* 2. Cotizador - Segunda posición (después del Hero) */}

        <SectionQuoter destino={destino} geo={geo} />

        {/* 3. ImageText - ¿Qué necesito para viajar? */}
        <SectionImageText
          title={`¿Qué necesito para viajar a ${destino}?`}
          description="Viajar a este destino abre las puertas a un universo de diversidad cultural, paisajes impresionantes y una energía contagiosa. Desde las playas paradisíacas hasta la selva exuberante, este país ofrece experiencias únicas para todos los gustos. Prepararte adecuadamente con un seguro de viaje te permitirá disfrutar al máximo de tu aventura."
          imageSrc="https://placehold.co/486x360"
          titleSize="large"
          reverse={false}
        />

        {/* 5. ImageText - ¿Es obligatorio el seguro? */}
        <SectionImageText
          title={`¿Es obligatorio el seguro de viaje para ${destino}?`}
          description="Aunque no siempre es obligatorio, contar con un seguro de viaje es altamente recomendable para cualquier destino internacional. Un seguro te protege ante emergencias médicas, cancelaciones de vuelos, pérdida de equipaje y muchas otras situaciones imprevistas que pueden ocurrir durante tu viaje."
          imageSrc="https://placehold.co/256x256/0ea5e9/ffffff"
          reverse={true}
        />

        {/* 6. Cards Section - Destinos populares */}
        <SectionCards />

        {/* 7. Plans Section - Planes de seguro recomendados */}
        <SectionPlans />

        {/* 8. Requirements Section - Requisitos destacados */}
        <SectionRequirements />

        {/* 9. FAQs - Preguntas frecuentes */}
        <SectionFaqs
          title={`Todo lo que necesitás saber para viajar a ${destino}`}
          items={faqItems}
        />
        {/* 10. Blog - Guías y consejos */}
        <SectionBlog geo={geo} />
        {/* 11. PreFooter - CTA final */}
        <PreFooter />
      </main>

      {/* Footer mount point - System.import cargará el footer aquí */}
      <footer id="footer-mount"></footer>
    </>
  );
}

export default AppDestinos;
