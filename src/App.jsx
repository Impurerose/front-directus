import { useEffect, useState } from "react";
import HeroLandings from "./components/HeroLandings";
import SectionImageText from "./components/SectionImageText";
import SectionAccordion from "./components/SectionAccordion";
import SectionFaqs from "./components/SectionFaqs";
import SectionBlog from "./components/SectionBlog";
import PreFooter from "./components/PreFooter";
import SectionCards from "./components/SectionCards";
import SectionPlans from "./components/SectionPlans";
import SectionRequirements from "./components/SectionRequirements";
import SectionQuoter from "./components/SectionQuoter";
import AppRequisitos from "./AppRequisitos";

// Data por defecto para desarrollo (modo dev)
const defaultAccordionItems = [
  {
    title: "Item requisito",
    content:
      "Lorem ipsum dolor sit amet consectetur. Venenatis etiam commodo sed vitae pretium luctus. Egestas pharetra ipsum non nunc. Ut velit ridiculus dolor leo placerat. Penatibus enim nunc enim placerat. Erat sed neque duis dictumst ac vitae. Mattis non turpis quam eu ut. Tellus ultricies ipsum pellentesque accumsan leo nunc luctus.",
  },
  {
    title: "Item requisito",
    content:
      "Lorem ipsum dolor sit amet consectetur. Venenatis etiam commodo sed vitae pretium luctus. Egestas pharetra ipsum non nunc. Ut velit ridiculus dolor leo placerat. Penatibus enim nunc enim placerat. Erat sed neque duis dictumst ac vitae. Mattis non turpis quam eu ut. Tellus ultricies ipsum pellentesque accumsan leo nunc luctus.",
  },
  {
    title: "Item requisito",
    content:
      "Lorem ipsum dolor sit amet consectetur. Venenatis etiam commodo sed vitae pretium luctus. Egestas pharetra ipsum non nunc. Ut velit ridiculus dolor leo placerat. Penatibus enim nunc enim placerat. Erat sed neque duis dictumst ac vitae. Mattis non turpis quam eu ut. Tellus ultricies ipsum pellentesque accumsan leo nunc luctus.",
  },
  {
    title: "Item requisito",
    content:
      "Lorem ipsum dolor sit amet consectetur. Venenatis etiam commodo sed vitae pretium luctus. Egestas pharetra ipsum non nunc. Ut velit ridiculus dolor leo placerat. Penatibus enim nunc enim placerat. Erat sed neque duis dictumst ac vitae. Mattis non turpis quam eu ut. Tellus ultricies ipsum pellentesque accumsan leo nunc luctus.",
  },
];

const defaultFaqItems = [
  {
    title: "Pregunta frecuente destino",
    content:
      "Lorem ipsum dolor sit amet consectetur. Tortor sed non nec gravida in id at. Hendrerit dictum aliquet risus leo nullam morbi. Sit ipsum in arcu risus quam. Tincidunt ac massa fames nibh pharetra molestie tellus. Nibh sed suspendisse morbi felis lacus congue commodo bibendum at. Tortor dolor quis elit leo. Pharetra fames diam viverra felis aliquam. Posuere interdum sed.",
  },
  {
    title: "Pregunta frecuente destino",
    content:
      "Lorem ipsum dolor sit amet consectetur. Tortor sed non nec gravida in id at. Hendrerit dictum aliquet risus leo nullam morbi. Sit ipsum in arcu risus quam. Tincidunt ac massa fames nibh pharetra molestie tellus.",
  },
  {
    title: "Pregunta frecuente destino",
    content:
      "Lorem ipsum dolor sit amet consectetur. Tortor sed non nec gravida in id at. Hendrerit dictum aliquet risus leo nullam morbi. Sit ipsum in arcu risus quam.",
  },
  {
    title: "Pregunta frecuente destino",
    content:
      "Lorem ipsum dolor sit amet consectetur. Tortor sed non nec gravida in id at. Hendrerit dictum aliquet risus leo nullam morbi.",
  },
  {
    title: "Pregunta frecuente destino",
    content:
      "Lorem ipsum dolor sit amet consectetur. Tortor sed non nec gravida in id at. Hendrerit dictum aliquet risus leo nullam morbi. Sit ipsum in arcu risus quam.",
  },
];

function App({ destino = "Brasil", geo = "br", accordionItems = defaultAccordionItems, faqItems = defaultFaqItems } = {}) {
  const [template, setTemplate] = useState("brasil");

  useEffect(() => {
    // Detectar URL param ?template=requisitos
    const params = new URLSearchParams(window.location.search);
    const templateParam = params.get("template");
    if (templateParam === "requisitos") {
      setTemplate("requisitos");
    } else {
      setTemplate("brasil");
    }
  }, []);

  // Renderizar template según URL param
  if (template === "requisitos") {
    return <AppRequisitos destino={destino} geo={geo} />;
  }

  // Template Brasil (default)
  return (
    <>
      <HeroLandings destino={destino} />
      <SectionImageText
        title={`¿Qué necesito para viajar a ${destino}?`}
        description="Lorem ipsum dolor sit amet consectetur. Dictum molestie in tellus vitae. At amet tortor viverra mi faucibus feugiat aliquet vitae sed. Ipsum urna amet facilisis lectus mauris mi nisl risus. Donec nibh metus luctus massa eget nulla sit odio nibh. Quisque dignissim imperdiet id senectus quis volutpat porttitor eu. Viverra bibendum pellentesque nunc ut. Fames diam quam viverra eu dui nec nam blandit vestibulum. At cum aliquam nibh nunc at cras. Viverra commodo nisl volutpat et netus. Ut cursus pretium mi at. Eget odio nunc ullamcorper commodo. Mauris dictum duis luctus non. Phasellus in fringilla massa adipiscing volutpat mauris maecenas."
        imageSrc="https://placehold.co/486x360"
        titleSize="large"
        reverse={false}
      />

      <SectionAccordion
        title={`Documentos necesarios para ingresar a ${destino}`}
        items={accordionItems}
      />

      <SectionImageText
        title={`¿Es obligatorio el seguro de viaje para ${destino}?`}
        description="Lorem ipsum dolor sit amet consectetur. A nibh dolor at mollis nunc platea at. Varius morbi amet viverra lectus turpis a odio ipsum habitasse. Sed tortor vel egestas ut. Lobortis in varius sed nunc sodales id. Lorem arcu sollicitudin imperdiet urna blandit non turpis scelerisque massa. Sed tristique erat viverra."
        imageSrc="https://placehold.co/256x256"
        reverse={true}
      />
      <SectionImageText
        title={`¿Necesitas Visa para ingresar a ${destino}?`}
        description="Lorem ipsum dolor sit amet consectetur. Ipsum tristique sit pellentesque facilisis id. Morbi iaculis at ut mi duis. Porta fringilla ut massa molestie sed. Imperdiet aliquam elit ut malesuada aliquam nisi enim sed. Laoreet ultrices quis etiam amet ut augue eget cursus. Sapien leo elit euismod cursus condimentum morbi."
        imageSrc="https://placehold.co/256x256"
        reverse={false}
      />
      <SectionImageText
        title={`¿Qué vacunas son obligatorias para viajar a ${destino}?`}
        description="Lorem ipsum dolor sit amet consectetur. A nibh dolor at mollis nunc platea at. Varius morbi amet viverra lectus turpis a odio ipsum habitasse. Sed tortor vel egestas ut. Lobortis in varius sed nunc sodales id. Lorem arcu sollicitudin imperdiet urna blandit non turpis scelerisque massa. Sed tristique erat viverra."
        imageSrc="https://placehold.co/256x256"
        reverse={true}
      />

      <SectionAccordion
        title={`¿Qué debes saber de las aduanas y artículos prohibidos para viajar a ${destino}?`}
        items={accordionItems}
      />

      <SectionFaqs
        title={`Todo lo que necesitás saber para viajar a ${destino}`}
        items={faqItems}
      />
      
      {/* Cotizador - En dev muestra placeholder, en producción se monta con Single-SPA */}
      <SectionQuoter destino={destino} geo={geo} />
      
      <SectionBlog geo={geo} />
      <SectionCards />
      <SectionRequirements />
      <SectionPlans />
      <PreFooter />
    </>
  );
}

export default App;
