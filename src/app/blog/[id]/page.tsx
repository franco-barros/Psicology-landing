import { notFound } from "next/navigation";
import Image from "next/image";
import { FaCalendarAlt, FaClock, FaBookOpen } from "react-icons/fa";
import styles from "../../../styles/blog/BlogDetail.module.css";

type Post = {
  id: string;
  title: string;
  category: string;
  description: string;
  date: string;
  time: string;
  image: string;
  content: string;
};

const posts: Record<string, Post> = {
  "1": {
    id: "1",
    title: "Cómo Superar la Ansiedad en el Trabajo",
    category: "Ansiedad",
    description:
      "Estrategias prácticas para manejar el estrés laboral y mantener tu bienestar mental en el ambiente profesional.",
    date: "15 Nov 2024",
    time: "5 min",
    image: "/images/psycology.png",
    content: `
      La ansiedad laboral es uno de los principales retos en la vida moderna...
      [aquí puedes expandir el texto real]
    `,
  },
  "2": {
    id: "2",
    title: "La Importancia del Autocuidado Mental",
    category: "Bienestar",
    description:
      "Descubre por qué cuidar tu salud mental es fundamental y cómo incorporar hábitos saludables en tu rutina diaria.",
    date: "12 Nov 2024",
    time: "7 min",
    image: "/images/psycology.png",
    content: `
      El autocuidado mental implica reconocer nuestras emociones y necesidades...
    `,
  },
  "3": {
    id: "3",
    title: "Técnicas de Comunicación Asertiva",
    category: "Relaciones",
    description:
      "Aprende a expresar tus ideas y sentimientos de manera clara y respetuosa para mejorar tus relaciones interpersonales.",
    date: "8 Nov 2024",
    time: "6 min",
    image: "/images/psycology.png",
    content: `
      La comunicación asertiva se basa en el respeto mutuo...
    `,
  },
};

// Genera parámetros estáticos para cada ID de post
export async function generateStaticParams(): Promise<{ id: string }[]> {
  return Object.keys(posts).map((id) => ({ id }));
}

// Página que recibe params como Promise, al estilo de tu ejemplo funcional
type PageProps = Readonly<{ params: Promise<{ id: string }> }>;

export default async function BlogDetail({ params }: PageProps) {
  const { id } = await params;
  const post = posts[id];
  if (!post) notFound();

  return (
    <div className={styles.blogDetail}>
      <div className={styles.header}>
        <span className={styles.category}>
          <FaBookOpen style={{ marginRight: 6 }} />
          {post.category}
        </span>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.meta}>
          <span>
            <FaCalendarAlt /> {post.date}
          </span>
          <span>•</span>
          <span>
            <FaClock /> {post.time}
          </span>
        </div>
      </div>

      <Image
        src={post.image}
        alt={post.title}
        width={800}
        height={400}
        className={styles.image}
      />

      <div className={styles.content}>
        {post.content
          .trim()
          .split("\n")
          .map((p, i) => (
            <p key={i}>{p.trim()}</p>
          ))}
      </div>
    </div>
  );
}
