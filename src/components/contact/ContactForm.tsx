"use client";
import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaLinkedinIn,
  FaLeaf,
} from "react-icons/fa";
import styles from "../../styles/ContactForm.module.css";
import { FadeInOnScroll } from "../fadeInonscroll";

const ContactForm: React.FC = () => {
  return (
    <FadeInOnScroll>
      <section className={styles.contactSection} id="contact">
        {/* Iconos decorativos de fondo */}
        <FaLeaf className={styles.decorativeLeaf1} />
        <FaLeaf className={styles.decorativeLeaf2} />

        {/* Badge */}
        <div className={styles.badge}>
          <FaLeaf className={styles.badgeIcon} />
          Agenda Tu Primera Consulta
        </div>

        {/* Título */}
        <h2 className={styles.title}>Contacto</h2>

        {/* Subtítulo */}
        <p className={styles.subtitle}>
          Da el primer paso hacia tu bienestar mental
        </p>

        <div className={styles.container}>
          {/* Tarjeta de contacto */}
          <div className={styles.contactInfo}>
            <h3 className={styles.infoTitle}>Información de Contacto</h3>

            <div className={styles.infoBlock}>
              <FaPhoneAlt className={styles.infoIcon} />
              <p className={styles.infoItem}>
                <strong>Teléfono:</strong> +1 (555) 123-4567
              </p>
              <small className={styles.microcopy}>Disponible de 9 a 18hs</small>
            </div>

            <div className={styles.infoBlock}>
              <FaEnvelope className={styles.infoIcon} />
              <p className={styles.infoItem}>
                <strong>Email:</strong> dr.carlosmendoza@email.com
              </p>
              <small className={styles.microcopy}>
                Respondo en menos de 24h
              </small>
            </div>

            <div className={styles.infoBlock}>
              <FaMapMarkerAlt className={styles.infoIcon} />
              <p className={styles.infoItem}>
                <strong>Ubicación:</strong> Av. Principal 123, Ciudad
              </p>
              <small className={styles.microcopy}>
                Atención presencial con cita
              </small>
            </div>

            <div className={styles.infoBlock}>
              <FaInstagram className={styles.infoIcon} />
              <p className={styles.infoItem}>
                <strong>Instagram:</strong> @dr.carlosmendoza.psi
              </p>
              <small className={styles.microcopy}>
                Sígueme para consejos diarios
              </small>
            </div>

            {/* Separador */}
            <hr className={styles.separator} />

            {/* Redes sociales */}
            <div className={styles.socialContainer}>
              <a
                href="https://instagram.com/dr.carlosmendoza.psi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={styles.socialIcon}
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com/in/dr-carlosmendoza"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={styles.socialIcon}
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Frase inspiradora */}
        <p className={styles.inspirationalQuote}>
          Tu bienestar mental es el primer paso hacia una vida plena.
        </p>
      </section>
    </FadeInOnScroll>
  );
};

export default ContactForm;
