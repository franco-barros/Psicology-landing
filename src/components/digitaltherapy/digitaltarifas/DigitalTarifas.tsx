"use client";

import React from "react";
import styles from "../../../styles/digitaltherapy/DigitalTarifas.module.css";
import { CarouselTarifa } from "../../carouseltarifa";
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
  },
  {
    title: "Paquete 4 Sesiones",
    duration: "4 sesiones de 50 min",
    benefits: ["Seguimiento entre sesiones", "Plan personalizado"],
    popular: true,
  },
  {
    title: "Sesión de Pareja",
    duration: "75 minutos",
    benefits: [
      "Terapia de pareja",
      "Ejercicios para casa",
      "Seguimiento semanal",
    ],
    popular: false,
  },
];

const DigitalTarifas = () => {
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
          {tarifas.map(({ title, duration, benefits, popular }, index) => {
            const cardColorClass =
              index === 0
                ? styles.tarifa1
                : index === 1
                ? styles.tarifa2
                : styles.tarifa3;

            return (
              <div key={title} className={styles.tarifaWrapperItem}>
                {popular && (
                  <div className={styles.popularBadge}>Más Popular</div>
                )}
                <div
                  className={`${styles.tarifaCard} ${cardColorClass} ${
                    popular ? styles.popularBorder : ""
                  }`}
                >
                  <h4 className={styles.tarifaTitle}>{title}</h4>
                  <div className={styles.tarifaDuration}>{duration}</div>
                  <ul className={styles.benefitsList}>
                    {benefits.map((b) => (
                      <li key={b}>
                        <LucideIcons.CheckCircle
                          size={20}
                          className={styles.checkIcon}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: "2rem", textAlign: "center" }}>
          <button className={styles.agendarButton}>
            <LucideIcons.Video size={20} style={{ marginRight: "0.5rem" }} />
            Agendar Consulta Online
          </button>
        </div>
      </div>
    </div>
  );
};

export default DigitalTarifas;
