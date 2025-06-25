"use client";

import { useState, useEffect } from "react";
import styles from "../../../styles/admin/ArticleForm.module.css";
import type { ArticleItem } from "../../../types/admin";

interface ArticleFormProps {
  initialData?: ArticleItem | null;
  onSuccess?: () => void;
}

const ArticleForm: React.FC<ArticleFormProps> = ({
  initialData,
  onSuccess,
}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<string>("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [tags, setTags] = useState("");

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || "");
      setContent(initialData.content || "");
      setImage(initialData.image || "");
      setImageFile(null); // Reset image file (no se puede precargar archivo desde URL)
    }
  }, [initialData]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setImage(URL.createObjectURL(file)); // Vista previa
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulación de subida
    if (imageFile) {
      console.log("Imagen seleccionada para subir:", imageFile.name);
      // Acá podrías armar un FormData y enviar al backend más adelante
    }

    if (initialData) {
      alert(`Artículo "${title}" actualizado (simulado)`);
    } else {
      alert(`Artículo "${title}" cargado (simulado)`);
    }

    setTitle("");
    setContent("");
    setImage("");
    setImageFile(null);
    setTags("");
    if (onSuccess) onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        placeholder="Título del artículo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className={styles.input}
      />

      <textarea
        placeholder="Contenido del artículo..."
        rows={6}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        className={styles.textarea}
      />

      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className={styles.input}
      />

      {image && (
        <div className={styles.imagePreview}>
          <p>Previsualización:</p>
          <img
            src={image}
            alt="Previsualización"
            className={styles.previewImg}
          />
        </div>
      )}

      <input
        type="text"
        placeholder="Tags (separados por coma)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        className={styles.input}
      />

      <button type="submit" className={styles.button}>
        {initialData ? "Actualizar artículo" : "Publicar artículo"}
      </button>
    </form>
  );
};

export default ArticleForm;
