"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("nav");

  return (
    <div
      role="group"
      aria-label={t("language")}
      className="flex overflow-hidden rounded-md border border-slate/30 text-xs font-bold"
    >
      {routing.locales.map((l) => (
        <button
          key={l}
          type="button"
          aria-pressed={l === locale}
          onClick={() => router.replace(pathname, { locale: l })}
          className={`px-3 py-2 uppercase transition ${
            l === locale ? "bg-slate text-white" : "bg-white text-slate hover:bg-mist"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
