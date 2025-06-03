"use client";

import React from "react";
import styles from "../../styles/service/Services.module.css";
import ServiceCard from "./ServiceCard";

const servicesData = [
  {
    title: "Terapia Cognitivo-Conductual",
    price: "Desde $80",
    duration: "50 min",
    description:
      "Sesiones estructuradas para modificar patrones de pensamiento y comportamiento disfuncionales.",
    features: [
      "Evaluación inicial incluida",
      "Seguimiento personalizado",
      "Material de apoyo incluido",
    ],
    cta: "Más Información",
  },
  {
    title: "Terapia Sistémica Familiar",
    price: "Desde $120",
    duration: "60 min",
    description:
      "Análisis de las dinámicas familiares para resolver conflictos y mejorar la comunicación.",
    features: [
      "Evaluación inicial incluida",
      "Seguimiento personalizado",
      "Material de apoyo incluido",
    ],
    cta: "Más Información",
  },
  {
    title: "Neuropsicología Clínica",
    price: "Desde $100",
    duration: "60 min",
    description:
      "Evaluación y rehabilitación de funciones cognitivas afectadas por daño cerebral o trastornos del desarrollo.",
    features: [
      "Evaluación inicial incluida",
      "Seguimiento personalizado",
      "Material de apoyo incluido",
    ],
    cta: "Más Información",
  },
];

const Services: React.FC = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5492645878987", "_blank");
  };

  return (
    <section id="services" className={styles.servicesSection}>
      <h2 className={styles.sectionTitle}>🎯 Especialidades Clínicas</h2>
      <p className={styles.sectionSubtitle}>
        Metodologías científicamente validadas adaptadas a tus necesidades
        específicas para lograr resultados duraderos
      </p>

      <div className={styles.servicesContainer}>
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            features={service.features}
            cta={service.cta}
            onClick={handleWhatsApp}
          />
        ))}
      </div>
      <div className={styles.freeConsultation}>
        <h3 className={styles.consultTitle}>
          ¿No estás seguro cuál es el mejor tratamiento para ti?
        </h3>
        <p className={styles.consultText}>
          Agenda una consulta inicial gratuita de 30 minutos donde evaluaremos
          tu situación y diseñaremos un plan personalizado.
        </p>
        <button
          className={styles.consultButton}
          onClick={() => window.open("https://wa.me/5492645878987", "_blank")}
        >
          Consulta Inicial Gratuita
        </button>
      </div>
    </section>
  );
};

export default Services;
