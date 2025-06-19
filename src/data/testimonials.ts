export interface Testimonial {
  name: string;
  quote: string;
  result: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "María González",
    quote: "Su enfoque empático y profesional me ayudó a superar mi ansiedad.",
    result: "Excelente",
    avatar: "/images/persona2.png",
  },
  {
    name: "Carlos Rodríguez",
    quote: "Me ayudó a gestionar el estrés laboral y mejorar mis relaciones.",
    result: "Excelente",
    avatar: "/images/persona1.png",
  },
  {
    name: "Ana Martínez",
    quote: "Su metodología es efectiva y el ambiente es muy acogedor.",
    result: "Excelente",
    avatar: "/images/persona.png",
  },
  {
    name: "Luis Fernández",
    quote: "Muy agradecido por el compromiso y la calidez.",
    result: "Muy Bueno",
    avatar: "/images/persona.png",
  },
  {
    name: "Sofía Ramírez",
    quote: "Me sentí escuchada y comprendida desde la primera sesión.",
    result: "Excelente",
    avatar: "/images/persona.png",
  },
  {
    name: "Julián Pérez",
    quote: "Realmente marca la diferencia en la vida de uno.",
    result: "Muy Bueno",
    avatar: "/images/persona.png",
  },
];
