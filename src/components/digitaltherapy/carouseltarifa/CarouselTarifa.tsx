"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import styles from "../../../styles/digitaltherapy/CarouselTarifa.module.css";
import { CheckCircle } from "lucide-react";

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
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const resumeRef = useRef<NodeJS.Timeout | null>(null);
  const intervalMs = 5000;

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % tarifas.length);
  }, [tarifas.length]);

  const startAutoplay = useCallback(() => {
    if (autoplayRef.current) return;
    autoplayRef.current = setInterval(next, intervalMs);
  }, [next]);

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
    if (resumeRef.current) {
      clearTimeout(resumeRef.current);
      resumeRef.current = null;
    }
  };

  const handleUserAction = (fn: () => void) => {
    stopAutoplay();
    fn();
    resumeRef.current = setTimeout(startAutoplay, intervalMs);
  };

  useEffect(() => {
    startAutoplay();
    return () => {
      stopAutoplay();
    };
  }, [startAutoplay]);

  const { title, duration, benefits, popular } = tarifas[current];
  const colorClass =
    current === 1
      ? styles.tarifa2
      : current === 2
      ? styles.tarifa3
      : styles.tarifa1;

  return (
    <div className={styles.carouselWrapper}>
      <div
        className={`${styles.card} ${colorClass} ${
          popular ? styles.popularBorder : ""
        }`}
      >
        {popular && <div className={styles.popularBadge}>Más Popular</div>}

        <div className={styles.cardContent}>
          <h4 className={styles.title}>{title}</h4>
          <div className={styles.duration}>{duration}</div>
          <ul className={styles.benefits}>
            {benefits.map((b) => (
              <li key={b}>
                <CheckCircle className={styles.icon} size={20} />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.indicators}>
        {tarifas.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${
              index === current ? styles.activeIndicator : ""
            }`}
            onClick={() => handleUserAction(() => setCurrent(index))}
            aria-label={`Ir a la tarjeta ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselTarifa;
