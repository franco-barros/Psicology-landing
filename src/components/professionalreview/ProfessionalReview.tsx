"use client";

import React from "react";
import {
  Brain,
  HeartHandshake,
  Users,
  Star,
  Lock,
  ShieldCheck,
} from "lucide-react";
import { FaSeedling } from "react-icons/fa";
import styles from "../../styles/ProfessionalReview.module.css";
import { FadeInOnScroll } from "../shared/fadeInonscroll";

interface ItemConDesc {
  title: string;
  desc: string;
}

interface GrupoResena {
  title: string | null;
  items: (ItemConDesc | string)[];
}

interface ProfessionalReviewProps {
  formularioUrl?: string;
  onContactClick?: () => void;
}

const reseñaTrabajo: GrupoResena[] = [
  {
    title: "Cómo trabajo con vos",
    items: [
      {
        title: "Acompañamiento Empático",
        desc: "Brindo un espacio seguro donde te sientas escuchado y comprendido.",
      },
      {
        title: "Enfoque Integrativo",
        desc: "Utilizo técnicas basadas en terapia cognitivo-conductual, humanista y sistémica.",
      },
      {
        title: "Personalización",
        desc: "Cada proceso terapéutico se adapta a tus necesidades y ritmo único.",
      },
    ],
  },
  {
    title: null,
    items: [
      "Confidencialidad absoluta",
      "Compromiso y ética profesional",
      "Resultados con enfoque en bienestar sostenible",
    ],
  },
];

const ProfessionalReview: React.FC<ProfessionalReviewProps> = ({
  formularioUrl,
  onContactClick,
}) => {
  const iconMap: Record<string, React.ReactNode> = {
    "Acompañamiento Empático": <HeartHandshake className={styles.cardIcon} />,
    "Enfoque Integrativo": <Brain className={styles.cardIcon} />,
    Personalización: <Users className={styles.cardIcon} />,
  };

  const valoresIconMap: Record<string, React.ReactNode> = {
    "Confidencialidad absoluta": <Lock className={styles.cardIcon} />,
    "Compromiso y ética profesional": (
      <ShieldCheck className={styles.cardIcon} />
    ),
    "Resultados con enfoque en bienestar sostenible": (
      <FaSeedling className={styles.cardIcon} />
    ),
  };

  return (
    <FadeInOnScroll>
      <section className={styles.section}>
        <div className={styles.headerWrapper}>
          <div className={styles.badge}>
            <Star size={18} />
            <span>Reseña Profesional</span>
          </div>

          <h2 className={styles.title}>
            <span className={styles.titlePrimary}>Tu experiencia</span>{" "}
            <span className={styles.titleSecondary}>importa</span>
          </h2>

          <h3 className={styles.subtitle}>
            Queremos conocer cómo te sentiste y tu opinión sobre el
            acompañamiento recibido. Tu testimonio ayuda a otros y mejora
            nuestro servicio.
          </h3>
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.leftCards}>
            <div className={styles.card}>
              {reseñaTrabajo[0].title && (
                <h4 className={styles.cardTitle}>{reseñaTrabajo[0].title}</h4>
              )}
              <ul className={styles.cardList}>
                {reseñaTrabajo[0].items.map((item) =>
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

              <div className={styles.subListWrapper}>
                <h5 className={styles.subListTitle}>Nuestros valores</h5>
                <ul className={styles.cardList}>
                  {reseñaTrabajo[1].items.map((item) =>
                    typeof item === "string" ? (
                      <li key={item} className={styles.cardListItem}>
                        <div className={styles.iconCircle}>
                          {valoresIconMap[item]}
                        </div>
                        <span>{item}</span>
                      </li>
                    ) : null
                  )}
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.rightCard}>
            <div className={styles.formPreview}>
              <Star className={styles.previewIcon} />
              <h4>¿Querés dejar tu reseña?</h4>
              <p>
                Tu opinión es fundamental para mejorar y acompañar a más
                personas en su camino.
              </p>
              {onContactClick ? (
                <button
                  className={styles.startButton}
                  type="button"
                  onClick={onContactClick}
                >
                  Dejar reseña
                </button>
              ) : (
                <a
                  href={formularioUrl || "#"}
                  className={styles.startButton}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dejar reseña
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </FadeInOnScroll>
  );
};

export default ProfessionalReview;
