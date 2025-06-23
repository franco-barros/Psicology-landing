"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "../../../styles/blog/blogsection/BlogSectionDesktop.module.css";
import { blogPosts } from "../../../data/blogposts";
import {
  FaBookOpen,
  FaCalendarAlt,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

const BlogSectionDesktop: React.FC = () => {
  const router = useRouter();

  return (
    <div className={styles.cardGridWrapper}>
      {blogPosts.slice(0, 3).map((post) => (
        <div
          key={post.id}
          className={styles.card}
          onClick={() => router.push(`/blog/${post.id}`)}
          style={{ cursor: "pointer" }}
        >
          <div className={styles.imageWrapper}>
            <span className={styles.categoryBadge}>
              <FaBookOpen style={{ marginRight: 6 }} />
              {post.category}
            </span>
            <Image
              src={post.image}
              alt={post.title}
              className={styles.image}
              fill
              sizes="330px"
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>{post.title}</h3>
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

            <button
              className={styles.readButton}
              onClick={(e) => {
                e.stopPropagation();
                router.push(`/blog/${post.id}`);
              }}
            >
              Leer Artículo <FaArrowRight style={{ marginLeft: 6 }} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogSectionDesktop;
