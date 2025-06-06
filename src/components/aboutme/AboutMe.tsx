"use client";

import React from "react";
import styles from "../../styles/AboutMe.module.css";
import Image from "next/image";

const AboutMe: React.FC = () => {
  return (
    <section id="aboutme" className={styles.aboutSection}>
      <div className={styles.container}>
        {/* Imagen a la izquierda */}
        <div className={styles.imageWrapper}>
          <Image
            src="/images/psycology1.png" // Reemplazar con la imagen real
            alt="Dr. Carlos Mendoza"
            width={500}
            height={600}
            className={styles.image}
          />
        </div>

        {/* Texto a la derecha */}
        <div className={styles.textWrapper}>
          <h2 className={styles.title}>Conoce al Dr. Carlos Mendoza</h2>
          <p className={styles.paragraph}>
            Soy psicólogo clínico especializado en neuropsicología y trauma con
            más de 8 años de experiencia ayudando a personas a superar sus
            desafíos emocionales y alcanzar una vida más plena y equilibrada.
          </p>
          <ul className={styles.list}>
            <li>Licenciado en Psicología - Universidad Nacional</li>
            <li>Especialista en Neuropsicología Clínica</li>
            <li>Certificación en EMDR y Trauma</li>
            <li>Miembro del Colegio de Psicólogos</li>
            <li>Máster en Psicología Forense</li>
            <li>Especialización en Terapia Breve Estratégica</li>
          </ul>
          <p className={styles.paragraph}>
            Mi metodología integra técnicas de vanguardia en neuropsicología,
            EMDR y terapia sistémica para abordar desde la raíz los desafíos
            psicológicos más complejos.
          </p>
          <a href="#contacto" className={styles.link}>
            Conoce Más Sobre Mi Enfoque →
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
