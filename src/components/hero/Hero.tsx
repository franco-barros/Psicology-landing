"use client";

import Image from "next/image";
import styles from "../../styles/Hero.module.css";

const Hero: React.FC = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1 className={styles.title}>🍂 Psicólogo Clínico Certificado</h1>
          <p className={styles.subtitle}>
            Transformando vidas a través de la psicología especializada
          </p>
          <p className={styles.description}>
            Acompañamiento profesional para superar desafíos emocionales,
            mejorar relaciones y alcanzar tu mejor versión. Terapia presencial y
            online.
          </p>

          <div className={styles.buttons}>
            <a
              href="#contacto"
              className={`${styles.btn} ${styles.btnPrimary}`}
            >
              Reservar Primera Consulta
            </a>
          </div>

          <div className={styles.stats}>
            <div>
              <strong>800+</strong>
              <span>Casos Exitosos</span>
            </div>
            <div>
              <strong>12+</strong>
              <span>Años de Experiencia</span>
            </div>
            <div>
              <strong>98%</strong>
              <span>Satisfacción</span>
            </div>
          </div>

          <p className={styles.signature}>Dr. Carlos Mendoza - Psicólogo</p>
        </div>

        <div className={styles.imageContainer}>
          <Image
            src="/image/dr-carlos-hero.jpg"
            alt="Dr. Carlos Mendoza"
            width={800}
            height={500}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
