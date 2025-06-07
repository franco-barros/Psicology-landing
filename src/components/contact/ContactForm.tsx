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

          <div className={styles.freeSession}>
            <h4 className={styles.infoTitle}>Primera Consulta Gratuita</h4>
            <p className={styles.infoItem}>
              Agenda una consulta inicial de 30 minutos sin costo para
              conocernos y evaluar cómo puedo ayudarte.
            </p>
          </div>
        </div>

        {/* Formulario */}
        <form className={styles.form}>
          <h3 className={styles.formTitle}>Envíame un Mensaje</h3>

          <div className={styles.formGroup}>
            <label htmlFor="contact-name">Nombre</label>
            <input
              id="contact-name"
              type="text"
              placeholder="Tu nombre completo"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="contact-phone">Teléfono</label>
            <input
              id="contact-phone"
              type="text"
              placeholder="Tu número de teléfono"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="contact-email">Email</label>
            <input id="contact-email" type="email" placeholder="tu@email.com" />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="contact-type">Tipo de Consulta</label>
            <select id="contact-type">
              <option value="">Seleccionar</option>
              <option value="tcc">Terapia Cognitivo-Conductual</option>
              <option value="sistemica">Terapia Sistémica Familiar</option>
              <option value="neuro">Neuropsicología Clínica</option>
              <option value="otro">Otro</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="contact-message">Mensaje</label>
            <textarea
              id="contact-message"
              placeholder="Cuéntame brevemente sobre tu situación y cómo puedo ayudarte..."
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Enviar Mensaje y Agendar
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
