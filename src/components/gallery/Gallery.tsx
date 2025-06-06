"use client";

import React from "react";
import Image from "next/image";
import {
  FaLeaf,
  FaBook,
  FaVideo,
  FaQuoteLeft,
  FaInstagram,
} from "react-icons/fa";
import styles from "../../styles/Gallery.module.css";

const Gallery: React.FC = () => (
  <section id="gallery" className={styles.gallery}>
    <span className={styles.badge}>Redes Sociales</span>
    <h2 className={styles.heading}>
      <FaInstagram /> Nuestro Instagram
    </h2>

    <div className={styles.postSection}>
      <h3 className={styles.postTitle}>Últimas publicaciones</h3>
      <div className={styles.postGrid}>
        {[1, 2, 3, 4].map((_, i) => (
          <div key={i} className={styles.postCard}>
            <Image
              src={`/images/psycologyinstagram.png`}
              alt={`Post ${i + 1}`}
              width={200}
              height={200}
              className={styles.postImage}
            />
          </div>
        ))}
      </div>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.followButton}
      >
        <FaInstagram />
        Seguir a Dr. Carlos Guimenez
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
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.instagramGradientButton}
        >
          <FaInstagram />
          Visitar Instagram
        </a>
      </div>
    </div>
  </section>
);

export default Gallery;
