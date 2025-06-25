"use client";

import { useEffect, useState } from "react";
import styles from "../../../styles/admin/TestimonialForm.module.css";
import type { TestimonialItem } from "../../../types/admin";

interface TestimonialFormProps {
  initialData?: TestimonialItem | null;
  onSuccess?: () => void;
}

const TestimonialForm: React.FC<TestimonialFormProps> = ({
  initialData,
  onSuccess,
}) => {
  const [name, setName] = useState("");
  const [testimonial, setTestimonial] = useState("");
  const [image, setImage] = useState<string>("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [tags, setTags] = useState("");

  useEffect(() => {
    if (initialData) {
      setName(initialData.name || "");
      setTestimonial(initialData.message || "");
      // Podés agregar image y tags al modelo si los vas a guardar
      setImage(initialData.image || "");
      setImageFile(null);
    }
  }, [initialData]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setImage(URL.createObjectURL(file)); // preview
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulado: en el backend, se usaría imageFile
    if (imageFile) {
      console.log("Imagen seleccionada:", imageFile.name);
    }

    if (initialData) {
      alert(`Testimonio actualizado (simulado)`);
    } else {
      alert(`Testimonio cargado (simulado)`);
    }

    // Reset
    setName("");
    setTestimonial("");
    setImage("");
    setImageFile(null);
    setTags("");

    if (onSuccess) onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        placeholder="Nombre del paciente (opcional)"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={styles.input}
      />

      <textarea
        placeholder="Escribe el testimonio..."
        rows={4}
        value={testimonial}
        onChange={(e) => setTestimonial(e.target.value)}
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
        {initialData ? "Actualizar testimonio" : "Publicar testimonio"}
      </button>
    </form>
  );
};

export default TestimonialForm;
