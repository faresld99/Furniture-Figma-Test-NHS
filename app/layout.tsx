import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/context/Providers";
import Footer from "@/components/Footer";

// Métadonnées pour le SEO (titre et description de la page)
export const metadata: Metadata = {
  title: "Panto | Furniture Landing Page",
  description: "Make your interior more minimalistic & modern",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Polices Google (Inter, DM Sans) chargées pour toute l'app */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=DM+Sans:wght@400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* Providers pour les contextes React si besoin plus tard */}
        <Providers>
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
