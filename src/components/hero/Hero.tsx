"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { UserCheck } from "lucide-react";
import { CarouselTestimonials } from "./carouseltestimonial";
import styles from "../../styles/hero/Hero.module.css";
import { testimonials } from "../../data/testimonials";

const Hero: React.FC = () => {
  return (
    <section id="hero" className={styles.hero}>
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
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

            {/* Imagen solo en mobile */}
            <div className={`${styles.imageContainer} ${styles.mobileOnly}`}>
              <Image
                src="/images/ivanpsicology1.png"
                alt="Lic. Ivan Waisman"
                width={400}
                height={200}
                className={styles.image}
              />
            </div>

            <p className={styles.description}>
              Acompañamiento profesional para superar desafíos emocionales,
              mejorar relaciones y alcanzar tu mejor versión. Terapia presencial
              y online, siempre intentando mejorar.
            </p>

            <p className={styles.signature}>Lic. Ivan Waisman – Psicólogo</p>
          </div>

          {/* Imagen solo en desktop */}
          <div className={`${styles.imageContainer} ${styles.desktopOnly}`}>
            <Image
              src="/images/ivanpsicology1.png"
              alt="Lic. Ivan Waisman"
              width={400}
              height={200}
              className={styles.image}
            />
          </div>
        </div>

        <div className={styles.testimonialsWrapper}>
          <CarouselTestimonials testimonials={testimonials} />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
