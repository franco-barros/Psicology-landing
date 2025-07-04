"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useAutoAdvance from "../../../hooks/useAutoAdvance";
import { StudiesCard } from "../studiescard";
import { studiesData } from "../../../data/studies";
import styles from "../../../styles/studies/StudiesSlider.module.css";

const StudiesSlider = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  useAutoAdvance({
    itemsLength: studiesData.length,
    delay: 5000,
    isPaused,
    setCurrentIndex,
  });

  if (isMobile) {
    const current = studiesData[currentIndex];

    return (
      <section aria-label="Slider de estudios" className={styles.sliderWrapper}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full"
          >
            <StudiesCard study={current} setIsPaused={setIsPaused} />
          </motion.div>
        </AnimatePresence>

        <div className={styles.indicators}>
          {studiesData.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${
                index === currentIndex ? styles.activeIndicator : ""
              }`}
              onClick={() => {
                setIsPaused(true);
                setCurrentIndex(index);
                setTimeout(() => setIsPaused(false), 5000);
              }}
              aria-label={`Ir a la tarjeta ${index + 1}`}
            />
          ))}
        </div>
      </section>
    );
  }

  return (
    <div className={styles.servicesContainer}>
      {studiesData.map((study) => (
        <StudiesCard
          key={study.id}
          study={study}
          setIsPaused={() => {}} // no es necesario en desktop
        />
      ))}
    </div>
  );
};

export default StudiesSlider;
