import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import "./globals.css";

const fontHeading = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const fontBody = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://espacioreiki.tumejortarifaluz.es'),
  title: {
    default: 'Espacio Reiki con Carmen Rocío | Dos Hermanas, Sevilla',
    template: '%s | Espacio Reiki con Carmen Rocío'
  },
  description: "Sanación energética y Reiki en Sevilla con Carmen Rocío. Sesiones de armonización de chakras y formación profesional en Dos Hermanas.",
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://espacioreiki.tumejortarifaluz.es',
    siteName: 'Espacio Reiki con Carmen Rocío',
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://espacioreiki.tumejortarifaluz.es' }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${fontHeading.variable} ${fontBody.variable} h-full antialiased`}
    >
      <head>
        <JsonLd />
      </head>
      <body className="min-h-full flex flex-col font-body">
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
