// components/freeevaluation/FreeEvaluation.tsx
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
  // Usamos React.ReactNode en lugar de JSX.Element
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
          {formularioUrl && (
            <iframe
              src={formularioUrl}
              title="Formulario Evaluación Psicológica"
              className={styles.formIframe}
            />
          )}
        </div>
      </div>

      {/* CTA final */}
      <div className={styles.contactCard}>
        <div className={styles.contactContent}>
          <h2 className={styles.contactTitle}>
            ¿Prefieres hablar directamente conmigo?
          </h2>
          <h3 className={styles.contactSubtitle}>
            Si tienes dudas sobre el formulario o prefieres una consulta
            telefónica, no dudes en contactarme directamente.
          </h3>
          <div className={styles.contactButtons}>
            <a href="tel:+123456789" className={styles.contactButton}>
              Llamar Ahora
            </a>
            <a
              href="mailto:contacto@drguimenez.com"
              className={styles.contactButton}
            >
              Enviar Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeEvaluation;
