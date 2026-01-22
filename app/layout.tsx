import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Entrenador Personal con IA | Aumenta tu Esperanza de Vida",
  description: "App de salud personalizada que usa IA para crear planes de entrenamiento y nutrición basados en tus datos médicos reales. Aumenta tu esperanza y calidad de vida con seguimiento diario inteligente.",
  keywords: ["entrenamiento personal", "inteligencia artificial", "salud personalizada", "nutrición", "fitness", "IA personalizada", "Apple Watch", "esperanza de vida", "wellness", "healthtech"],
  authors: [{ name: "Tu Nombre" }],
  creator: "Tu Nombre",
  publisher: "Tu Nombre",
  metadataBase: new URL('https://tu-dominio.com'),
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://tu-dominio.com",
    title: "Entrenador Personal con IA | Aumenta tu Esperanza de Vida",
    description: "App revolucionaria de salud que usa IA para personalizar tu entrenamiento y nutrición basándose en tus datos médicos reales. Busco socios y colaboradores.",
    siteName: "AI Health Coach",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Entrenador Personal con IA - App de Salud Personalizada",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Entrenador Personal con IA | Aumenta tu Esperanza de Vida",
    description: "App de salud personalizada con IA que usa tus datos médicos para crear planes únicos de entrenamiento y nutrición.",
    images: ["/og-image.jpg"],
    creator: "@tu_usuario",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
