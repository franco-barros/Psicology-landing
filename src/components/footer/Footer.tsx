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

  const handleInternalLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="footer" className={`${styles.footer} ${className || ""}`}>
      <div className={styles.content}>
        {/* Sección de presentación */}
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

        {/* Servicios con links internos */}
        <div className={styles.section}>
          <h4 className={styles.subtitle}>Servicios</h4>
          <ul className={styles.list}>
            <li>
              <a
                href="#servicios"
                onClick={(e) => handleInternalLinkClick(e, "servicios")}
              >
                Terapia Individual
              </a>
            </li>
            <li>
              <a
                href="#servicios"
                onClick={(e) => handleInternalLinkClick(e, "servicios")}
              >
                Terapia de Pareja
              </a>
            </li>
            <li>
              <a
                href="#servicios"
                onClick={(e) => handleInternalLinkClick(e, "servicios")}
              >
                Terapia Familiar
              </a>
            </li>
            <li>
              <a
                href="#servicios"
                onClick={(e) => handleInternalLinkClick(e, "servicios")}
              >
                Consulta Online
              </a>
            </li>
          </ul>
        </div>

        {/* Enlaces navegables */}
        <div className={styles.section}>
          <h4 className={styles.subtitle}>Enlaces</h4>
          <ul className={styles.list}>
            <li>
              <a
                href="#sobre-mi"
                onClick={(e) => handleInternalLinkClick(e, "sobre-mi")}
              >
                Sobre Mí
              </a>
            </li>
            <li>
              <a
                href="#blog"
                onClick={(e) => handleInternalLinkClick(e, "blog")}
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#recursos"
                onClick={(e) => handleInternalLinkClick(e, "recursos")}
              >
                Recursos
              </a>
            </li>
            <li>
              <a href="#faq" onClick={(e) => handleInternalLinkClick(e, "faq")}>
                Preguntas Frecuentes
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => handleInternalLinkClick(e, "contact")}
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* Información de contacto */}
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

      {/* Barra inferior */}
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
