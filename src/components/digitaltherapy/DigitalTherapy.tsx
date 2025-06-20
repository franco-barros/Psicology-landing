"use client";

import React from "react";
import styles from "../../styles/digitaltherapy/DigitalTherapy.module.css";
import { FadeInOnScroll } from "../fadeInonscroll";
import * as LucideIcons from "lucide-react";
import { DigitalCards } from "./digitalcards";
import { DigitalTarifas } from "./digitaltarifas";

const DigitalTherapy: React.FC = () => {
  return (
    <section className={styles.digitalTherapySection} id="digital-therapy">
      <FadeInOnScroll>
        <div className={styles.badge}>
          <LucideIcons.Monitor size={16} style={{ marginRight: "0.4rem" }} />
          Terapia Digital
        </div>

        <h2 className={styles.title}>
          <span>Consulta</span> <span>Online</span>
        </h2>
        <p className={styles.description}>
          Accede a terapia profesional desde la comodidad de tu hogar con la
          misma calidad y efectividad que las sesiones presenciales
        </p>
      </FadeInOnScroll>

      {/* Sección de Cards */}
      <DigitalCards />

      {/* Sección de Tarifas */}
      <DigitalTarifas />
    </section>
  );
};

export default DigitalTherapy;
