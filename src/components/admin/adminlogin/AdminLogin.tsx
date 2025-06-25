"use client";

import { useState } from "react";
import styles from "../../../styles/admin/AdminLogin.module.css";

interface AdminLoginProps {
  onLoginSuccess: () => void;
}

const VALID_USER = "admin";
const VALID_PASS = "terapia123";

const AdminLogin: React.FC<AdminLoginProps> = ({ onLoginSuccess }) => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (user === VALID_USER && pass === VALID_PASS) {
      localStorage.setItem("adminLoggedIn", "true");
      onLoginSuccess();
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h2>Acceso de Administrador</h2>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <input
          type="text"
          placeholder="Usuario"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          required
        />
        {error && <p className={styles.error}>{error}</p>}
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default AdminLogin;
