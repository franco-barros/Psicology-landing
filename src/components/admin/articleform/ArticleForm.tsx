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

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || "");
      setContent(initialData.content || "");
      setImage(initialData.image || "");
      setImageFile(null); // Reset image file
    }
  }, [initialData]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setImage(URL.createObjectURL(file)); // Preview
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (imageFile) {
      console.log("Imagen seleccionada para subir:", imageFile.name);
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

      <button type="submit" className={styles.button}>
        {initialData ? "Actualizar artículo" : "Publicar artículo"}
      </button>
    </form>
  );
};

export default ArticleForm;
