import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const interDisplay = Inter({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

const serif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Novax Constructora — Construcción residencial y comercial en México",
  description:
    "Construcción, remodelación y supervisión de obra con estándares de ingeniería y entregas a tiempo. Cotiza tu proyecto con Novax Constructora.",
  metadataBase: new URL("https://novax.mx"),
  openGraph: {
    title: "Novax Constructora",
    description:
      "Obra residencial y comercial llave en mano. Calidad, control y entregas a tiempo.",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-MX"
      className={`${inter.variable} ${interDisplay.variable} ${serif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
