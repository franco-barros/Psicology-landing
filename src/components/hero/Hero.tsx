"use client";

import React from "react";
import Image from "next/image";
import { UserCheck } from "lucide-react";
import { CarouselTestimonials } from "../carouseltestimonial";
import styles from "../../styles/Hero.module.css";
import { testimonials } from "@/data/testimonials";

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.container}>
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
            <button
              onClick={scrollToContact}
              className={`${styles.btn} ${styles.btnSecondary}`}
            >
              Reservar Primera Consulta
            </button>
          </div>

          <p className={styles.signature}>Lic. Ivan Waisman – Psicólogo</p>
        </div>

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

      <div className={styles.testimonialsWrapper}>
        <CarouselTestimonials testimonials={testimonials} />
      </div>
    </section>
  );
};

export default Hero;
