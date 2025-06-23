import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/blog/BlogPage.module.css";
import {
  FaBrain,
  FaBookOpen,
  FaCalendarAlt,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";
import { blogPosts } from "../../data/blogposts";

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
        {blogPosts.map((post) => (
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
