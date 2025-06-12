import { IconType } from "react-icons";
import { FaBrain, FaUsers, FaPuzzlePiece } from "react-icons/fa";

export interface Service {
  id: string;
  icon: IconType;
  title: string;
  price: string;
  duration: string;
  description: string;
  features: string[];
  cta: string;
  whatsappLink: string;
}

export const servicesData: Service[] = [
  {
    id: "tcc",
    icon: FaBrain,
    title: "Terapia Cognitivo-Conductual",
    price: "Desde $80",
    duration: "50 min",
    description:
      "Sesiones estructuradas para modificar patrones de pensamiento y comportamiento disfuncionales.",
    features: [
      "Evaluación inicial incluida",
      "Seguimiento personalizado",
      "Material de apoyo incluido",
    ],
    cta: "Más Información",
    whatsappLink: "https://wa.me/5492645878987",
  },
  {
    id: "sistemica",
    icon: FaUsers,
    title: "Terapia Sistémica Familiar",
    price: "Desde $120",
    duration: "60 min",
    description:
      "Análisis de las dinámicas familiares para resolver conflictos y mejorar la comunicación.",
    features: [
      "Evaluación inicial incluida",
      "Seguimiento personalizado",
      "Material de apoyo incluido",
    ],
    cta: "Más Información",
    whatsappLink: "https://wa.me/5492645878987",
  },
  {
    id: "neuro",
    icon: FaPuzzlePiece,
    title: "Neuropsicología Clínica",
    price: "Desde $100",
    duration: "60 min",
    description:
      "Evaluación y rehabilitación de funciones cognitivas afectadas por daño cerebral o trastornos del desarrollo.",
    features: [
      "Evaluación inicial incluida",
      "Seguimiento personalizado",
      "Material de apoyo incluido",
    ],
    cta: "Más Información",
    whatsappLink: "https://wa.me/5492645878987",
  },
];
