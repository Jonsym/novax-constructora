export const site = {
  name: "Novax Constructora",
  shortName: "Novax",
  tagline: "Construcción precisa. Resultados sólidos.",
  phone: "+52 55 4170 8820",
  phoneHref: "tel:+525541708820",
  email: "obras@novax.mx",
  emailHref: "mailto:obras@novax.mx",
  whatsapp: "+52 55 8932 1175",
  whatsappHref: "https://wa.me/525589321175",
  address: "Av. Reforma 1810, Piso 9 · Ciudad de México",
  established: "EST. 2009",
  license: "RUC-COMEX · NMX-AA-164",
};

export const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#proceso", label: "Proceso" },
];

export const projectTypes = [
  "Residencial",
  "Comercial",
  "Industrial",
  "Remodelación",
  "Supervisión de obra",
  "Mantenimiento",
  "Otro",
];

export type Project = {
  slug: string;
  title: string;
  category: "Residencial" | "Comercial" | "Industrial" | "Remodelación";
  description: string;
  shortDescription: string;
  location: string;
  year: string;
  scope: string;
  duration: string;
  keyResult: string;
  image: string;
};

export const projects: Project[] = [
  {
    slug: "edificio-corporativo-lumen",
    title: "Edificio Corporativo Lumen",
    category: "Comercial",
    description:
      "Torre de oficinas Clase A de 14 niveles con certificación LEED Silver, fachada acristalada de alta eficiencia térmica y core estructural reforzado para zona sísmica B.",
    shortDescription:
      "Torre corporativa de 14 niveles con certificación LEED Silver.",
    location: "Ciudad de México",
    year: "2024",
    scope: "4,200 m²",
    duration: "22 meses",
    keyResult: "Entrega 3 semanas antes del cronograma",
    image:
      "https://images.unsplash.com/photo-1545987796-200677ee1011?auto=format&fit=crop&w=2000&q=80",
  },
  {
    slug: "residencia-bosques",
    title: "Residencia Bosques",
    category: "Residencial",
    description:
      "Casa habitación de tres niveles con domótica integral, sótano con cava de vinos y diseño biofílico orientado al jardín posterior con doble altura.",
    shortDescription:
      "Residencia de lujo con domótica integral y jardín interior.",
    location: "Monterrey, N.L.",
    year: "2024",
    scope: "620 m²",
    duration: "14 meses",
    keyResult: "Acabados premium dentro del presupuesto cerrado",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80",
  },
  {
    slug: "centro-logistico-queretaro",
    title: "Centro Logístico Querétaro",
    category: "Industrial",
    description:
      "Nave logística con muelle de carga para 18 camiones, oficinas administrativas en mezzanine y áreas de servicios para 240 colaboradores en operación 24/7.",
    shortDescription:
      "Nave logística con 18 muelles y oficinas administrativas.",
    location: "Querétaro, Qro.",
    year: "2023",
    scope: "8,500 m²",
    duration: "11 meses",
    keyResult: "Operación arrancada sin paros desde la entrega",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=80",
  },
  {
    slug: "departamento-polanco",
    title: "Departamento Polanco",
    category: "Remodelación",
    description:
      "Reestructuración integral de departamento histórico con redistribución total, reforzamiento estructural ligero y acabados arquitectónicos contemporáneos.",
    shortDescription:
      "Remodelación integral premium con reforzamiento estructural.",
    location: "Ciudad de México",
    year: "2023",
    scope: "180 m²",
    duration: "6 meses",
    keyResult: "Plusvalía estimada +35% sobre la inversión",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=80",
  },
  {
    slug: "plaza-comercial-roma",
    title: "Plaza Comercial Roma",
    category: "Comercial",
    description:
      "Renovación de plaza retail boutique con 14 locales comerciales, terraza gastronómica al aire libre y nueva fachada con identidad arquitectónica unificada.",
    shortDescription:
      "Plaza retail boutique con 14 locales y terraza gastronómica.",
    location: "Ciudad de México",
    year: "2024",
    scope: "2,800 m²",
    duration: "9 meses",
    keyResult: "100% de ocupación a la apertura",
    image:
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=2000&q=80",
  },
  {
    slug: "casa-valle-real",
    title: "Casa Valle Real",
    category: "Residencial",
    description:
      "Residencia familiar de planta abierta con alberca infinity, terraza panorámica techada y suite principal orientada al campo de golf.",
    shortDescription: "Residencia con alberca infinity y vista al golf.",
    location: "Guadalajara, Jal.",
    year: "2024",
    scope: "480 m²",
    duration: "12 meses",
    keyResult: "Reconocida en los premios estatales de arquitectura",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2000&q=80",
  },
];

export const clients = [
  "Grupo Marhnos",
  "Prudential R.E.",
  "Cinépolis",
  "FEMSA Comercial",
  "Liverpool",
  "Banorte Patrimonial",
  "Grupo Bimbo",
  "Mitre Realty",
];

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  avatar: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Trabajamos con Novax en dos torres corporativas. Su residente entendió a la perfección los plazos comerciales y entregó sin observaciones mayores.",
    author: "Mariana Robles",
    role: "Dir. de Desarrollo, Marhnos Inmobiliaria",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=240&q=80",
  },
  {
    quote:
      "Lo que más valoramos es la bitácora digital semanal. Nunca tuvimos sorpresas en el presupuesto ni en el cronograma. Comunicación impecable.",
    author: "Ing. Daniel Sánchez",
    role: "CFO, Plaza Comercial Roma",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=80",
  },
  {
    quote:
      "Construyeron nuestra residencia con un nivel de acabado que esperábamos de un despacho boutique. Recomendados al cien por ciento.",
    author: "Familia Garza Sada",
    role: "Cliente residencial, Monterrey",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=240&q=80",
  },
];
