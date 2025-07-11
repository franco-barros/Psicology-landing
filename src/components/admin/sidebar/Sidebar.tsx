"use client";

import React, { useState } from "react";
import styles from "../../../styles/admin/Sidebar.module.css";
import { FileText, MessageCircle, Lightbulb, Menu, X } from "lucide-react";

interface SidebarProps {
  onSelect: (type: "article" | "testimonial" | "tip") => void;
  selected: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ onSelect, selected }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (type: "article" | "testimonial" | "tip") => {
    onSelect(type);
    setIsOpen(false);
  };

  return (
    <>
      <button
        className={styles.menuToggle}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <nav className={styles.menu}>
          <button
            className={`${styles.menuItem} ${
              selected === "article" ? styles.active : ""
            }`}
            onClick={() => handleSelect("article")}
          >
            <FileText className={styles.icon} />
            Artículos
          </button>
          <button
            className={`${styles.menuItem} ${
              selected === "testimonial" ? styles.active : ""
            }`}
            onClick={() => handleSelect("testimonial")}
          >
            <MessageCircle className={styles.icon} />
            Testimonios
          </button>
          <button
            className={`${styles.menuItem} ${
              selected === "tip" ? styles.active : ""
            }`}
            onClick={() => handleSelect("tip")}
          >
            <Lightbulb className={styles.icon} />
            Tips Psicológicos
          </button>
        </nav>
      </aside>

      {/* Fondo oscuro para cuando el sidebar está abierto en mobile */}
      {isOpen && (
        <div className={styles.overlay} onClick={() => setIsOpen(false)} />
      )}
    </>
  );
};
