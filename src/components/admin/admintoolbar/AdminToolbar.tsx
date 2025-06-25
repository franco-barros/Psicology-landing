"use client";

import styles from "../../../styles/admin/AdminToolbar.module.css";

interface AdminToolbarProps {
  currentMode: "create" | "list";
  onModeChange: (mode: "create" | "list") => void;
  currentType: "article" | "testimonial" | "tip";
  onTypeChange?: (type: "article" | "testimonial" | "tip") => void;
}

const AdminToolbar: React.FC<AdminToolbarProps> = ({
  currentMode,
  onModeChange,
  currentType,
  onTypeChange,
}) => {
  const label =
    currentType === "article"
      ? "artículos"
      : currentType === "testimonial"
      ? "testimonios"
      : "tips";

  return (
    <div className={styles.toolbar}>
      <div className={styles.modeButtons}>
        <button
          onClick={() => onModeChange("create")}
          className={currentMode === "create" ? styles.active : ""}
        >
          + Nuevo {label}
        </button>
        <button
          onClick={() => onModeChange("list")}
          className={currentMode === "list" ? styles.active : ""}
        >
          Ver {label}
        </button>
      </div>

      {onTypeChange && (
        <div className={styles.typeButtons}>
          <button
            onClick={() => onTypeChange("article")}
            className={currentType === "article" ? styles.active : ""}
          >
            Artículos
          </button>
          <button
            onClick={() => onTypeChange("testimonial")}
            className={currentType === "testimonial" ? styles.active : ""}
          >
            Testimonios
          </button>
          <button
            onClick={() => onTypeChange("tip")}
            className={currentType === "tip" ? styles.active : ""}
          >
            Tips
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminToolbar;
