// components/freeevaluation/FreeEvaluation.tsx

"use client";

import React from "react";
import {
  Brain,
  CheckCircle,
  HeartPulse,
  Users,
  ClipboardList,
} from "lucide-react";
import styles from "../../styles/FreeEvaluation.module.css";

interface ItemConDesc {
  title: string;
  desc: string;
}

interface GrupoEvaluacion {
  title: string | null;
  items: (ItemConDesc | string)[];
}

const incluyeEvaluacion: GrupoEvaluacion[] = [
  {
    title: "¿Qué incluye la evaluación?",
    items: [
      {
        title: "Análisis de Bienestar Emocional",
        desc: "Evaluamos tu estado emocional actual y factores de estrés",
      },
      {
        title: "Evaluación de Relaciones",
        desc: "Analizamos la calidad de tus vínculos interpersonales",
      },
      {
        title: "Plan de Acción Personalizado",
        desc: "Recomendaciones específicas para tu situación",
      },
    ],
  },
  {
    title: null,
    items: [
      "100% Confidencial",
      "Resultados en 24 horas",
      "Consulta de seguimiento incluida",
    ],
  },
];

interface FreeEvaluationProps {
  formularioUrl: string;
}

const FreeEvaluation: React.FC<FreeEvaluationProps> = ({ formularioUrl }) => {
  const iconMap: Record<string, React.ReactNode> = {
    "Análisis de Bienestar Emocional": (
      <HeartPulse className={styles.cardIcon} />
    ),
    "Evaluación de Relaciones": <Users className={styles.cardIcon} />,
    "Plan de Acción Personalizado": (
      <ClipboardList className={styles.cardIcon} />
    ),
  };

  return (
    <section className={styles.section}>
      <div className={styles.headerWrapper}>
        <div className={styles.badge}>
          <Brain className={styles.badgeIcon} />
          Evaluación Gratuita
        </div>

        <h2 className={styles.title}>
          <span className={styles.titlePrimary}>Descubre tu</span>{" "}
          <span className={styles.titleSecondary}>Bienestar Mental</span>
        </h2>

        <h3 className={styles.subtitle}>
          Completa nuestra evaluación psicológica inicial y recibe
          recomendaciones personalizadas para tu proceso de crecimiento
          personal.
        </h3>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.leftCards}>
          {/* Primera card */}
          <div className={styles.card}>
            {incluyeEvaluacion[0].title && (
              <h4 className={styles.cardTitle}>{incluyeEvaluacion[0].title}</h4>
            )}
            <ul className={styles.cardList}>
              {incluyeEvaluacion[0].items.map((item) =>
                typeof item === "string" ? null : (
                  <li key={item.title} className={styles.cardListItem}>
                    <div className={styles.iconCircle}>
                      {iconMap[item.title]}
                    </div>
                    <div>
                      <strong>{item.title}</strong>
                      <p className={styles.cardDesc}>{item.desc}</p>
                    </div>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Segunda card */}
          <div className={`${styles.card} ${styles.cardYellow}`}>
            <ul className={styles.cardList}>
              {incluyeEvaluacion[1].items.map((item) => {
                if (typeof item !== "string") return null;
                return (
                  <li key={item} className={styles.cardListItem}>
                    <CheckCircle className={styles.icon} />
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className={styles.rightCard}>
          <div className={styles.formPreview}>
            <Brain className={styles.previewIcon} />
            <h4>Evaluación Psicológica Gratuita</h4>
            <p>Haz click para comenzar tu evaluación rápida y confidencial</p>
            <a
              href={formularioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.startButton}
            >
              Comenzar Evaluación
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeEvaluation;
