"use client";
import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaLeaf,
} from "react-icons/fa";
import styles from "../../styles/ContactForm.module.css";

const ContactForm: React.FC = () => {
  return (
    <section className={styles.contactSection} id="contact">
      {/* Badge */}
      <div className={styles.badge}>
        <FaLeaf className={styles.badgeIcon} />
        Agenda Tu Primera Consulta
      </div>

      {/* Título principal */}
      <h2 className={styles.title}>Contacto</h2>

      {/* Subtítulo */}
      <p className={styles.subtitle}>
        Da el primer paso hacia tu bienestar mental
      </p>

      <div className={styles.container}>
        {/* Información de contacto */}
        <div className={`${styles.contactInfo} ${styles.autumnCard}`}>
          <h3 className={styles.infoTitle}>Información de Contacto</h3>
          <p className={styles.infoItem}>
            <FaPhoneAlt className={styles.infoIcon} />
            <strong>Teléfono:</strong> +1 (555) 123-4567
          </p>
          <p className={styles.infoItem}>
            <FaEnvelope className={styles.infoIcon} />
            <strong>Email:</strong> dr.carlosmendoza@email.com
          </p>
          <p className={styles.infoItem}>
            <FaMapMarkerAlt className={styles.infoIcon} />
            <strong>Ubicación:</strong> Av. Principal 123, Ciudad
          </p>
          <p className={styles.infoItem}>
            <FaInstagram className={styles.infoIcon} />
            <strong>Instagram:</strong> @dr.carlosmendoza.psi
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
