"use client";

import React from "react";
import Image from "next/image";
import styles from "../../styles/gallery/Gallery.module.css";
import GalleryCarousel from "../gallerycarousel";
import galleryImages from "../../data/galleryData";

const Gallery: React.FC = () => (
  <section id="gallery" className={styles.gallery}>
    <h2 className={styles.heading}>Nuestro instagram</h2>
    <GalleryCarousel images={galleryImages} />

    <div className={styles.instagramSection}>
      <div className={styles.instagramFollow}>
        <Image
          src="/image/maleneinstagram.png"
          alt="QR Instagram para seguirnos"
          width={200}
          height={200}
          className={styles.instagramImage}
        />
      </div>
      <div className={styles.instagramCard}>
        <h3 className={styles.cardTitle}>¿Qué compartimos?</h3>
        <div className={styles.cardText}>
          <p>En nuestro Instagram encontrarás:</p>
          <ul className={styles.cardList}>
            <li>🍰 Fotos de nuestras últimas creaciones.</li>
            <li>📸 Detrás de escena preparando pedidos.</li>
            <li>🎉 Promociones exclusivas y sorteos.</li>
            <li>🛍️ Novedades y lanzamientos de temporada.</li>
          </ul>
        </div>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.instagramButton}
        >
          Visitar Instagram
        </a>
      </div>
    </div>
  </section>
);

export default Gallery;
