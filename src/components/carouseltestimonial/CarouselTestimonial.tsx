"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import styles from "../../styles/CarouselTestimonials.module.css";
import { Testimonial } from "@/data/testimonials";

interface Props {
  testimonials: Testimonial[];
}

const CarouselTestimonials: React.FC<Props> = ({ testimonials }) => {
  const duplicated = [...testimonials, ...testimonials]; // Total: 6 items (2 bloques)
  const groupSize = 3;
  const totalGroups = Math.ceil(duplicated.length / groupSize);
  const [groupIndex, setGroupIndex] = useState(0);
  const [highlightIndex, setHighlightIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightIndex((prev) => {
        if (prev + 1 >= groupSize) {
          setGroupIndex((g) => (g + 1) % totalGroups);
          return 0;
        }
        return prev + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [groupSize, totalGroups]);

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
