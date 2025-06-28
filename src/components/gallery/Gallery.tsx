"use client";

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process(): void;
      };
    };
  }
}

import React, { useEffect, useState } from "react";
import { FadeInOnScroll } from "../shared/fadeInonscroll";
import Script from "next/script";
import {
  FaLeaf,
  FaBook,
  FaVideo,
  FaQuoteLeft,
  FaInstagram,
} from "react-icons/fa";
import styles from "../../styles/gallery/Gallery.module.css";
import { CarouselGallery } from "./carouselgallery";

const posts: string[] = [
  "https://www.instagram.com/reel/DJ87KN1Nhdz",
  "https://www.instagram.com/reel/DKKWOwutK7n",
  "https://www.instagram.com/reel/DJ5CAiVNlBC",
];

const Gallery: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 768);
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  useEffect(() => {
    window.instgrm?.Embeds.process();
  }, [isMobile]);

  return (
    <section id="gallery" className={styles.gallery}>
      <FadeInOnScroll>
        <span className={styles.badge}>
          <FaInstagram /> Redes Sociales
        </span>

        <h2 className={styles.heading}>
          <FaInstagram /> Nuestro Instagram
        </h2>

        {/* Card container para la sección "¿Qué compartimos?" */}
        <div className={styles.sharedContentCard}>
          <div className={styles.sharedContent}>
            <h3 className={styles.cardTitle}>¿Qué compartimos?</h3>
            <p className={styles.sharedText}>
              En nuestro Instagram encontrarás contenido que inspira bienestar:
            </p>
            <ul className={styles.cardList}>
              <li>
                <FaLeaf className={styles.iconCircle} /> Consejos para manejar
                la ansiedad y el estrés.
              </li>
              <li>
                <FaBook className={styles.iconCircle} /> Reflexiones sobre salud
                mental y autocuidado.
              </li>
              <li>
                <FaVideo className={styles.iconCircle} /> Fragmentos de charlas
                y videos educativos.
              </li>
              <li>
                <FaQuoteLeft className={styles.iconCircle} /> Frases
                motivacionales y ejercicios prácticos.
              </li>
            </ul>
          </div>
        </div>
      </FadeInOnScroll>

      <FadeInOnScroll>
        <div className={styles.instagramLayout}>
          <div className={styles.postsWrapper}>
            {isMobile ? (
              <CarouselGallery items={posts} intervalMs={4000} />
            ) : (
              <div className={styles.desktopGrid}>
                {posts.map((url, index) => (
                  <div
                    key={index}
                    className={styles.embedWrapper}
                    dangerouslySetInnerHTML={{
                      __html: `<blockquote class="instagram-media" data-instgrm-permalink="${url}" data-instgrm-version="14"></blockquote>`,
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          <div className={styles.instagramButtonWrapper}>
            <a
              href="https://www.instagram.com/tu_usuario_aqui"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.instagramButton}
            >
              <FaInstagram size={20} />
              Seguir en Instagram
            </a>
          </div>
        </div>
      </FadeInOnScroll>

      <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" />
    </section>
  );
};

export default Gallery;
