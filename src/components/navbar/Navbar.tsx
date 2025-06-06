"use client";

import React, { useState, useEffect, useMemo } from "react";
import { FaBrain } from "react-icons/fa";
import styles from "../../styles/Navbar.module.css";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = useMemo(
    () => [
      { id: "hero", label: "Inicio" },
      { id: "services", label: "Servicios" },
      { id: "aboutme", label: "Sobre mi" },
      { id: "testimonials", label: "Testimonios" },
      { id: "contact", label: "Contacto" },
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
          <FaBrain size={32} color="#4d6447" />
          <span className={styles.logoText}>Dr. Ivan Waisman</span>
        </button>

        <div className={styles.links}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              className={`${styles.navLink} ${
                activeSection === link.id ? styles.activeLink : ""
              }`}
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
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              className={`${styles.mobileLink} ${
                activeSection === link.id ? styles.activeLink : ""
              }`}
              onClick={() => scrollToSection(link.id)}
            >
              {link.label}
            </button>
          ))}

          <a
            href="https://wa.me/5491123456789"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobileCtaButton}
          >
            Agendar una cita
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
