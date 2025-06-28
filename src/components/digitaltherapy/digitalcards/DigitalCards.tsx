"use client";

import React from "react";
import styles from "../../../styles/digitaltherapy/DigitalCards.module.css";
import { CarouselDigitalTherapy } from "../carouseldigitaltherapy";
import * as LucideIcons from "lucide-react";

const ventajas = [
  {
    title: "Accesibilidad Total",
    description:
      "Recibe terapia desde cualquier lugar del mundo, eliminando barreras geográficas y de movilidad.",
    icon: LucideIcons.Globe,
    color: "#4caf50",
  },
  {
    title: "Flexibilidad Horaria",
    description:
      "Horarios adaptados a tu rutina, incluyendo sesiones en horarios extendidos y fines de semana.",
    icon: LucideIcons.Clock,
    color: "#ff9800",
  },
  {
    title: "Privacidad y Comodidad",
    description:
      "Sesiones desde tu espacio seguro, con total confidencialidad y sin preocupaciones de transporte.",
    icon: LucideIcons.Home,
    color: "#9c27b0",
  },
];

const tecnologia = [
  {
    title: "Videoconferencia HD",
    description:
      "Plataforma segura con video y audio de alta calidad para una comunicación óptima.",
    icon: LucideIcons.Video,
    color: "#2196f3",
  },
  {
    title: "Encriptación Total",
    description:
      "Todas las sesiones están protegidas con encriptación de extremo a extremo.",
    icon: LucideIcons.Lock,
    color: "#795548",
  },
  {
    title: "Soporte Técnico",
    description:
      "Asistencia técnica disponible para garantizar una experiencia sin interrupciones.",
    icon: LucideIcons.Headphones,
    color: "#009688",
  },
];

const comoFuncionaItems = [
  "Agenda tu cita online",
  "Recibe el enlace seguro por email",
  "Conéctate desde cualquier dispositivo",
].map((desc, i) => ({
  title: `Paso ${i + 1}`,
  description: desc,
  icon: LucideIcons.Clock,
  color: "#ff9800",
}));

const mismaEfectividadItems = [
  "Estudios científicos validan su eficacia",
  "Mismas técnicas terapéuticas aplicadas",
  "Resultados equivalentes a terapia presencial",
].map((desc) => ({
  title: "",
  description: desc,
  icon: LucideIcons.CheckCircle,
  color: "#4caf50",
}));

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
    title: "Misma Efectividad Comprobada",
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
                        <Icon size={28} color={color} />
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
