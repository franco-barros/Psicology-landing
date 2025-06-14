export interface Testimonial {
  name: string;
  quote: string;
  result: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "María González",
    quote:
      "La terapia con el Dr. Mendoza cambió mi vida completamente. Su enfoque empático y profesional me ayudó a superar mi ansiedad.",
    result: "Excelente",
    avatar: "/images/persona2.png",
  },
  {
    name: "Carlos Rodríguez",
    quote:
      "Excelente profesional. Me ayudó a gestionar el estrés laboral y mejorar mis relaciones interpersonales.",
    result: "Excelente",
    avatar: "/images/persona1.png",
  },
  {
    name: "Ana Martínez",
    quote:
      "Recomiendo 100% sus servicios. Su metodología es efectiva y el ambiente es muy acogedor.",
    result: "Excelente",
    avatar: "/images/persona.png",
  },
];
