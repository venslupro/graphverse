import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { defaultLocale, isLocale, type Locale } from "@/i18n/config";

async function detectLocale(): Promise<Locale> {
  const saved = (await cookies()).get("lang")?.value;
  if (saved && isLocale(saved)) return saved;

  const accept = (await headers()).get("accept-language") ?? "";
  const preferred = accept
    .split(",")
    .map((part) => part.split(";")[0].trim().toLowerCase())
    .find((tag) => tag.startsWith("zh") || tag.startsWith("en"));
  if (preferred?.startsWith("zh")) return "zh";
  return defaultLocale;
}

export default async function RootRedirect() {
  redirect(`/${await detectLocale()}`);
}
