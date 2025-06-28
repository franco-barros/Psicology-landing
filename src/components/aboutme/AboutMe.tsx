"use client";

import React from "react";
import styles from "../../styles/AboutMe.module.css";
import Image from "next/image";
import { FadeInOnScroll } from "../shared/fadeInonscroll";
import { FaUserGraduate } from "react-icons/fa";
import {
  Award,
  Brain,
  Heart,
  Shield,
  Users,
  Zap,
  ArrowRight,
} from "lucide-react";

const AboutMe: React.FC = () => {
  const credentials = [
    { icon: Award, text: "Licenciado en Psicología - Universidad Nacional" },
    { icon: Brain, text: "Especialista en Neuropsicología Clínica" },
    { icon: Heart, text: "Certificación en EMDR y Trauma" },
    { icon: Shield, text: "Miembro del Colegio de Psicólogos" },
    { icon: Users, text: "Máster en Psicología Forense" },
    { icon: Zap, text: "Especialización en Terapia Breve Estratégica" },
  ];

  return (
    <section id="aboutme" className={styles.aboutSection}>
      <FadeInOnScroll>
        <div className={styles.badgeWrapper}>
          <span className={styles.badge}>
            <FaUserGraduate />
            Sobre mí
          </span>
        </div>

        <div className={styles.container}>
          {/* Imagen */}
          <div className={styles.imageWrapper}>
            <Image
              src="/images/ivanpsicology.png"
              alt="Dr. Carlos Mendoza"
              width={500}
              height={600}
              className={styles.image}
            />
          </div>

          {/* Texto */}
          <div className={styles.textWrapper}>
            <div className={styles.titleWrapper}>
              <h2 className={styles.mainTitle}>
                <span>Conoce al </span>
                <span>Lic. Ivan Waisman</span>
              </h2>
            </div>

            <p className={styles.paragraph}>
              Soy psicólogo clínico especializado en neuropsicología y trauma
              con más de 8 años de experiencia ayudando a personas a superar sus
              desafíos emocionales y alcanzar una vida más plena y equilibrada.
            </p>

            {/* Subtítulo */}
            <h3 className={styles.subTitle}>Formación y Especialidades</h3>

            <div className={styles.credentialsCard}>
              <ul className={styles.list}>
                {credentials.map(({ icon: Icon, text }) => (
                  <li key={text} className={styles.featureItem}>
                    <span className={styles.iconCircle}>
                      <Icon size={14} color="#8da65d" />
                    </span>
                    <span className={styles.featureText}>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card Enfoque Terapéutico */}
            <div className={styles.focusCard}>
              <h3 className={styles.focusTitle}>Mi Enfoque Terapéutico</h3>
              <p className={styles.focusText}>
                Mi metodología integra técnicas de vanguardia en
                neuropsicología, EMDR y terapia sistémica para abordar desde la
                raíz los desafíos psicológicos más complejos.
              </p>
            </div>

            {/* Botón con ícono */}
            <a href="#blog" className={styles.button}>
              Sobre Mi Enfoque
              <ArrowRight size={16} className={styles.arrowIcon} />
            </a>
          </div>
        </div>
      </FadeInOnScroll>
    </section>
  );
};

export default AboutMe;
