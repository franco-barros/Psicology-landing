"use client";

import React from "react";
import styles from "../../../styles/digitaltherapy/DigitalTarifas.module.css";
import { CarouselTarifa } from "../carouseltarifa";
import * as LucideIcons from "lucide-react";

const tarifas = [
  {
    title: "Sesión Individual",
    duration: "50 minutos",
    benefits: [
      "Terapia personalizada",
      "Grabación opcional",
      "Material de apoyo",
    ],
    popular: false,
    icon: LucideIcons.User, // icono de fondo
    color: "#000",
  },
  {
    title: "Paquete 4 Sesiones",
    duration: "4 sesiones de 50 min",
    benefits: [
      "Seguimiento entre sesiones",
      "Plan personalizado",
      "Material de apoyo",
    ],
    popular: true,
    icon: LucideIcons.CheckCircle,
    color: "#000",
  },
  {
    title: "Sesión de Pareja",
    duration: "75 minutos",
    benefits: [
      "Terapia de pareja",
      "Ejercicios para casa",
      "Material de apoyo",
    ],
    popular: false,
    icon: LucideIcons.Users,
    color: "#000",
  },
];

const DigitalTarifas: React.FC = () => {
  return (
    <div className={styles.tarifasWrapperCard}>
      <div className={styles.tarifasWrapper}>
        <h3 className={styles.cardTitle}>Tarifas Consulta Online</h3>
        <p className={styles.tarifaIntro}>
          Opciones de terapia digital con todas las explicaciones incluidas
        </p>

        <div className={styles.onlyMobile}>
          <CarouselTarifa tarifas={tarifas} />
        </div>

        <div className={`${styles.tarifasGrid} ${styles.onlyDesktop}`}>
          {tarifas.map(
            (
              { title, duration, benefits, popular, icon: Icon, color },
              idx
            ) => {
              const bgClass =
                idx === 0
                  ? styles.tarifa1
                  : idx === 1
                  ? styles.tarifa2
                  : styles.tarifa3;
              return (
                <div key={title} className={styles.tarifaWrapperItem}>
                  {popular && (
                    <div className={styles.popularBadge}>Más Popular</div>
                  )}
                  <div
                    className={`${styles.tarifaCard} ${bgClass} ${
                      popular ? styles.popularBorder : ""
                    }`}
                  >
                    {/* Icono de fondo */}
                    <Icon
                      size={120}
                      className={styles.backgroundIcon}
                      color={color}
                    />

                    <h4 className={styles.tarifaTitle}>{title}</h4>
                    <div className={styles.tarifaDuration}>{duration}</div>
                    <ul className={styles.benefitsList}>
                      {benefits.map((b) => (
                        <li key={b}>
                          <LucideIcons.CheckCircle
                            size={18}
                            className={styles.checkIcon}
                          />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default DigitalTarifas;
