"use client";

import React from "react";
import { Target } from "lucide-react";
import styles from "../../styles/service/Services.module.css";
import ServiceCard from "./ServiceCard";
import type { Service } from "../../data/services";
import { servicesData } from "../../data/services";

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
  </section>
);

export default Services;
