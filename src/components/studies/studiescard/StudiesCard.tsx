"use client";

import { FC } from "react";
import { Calendar, ArrowRight, Check } from "lucide-react";
import styles from "../../../styles/studies/StudiesCard.module.css";
import type { Study } from "../../../types/study";

interface Props {
  study: Study;
  setIsPaused: React.Dispatch<React.SetStateAction<boolean>>;
}

const StudiesCard: FC<Props> = ({ study, setIsPaused }) => {
  return (
    <article
      className={styles.card}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={styles.header}>
        <div className={styles.typeBadge}>
          <study.icon size={14} className={styles.badgeIcon} />
          {study.type}
        </div>
        <h3 className={styles.title}>{study.title}</h3>
        <div className={styles.dateRow}>
          <Calendar size={16} />
          <span>{study.date}</span>
        </div>
      </div>

      <div className={styles.body}>
        <ul className={styles.featuresList}>
          {study.features.map((feat) => (
            <li key={`${study.id}-${feat}`} className={styles.featureItem}>
              <span className={styles.iconCircle}>
                <Check size={14} color="#8da65d" />
              </span>
              <span>{feat}</span>
            </li>
          ))}
        </ul>
        <button onClick={study.onClick} className={styles.button}>
          <ArrowRight size={16} />
          <span>{study.cta}</span>
        </button>
      </div>
    </article>
  );
};

export default StudiesCard;
