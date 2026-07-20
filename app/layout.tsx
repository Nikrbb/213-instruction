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

// og:image and og:url are emitted as relative paths and resolved against this
// base. A missing base silently yields unreachable localhost URLs — link
// previews then break with no error anywhere, so production fails the build
// instead of guessing. Local dev keeps the localhost default.
function resolveMetadataBase(): URL {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (siteUrl != null && siteUrl.length > 0) return new URL(siteUrl);
  if (process.env.NODE_ENV === "production") {
    throw new Error(
      "NEXT_PUBLIC_SITE_URL is not set. Set it to the public origin of the deployment " +
        "(e.g. https://check-in-apartments.up.railway.app). Without it, Open Graph " +
        "images and URLs resolve to localhost and messenger previews render nothing.",
    );
  }
  return new URL("http://localhost:3000");
}

const metadataBase = resolveMetadataBase();

export const metadata: Metadata = {
  metadataBase,
  title: "Заселення",
  description: "Інструкції з заселення: час, адреса, маршрут, ключі та Wi‑Fi.",
  openGraph: {
    siteName: "Заселення",
    locale: "uk_UA",
    type: "website",
  },
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
