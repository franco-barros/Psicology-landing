"use client";

import React from "react";
import styles from "../../styles/testimonials/TestimonialsPage.module.css";
import { testimonials } from "../../data/testimonials";
import BackButton from "../backbutton";

const TestimonialsSection = () => {
  return (
    <section className={styles.testimonialsSection}>
      <BackButton />

      <div className={styles.header}>
        <h2 className={styles.title}>
          <span>Testimonios</span> de pacientes
        </h2>
        <p className={styles.subtitle}>
          Experiencias reales que reflejan el impacto positivo del
          acompañamiento terapéutico.
        </p>
      </div>

      <div className={styles.grid}>
        {testimonials.map((t, index) => (
          <div key={index} className={styles.card}>
            <p className={styles.quote}>{t.quote}</p>
            <div className={styles.meta}>
              <strong>{t.name}</strong>
              <span className={styles.result}>{t.result}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
