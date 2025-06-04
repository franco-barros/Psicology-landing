"use client";
import React from "react";
import styles from "../../styles/ContactForm.module.css";

const ContactForm: React.FC = () => {
  return (
    <section className={styles.contactSection} id="contact">
      <h2 className={styles.title}>Agenda Tu Primera Consulta</h2>
      <p className={styles.subtitle}>
        Da el primer paso hacia tu bienestar mental
      </p>

      <div className={styles.container}>
        {/* Información de contacto */}
        <div className={styles.contactInfo}>
          <h3>Información de Contacto</h3>
          <p>
            <strong>Teléfono:</strong> +1 (555) 123-4567
          </p>
          <p>
            <strong>Email:</strong> dr.carlosmendoza@email.com
          </p>
          <p>
            <strong>Ubicación:</strong> Av. Principal 123, Ciudad
          </p>
          <p>
            <strong>Instagram:</strong> @dr.carlosmendoza.psi
          </p>

          <div className={styles.freeSession}>
            <h4>Primera Consulta Gratuita</h4>
            <p>
              Agenda una consulta inicial de 30 minutos sin costo para
              conocernos y evaluar cómo puedo ayudarte.
            </p>
          </div>
        </div>

        {/* Formulario */}
        <form className={styles.form}>
          <h3>Envíame un Mensaje</h3>
          <div className={styles.formGroup}>
            <label>Nombre</label>
            <input type="text" placeholder="Tu nombre completo" />
          </div>

          <div className={styles.formGroup}>
            <label>Teléfono</label>
            <input type="text" placeholder="Tu número de teléfono" />
          </div>

          <div className={styles.formGroup}>
            <label>Email</label>
            <input type="email" placeholder="tu@email.com" />
          </div>

          <div className={styles.formGroup}>
            <label>Tipo de Consulta</label>
            <select>
              <option value="">Seleccionar</option>
              <option value="tcc">Terapia Cognitivo-Conductual</option>
              <option value="sistemica">Terapia Sistémica Familiar</option>
              <option value="neuro">Neuropsicología Clínica</option>
              <option value="otro">Otro</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label>Mensaje</label>
            <textarea placeholder="Cuéntame brevemente sobre tu situación y cómo puedo ayudarte..." />
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
