"use client";

import React, { useState, useEffect, useMemo } from "react";
import { FaBrain } from "react-icons/fa";
import AnimatedMenuOverlay from "../animations/animatedmenuoverlay";
import styles from "../../styles/Navbar.module.css";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = useMemo(
    () => [
      { id: "hero", label: "Inicio" },
      { id: "aboutme", label: "Sobre mí" },
      { id: "blog", label: "Blog" },
      { id: "faq", label: "Preguntas" },
      { id: "footer", label: "Contacto" },
    ],
    []
  );

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const scrollPos = window.scrollY + 100;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.getElementById(navLinks[i].id);
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <button className={styles.logo} onClick={() => scrollToSection("hero")}>
          <FaBrain size={32} className={styles.logoIcon} />
          <span className={styles.logoText}>Lic. Ivan Waisman</span>
        </button>

        <div className={styles.links}>
          {navLinks.map((link, index) => (
            <button
              key={link.id}
              className={[
                styles.navLink,
                styles[`link${(index % 3) + 1}`],
                activeSection === link.id ? styles.activeLink : "",
              ].join(" ")}
              onClick={() => scrollToSection(link.id)}
            >
              {link.label}
            </button>
          ))}
        </div>

        <a
          href="https://wa.me/5491123456789"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaButton}
        >
          Agendar una cita
        </a>

        <button
          className={styles.menuButton}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <AnimatedMenuOverlay
          onClose={() => setIsOpen(false)}
          scrollToSection={scrollToSection}
          navLinks={navLinks.map(({ id, label }) => ({
            href: id,
            label,
          }))}
          activeSection={activeSection}
        />
      )}
    </nav>
  );
};

export default Navbar;
