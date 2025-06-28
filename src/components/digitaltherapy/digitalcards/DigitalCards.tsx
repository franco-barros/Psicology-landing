"use client";

import React from "react";
import styles from "../../../styles/digitaltherapy/DigitalCards.module.css";
import { CarouselDigitalTherapy } from "../carouseldigitaltherapy";
import * as LucideIcons from "lucide-react";

const ventajas = [
  {
    title: "Accesibilidad Total",
    description: "Terapia desde cualquier lugar, sin límites geográficos.",
    icon: LucideIcons.Globe,
    color: "#4caf50",
  },
  {
    title: "Flexibilidad Horaria",
    description: "Sesiones adaptadas a tu rutina, incluso fines de semana.",
    icon: LucideIcons.Clock,
    color: "#ff9800",
  },
  {
    title: "Privacidad y Comodidad",
    description: "Desde tu espacio seguro, con total confidencialidad.",
    icon: LucideIcons.Home,
    color: "#9c27b0",
  },
];

const tecnologia = [
  {
    title: "Videoconferencia HD",
    description: "Audio y video seguros y de alta calidad.",
    icon: LucideIcons.Video,
    color: "#2196f3",
  },
  {
    title: "Encriptación Total",
    description: "Protección completa con cifrado extremo a extremo.",
    icon: LucideIcons.Lock,
    color: "#795548",
  },
  {
    title: "Soporte Técnico",
    description: "Asistencia disponible para resolver cualquier problema.",
    icon: LucideIcons.Headphones,
    color: "#009688",
  },
];

const comoFuncionaItems = [
  "Agenda tu cita online",
  "Recibe el enlace seguro por email",
  "Conéctate desde cualquier lugar",
  "Comienza la terapia",
].map((desc, i) => ({
  title: `Paso ${i + 1}`,
  description: desc,
  icon: LucideIcons.Clock,
  color: "#ff9800",
}));

const mismaEfectividadItems = [
  {
    title: "Validación Científica",
    description: "Eficacia comprobada",
    icon: LucideIcons.CheckCircle,
    color: "#4caf50",
  },
  {
    title: "Técnicas Aplicadas",
    description: "Mismas técnicas usadas",
    icon: LucideIcons.CheckCircle,
    color: "#4caf50",
  },
  {
    title: "Resultados",
    description: "Igual efectividad",
    icon: LucideIcons.CheckCircle,
    color: "#4caf50",
  },
  {
    title: "Privacidad",
    description: "Confidencialidad garantizada",
    icon: LucideIcons.CheckCircle,
    color: "#4caf50",
  },
];

const allCards = [
  {
    title: "Ventajas de la Terapia Online",
    items: ventajas,
    gradientClass: "card1",
  },
  {
    title: "Tecnología Segura",
    items: tecnologia,
    gradientClass: "card2",
  },
  {
    title: "¿Cómo Funciona?",
    items: comoFuncionaItems,
    gradientClass: "card3",
  },
  {
    title: "Misma Efectividad ",
    items: mismaEfectividadItems,
    gradientClass: "card4",
  },
];

const DigitalCards = () => {
  return (
    <>
      <div className={styles.carouselMobile}>
        <CarouselDigitalTherapy cards={allCards} />
      </div>

      <div className={styles.cardsDesktop}>
        <div className={styles.cardsGrid}>
          {allCards.map((card, index) => (
            <div
              key={index}
              className={`${styles.carouselCard} ${styles[card.gradientClass]}`}
            >
              <h3 className={styles.carouselTitle}>{card.title}</h3>
              <div className={styles.motionDiv}>
                {card.items.map(
                  ({ title, description, icon: Icon, color }, i) => (
                    <div key={i} className={styles.carouselItem}>
                      <div className={styles.iconWrapper}>
                        <Icon size={26} color={color} />
                      </div>
                      <div>
                        {title && <strong>{title}</strong>}
                        <p>{description}</p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DigitalCards;
