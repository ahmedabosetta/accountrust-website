import type { Faq } from "@/content/accounting";
import { accountingServices } from "@/content/accounting";
import { site } from "@/content/site";
import type { Locale } from "@/content/types";

export const pagePaths = [
  "",
  "/odoo",
  "/accounting",
  "/industries",
  "/about",
  "/faq",
  "/contact",
] as const;

export function localizedUrl(locale: string, path: string) {
  return `${site.url}/${locale}${path}`;
}

// hreflang + canonical for one page, used in generateMetadata.
export function alternates(locale: string, path: string) {
  return {
    canonical: localizedUrl(locale, path),
    languages: {
      en: localizedUrl("en", path),
      fr: localizedUrl("fr", path),
      "x-default": localizedUrl("en", path),
    },
  };
}

// Business schema, built from the facts in site.ts and the service prices.
export function businessJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "@id": `${site.url}/#business`,
    name: site.name,
    url: localizedUrl(locale, ""),
    telephone: site.phoneE164,
    email: site.email,
    inLanguage: locale,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    areaServed: [
      { "@type": "City", name: "Edmonton" },
      { "@type": "AdministrativeArea", name: "Northern Alberta" },
      { "@type": "Country", name: "Canada" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: locale === "fr" ? "Services comptables et fiscaux" : "Accounting and tax services",
      itemListElement: accountingServices.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.name[locale] },
        price: s.price.replace(/[^0-9.]/g, ""),
        priceCurrency: "CAD",
        url: site.bookingUrl,
      })),
    },
  };
}

export function faqJsonLd(items: Faq[], locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q[locale],
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a[locale].join(" "),
      },
    })),
  };
}

// Serialises JSON-LD safely for a <script> tag.
export function jsonLdString(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
