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
import { usePathname } from "next/navigation";
import styles from "../../styles/Footer.module.css";

const Footer = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";

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
    <footer id="footer" className={styles.footer}>
      <div className={styles.content}>
        {/* Presentación (común en ambas versiones) */}
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

        {/* Versión completa solo en home */}
        {isHome && (
          <>
            <div className={styles.section}>
              <h4 className={styles.subtitle}>Servicios</h4>
              <ul className={styles.list}>
                <li>
                  <a
                    href="#services"
                    onClick={(e) => handleInternalLinkClick(e, "services")}
                  >
                    Terapia Individual
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    onClick={(e) => handleInternalLinkClick(e, "services")}
                  >
                    Terapia de Pareja
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    onClick={(e) => handleInternalLinkClick(e, "services")}
                  >
                    Terapia Familiar
                  </a>
                </li>
                <li>
                  <a
                    href="#digital-therapy"
                    onClick={(e) =>
                      handleInternalLinkClick(e, "digital-therapy")
                    }
                  >
                    Consulta Online
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.section}>
              <h4 className={styles.subtitle}>Enlaces</h4>
              <ul className={styles.list}>
                <li>
                  <a
                    href="#aboutme"
                    onClick={(e) => handleInternalLinkClick(e, "aboutme")}
                  >
                    Sobre Mí
                  </a>
                </li>
                <li>
                  <a
                    href="#blog"
                    onClick={(e) => handleInternalLinkClick(e, "blog")}
                  >
                    Blog y recursos
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    onClick={(e) => handleInternalLinkClick(e, "faq")}
                  >
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
          </>
        )}
      </div>

      {/* Siempre visible */}
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

        {isHome && (
          <button
            onClick={handleScrollTop}
            className={styles.backToTop}
            aria-label="Volver arriba"
          >
            <FaArrowUp />
          </button>
        )}
      </div>
    </footer>
  );
};

export default Footer;
