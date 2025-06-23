"use client";

import React from "react";
import {
  FaInstagram,
  FaTiktok,
  FaPhoneAlt,
  FaEnvelope,
  FaLeaf,
} from "react-icons/fa";
import { usePathname } from "next/navigation";
import styles from "../../styles/Footer.module.css";

const Footer = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";

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
        {/* Presentación */}
        <div className={styles.section}>
          <h3 className={styles.title}>
            <FaLeaf className={styles.iconLeaf} />
            Lic. Ivan Waisman
          </h3>
          <p className={styles.description}>
            Psicólogo clínico especializado en bienestar mental y crecimiento
            personal.
          </p>
        </div>

        {/* Enlaces y redes sociales */}
        {isHome && (
          <>
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
              </ul>
            </div>

            <div className={styles.section}>
              <h4 className={styles.subtitle}>Redes Sociales</h4>
              <div className={styles.socialLinks}>
                <a
                  href="https://www.instagram.com/creandocaminos__"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://www.tiktok.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                >
                  <FaTiktok />
                  <span>TikTok</span>
                </a>
              </div>
            </div>

            <div className={styles.section}>
              <h4 className={styles.subtitle}>Contacto</h4>
              <p className={styles.contact}>
                <FaPhoneAlt /> +31649393678
              </p>
              <p className={styles.contact}>
                <FaEnvelope /> psi.ivanwaisman@gmail.com
              </p>
            </div>
          </>
        )}
      </div>

      {/* Pie común */}
      <div className={styles.bottomBar}>
        <p className={styles.copy}>
          © 2024 Lic. Ivan Waisman Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
