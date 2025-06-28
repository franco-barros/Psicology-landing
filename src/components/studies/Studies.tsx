"use client";

import React from "react";
import { GraduationCap } from "lucide-react";
import styles from "../../styles/studies/Studies.module.css";
import { FadeInOnScroll } from "../shared/fadeInonscroll";
import { StudiesSlider } from "./studiesslider";

const Studies: React.FC = () => (
  <section id="studies" className={styles.studiesSection}>
    <FadeInOnScroll>
      <div className={styles.badgeSection}>
        <GraduationCap size={18} />
        <span>Formación Académica</span>
      </div>

      <h2 className={styles.mainTitle}>
        <span>Estudios</span> / <span>Certificaciones</span>
      </h2>

      <p className={styles.sectionSubtitle}>
        Formación continua en abordajes contextuales y actualizaciones en
        terapias de tercera generación.
      </p>
    </FadeInOnScroll>

    <FadeInOnScroll delay={0.2}>
      <StudiesSlider />
    </FadeInOnScroll>
  </section>
);

export default Studies;
