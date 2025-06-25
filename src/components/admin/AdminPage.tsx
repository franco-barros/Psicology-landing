// components/admin/AdminPage.tsx
"use client";

import React from "react";
import AdminLayout from "@/components/layouts/AdminLayout";
import { AdminToolbar } from "@/components/admin/admintoolbar";
import { AdminList } from "@/components/admin/adminlist";
import { ArticleForm } from "@/components/admin/articleform";
import { TestimonialForm } from "@/components/admin/testimonialform";
import { TipForm } from "@/components/admin/tipform";
import type { ArticleItem, TestimonialItem, TipItem } from "@/types/admin";

type ContentType = "article" | "testimonial" | "tip";
type ContentItem = ArticleItem | TestimonialItem | TipItem;

interface AdminPageProps {
  type: ContentType;
  setType: React.Dispatch<React.SetStateAction<ContentType>>;
  mode: "create" | "list";
  setMode: React.Dispatch<React.SetStateAction<"create" | "list">>;
  items: ContentItem[];
  editingItem: ContentItem | null;
  onEdit: (item: ContentItem) => void;
  onDelete: (id: string) => void;
  clearEditItem: () => void;
}

const AdminPage: React.FC<AdminPageProps> = ({
  type,
  setType,
  mode,
  setMode,
  items,
  editingItem,
  onEdit,
  onDelete,
  clearEditItem,
}) => {
  return (
    <AdminLayout type={type} setType={setType} setMode={setMode}>
      <h2>Panel de Administración</h2>

      <AdminToolbar
        currentMode={mode}
        onModeChange={setMode}
        currentType={type}
        onTypeChange={(newType) => {
          setType(newType);
          setMode("create");
          clearEditItem();
        }}
      />

      {mode === "create" ? (
        <>
          {type === "article" && (
            <ArticleForm
              initialData={editingItem as ArticleItem}
              onSuccess={clearEditItem}
            />
          )}
          {type === "testimonial" && (
            <TestimonialForm
              initialData={editingItem as TestimonialItem}
              onSuccess={clearEditItem}
            />
          )}
          {type === "tip" && (
            <TipForm
              initialData={editingItem as TipItem}
              onSuccess={clearEditItem}
            />
          )}
        </>
      ) : (
        <AdminList
          type={type}
          items={items}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      )}
    </AdminLayout>
  );
};

export default AdminPage;
