// components/Services.tsx
"use client";

import React from "react";
import { Target } from "lucide-react";
import styles from "../../styles/service/Services.module.css";
import ServiceCard from "./ServiceCard";
import type { Service } from "../../data/services";
import { servicesData } from "../../data/services"; // ← Ruta al archivo .ts correcto

const Services: React.FC = () => (
  <section id="services" className={styles.servicesSection}>
    <div className={styles.badgeSection}>
      <Target size={18} />
      <span>Especialidades Clínicas</span>
    </div>

    <h2 className={styles.sectionTitle}>Servicios Especializados</h2>

    <p className={styles.sectionSubtitle}>
      Metodologías científicamente validadas adaptadas a tus necesidades
      específicas para lograr resultados duraderos
    </p>

    <div className={styles.servicesContainer}>
      {servicesData.map((service: Service) => (
        <ServiceCard
          key={service.id}
          icon={service.icon}
          title={service.title}
          description={service.description}
          features={service.features}
          cta={service.cta}
          onClick={() => window.open(service.whatsappLink, "_blank")}
        />
      ))}
    </div>

    <div className={styles.freeConsultation}>
      <h3 className={styles.consultTitle}>
        ¿No estás seguro cuál es el mejor tratamiento para ti?
      </h3>
      <p className={styles.consultText}>
        Agenda una consulta inicial gratuita de 30 minutos donde evaluaremos tu
        situación y diseñaremos un plan personalizado.
      </p>
      <button
        className={styles.consultButton}
        onClick={() => window.open(servicesData[0].whatsappLink, "_blank")}
      >
        Consulta Inicial Gratuita
      </button>
    </div>
  </section>
);

export default Services;
