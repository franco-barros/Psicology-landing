"use client";

import React from "react";
import { GraduationCap, Check } from "lucide-react";
import styles from "../../styles/Studies.module.css";
import type { Study } from "../../data/studies";
import { FadeInOnScroll } from "../fadeInonscroll";
import { studiesData } from "../../data/studies";

const Studies: React.FC = () => (
  <section id="studies" className={styles.studiesSection}>
    <FadeInOnScroll>
      <div className={styles.badgeSection}>
        <GraduationCap size={18} />
        <span>Formación Académica</span>
      </div>

      <h2 className={styles.mainTitle}>
        <span>Estudios</span> / <span> Certificaciones</span>
      </h2>

      <p className={styles.sectionSubtitle}>
        Formación continua en abordajes contextuales...
      </p>
    </FadeInOnScroll>

    <div className={styles.servicesContainer}>
      {studiesData.map((item: Study, index) => (
        <FadeInOnScroll key={item.id} delay={index * 0.1}>
          <div className={styles.card}>
            <div className={styles.header}>
              <div className={styles.iconWrapper}>
                <item.icon size={20} color="#fff" />
              </div>
              <h3 className={styles.title}>{item.title}</h3>
            </div>
            <div className={styles.body}>
              <p className={styles.description}>{item.description}</p>
              {item.features && (
                <ul className={styles.featuresList}>
                  {item.features.map((feat) => (
                    <li
                      key={`${item.id}-${feat}`}
                      className={styles.featureItem}
                    >
                      <Check size={14} className={styles.checkIcon} />
                      {feat}
                    </li>
                  ))}
                </ul>
              )}
              {item.cta && item.onClick && (
                <button onClick={item.onClick} className={styles.button}>
                  {item.cta}
                </button>
              )}
            </div>
          </div>
        </FadeInOnScroll>
      ))}
    </div>
  </section>
);

export default Studies;
