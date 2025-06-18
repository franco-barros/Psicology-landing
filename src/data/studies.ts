import { GraduationCap, BookOpenCheck, ClipboardX } from "lucide-react";

export interface Study {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  features?: string[];
  cta?: string;
  onClick?: () => void;
}

export const studiesData: Study[] = [
  {
    id: "abordajes-contextuales",
    icon: BookOpenCheck,
    title: "Abordajes Contextuales",
    description:
      "Psicoterapia basada en ACT y DBT con enfoque contextual y científico.",
    features: [
      "Diplomado en Abordajes Comportamentales Contextuales",
      "Fundación CIPCO",
      "Diplomado — 2023",
    ],
    cta: "Ver Perfil Profesional",
    onClick: () => window.open("https://wa.me/xxxxxxxxxxx", "_blank"),
  },
  {
    id: "formacion-academica",
    icon: GraduationCap,
    title: "Formación Académica",
    description:
      "Psicólogo M.P. 14636. Formación continua en intervenciones cognitivo-conductuales.",
    features: [
      "Lic. en Psicología – UNC",
      "Universidad Nacional de Córdoba",
      "Licenciatura — 2018",
    ],
    cta: "Ver Perfil Profesional",
    onClick: () => window.open("https://wa.me/xxxxxxxxxxx", "_blank"),
  },
  {
    id: "psicoterapia-cognitiva",
    icon: ClipboardX,
    title: "Psicoterapia Cognitiva",
    description:
      "Especialización en técnicas cognitivo-conductuales y terapias de tercera generación.",
    features: ["Dip. en Psicoterapia Cognitiva", "AldOEL", "Diplomado — 2020"],
    cta: "Ver Perfil Profesional",
    onClick: () => window.open("https://wa.me/xxxxxxxxxxx", "_blank"),
  },
];
