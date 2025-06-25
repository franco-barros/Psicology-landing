"use client";

import styles from "../../../styles/admin/AdminList.module.css";
import type {
  ArticleItem,
  TestimonialItem,
  TipItem,
} from "../../../types/admin";

type ContentType = "article" | "testimonial" | "tip";
type ContentItem = ArticleItem | TestimonialItem | TipItem;

interface AdminListProps {
  type: ContentType;
  items: ContentItem[];
  onEdit: (item: ContentItem) => void;
  onDelete: (id: string) => void;
}

// Type Guards explícitos para que TS entienda el tipo correcto
const isArticle = (item: ContentItem): item is ArticleItem =>
  (item as ArticleItem).title !== undefined;

const isTestimonial = (item: ContentItem): item is TestimonialItem =>
  (item as TestimonialItem).name !== undefined;

const isTip = (item: ContentItem): item is TipItem =>
  (item as TipItem).text !== undefined;

const AdminList: React.FC<AdminListProps> = ({
  type,
  items,
  onEdit,
  onDelete,
}) => {
  // Usamos los type guards para obtener título o texto
  const getTitle = (item: ContentItem): string => {
    if (isArticle(item)) return item.title;
    if (isTestimonial(item)) return item.name;
    if (isTip(item))
      return item.text.length > 40 ? item.text.slice(0, 40) + "..." : item.text;
    return "Sin título";
  };

  // Mejor extraemos el texto del header fuera del JSX para sonarqube
  const listTitle =
    type === "article"
      ? "artículos"
      : type === "testimonial"
      ? "testimonios"
      : "tips";

  return (
    <div className={styles.listContainer}>
      <h3>Listado de {listTitle}</h3>

      {items.length === 0 ? (
        <p>No hay elementos cargados.</p>
      ) : (
        <ul className={styles.itemList}>
          {items.map((item) => (
            <li key={item.id} className={styles.item}>
              <div className={styles.itemHeader}>
                <strong>{getTitle(item)}</strong>
              </div>
              <div className={styles.actions}>
                <button onClick={() => onEdit(item)}>Editar</button>
                <button onClick={() => onDelete(item.id)}>Eliminar</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminList;
