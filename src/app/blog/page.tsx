"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/BlogPage.module.css";
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

const BlogPage: React.FC = () => {
  return (
    <main className={styles.blogPage}>
      <div className={styles.header}>
        <FaBrain className={styles.icon} />
        <h1 className={styles.title}>Blog Psicológico</h1>
        <p className={styles.subtitle}>
          Artículos especializados para tu crecimiento personal y bienestar
          mental
        </p>
      </div>

      <section className={styles.cardsContainer}>
        {posts.map((post) => (
          <div key={post.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <span className={styles.categoryBadge}>
                <FaBookOpen style={{ marginRight: 6 }} />
                {post.category}
              </span>
              <Image
                src={post.image}
                alt={post.title}
                fill
                className={styles.image}
              />
            </div>

            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>{post.title}</h2>
              <p className={styles.cardDescription}>{post.description}</p>

              <div className={styles.meta}>
                <span>
                  <FaCalendarAlt style={{ marginRight: 4 }} />
                  {post.date}
                </span>
                <span>•</span>
                <span>
                  <FaClock style={{ marginRight: 4 }} />
                  {post.time}
                </span>
              </div>

              <Link href={`/blog/${post.id}`} className={styles.readButton}>
                Leer Artículo <FaArrowRight style={{ marginLeft: 6 }} />
              </Link>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default BlogPage;
