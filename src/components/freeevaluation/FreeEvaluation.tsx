// components/FreeEvaluation.tsx
import React from "react";
import { CheckCircle } from "lucide-react";
import styles from "../../styles/FreeEvaluation.module.css";

const caracteristicas = [
  "Análisis de Bienestar Emocional",
  "Evaluación de Relaciones",
  "Plan de Acción Personalizado",
  "100% Confidencial",
  "Resultados en 24 horas",
  "Consulta de seguimiento incluida",
];

const extras = ["Seguro", "5-10 minutos", "Gratuito"];

interface FreeEvaluationProps {
  formularioUrl: string;
}

const FreeEvaluation: React.FC<FreeEvaluationProps> = ({ formularioUrl }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>🧠 Evaluación Gratuita</h2>
      <h3 className={styles.subtitle}>Descubre tu Bienestar Mental</h3>
      <p className={styles.paragraph}>
        Completa nuestra evaluación psicológica inicial y recibe recomendaciones
        personalizadas para tu proceso de crecimiento personal.
      </p>

      <ul className={styles.list}>
        {caracteristicas.map((item) => (
          <li key={item} className={styles.listItem}>
            <CheckCircle className={styles.icon} />
            {item}
          </li>
        ))}
      </ul>

      <div className={styles.infoBlock}>
        <h4 className={styles.infoTitle}>Evaluación Psicológica Inicial</h4>
        <p className={styles.paragraph}>
          Completa el formulario y da el primer paso hacia tu bienestar.
        </p>
      </div>

      <a
        href={formularioUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.button}
      >
        Abrir Formulario
      </a>

      <div className={styles.tagContainer}>
        {extras.map((label) => (
          <span key={label} className={styles.tag}>
            {label}
          </span>
        ))}
      </div>
    </section>
  );
};

export default FreeEvaluation;
