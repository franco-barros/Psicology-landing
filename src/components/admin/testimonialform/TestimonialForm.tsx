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
  const [rating, setRating] = useState(0); // Calificación estrellas (1-5)

  useEffect(() => {
    if (initialData) {
      setName(initialData.name || "");
      setTestimonial(initialData.message || "");
      setRating(initialData.rating || 0); // asumiendo que TestimonialItem tiene rating
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (rating < 1) {
      alert("Por favor selecciona una calificación con estrellas.");
      return;
    }

    if (initialData) {
      alert(`Testimonio actualizado (simulado)`);
    } else {
      alert(`Testimonio cargado (simulado)`);
    }

    setName("");
    setTestimonial("");
    setRating(0);

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

      <label className={styles.label}>Calificación:</label>
      <div className={styles.stars}>
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            type="button"
            key={star}
            className={`${styles.star} ${star <= rating ? styles.filled : ""}`}
            onClick={() => setRating(star)}
            aria-label={`${star} estrella${star > 1 ? "s" : ""}`}
          >
            ★
          </button>
        ))}
      </div>

      <textarea
        placeholder="Escribe el testimonio..."
        rows={4}
        value={testimonial}
        onChange={(e) => setTestimonial(e.target.value)}
        required
        className={styles.textarea}
      />

      <button type="submit" className={styles.button}>
        {initialData ? "Actualizar testimonio" : "Publicar testimonio"}
      </button>
    </form>
  );
};

export default TestimonialForm;
