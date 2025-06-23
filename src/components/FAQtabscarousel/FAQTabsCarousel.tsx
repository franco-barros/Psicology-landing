"use client";

import React, { useState } from "react";
import styles from "../../styles/FAQTabsCarousel.module.css";
import { ChevronDown } from "lucide-react";
import { FadeInOnScroll } from "../fadeInonscroll";

const faqItems = [
  {
    category: "General",
    questions: [
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
        question: "¿Qué debo esperar en la primera sesión?",
        answer:
          "En la primera sesión exploramos tus motivos de consulta, tus objetivos y acordamos el mejor camino terapéutico.",
      },
      {
        question: "¿Trabajas con adolescentes?",
        answer:
          "Sí, ofrezco terapia para adolescentes a partir de los 13 años, adaptando el enfoque a sus necesidades.",
      },
    ],
  },
  {
    category: "Modalidad Online",
    questions: [
      {
        question: "¿La terapia online es tan buena como la presencial?",
        answer:
          "Sí, numerosos estudios avalan la efectividad de la terapia online en comparación con la presencial.",
      },
      {
        question: "¿Cuánto tiempo toma ver resultados en terapia?",
        answer:
          "Depende de cada persona, pero algunos pacientes notan mejoras en pocas semanas.",
      },
      {
        question: "¿Qué dispositivos necesito para la terapia online?",
        answer:
          "Solo necesitás un celular, tablet o computadora con conexión a internet estable.",
      },
      {
        question: "¿Es segura la terapia online?",
        answer:
          "Sí, se utilizan plataformas seguras y se garantiza la confidencialidad de las sesiones.",
      },
    ],
  },
  {
    category: "Otros",
    questions: [
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
        question: "¿Atendés a personas del exterior?",
        answer:
          "Sí, brindo terapia a personas que residen fuera del país a través de sesiones online.",
      },
      {
        question: "¿Cómo puedo reservar una sesión?",
        answer:
          "Podés agendar tu primera consulta desde la web o escribiéndome directamente por WhatsApp.",
      },
    ],
  },
];

const FAQTabsCarousel: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number | null>(
    null
  );

  const toggleQuestion = (index: number) => {
    setActiveQuestionIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <div className={styles.tabList}>
        {faqItems.map((group, index) => (
          <button
            key={group.category}
            className={`${styles.tabItem} ${
              index === activeCategoryIndex ? styles.tabItemActive : ""
            }`}
            onClick={() => {
              setActiveCategoryIndex(index);
              setActiveQuestionIndex(null);
            }}
          >
            {group.category}
          </button>
        ))}
      </div>

      <ul className={styles.questionList}>
        {faqItems[activeCategoryIndex].questions.map((item, index) => {
          const isActive = activeQuestionIndex === index;

          return (
            <FadeInOnScroll key={item.question} delay={index * 0.1}>
              <button
                className={styles.questionItem}
                tabIndex={0}
                onClick={() => toggleQuestion(index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") toggleQuestion(index);
                }}
              >
                <div className={styles.questionHeader}>
                  <span
                    className={
                      isActive ? styles.answerText : styles.questionText
                    }
                  >
                    {isActive ? item.answer : item.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`${styles.chevron} ${
                      isActive ? styles.chevronOpen : ""
                    }`}
                  />
                </div>
              </button>
            </FadeInOnScroll>
          );
        })}
      </ul>
    </>
  );
};

export default FAQTabsCarousel;
