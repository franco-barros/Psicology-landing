"use client";
import React from "react";
import styles from "../../styles/Testimonials.module.css";
import { FaStar } from "react-icons/fa";

interface Testimonial {
  name: string;
  quote: string;
  result: string;
}

const testimonials: Testimonial[] = [
  {
    name: "María González",
    quote:
      "La terapia con el Dr. Mendoza cambió mi vida completamente. Su enfoque empático y profesional me ayudó a superar mi ansiedad.",
    result: "Excelente",
  },
  {
    name: "Carlos Rodríguez",
    quote:
      "Excelente profesional. Me ayudó a gestionar el estrés laboral y mejorar mis relaciones interpersonales.",
    result: "Excelente",
  },
  {
    name: "Ana Martínez",
    quote:
      "Recomiendo 100% sus servicios. Su metodología es efectiva y el ambiente es muy acogedor.",
    result: "Excelente",
  },
];

const stats = [
  { label: "Pacientes Atendidos", value: "800+" },
  { label: "Mejora Reportada", value: "95%" },
  { label: "Sesiones Promedio", value: "8.2" },
  { label: "Valoración", value: "4.9/5" },
];

const Testimonials: React.FC = () => {
  return (
    <section className={styles.testimonialSection} id="testimonials">
      <h2 className={styles.title}>Lo Que Dicen Mis Pacientes</h2>
      <p className={styles.subtitle}>
        Testimonios reales de personas que han transformado sus vidas
      </p>

      <div className={styles.testimonialsGrid}>
        {testimonials.map((testimonial, index) => (
          <div className={styles.card} key={`${testimonial.name}-${index}`}>
            <p className={styles.quote}>{testimonial.quote}</p>
            <div className={styles.author}>
              <strong>{testimonial.name}</strong>
              <span>Paciente verificado</span>
            </div>
            <div className={styles.rating}>
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <FaStar key={i} className={styles.star} />
                ))}
              <span>{testimonial.result}</span>
            </div>
          </div>
        ))}
      </div>

      <h3 className={styles.statsTitle}>Resultados en Números</h3>
      <div className={styles.statsContainer}>
        {stats.map((stat, index) => (
          <div className={styles.statCard} key={index}>
            <span className={styles.statValue}>{stat.value}</span>
            <span className={styles.statLabel}>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
