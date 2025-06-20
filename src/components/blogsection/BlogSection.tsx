// components/blogsection/BlogSection.tsx

"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "../../styles/blogsection/BlogSection.module.css";
import { blogPosts } from "../../data/blogposts";
import {
  FaBrain,
  FaBookOpen,
  FaCalendarAlt,
  FaClock,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { FadeInOnScroll } from "../fadeInonscroll";

const BlogSection: React.FC = () => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPost = () => {
    setCurrentIndex((prev) => (prev + 1) % blogPosts.length);
  };

  const prevPost = () => {
    setCurrentIndex((prev) => (prev - 1 + blogPosts.length) % blogPosts.length);
  };

  const currentPost = blogPosts[currentIndex];

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

      <div className={styles.cardWrapper}>
        <FadeInOnScroll key={currentPost.id}>
          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <span className={styles.categoryBadge}>
                <FaBookOpen style={{ marginRight: 6 }} />
                {currentPost.category}
              </span>
              <Image
                src={currentPost.image}
                alt={currentPost.title}
                className={styles.image}
                fill
                sizes="(max-width: 768px) 100vw, 330px"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{currentPost.title}</h3>
              <p className={styles.cardDescription}>
                {currentPost.description}
              </p>

              <div className={styles.meta}>
                <span>
                  <FaCalendarAlt style={{ marginRight: 4 }} />
                  {currentPost.date}
                </span>
                <span>•</span>
                <span>
                  <FaClock style={{ marginRight: 4 }} />
                  {currentPost.time}
                </span>
              </div>

              <button
                className={styles.readButton}
                onClick={() => router.push(`/blog/${currentPost.id}`)}
              >
                Leer Artículo <FaArrowRight style={{ marginLeft: 6 }} />
              </button>
            </div>
          </div>
        </FadeInOnScroll>
      </div>

      <div className={styles.carouselControls}>
        <button onClick={prevPost} className={styles.navButton}>
          <FaChevronLeft />
        </button>
        <button onClick={nextPost} className={styles.navButton}>
          <FaChevronRight />
        </button>
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
