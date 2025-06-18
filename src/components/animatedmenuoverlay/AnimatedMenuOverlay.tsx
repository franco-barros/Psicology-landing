"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "../../styles/AnimatedMenuOverlay.module.css";

interface AnimatedMenuOverlayProps {
  onClose: () => void;
  scrollToSection: (id: string) => void;
  navLinks: { href: string; label: string }[];
  activeSection: string;
}

const AnimatedMenuOverlay: React.FC<AnimatedMenuOverlayProps> = ({
  onClose,
  scrollToSection,
  navLinks,
  activeSection,
}) => {
  const [animate, setAnimate] = useState<"enter" | "exit">("enter");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // dispara la animación de entrada
    setAnimate("enter");
    setIsMounted(true);
  }, []);

  const handleClose = () => {
    // dispara la animación de salida
    setAnimate("exit");
    setTimeout(onClose, 500); // igual duración que la animación CSS
  };

  if (!isMounted) return null;

  return createPortal(
    <div className={styles.menuOverlayContainer}>
      <button
        className={styles.closeButton}
        onClick={handleClose}
        aria-label="Cerrar menú"
      >
        &times;
      </button>

      <div
        className={`${styles.animatedMenu} ${
          animate === "enter" ? styles.open : styles.closing
        }`}
      >
        <div className={styles.menuItemsContainer}>
          {navLinks.map(({ href, label }) => (
            <button
              key={href}
              onClick={() => {
                scrollToSection(href);
                handleClose();
              }}
              className={`${styles.menuItem} ${
                activeSection === href ? styles.activeItem : ""
              }`}
            >
              {/* la cookie siempre está, pero sólo visible si está activo */}
              <span
                className={`${styles.cookie} ${
                  activeSection === href ? styles.cookieVisible : ""
                }`}
              >
                🍪
              </span>
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default AnimatedMenuOverlay;
