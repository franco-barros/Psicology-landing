"use client";

import React from "react";
import styles from "../../styles/DigitalTherapy.module.css";
import { FadeInOnScroll } from "../fadeInonscroll";
import {
  Monitor,
  Globe,
  Clock,
  Home,
  Video,
  Lock,
  Headphones,
  CheckCircle,
} from "lucide-react";

const ventajas = [
  {
    title: "Accesibilidad Total",
    description:
      "Recibe terapia desde cualquier lugar del mundo, eliminando barreras geográficas y de movilidad.",
    icon: Globe,
    color: "#4caf50",
  },
  {
    title: "Flexibilidad Horaria",
    description:
      "Horarios adaptados a tu rutina, incluyendo sesiones en horarios extendidos y fines de semana.",
    icon: Clock,
    color: "#ff9800",
  },
  {
    title: "Privacidad y Comodidad",
    description:
      "Sesiones desde tu espacio seguro, con total confidencialidad y sin preocupaciones de transporte.",
    icon: Home,
    color: "#9c27b0",
  },
];

const tecnologia = [
  {
    title: "Videoconferencia HD",
    description:
      "Plataforma segura con video y audio de alta calidad para una comunicación óptima.",
    icon: Video,
    color: "#2196f3",
  },
  {
    title: "Encriptación Total",
    description:
      "Todas las sesiones están protegidas con encriptación de extremo a extremo.",
    icon: Lock,
    color: "#795548",
  },
  {
    title: "Soporte Técnico",
    description:
      "Asistencia técnica disponible para garantizar una experiencia sin interrupciones.",
    icon: Headphones,
    color: "#009688",
  },
];

const comoFunciona = [
  "Agenda tu cita online",
  "Recibe el enlace seguro por email",
  "Conéctate desde cualquier dispositivo",
  "Disfruta de tu sesión terapéutica",
];

const mismaEfectividad = [
  "Estudios científicos validan su eficacia",
  "Mismas técnicas terapéuticas aplicadas",
  "Resultados equivalentes a terapia presencial",
];

const tarifas = [
  {
    title: "Sesión Individual",
    duration: "50 minutos",
    benefits: [
      "Terapia personalizada",
      "Grabación opcional",
      "Material de apoyo",
    ],
    popular: false,
  },
  {
    title: "Paquete 4 Sesiones",
    duration: "4 sesiones de 50 min",
    benefits: ["Seguimiento entre sesiones", "Plan personalizado"],
    popular: true,
  },
  {
    title: "Sesión de Pareja",
    duration: "75 minutos",
    benefits: [
      "Terapia de pareja",
      "Ejercicios para casa",
      "Seguimiento semanal",
    ],
    popular: false,
  },
];

const DigitalTherapy: React.FC = () => {
  return (
    <section className={styles.digitalTherapySection} id="digital-therapy">
      <FadeInOnScroll>
        <div className={styles.badge}>
          <Monitor size={16} style={{ marginRight: "0.4rem" }} />
          Terapia Digital
        </div>

        <h2 className={styles.title}>
          <span>Consulta</span> <span>Online</span>
        </h2>
        <p className={styles.description}>
          Accede a terapia profesional desde la comodidad de tu hogar con la
          misma calidad y efectividad que las sesiones presenciales
        </p>
      </FadeInOnScroll>

      <div className={styles.cardsGrid}>
        {[ventajas, tecnologia, comoFunciona, mismaEfectividad].map(
          (section, i) => {
            const cardContent = (() => {
              if (i === 0)
                return (
                  <div className={`${styles.card} ${styles.card1}`}>
                    <h3 className={styles.cardTitle}>
                      Ventajas de la Terapia Online
                    </h3>
                    {ventajas.map(
                      ({ title, description, icon: Icon, color }) => (
                        <div key={title} className={styles.cardItem}>
                          <div className={styles.iconWithText}>
                            <div className={styles.roundIcon}>
                              <Icon size={24} color={color} />
                            </div>
                            <div>
                              <strong>{title}</strong>
                              <p>{description}</p>
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                );
              if (i === 1)
                return (
                  <div className={`${styles.card} ${styles.card2}`}>
                    <h3 className={styles.cardTitle}>Tecnología Segura</h3>
                    {tecnologia.map(
                      ({ title, description, icon: Icon, color }) => (
                        <div key={title} className={styles.cardItem}>
                          <div className={styles.iconWithText}>
                            <div className={styles.roundIcon}>
                              <Icon size={24} color={color} />
                            </div>
                            <div>
                              <strong>{title}</strong>
                              <p>{description}</p>
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                );
              if (i === 2)
                return (
                  <div className={`${styles.card} ${styles.card3}`}>
                    <h3 className={styles.cardTitle}>¿Cómo Funciona?</h3>
                    <ol className={styles.stepsList}>
                      {comoFunciona.map((step, i) => (
                        <li key={step}>
                          <span className={styles.stepNumber}>{i + 1}</span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                );
              return (
                <div className={`${styles.card} ${styles.card4}`}>
                  <h3 className={styles.cardTitle}>
                    Misma Efectividad Comprobada
                  </h3>
                  <ul className={styles.checkList}>
                    {mismaEfectividad.map((item) => (
                      <li key={item}>
                        <CheckCircle
                          size={24}
                          color="#4caf50"
                          className={styles.checkIcon}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })();

            return (
              <FadeInOnScroll key={i} delay={i * 0.1}>
                {cardContent}
              </FadeInOnScroll>
            );
          }
        )}
      </div>

      <FadeInOnScroll delay={0.4}>
        <div className={styles.tarifasWrapperCard}>
          <div className={styles.tarifasWrapper}>
            <h3 className={styles.cardTitle}>Tarifas Consulta Online</h3>
            <p className={styles.tarifaIntro}>
              Opciones de terapia digital con todas las explicaciones incluidas
            </p>

            <div className={styles.tarifasGrid}>
              {tarifas.map(({ title, duration, benefits, popular }, index) => {
                let cardColorClass = "";
                if (index === 0) {
                  cardColorClass = styles.tarifa1;
                } else if (index === 1) {
                  cardColorClass = styles.tarifa2;
                } else {
                  cardColorClass = styles.tarifa3;
                }

                return (
                  <div key={title} className={styles.tarifaWrapperItem}>
                    {popular && (
                      <div className={styles.popularBadge}>Más Popular</div>
                    )}
                    <div
                      className={`${styles.tarifaCard} ${cardColorClass} ${
                        popular ? styles.popularBorder : ""
                      }`}
                    >
                      <h4 className={styles.tarifaTitle}>{title}</h4>
                      <div className={styles.tarifaDuration}>{duration}</div>
                      <ul className={styles.benefitsList}>
                        {benefits.map((b) => (
                          <li key={b}>
                            <CheckCircle
                              size={20}
                              className={styles.checkIcon}
                            />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Botón fuera del grid */}
            <div style={{ marginTop: "2rem", textAlign: "center" }}>
              <button className={styles.agendarButton}>
                <Video size={20} style={{ marginRight: "0.5rem" }} />
                Agendar Consulta Online
              </button>
            </div>
          </div>
        </div>
      </FadeInOnScroll>
    </section>
  );
};

export default DigitalTherapy;
