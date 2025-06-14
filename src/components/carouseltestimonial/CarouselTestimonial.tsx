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
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className={styles.carouselWrapper}>
      <div
        className={styles.carouselInner}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {testimonials.map((t, i) => (
          <div className={styles.card} key={`${t.name}-${i}`}>
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
    </div>
  );
};

export default CarouselTestimonials;
