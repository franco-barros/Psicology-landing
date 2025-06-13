// app/blog/[id]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import { FaCalendarAlt, FaClock, FaBookOpen } from "react-icons/fa";
import styles from "../../../styles/BlogDetail.module.css"; // puedes crearlo

const posts = [
  {
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
  {
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
  {
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
];

export async function generateStaticParams() {
  return posts.map((post) => ({ id: post.id }));
}

export default function BlogDetail({ params }: { params: { id: string } }) {
  const post = posts.find((p) => p.id === params.id);
  if (!post) return notFound();

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
        {post.content.split("\n").map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  );
}
