"use client";
import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import styles from "../../styles/Testimonials.module.css";

interface Testimonial {
  name: string;
  quote: string;
  result: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "María González",
    quote:
      "La terapia con el Dr. Mendoza cambió mi vida completamente. Su enfoque empático y profesional me ayudó a superar mi ansiedad.",
    result: "Excelente",
    avatar: "/images/persona2.png",
  },
  {
    name: "Carlos Rodríguez",
    quote:
      "Excelente profesional. Me ayudó a gestionar el estrés laboral y mejorar mis relaciones interpersonales.",
    result: "Excelente",
    avatar: "/images/persona1.png",
  },
  {
    name: "Ana Martínez",
    quote:
      "Recomiendo 100% sus servicios. Su metodología es efectiva y el ambiente es muy acogedor.",
    result: "Excelente",
    avatar: "/images/persona.png",
  },
];

const stats = [
  { label: "Pacientes Atendidos", value: "800+" },
  { label: "Mejora Reportada", value: "95%" },
  { label: "Sesiones Promedio", value: "8.2" },
  { label: "Valoración", value: "4.9/5" },
];

const Testimonials: React.FC = () => (
  <section className={styles.testimonialSection} id="testimonials">
    <span className={styles.badge}>
      <FaStar className={styles.badgeIcon} />
      Testimonios
    </span>

    <h2 className={styles.title}>Lo Que Dicen Mis Pacientes</h2>
    <p className={styles.subtitle}>
      Testimonios reales de personas que han transformado sus vidas
    </p>

    <div className={styles.testimonialsGrid}>
      {testimonials.map((t, i) => (
        <div className={styles.card} key={`${t.name}-${i}`}>
          <div className={styles.gradientBlock}>
            <FaQuoteLeft className={styles.bgIcon} />
            <p className={styles.quote}>{t.quote}</p>
            <div className={styles.authorRow}>
              <img src={t.avatar} alt={t.name} className={styles.avatar} />
              <div className={styles.authorInfo}>
                <strong className={styles.authorName}>{t.name}</strong>
                <span className={styles.verified}>Paciente verificado</span>
              </div>
            </div>
            <div className={styles.rating}>
              {Array(5)
                .fill(0)
                .map((_, idx) => (
                  <FaStar key={idx} className={styles.star} />
                ))}
            </div>
          </div>
          <div className={styles.resultCard}>
            <strong>{t.result}</strong>
            <span>Resultado del tratamiento</span>
          </div>
        </div>
      ))}
    </div>

    <h3 className={styles.statsTitle}>Resultados en Números</h3>
    <div className={styles.statsWrapper}>
      <div className={styles.statsContainer}>
        {stats.map((stat, idx) => (
          <div className={styles.statCard} key={idx}>
            <span className={styles.statValue}>{stat.value}</span>
            <span className={styles.statLabel}>{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
