"use client";

import React from "react";
import { FadeInOnScroll } from "../fadeInonscroll";
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

import { blogPosts } from "../../data/blogposts";

const BlogSection: React.FC = () => {
  const router = useRouter();

  return (
    <section className={styles.blogSection} id="blog">
      <FadeInOnScroll>
        <div className={styles.badge}>
          <FaBrain style={{ marginRight: 8, verticalAlign: "middle" }} />
          Blog Psicológico
        </div>

        <h2 className={styles.title}>
          <span>Artículos</span> / <span>Recursos</span>
        </h2>

        <p className={styles.subtitle}>
          Explora contenido especializado para tu crecimiento personal y
          bienestar mental
        </p>
      </FadeInOnScroll>

      <div className={styles.cardsContainer}>
        {blogPosts.map((post, index) => (
          <FadeInOnScroll key={post.id} delay={index * 0.1}>
            <div className={styles.card}>
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
          </FadeInOnScroll>
        ))}
      </div>

      <FadeInOnScroll delay={0.3}>
        <div className={styles.viewAll}>
          <button
            className={styles.viewAllButton}
            onClick={() => router.push("/blog")}
          >
            Ver Todos los Artículos
          </button>
        </div>
      </FadeInOnScroll>
    </section>
  );
};

export default BlogSection;
