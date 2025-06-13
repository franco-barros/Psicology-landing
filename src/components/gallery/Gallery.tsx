// components/Gallery.tsx

"use client";

// Extendemos globalmente el tipo de window para incluir instgrm
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

const posts: string[] = [
  "https://www.instagram.com/p/C9SPTvMvsRX",
  "https://www.instagram.com/p/C-u59ITRwqg",
  "https://www.instagram.com/p/C-BxI5gqjQe",
  "https://www.instagram.com/p/C9tcuL4NbxC",
  "https://www.instagram.com/p/C8-mr62MNVQ",
  "https://www.instagram.com/p/C8xMZzrv72E",
];

const Gallery: React.FC = () => {
  useEffect(() => {
    // Procesa los blockquotes de Instagram cuando el script cargue
    window.instgrm?.Embeds.process();
  }, []);

  return (
    <section id="gallery" className={styles.gallery}>
      <span className={styles.badge}>Redes Sociales</span>

      <h2 className={styles.heading}>
        <FaInstagram /> Nuestro Instagram
      </h2>

      <div className={styles.postSection}>
        <h3 className={styles.postTitle}>Nuestras publicaciones</h3>
        <div className={styles.postGrid}>
          {posts.map((url) => (
            <div key={url} className={styles.postCard}>
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={url}
                data-instgrm-version="14"
                style={{ margin: 0 }}
              />
            </div>
          ))}
        </div>

        <a
          href="https://www.instagram.com/creandocaminos__"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.followButton}
        >
          <FaInstagram /> Seguir a Dr. Ivan Waisman
        </a>
      </div>

      <div className={styles.instagramSection}>
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

        <div className={styles.instagramCard}>
          <h3 className={styles.cardTitle}>¿Qué compartimos?</h3>
          <div className={styles.cardText}>
            <p>
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
          <a
            href="https://www.instagram.com/creandocaminos__"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.instagramGradientButton}
          >
            <FaInstagram /> Visitar Instagram
          </a>
        </div>
      </div>

      <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" />
    </section>
  );
};

export default Gallery;
