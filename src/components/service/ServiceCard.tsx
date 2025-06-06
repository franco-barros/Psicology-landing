// components/ServiceCard.tsx
"use client";

import React from "react";
import { FaCheck } from "react-icons/fa";
import type { IconType } from "react-icons";
import styles from "../../styles/service/ServicesCard.module.css";

interface ServiceCardProps {
  icon: IconType;
  title: string;
  description: string;
  features?: string[];
  cta?: string;
  onClick?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  features,
  cta,
  onClick,
}) => (
  <div className={styles.card}>
    <div className={styles.header}>
      <Icon size={20} color="#fff" className={styles.iconWrapper} />
      <h3 className={styles.title}>{title}</h3>
    </div>
    <div className={styles.body}>
      <p className={styles.description}>{description}</p>
      {features && (
        <ul className={styles.featuresList}>
          {features.map((feat) => (
            <li key={`${title}-${feat}`} className={styles.featureItem}>
              <FaCheck className={styles.checkIcon} />
              {feat}
            </li>
          ))}
        </ul>
      )}
      {cta && onClick && (
        <button onClick={onClick} className={styles.button}>
          {cta}
        </button>
      )}
    </div>
  </div>
);

export default ServiceCard;
