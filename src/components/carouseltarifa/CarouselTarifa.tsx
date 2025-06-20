"use client";

import React, { useState } from "react";
import styles from "../../styles/CarouselTarifa.module.css";
import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";

interface Tarifa {
  title: string;
  duration: string;
  benefits: string[];
  popular: boolean;
}

interface CarouselTarifaProps {
  tarifas: Tarifa[];
}

const CarouselTarifa: React.FC<CarouselTarifaProps> = ({ tarifas }) => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? tarifas.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === tarifas.length - 1 ? 0 : prev + 1));
  };

  const { title, duration, benefits, popular } = tarifas[current];

  let colorClass = styles.tarifa1;
  if (current === 1) colorClass = styles.tarifa2;
  if (current === 2) colorClass = styles.tarifa3;

  return (
    <div className={styles.carouselWrapper}>
      {popular && <div className={styles.popularBadge}>Más Popular</div>}

      <div
        className={`${styles.card} ${colorClass} ${
          popular ? styles.popularBorder : ""
        }`}
      >
        <h4 className={styles.title}>{title}</h4>
        <div className={styles.duration}>{duration}</div>
        <ul className={styles.benefits}>
          {benefits.map((benefit) => (
            <li key={benefit}>
              <CheckCircle className={styles.icon} size={20} />
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.controls}>
        <button onClick={handlePrev}>
          <ChevronLeft size={20} />
        </button>
        <button onClick={handleNext}>
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default CarouselTarifa;
