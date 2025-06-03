"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Navbar.module.css";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { href: "#hero", label: "Inicio" },
    { href: "#pricing", label: "Precios" },
    { href: "#about", label: "Nosotros" },
    { href: "#services", label: "Servicios" },
    { href: "#footer", label: "Contacto" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
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
        const section = document.querySelector(navLinks[i].href);
        if (
          section &&
          section instanceof HTMLElement &&
          section.offsetTop <= scrollPos
        ) {
          setActiveSection(navLinks[i].href);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Inicializa en el mount
    return () => window.removeEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <Link
          href="#hero"
          className={styles.logo}
          onClick={() => scrollToSection("#hero")}
        >
          <Image
            src="/image/malene1.png"
            alt="Malene Logo"
            width={40}
            height={40}
            priority
          />
        </Link>

        <div className={styles.links}>
          {navLinks.map((link) => (
            <button
              key={link.href}
              className={`${styles.navLink} ${
                activeSection === link.href ? styles.activeLink : ""
              }`}
              onClick={() => scrollToSection(link.href)}
            >
              {link.label}
            </button>
          ))}
        </div>

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
              key={link.href}
              className={`${styles.mobileLink} ${
                activeSection === link.href ? styles.activeLink : ""
              }`}
              onClick={() => scrollToSection(link.href)}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
