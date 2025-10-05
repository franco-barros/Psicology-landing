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
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [imagePreview, setImagePreview] = useState<string>("");
  const [imageFile, setImageFile] = useState<File | null>(null);

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || "");
      setContent(initialData.content || "");
      setImagePreview(initialData.image || "");
      setImageFile(null);
    }
  }, [initialData]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title || !content || (!imageFile && !initialData?.image)) {
      alert("Por favor completá todos los campos.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (imageFile) {
      formData.append("image", imageFile);
    }

    try {
      const res = await fetch("/api/article", {
        method: "POST",
        body: formData,
      });

      const data: { imageUrl: string; id: string } = await res.json();

      if (!res.ok) {
        throw new Error("Error al subir el artículo.");
      }

      alert("✅ Artículo subido con éxito");
      console.log("📦 URL imagen:", data.imageUrl);
      onSuccess?.();
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : "Error desconocido al subir el artículo.";
      console.error("❌ Error:", message);
      alert(message);
    }
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

      {imagePreview && (
        <div className={styles.imagePreview}>
          <p>Previsualización:</p>
          <img
            src={imagePreview}
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
