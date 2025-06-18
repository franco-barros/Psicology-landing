"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "../../styles/blogsection/BlogSection.module.css";

import {
  FaBrain,
  FaBookOpen,
  FaCalendarAlt,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

const posts = [
  {
    id: 1,
    title: "Cómo Superar la Ansiedad en el Trabajo",
    category: "Ansiedad",
    description:
      "Estrategias prácticas para manejar el estrés laboral y mantener tu bienestar mental en el ambiente profesional.",
    date: "15 Nov 2024",
    time: "5 min",
    image: "/images/psycology.png",
  },
  {
    id: 2,
    title: "La Importancia del Autocuidado Mental",
    category: "Bienestar",
    description:
      "Descubre por qué cuidar tu salud mental es fundamental y cómo incorporar hábitos saludables en tu rutina diaria.",
    date: "12 Nov 2024",
    time: "7 min",
    image: "/images/psycology.png",
  },
  {
    id: 3,
    title: "Técnicas de Comunicación Asertiva",
    category: "Relaciones",
    description:
      "Aprende a expresar tus ideas y sentimientos de manera clara y respetuosa para mejorar tus relaciones interpersonales.",
    date: "8 Nov 2024",
    time: "6 min",
    image: "/images/psycology.png",
  },
];

const BlogSection: React.FC = () => {
  const router = useRouter();

  return (
    <section className={styles.blogSection} id="blog">
      <div className={styles.badge}>
        <FaBrain style={{ marginRight: 8, verticalAlign: "middle" }} />
        Blog Psicológico
      </div>

      <h2 className={styles.title}>
        <span>Artículos</span> / <span>Recursos</span>
      </h2>

      <p className={styles.subtitle}>
        Explora contenido especializado para tu crecimiento personal y bienestar
        mental
      </p>

      <div className={styles.cardsContainer}>
        {posts.map((post) => (
          <div key={post.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <span className={styles.categoryBadge}>
                <FaBookOpen
                  style={{ marginRight: 6, verticalAlign: "middle" }}
                />
                {post.category}
              </span>
              <Image
                src={post.image}
                alt={post.title}
                className={styles.image}
                fill
                sizes="(max-width: 768px) 100vw, 330px"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{post.title}</h3>
              <p className={styles.cardDescription}>{post.description}</p>

              <div className={styles.meta}>
                <span>
                  <FaCalendarAlt
                    style={{ marginRight: 4, verticalAlign: "middle" }}
                  />
                  {post.date}
                </span>
                <span>•</span>
                <span>
                  <FaClock
                    style={{ marginRight: 4, verticalAlign: "middle" }}
                  />
                  {post.time}
                </span>
              </div>

              <button className={styles.readButton}>
                Leer Artículo{" "}
                <FaArrowRight
                  style={{ marginLeft: 6, verticalAlign: "middle" }}
                />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.viewAll}>
        <button
          className={styles.viewAllButton}
          onClick={() => router.push("/blog")}
        >
          Ver Todos los Artículos
        </button>
      </div>
    </section>
  );
};

export default BlogSection;
