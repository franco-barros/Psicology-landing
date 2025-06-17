import { GraduationCap, BookOpenCheck, Users, Globe2 } from "lucide-react";

export interface Service {
  id: string;
  icon: React.ElementType; // CAMBIADO
  title: string;
  description: string;
  features: string[];
  cta: string;
  whatsappLink: string;
}

export const servicesData: Service[] = [
  {
    id: "abordajes",
    icon: BookOpenCheck, // sin <>
    title: "Abordajes Terapéuticos",
    description:
      "Psicoterapia basada en ACT y DBT con enfoque contextual y científico.",
    features: [
      "Diplomado en Abordajes Contextuales",
      "ACT (Terapia de Aceptación y Compromiso)",
      "DBT (Terapia Dialéctico Conductual)",
    ],
    cta: "Consultar por terapia",
    whatsappLink: "https://wa.me/xxxxxxxxxxx",
  },
  {
    id: "formacion",
    icon: GraduationCap,
    title: "Formación Académica",
    description:
      "Psicólogo M.P. 14636. Formación continua en intervenciones cognitivo-conductuales.",
    features: [
      "Lic. en Psicología – UNC",
      "Dip. en Psicoterapia Cognitiva (AldOEL)",
    ],
    cta: "Saber más",
    whatsappLink: "https://wa.me/xxxxxxxxxxx",
  },
  {
    id: "membresias",
    icon: Users,
    title: "Membresías Profesionales",
    description:
      "Miembro activo de la comunidad de terapias contextuales en Argentina.",
    features: ["ACBS Member", "Chapter Argentina", "Formación continua"],
    cta: "Ver perfil profesional",
    whatsappLink: "https://wa.me/xxxxxxxxxxx",
  },
  {
    id: "intervencion",
    icon: Globe2,
    title: "Áreas de Intervención",
    description:
      "Experiencia clínica en ansiedad, depresión y desafíos relacionales.",
    features: [
      "Dificultades académico-laborales",
      "Relaciones interpersonales",
      "Trabajo con Expats",
    ],
    cta: "Solicitar entrevista",
    whatsappLink: "https://wa.me/xxxxxxxxxxx",
  },
];
