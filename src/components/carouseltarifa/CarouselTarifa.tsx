"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
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

      <div className={styles.controls}>
        <button
          onClick={() =>
            handleUserAction(() =>
              setCurrent((prev) => (prev === 0 ? tarifas.length - 1 : prev - 1))
            )
          }
          aria-label="Anterior"
        >
          <ChevronLeft size={20} />
        </button>
        <button onClick={() => handleUserAction(next)} aria-label="Siguiente">
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default CarouselTarifa;
