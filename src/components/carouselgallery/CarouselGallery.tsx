"use client";

import React, { useEffect, useState } from "react";
import styles from "../../styles/CarouselGallery.module.css";

interface Props {
  items: string[];
  intervalMs?: number;
}

const CarouselGallery: React.FC<Props> = ({ items, intervalMs = 4000 }) => {
  const [counter, setCounter] = useState(0);
  const [loadedIndexes, setLoadedIndexes] = useState<number[]>([]);

  const current = items[counter];

  useEffect(() => {
    window.instgrm?.Embeds.process();

    const timeout = setTimeout(() => {
      setLoadedIndexes((prev) =>
        prev.includes(counter) ? prev : [...prev, counter]
      );
    }, 1000);

    const interval = setInterval(() => {
      setCounter((prev) => (prev + 1) % items.length);
    }, intervalMs);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [counter, intervalMs, items.length]);

  const isLoaded = loadedIndexes.includes(counter);

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.postGrid}>
        <div
          key={current}
          className={`${styles.postCard} ${isLoaded ? styles.loaded : ""}`}
        >
          <blockquote
            className="instagram-media"
            data-instgrm-permalink={current}
            data-instgrm-version="14"
            style={{ margin: 0 }}
          />
        </div>
      </div>
    </div>
  );
};

export default CarouselGallery;
