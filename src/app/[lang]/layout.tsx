import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import "../globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

const SITE_URL = "https://graphverse.vercel.app";

export const viewport: Viewport = {
  themeColor: "#0b1026",
  colorScheme: "dark",
};

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getDictionary(lang);
  return {
    metadataBase: new URL(
      process.env.NODE_ENV === "production"
        ? SITE_URL
        : `http://localhost:${process.env.PORT ?? 3000}`,
    ),
    title: t.meta.title,
    description: t.meta.description,
    keywords: [
      "Graph World Models",
      "GraphVerse",
      "GWM",
      "Graph Neural Networks",
      "World Models",
      "Embodied AI",
      "AI for Science",
      "图世界模型",
    ],
    alternates: {
      canonical: `/${lang}`,
      languages: { en: "/en", "zh-CN": "/zh" },
    },
    openGraph: {
      title: t.meta.title,
      description: t.meta.description,
      type: "website",
      locale: lang === "zh" ? "zh_CN" : "en_US",
      siteName: "GraphVerse",
    },
    twitter: { card: "summary_large_image", title: t.meta.title, description: t.meta.description },
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <html
      lang={lang === "zh" ? "zh-CN" : "en"}
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>
        {/* Scroll-reveal content starts hidden; keep it visible if JS never runs. */}
        <noscript>
          <style>{".reveal{opacity:1;transform:none}"}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
