import { GraduationCap, BookOpenCheck, ClipboardX } from "lucide-react";
import type { Study } from "../types/study";

export const studiesData: Study[] = [
  {
    id: "abordajes-contextuales",
    type: "Diplomado",
    date: "2023",
    icon: BookOpenCheck,
    title: "Abordajes Contextuales",
    description:
      "Psicoterapia basada en ACT y DBT con enfoque contextual y científico.",
    features: [
      "Abordajes Comportamentales Contextuales",
      "Fundación CIPCO",
      "Diplomado — 2023",
    ],
    cta: "Ver Perfil Profesional",
    onClick: () => window.open("https://wa.me/xxxxxxxxxxx", "_blank"),
  },
  {
    id: "formacion-academica",
    type: "Licenciatura",
    date: "2018",
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
    type: "Diplomado",
    date: "2020",
    icon: ClipboardX,
    title: "Psicoterapia Cognitiva",
    description:
      "Especialización en técnicas cognitivo-conductuales y terapias de tercera generación.",
    features: ["Dip. en Psicoterapia Cognitiva", "AldOEL", "Diplomado — 2020"],
    cta: "Ver Perfil Profesional",
    onClick: () => window.open("https://wa.me/xxxxxxxxxxx", "_blank"),
  },
];
