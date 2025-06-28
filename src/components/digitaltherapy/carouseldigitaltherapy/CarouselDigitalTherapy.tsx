"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../../../styles/digitaltherapy/CarouselDigitalTherapy.module.css";
import type { LucideIcon } from "lucide-react";

interface CarouselItem {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

interface Card {
  title: string;
  items: CarouselItem[];
  gradientClass: string;
}

interface CarouselDigitalTherapyProps {
  cards: Card[];
  autoPlayInterval?: number;
}

const CarouselDigitalTherapy: React.FC<CarouselDigitalTherapyProps> = ({
  cards,
  autoPlayInterval = 4000,
}) => {
  const [current, setCurrent] = useState(0);
  const total = cards.length;

  useEffect(() => {
    if (total <= 1) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [total, autoPlayInterval]);

  if (total === 0) return <p>No hay elementos para mostrar.</p>;

  const next = () => setCurrent((prev) => (prev + 1) % total);
  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);

  const currentCard = cards[current];

  return (
    <div
      className={`${styles.carouselCard} ${styles[currentCard.gradientClass]}`}
    >
      <h3 className={styles.carouselTitle}>{currentCard.title}</h3>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4 }}
          className={styles.motionDiv}
        >
          {currentCard.items.map(
            ({ title, description, icon: Icon, color }, i) => (
              <div key={i} className={styles.carouselItem}>
                <div className={styles.iconWrapper}>
                  <Icon size={28} color={color} />
                </div>
                <div>
                  {title && <strong>{title}</strong>}
                  <p>{description}</p>
                </div>
              </div>
            )
          )}
        </motion.div>
      </AnimatePresence>

      <div className={styles.controls}>
        <button aria-label="Anterior" onClick={prev}>
          ‹
        </button>
        <button aria-label="Siguiente" onClick={next}>
          ›
        </button>
      </div>
    </div>
  );
};

export default CarouselDigitalTherapy;
