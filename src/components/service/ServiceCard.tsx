"use client";
import React from "react";
import { FaCheck } from "react-icons/fa";
import styles from "../../styles/service/ServicesCard.module.css";

interface ServiceCardProps {
  title: string;
  description: string;
  features?: string[];
  cta?: string;
  onClick?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  features,
  cta,
  onClick,
}) => {
  return (
    <div className={styles.serviceCard}>
      <h3 className={styles.serviceTitle}>{title}</h3>
      <p className={styles.serviceDescription}>{description}</p>

      {features && (
        <ul className={styles.featuresList}>
          {features.map((feature) => (
            <li key={`${title}-${feature}`} className={styles.featureItem}>
              <FaCheck className={styles.checkIcon} />
              {feature}
            </li>
          ))}
        </ul>
      )}

      {cta && onClick && (
        <button onClick={onClick} className={styles.ctaButton}>
          {cta}
        </button>
      )}
    </div>
  );
};

export default ServiceCard;
