"use client";

import React, { useState, useEffect } from "react";
import styles from "../../../styles/admin/TipForm.module.css";
import type { TipItem } from "@/types/admin";

interface TipFormProps {
  initialData?: TipItem | null;
  onSuccess?: () => void;
}

const TipForm: React.FC<TipFormProps> = ({ initialData, onSuccess }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tag, setTag] = useState("");

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || "");
      setContent(initialData.text || "");
      setTag(initialData.tag || "");
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (initialData) {
      alert(`Tip actualizado: ${title}`);
    } else {
      alert(`Tip publicado: ${title} - ${tag}`);
    }

    setTitle("");
    setContent("");
    setTag("");

    if (onSuccess) onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.tipForm}>
      <h3 className={styles.heading}>
        {initialData ? "Editar Tip Psicológico" : "Publicar Tip Psicológico"}
      </h3>

      <input
        type="text"
        placeholder="Título del tip"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className={styles.input}
      />

      <textarea
        placeholder="Contenido del tip psicológico..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={5}
        required
        className={styles.textarea}
      />

      <label className={styles.label}>Sección:</label>
      <select
        value={tag}
        onChange={(e) => setTag(e.target.value)}
        required
        className={styles.input}
      >
        <option value="">Seleccionar categoría</option>
        <option value="Ansiedad">Ansiedad</option>
        <option value="Estrés">Estrés</option>
        <option value="Relaciones">Relaciones</option>
        <option value="Autoestima">Autoestima</option>
      </select>

      <button type="submit" className={styles.button}>
        {initialData ? "Actualizar Tip" : "Publicar Tip"}
      </button>
    </form>
  );
};

export default TipForm;
