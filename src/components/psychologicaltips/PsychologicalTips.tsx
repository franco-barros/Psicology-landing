"use client";

import React, { useState, useEffect } from "react";
import {
  FaLightbulb,
  FaHeartbeat,
  FaBurn,
  FaHandshake,
  FaStar,
} from "react-icons/fa";
import styles from "../../styles/PsychologicalTips.module.css";
import { FadeInOnScroll } from "../fadeInonscroll";

const categories = ["Todos", "Ansiedad", "Estrés", "Relaciones", "Autoestima"];

const tips = {
  Ansiedad: [
    "Practica la respiración profunda durante cinco minutos para calmar tu mente.",
    "Identifica pensamientos negativos y cámbialos por afirmaciones realistas.",
  ],
  Estrés: [
    "Tómate descansos cortos durante el día para evitar sentirte abrumado.",
    "Realiza estiramientos o caminatas breves para liberar tensión física.",
  ],
  Relaciones: [
    "Escucha activamente sin interrumpir para mejorar la comunicación.",
    "Establece límites saludables y comunícalos con respeto.",
  ],
  Autoestima: [
    "Escribe una lista de tus logros y cualidades positivas para recordarte tu valía.",
    "Celebra tus pequeños avances diarios sin compararte con los demás.",
  ],
};

const icons: Record<keyof typeof tips, React.JSX.Element> = {
  Ansiedad: <FaHeartbeat style={{ color: "#f44336" }} />,
  Estrés: <FaBurn style={{ color: "#ff9800" }} />,
  Relaciones: <FaHandshake style={{ color: "#4caf50" }} />,
  Autoestima: <FaStar style={{ color: "#3f51b5" }} />,
};

const PsychologicalTips = () => {
  const [selected, setSelected] = useState("Todos");
  const [currentIndex, setCurrentIndex] = useState(0);

  const getCurrentTips =
    selected === "Todos"
      ? Object.entries(tips).flatMap(([cat, arr]) =>
          arr.map((tip) => ({ category: cat, tip }))
        )
      : tips[selected as keyof typeof tips].map((tip) => ({
          category: selected,
          tip,
        }));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev + 1 < getCurrentTips.length ? prev + 1 : 0
      );
    }, 8000);

    return () => clearInterval(interval);
  }, [selected, getCurrentTips.length]);

  const getHoverClass = (cat: string) => {
    switch (cat) {
      case "Ansiedad":
        return styles.hoverAnsiedad;
      case "Estrés":
        return styles.hoverEstrés;
      case "Relaciones":
        return styles.hoverRelaciones;
      case "Autoestima":
        return styles.hoverAutoestima;
      default:
        return "";
    }
  };

  return (
    <FadeInOnScroll>
      <section className={styles.container}>
        <span className={styles.badge}>
          <FaLightbulb />
          Tips Psicológicos
        </span>

        <h1 className={styles.title}>
          <span className={styles.titleBlack}>Consejos para tu</span>{" "}
          <span className={styles.titleGreen}>Bienestar Emocional</span>
        </h1>

        <h2 className={styles.subtitle}>
          Encuentra aquí consejos prácticos para mejorar tu día a día
        </h2>

        <div className={styles.categories}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.categoryBtn} ${getHoverClass(cat)} ${
                selected === cat ? `${styles.active} ${getHoverClass(cat)}` : ""
              }`}
              onClick={() => {
                setSelected(cat);
                setCurrentIndex(0);
              }}
              type="button"
            >
              {cat}
            </button>
          ))}
        </div>

        <div className={styles.tipBox}>
          {selected === "Todos" ? (
            <>
              <div className={styles.tipIcon}>
                {
                  icons[
                    getCurrentTips[currentIndex].category as keyof typeof icons
                  ]
                }
              </div>
              <p>
                <strong>{getCurrentTips[currentIndex].category}:</strong>{" "}
                {getCurrentTips[currentIndex].tip}
              </p>
            </>
          ) : (
            <>
              {icons[selected as keyof typeof icons] && (
                <div className={styles.tipIcon}>
                  {icons[selected as keyof typeof icons]}
                </div>
              )}
              <p>{getCurrentTips[currentIndex].tip}</p>
            </>
          )}
        </div>
      </section>
    </FadeInOnScroll>
  );
};

export default PsychologicalTips;
