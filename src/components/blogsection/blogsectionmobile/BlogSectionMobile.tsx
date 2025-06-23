"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../../../styles/blog/blogsection/BlogSectionMobile.module.css";
import { blogPosts } from "../../../data/blogposts";
import {
  FaBookOpen,
  FaCalendarAlt,
  FaClock,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const BlogSectionMobile: React.FC = () => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      setDirection("right");
      setCurrentIndex((prev) => (prev + 1) % blogPosts.length);
    }, 5000);
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, []);

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  };

  const nextPost = () => {
    stopAutoplay();
    setDirection("right");
    setCurrentIndex((prev) => (prev + 1) % blogPosts.length);
  };

  const prevPost = () => {
    stopAutoplay();
    setDirection("left");
    setCurrentIndex((prev) => (prev - 1 + blogPosts.length) % blogPosts.length);
  };

  const currentPost = blogPosts[currentIndex];

  const variants = {
    enter: (dir: "left" | "right") => ({
      x: dir === "right" ? 60 : -60,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: "left" | "right") => ({
      x: dir === "right" ? -60 : 60,
      opacity: 0,
    }),
  };

  return (
    <>
      <div className={styles.cardWrapper}>
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentPost.id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={styles.card}
          >
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
          </motion.div>
        </AnimatePresence>
      </div>

      <div className={styles.carouselControls}>
        <button onClick={prevPost} className={styles.navButton}>
          <FaChevronLeft />
        </button>
        <button onClick={nextPost} className={styles.navButton}>
          <FaChevronRight />
        </button>
      </div>
    </>
  );
};

export default BlogSectionMobile;
