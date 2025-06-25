"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import AdminPage from "@/components/admin/AdminPage";
import { AdminLogin } from "@/components/admin/adminlogin";
import type { ArticleItem, TestimonialItem, TipItem } from "@/types/admin";

type ContentType = "article" | "testimonial" | "tip";
type ContentItem = ArticleItem | TestimonialItem | TipItem;

const SECRET_HASH = "7d3f9f82e6a4c1b0f7d53ee47890ac23";

export default function AdminPageWrapper() {
  const searchParams = useSearchParams();
  const [authorized, setAuthorized] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [type, setType] = useState<ContentType>("article");
  const [mode, setMode] = useState<"create" | "list">("create");
  const [editingItem, setEditingItem] = useState<ContentItem | null>(null);
  const [items, setItems] = useState<ContentItem[]>([]);

  useEffect(() => {
    const key = searchParams.get("key");
    const loginStatus = localStorage.getItem("adminLoggedIn");

    if (key === SECRET_HASH) setAuthorized(true);
    if (loginStatus === "true") setLoggedIn(true);

    if (key === SECRET_HASH && loginStatus === "true") {
      const simulatedArticles: ArticleItem[] = [
        { id: "1", title: "Artículo de ejemplo", content: "Contenido..." },
        { id: "2", title: "Otro artículo", content: "Más contenido..." },
      ];
      setItems(simulatedArticles);
    }
  }, [searchParams]);

  const handleDelete = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleEdit = (item: ContentItem) => {
    setEditingItem(item);
    setMode("create");
  };

  if (!authorized) {
    return (
      <div>
        <h2>Acceso denegado</h2>
      </div>
    );
  }

  if (!loggedIn) {
    return <AdminLogin onLoginSuccess={() => setLoggedIn(true)} />;
  }

  return (
    <AdminPage
      type={type}
      setType={setType}
      mode={mode}
      setMode={setMode}
      items={items}
      editingItem={editingItem}
      onEdit={handleEdit}
      onDelete={handleDelete}
      clearEditItem={() => setEditingItem(null)}
    />
  );
}
