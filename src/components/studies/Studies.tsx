"use client";

import React from "react";
import { GraduationCap, Calendar, ArrowRight, Check } from "lucide-react";
import styles from "../../styles/Studies.module.css";
import { FadeInOnScroll } from "../fadeInonscroll";
import { studiesData } from "../../data/studies";

const scrollToAbout = () => {
  const section = document.getElementById("aboutme");
  if (section) section.scrollIntoView({ behavior: "smooth" });
};

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

    <div className={styles.servicesContainer}>
      {studiesData.map((item, index) => (
        <FadeInOnScroll key={item.id} delay={index * 0.1}>
          <article className={styles.card}>
            <div className={styles.header}>
              <div className={styles.typeBadge}>
                <item.icon size={14} className={styles.badgeIcon} />
                {item.type}
              </div>
              <h3 className={styles.title}>{item.title}</h3>
              <div className={styles.dateRow}>
                <Calendar size={16} />
                <span>{item.date}</span>
              </div>
            </div>

            <div className={styles.body}>
              <ul className={styles.featuresList}>
                {item.features.map((feat) => (
                  <li key={`${item.id}-${feat}`} className={styles.featureItem}>
                    <span className={styles.iconCircle}>
                      <Check size={14} color="#8da65d" />
                    </span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              <button onClick={scrollToAbout} className={styles.button}>
                <ArrowRight size={16} />
                <span>Ver Perfil Profesional</span>
              </button>
            </div>
          </article>
        </FadeInOnScroll>
      ))}
    </div>
  </section>
);

export default Studies;
