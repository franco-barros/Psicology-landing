"use client";

import React, { useState } from "react";
import styles from "../../../styles/faqsection/FAQTabsCarousel.module.css";
import { ChevronDown } from "lucide-react";
import { FadeInOnScroll } from "../../shared/fadeInonscroll";

const faqItems = [
  {
    category: "General",
    questions: [
      {
        question: "¿Cuánto dura una sesión de terapia?",
        answer: "Cada sesión dura aproximadamente 50 minutos.",
      },
      {
        question: "¿Con qué frecuencia debo asistir a terapia?",
        answer: "Lo ideal es una vez por semana, según tus necesidades.",
      },
      {
        question: "¿Qué debo esperar en la primera sesión?",
        answer: "Exploramos tus motivos y objetivos para definir el enfoque.",
      },
      {
        question: "¿Trabajas con adolescentes?",
        answer: "Sí, a partir de los 13 años con un enfoque adaptado.",
      },
    ],
  },
  {
    category: "Modalidad Online",
    questions: [
      {
        question: "¿La terapia online es tan buena como la presencial?",
        answer: "Sí, su efectividad está respaldada por estudios.",
      },
      {
        question: "¿Cuánto tiempo toma ver resultados en terapia?",
        answer: "Depende de cada persona, a veces en pocas semanas.",
      },
      {
        question: "¿Qué dispositivos necesito para la terapia online?",
        answer: "Un celular, tablet o computadora con internet estable.",
      },
      {
        question: "¿Es segura la terapia online?",
        answer: "Sí, se usa tecnología segura y confidencial.",
      },
    ],
  },
  {
    category: "Otros",
    questions: [
      {
        question: "¿Qué métodos terapéuticos utilizas?",
        answer: "Uso un enfoque integrativo adaptado a cada persona.",
      },
      {
        question: "¿Manejas casos de emergencia?",
        answer: "No, en crisis se recomienda acudir a emergencias.",
      },
      {
        question: "¿Atendés a personas del exterior?",
        answer: "Sí, realizo sesiones online desde cualquier país.",
      },
      {
        question: "¿Cómo puedo reservar una sesión?",
        answer: "Podés agendar desde la web o por WhatsApp.",
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
