"use client";

import { FaArrowUp } from "react-icons/fa";
import styles from "../../styles/BackToTopButton.module.css";

const BackToTopButton = () => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={styles.backToTopButton}
      onClick={handleScrollTop}
      aria-label="Volver arriba"
    >
      <FaArrowUp className={styles.icon} />
    </button>
  );
};

export default BackToTopButton;
