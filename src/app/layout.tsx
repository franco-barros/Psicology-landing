import "../styles/globals.css";
import { ReactNode } from "react";
import { Footer } from "../components/footer";
import { ClientNavbarWrapper } from "../components/clientnavbarwrapper";

export const metadata = {
  title: "Dr. Carlos Mendoza | Psicólogo Clínico",
  description:
    "Terapia psicológica especializada en neuropsicología y trauma. Consulta presencial y online.",
  authors: [{ name: "Dr. Carlos Mendoza" }],
  openGraph: {
    title: "Dr. Carlos Mendoza | Psicólogo Clínico",
    description:
      "Terapia psicológica especializada en neuropsicología y trauma. Consulta presencial y online.",
    siteName: "Dr. Carlos Mendoza",
    locale: "es_AR",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <ClientNavbarWrapper>{children}</ClientNavbarWrapper>
        <Footer />
      </body>
    </html>
  );
}
