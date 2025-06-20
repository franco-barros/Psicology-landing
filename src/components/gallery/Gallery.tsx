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

import React, { useEffect } from "react";
import { FadeInOnScroll } from "../fadeInonscroll";
import Script from "next/script";
import Image from "next/image";
import {
  FaLeaf,
  FaBook,
  FaVideo,
  FaQuoteLeft,
  FaInstagram,
} from "react-icons/fa";
import styles from "../../styles/Gallery.module.css";
import { CarouselGallery } from "../carouselgallery";

const posts: string[] = [
  "https://www.instagram.com/reel/DJ87KN1Nhdz",
  "https://www.instagram.com/reel/DKKWOwutK7n",
  "https://www.instagram.com/reel/DJ5CAiVNlBC",
];

const Gallery: React.FC = () => {
  useEffect(() => {
    window.instgrm?.Embeds.process();
  }, []);

  return (
    <section id="gallery" className={styles.gallery}>
      <FadeInOnScroll>
        <span className={styles.badge}>
          <FaInstagram /> Redes Sociales
        </span>

        <h2 className={styles.heading}>
          <FaInstagram /> Nuestro Instagram
        </h2>

        {/* Bloque "¿Qué compartimos?" */}
        <div className={styles.sharedContent}>
          <h3 className={styles.cardTitle}>¿Qué compartimos?</h3>
          <p className={styles.sharedText}>
            En nuestro Instagram encontrarás contenido que inspira bienestar:
          </p>
          <ul className={styles.cardList}>
            <li>
              <FaLeaf /> Consejos para manejar la ansiedad y el estrés.
            </li>
            <li>
              <FaBook /> Reflexiones sobre salud mental y autocuidado.
            </li>
            <li>
              <FaVideo /> Fragmentos de charlas y videos educativos.
            </li>
            <li>
              <FaQuoteLeft /> Frases motivacionales y ejercicios prácticos.
            </li>
          </ul>
        </div>
      </FadeInOnScroll>

      {/* Carousel + QR en layout side-by-side */}
      <FadeInOnScroll>
        <div className={styles.instagramLayout}>
          <div className={styles.leftColumn}>
            <CarouselGallery items={posts} intervalMs={4000} />
          </div>
          <div className={styles.rightColumn}>
            <div className={styles.instagramFollow}>
              <Image
                src="/images/psycologyinstagram.png"
                alt="QR Instagram para seguirnos"
                width={300}
                height={300}
                className={styles.instagramImage}
              />
              <p className={styles.qrText}>Escanea el código para seguirnos</p>
            </div>
          </div>
        </div>
      </FadeInOnScroll>

      <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" />
    </section>
  );
};

export default Gallery;
