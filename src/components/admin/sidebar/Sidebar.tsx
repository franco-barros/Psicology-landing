// components/sidebar/Sidebar.tsx
"use client";

import React, { useState } from "react";
import styles from "../../../styles/admin/Sidebar.module.css";
import { FileText, MessageCircle, Lightbulb, Menu } from "lucide-react";

interface SidebarProps {
  onSelect: (type: "article" | "testimonial" | "tip") => void;
  selected: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ onSelect, selected }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (type: "article" | "testimonial" | "tip") => {
    onSelect(type); // ✅ se llama correctamente
    setIsOpen(false); // ✅ se cierra el menú móvil
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.topBar}>
        <h3 className={styles.title}>Admin</h3>
        <button
          className={styles.menuToggle}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu size={20} />
        </button>
      </div>

      <ul className={`${styles.menu} ${isOpen ? styles.menuOpen : ""}`}>
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
      </ul>
    </aside>
  );
};
