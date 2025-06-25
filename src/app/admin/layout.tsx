"use client";

import { Sidebar } from "@/components/sidebar";
import styles from "../../styles/admin/AdminPage.module.css";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

type ContentType = "article" | "testimonial" | "tip";

interface AdminLayoutProps {
  children: React.ReactNode;
  type: ContentType;
  setType: (type: ContentType) => void;
  setMode: (mode: "create" | "list") => void;
}

export default function AdminLayout({
  children,
  type,
  setType,
  setMode,
}: Readonly<AdminLayoutProps>) {
  const router = useRouter();

  return (
    <div className={styles.adminContainer}>
      <button onClick={() => router.push("/")} className={styles.backButton}>
        <ArrowLeft className={styles.backIcon} />
        Volver al inicio
      </button>

      <div className={styles.adminLayout}>
        <Sidebar
          selected={type}
          onSelect={(newType: ContentType) => {
            setType(newType);
            setMode("create");
          }}
        />

        <main className={styles.formWrapper}>{children}</main>
      </div>
    </div>
  );
}
