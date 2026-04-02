import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import ThemeRegistry from "./ThemeRegistry";
import "./globals.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Заселення",
  description: "Інструкції з заселення: час, адреса, маршрут, ключі та Wi‑Fi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={`${roboto.variable} h-full`}>
      <body className="min-h-full antialiased">
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
