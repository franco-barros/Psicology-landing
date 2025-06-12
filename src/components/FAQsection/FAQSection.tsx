"use client";

import React, { useState } from "react";
import styles from "../../styles/FAQSection.module.css";
import { MessageCircle, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqItems = [
  {
    question: "¿Cuánto dura una sesión de terapia?",
    answer: "Cada sesión tiene una duración aproximada de 50 minutos.",
  },
  {
    question: "¿Con qué frecuencia debo asistir a terapia?",
    answer:
      "La frecuencia recomendada suele ser semanal, pero puede ajustarse según tu proceso y necesidades.",
  },
  {
    question: "¿La terapia online es tan efectiva como la presencial?",
    answer:
      "Sí, numerosos estudios avalan la efectividad de la terapia online cuando se realiza adecuadamente.",
  },
  {
    question: "¿Cuánto tiempo toma ver resultados en terapia?",
    answer:
      "Depende de cada persona, pero algunos pacientes notan mejoras en pocas semanas.",
  },
  {
    question: "¿Qué métodos terapéuticos utilizas?",
    answer:
      "Utilizo un enfoque integrativo, combinando técnicas de terapia cognitivo-conductual, humanista y sistémica.",
  },
  {
    question: "¿Manejas casos de emergencia?",
    answer:
      "No atiendo emergencias. En caso de crisis, se recomienda acudir a un servicio de urgencias o contactar líneas de ayuda.",
  },
  {
    question: "¿Trabajas con adolescentes?",
    answer:
      "Sí, ofrezco terapia para adolescentes a partir de los 13 años, adaptando el enfoque a sus necesidades.",
  },
  {
    question: "¿Qué debo esperar en la primera sesión?",
    answer:
      "En la primera sesión exploramos tus motivos de consulta, tus objetivos y acordamos el mejor camino terapéutico.",
  },
];

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className={styles.faqSection} id="faq">
      <div className={styles.badge}>
        <MessageCircle size={16} style={{ marginRight: "0.4rem" }} />
        Preguntas Frecuentes
      </div>

      <h2 className={styles.title}>
        <span>Resuelve tus</span> <span>Dudas</span>
      </h2>

      <p className={styles.description}>
        Encuentra respuestas a las preguntas más comunes sobre terapia
        psicológica
      </p>

      <ul className={styles.questionList}>
        {faqItems.map((item, index) => {
          const isActive = activeIndex === index;

          return (
            <li
              key={item.question}
              className={styles.questionItem}
              onClick={() => toggleIndex(index)}
            >
              <div className={styles.questionHeader}>
                {item.question}
                <ChevronDown
                  size={20}
                  className={`${styles.chevron} ${
                    isActive ? styles.chevronOpen : ""
                  }`}
                />
              </div>

              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={styles.answerWrapper}
                  >
                    <div className={styles.answer}>{item.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>

      <div className={styles.contactBox}>
        <h3 className={styles.contactTitle}>¿No encontraste tu respuesta?</h3>
        <p className={styles.contactSubtitle}>
          Contáctame directamente y resolveré todas tus dudas de manera
          personalizada.
        </p>
        <button className={styles.askButton}>Hacer una Pregunta</button>
      </div>
    </section>
  );
};

export default FAQSection;
