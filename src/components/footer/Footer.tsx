"use client";

import React from "react";
import {
  FaInstagram,
  FaTiktok,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowUp,
  FaEnvelope,
  FaLeaf,
} from "react-icons/fa";
import styles from "../../styles/Footer.module.css";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const handleScrollTop = () => {
    const hero = document.getElementById("hero");
    hero?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="footer" className={`${styles.footer} ${className || ""}`}>
      <div className={styles.content}>
        <div className={styles.section}>
          <h3 className={styles.title}>
            <FaLeaf className={styles.iconLeaf} />
            Dr. Carlos Mendoza
          </h3>
          <p className={styles.description}>
            Psicólogo clínico especializado en bienestar mental y crecimiento
            personal.
          </p>
        </div>

        <div className={styles.section}>
          <h4 className={styles.subtitle}>Servicios</h4>
          <ul className={styles.list}>
            <li>Terapia Individual</li>
            <li>Terapia de Pareja</li>
            <li>Terapia Familiar</li>
            <li>Consulta Online</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h4 className={styles.subtitle}>Enlaces</h4>
          <ul className={styles.list}>
            <li>Sobre Mí</li>
            <li>Blog</li>
            <li>Recursos</li>
            <li>Preguntas Frecuentes</li>
            <li>Contacto</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h4 className={styles.subtitle}>Contacto</h4>
          <p className={styles.contact}>
            <FaPhoneAlt /> +1 (555) 123-4567
          </p>
          <p className={styles.contact}>
            <FaEnvelope /> dr.carlosmendoza@email.com
          </p>
          <p className={styles.contact}>
            <FaMapMarkerAlt /> Av. Principal 123, Ciudad
          </p>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={styles.socials}>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.tiktok.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <FaTiktok />
          </a>
        </div>

        <p className={styles.copy}>
          © 2024 Dr. Carlos Mendoza. Todos los derechos reservados.
        </p>

        <button
          onClick={handleScrollTop}
          className={styles.backToTop}
          aria-label="Volver arriba"
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
