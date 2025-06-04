"use client";

import React from "react";
import Image from "next/image";
import styles from "../../styles/Gallery.module.css";

const Gallery: React.FC = () => (
  <section id="gallery" className={styles.gallery}>
    <h2 className={styles.heading}>Nuestro Instagram</h2>

    <div className={styles.instagramSection}>
      <div className={styles.instagramFollow}>
        <Image
          src="/image/maleneinstagram.png"
          alt="QR Instagram para seguirnos"
          width={200}
          height={200}
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
            <li>🧘 Consejos para manejar la ansiedad y el estrés.</li>
            <li>📚 Reflexiones sobre salud mental y autocuidado.</li>
            <li>🎥 Fragmentos de charlas y videos educativos.</li>
            <li>🌱 Frases motivacionales y ejercicios prácticos.</li>
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
