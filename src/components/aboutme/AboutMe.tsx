"use client";

import React from "react";
import styles from "../../styles/AboutMe.module.css";
import Image from "next/image";
import { FiCheckCircle } from "react-icons/fi";
import { FaUserGraduate } from "react-icons/fa";

const AboutMe: React.FC = () => {
  return (
    <section id="aboutme" className={styles.aboutSection}>
      {/* Badge fuera del componente principal */}
      <div className={styles.badgeAbsolute}>
        <FaUserGraduate className={styles.badgeIcon} />
        Sobre mí
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
            Soy psicólogo clínico especializado en neuropsicología y trauma con
            más de 8 años de experiencia ayudando a personas a superar sus
            desafíos emocionales y alcanzar una vida más plena y equilibrada.
          </p>

          <ul className={styles.list}>
            {[
              "Licenciado en Psicología - Universidad Nacional",
              "Especialista en Neuropsicología Clínica",
              "Certificación en EMDR y Trauma",
              "Miembro del Colegio de Psicólogos",
              "Máster en Psicología Forense",
              "Especialización en Terapia Breve Estratégica",
            ].map((text) => (
              <li key={text}>
                <FiCheckCircle className={styles.listIcon} />
                {text}
              </li>
            ))}
          </ul>

          <p className={styles.paragraph}>
            Mi metodología integra técnicas de vanguardia en neuropsicología,
            EMDR y terapia sistémica para abordar desde la raíz los desafíos
            psicológicos más complejos.
          </p>

          <a href="#blog" className={styles.button}>
            Conoce Más Sobre Mi Enfoque →
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
