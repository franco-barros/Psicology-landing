"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import styles from "../../../styles/hero/CarouselTestimonials.module.css";
import { Testimonial } from "../../../data/testimonials";

interface Props {
  testimonials: Testimonial[];
}

const CarouselTestimonials: React.FC<Props> = ({ testimonials }) => {
  // Duplicamos para tener suficiente contenido
  const duplicated = [...testimonials, ...testimonials]; // 6 items
  // Estado para detectar si estamos en móvil
  const [isMobile, setIsMobile] = useState(false);
  // Recalcular al cambiar tamaño de ventana
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Tamaño de grupo: 1 en móvil, 3 en desktop
  const groupSize = isMobile ? 1 : 3;
  const totalGroups = Math.ceil(duplicated.length / groupSize);

  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Determinamos qué grupo e índice resaltar
  const groupIndex = Math.floor(counter / groupSize) % totalGroups;
  const highlightIndex = counter % groupSize;
  const currentGroup = duplicated.slice(
    groupIndex * groupSize,
    groupIndex * groupSize + groupSize
  );

  return (
    <div className={styles.carouselGrid}>
      {currentGroup.map((t, i) => (
        <div
          key={`${t.name}-${i}`}
          className={`${styles.card} ${
            i === highlightIndex ? styles.active : ""
          }`}
        >
          <div className={styles.gradientBlock}>
            <FaQuoteLeft className={styles.bgIcon} />
            <p className={styles.quote}>{t.quote}</p>
            <div className={styles.authorRow}>
              <Image
                src={t.avatar}
                alt={t.name}
                width={48}
                height={48}
                className={styles.avatar}
              />
              <div className={styles.authorInfo}>
                <strong className={styles.authorName}>{t.name}</strong>
                <span className={styles.verified}>Paciente verificado</span>
              </div>
            </div>
            <div className={styles.rating}>
              {Array(5)
                .fill(0)
                .map((_, idx) => (
                  <FaStar key={idx} className={styles.star} />
                ))}
            </div>
          </div>
          <div className={styles.resultCard}>
            <strong>{t.result}</strong>
            <span>Resultado del tratamiento</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarouselTestimonials;
