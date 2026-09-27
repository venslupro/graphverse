import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import Logo from "@/components/Logo";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "404 — GraphVerse",
  description: "Page not found / 页面不存在",
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={`${geistSans.variable} antialiased`}>
      <body>
        <main className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 text-center">
          <div className="grid-bg absolute inset-0" />
          <div className="glow left-1/2 top-1/3 h-80 w-[36rem] -translate-x-1/2 bg-violet/30" />
          <div className="relative">
            <Logo className="mx-auto h-14 w-14" />
            <p className="mt-8 font-mono text-sm tracking-[0.3em] text-cyan">404</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
              <span className="text-gradient">Page not found</span>
            </h1>
            <p className="mt-3 text-lg text-mute">页面不存在</p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link href="/en" className="inline-flex h-11 items-center rounded-full bg-white px-6 text-sm font-semibold text-ink">
                Back to home
              </Link>
              <Link href="/zh" className="inline-flex h-11 items-center rounded-full border border-line px-6 text-sm font-medium">
                返回首页
              </Link>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
