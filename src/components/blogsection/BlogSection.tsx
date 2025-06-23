"use client";

import { useEffect, useState } from "react";
import { BlogSectionMobile } from "./blogsectionmobile";
import { BlogSectionDesktop } from "./blogsectiondesktop";
import styles from "../../styles/blog/blogsection/BlogSection.module.css";
import { FaBrain } from "react-icons/fa";
import { FadeInOnScroll } from "../fadeInonscroll";
import { useRouter } from "next/navigation";

const BlogSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

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

      {isMobile ? <BlogSectionMobile /> : <BlogSectionDesktop />}

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
