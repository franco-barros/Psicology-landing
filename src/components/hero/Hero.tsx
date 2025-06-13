// components/Hero.tsx
"use client";

import Image from "next/image";
import { UserCheck } from "lucide-react";
import styles from "../../styles/Hero.module.css";

const Hero: React.FC = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.container}>
        {/* Área de texto */}
        <div className={styles.textArea}>
          <div className={styles.badge}>
            <UserCheck size={18} />
            <span>Psicólogo Clínico Certificado</span>
          </div>
          <h1 className={styles.title}>
            <span className={styles.highlightPrimary}>
              Transformando vidas a través de la
            </span>{" "}
            <span className={styles.highlightSecondary}>
              psicología especializada
            </span>
          </h1>
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
          <p className={styles.signature}>Dr. Ivan Waisman – Psicólogo</p>
        </div>
        {/* Imagen a la derecha */}
        <div className={styles.imageContainer}>
          <Image
            src="/images/ivanpsicology1.png"
            alt="Dr. Carlos Mendoza"
            width={400}
            height={200}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
