import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { alternates, localizedUrl, pagePaths } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return pagePaths.flatMap((path) =>
    routing.locales.map((locale) => ({
      url: localizedUrl(locale, path),
      alternates: alternates(locale, path),
    })),
  );
}
