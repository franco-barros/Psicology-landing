"use client";

import React from "react";
import styles from "../../styles/AboutMe.module.css";
import Image from "next/image";
import { FadeInOnScroll } from "../shared/fadeInonscroll";
import { FaUserGraduate } from "react-icons/fa";

const AboutMe: React.FC = () => {
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
              alt="Lic. Ivan Waisman"
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

            {/* Card Enfoque Terapéutico */}
            <div className={styles.focusCard}>
              <h3 className={styles.focusTitle}>Mi Forma De Trabajar</h3>
              <p className={styles.focusText}>
                Me baso en el Análisis Funcional de la Conducta y la Tercera
                Generación de Terapias Cognitivo Conductuales. Este enfoque,
                fuertemente basado en la tradición científica de psicología,
                integra también la sabiduría de la filosofía humanista y
                oriental para abordar de manera precisa y humana la complejidad
                del ser humano.
              </p>
            </div>
          </div>
        </div>
      </FadeInOnScroll>
    </section>
  );
};

export default AboutMe;
