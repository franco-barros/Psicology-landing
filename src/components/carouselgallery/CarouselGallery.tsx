// components/carouselgallery/CarouselGallery.tsx
"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import styles from "../../styles/CarouselGallery.module.css";

interface Props {
  items: string[];
  intervalMs?: number;
}

export const CarouselGallery: React.FC<Props> = ({
  items,
  intervalMs = 6000,
}) => {
  const controls = useAnimation();
  const carouselRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [loadedIndexes, setLoadedIndexes] = useState<number[]>([]);

  const speed = 60; // px por segundo, ajusta a gusto

  const loopItems = [...items, ...items];

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

  useEffect(() => {
    window.instgrm?.Embeds.process();

    const timeout = setTimeout(() => {
      setLoadedIndexes((prev) => (prev.includes(0) ? prev : [...prev, 0]));
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    window.instgrm?.Embeds.process();
  }, [loadedIndexes]);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      stopAnimation();
      x.set(x.get() + e.deltaY);

      setTimeout(() => {
        startAnimation();
      }, intervalMs);
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      el.removeEventListener("wheel", onWheel);
    };
  }, [stopAnimation, startAnimation, x, intervalMs]);

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
