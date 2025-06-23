"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import styles from "../../styles/CarouselGallery.module.css";

interface Props {
  items: string[];
}

const CarouselGallery: React.FC<Props> = ({ items }) => {
  const controls = useAnimation();
  const carouselRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [loadedIndexes, setLoadedIndexes] = useState<number[]>([]);

  const speed = 60; // px por segundo, ajusta a gusto

  // Duplicar items para loop infinito
  const loopItems = [...items, ...items];

  // Calcula ancho total para animar desplazamiento
  const startAnimation = useCallback(() => {
    if (!carouselRef.current) return;
    const fullWidth = carouselRef.current.scrollWidth / 2;
    const duration = fullWidth / speed;

    controls.set({ x: 0 });
    controls.start({
      x: -fullWidth,
      transition: {
        duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  }, [controls, speed]);

  const stopAnimation = useCallback(() => {
    controls.stop();
  }, [controls]);

  const resumeAnimation = useCallback(() => {
    stopAnimation();
    setTimeout(() => {
      startAnimation();
    }, 1500);
  }, [startAnimation, stopAnimation]);

  useEffect(() => {
    startAnimation();
    return () => {
      controls.stop();
    };
  }, [startAnimation, controls]);

  // Control carga embed instagram (como antes)
  useEffect(() => {
    window.instgrm?.Embeds.process();

    const timeout = setTimeout(() => {
      setLoadedIndexes((prev) => (prev.includes(0) ? prev : [...prev, 0]));
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  // Carga embeds para el índice actual, control sencillo (podrías ampliar)
  useEffect(() => {
    window.instgrm?.Embeds.process();
  }, [loadedIndexes]);

  // Manejo de drag y scroll manual
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      stopAnimation();
      x.set(x.get() + e.deltaY);

      // Reanuda animación luego de 2s sin scroll
      setTimeout(() => {
        startAnimation();
      }, 2000);
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      el.removeEventListener("wheel", onWheel);
    };
  }, [stopAnimation, startAnimation, x]);

  return (
    <div className={styles.carouselWrapper}>
      <motion.div
        className={styles.carousel}
        ref={carouselRef}
        style={{ x }}
        animate={controls}
        initial={false}
        drag="x"
        dragElastic={0.2}
        whileTap={{ cursor: "grabbing" }}
        onDragStart={stopAnimation}
        onDragEnd={resumeAnimation}
        onMouseEnter={stopAnimation}
        onMouseLeave={resumeAnimation}
      >
        {loopItems.map((url, i) => {
          const isLoaded = loadedIndexes.includes(i % items.length);
          return (
            <motion.div
              key={`${url}-${i}`}
              className={`${styles.postCard} ${isLoaded ? styles.loaded : ""}`}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={url}
                data-instgrm-version="14"
                style={{ margin: 0, width: "100%", height: "100%" }}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default CarouselGallery;
