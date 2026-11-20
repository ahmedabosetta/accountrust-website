import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { taxFaqs } from "@/content/accounting";
import { odooFaqs } from "@/content/odoo";
import { site } from "@/content/site";
import type { Locale } from "@/content/types";
import { alternates, faqJsonLd, jsonLdString } from "@/lib/seo";
import { routing } from "@/i18n/routing";
import { ButtonLink, FaqList, PageHero, Section, SectionTitle } from "@/components/ui";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "faq" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: alternates(locale, "/faq"),
  };
}

export default async function FaqPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!hasLocale(routing.locales, raw)) notFound();
  const locale = raw as Locale;
  setRequestLocale(locale);

  const t = await getTranslations("faq");
  const c = await getTranslations("common");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdString(faqJsonLd([...taxFaqs, ...odooFaqs], locale)),
        }}
      />
      <PageHero eyebrow={t("eyebrow")} title={t("title")} intro={t("intro")} />

      <Section>
        <SectionTitle title={t("taxTitle")} />
        <div className="mt-10">
          <FaqList items={taxFaqs} locale={locale} />
        </div>
      </Section>

      <Section tone="mist">
        <SectionTitle title={t("odooTitle")} />
        <div className="mt-10">
          <FaqList items={odooFaqs} locale={locale} />
        </div>
      </Section>

      <Section>
        <div className="rounded-2xl bg-slate px-8 py-12 text-white md:px-12">
          <h2 className="text-3xl font-bold md:text-4xl">{t("ctaTitle")}</h2>
          <p className="mt-4 max-w-2xl text-lg text-white/90">{t("ctaText")}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={`tel:${site.phoneE164}`}>{c("callUs")}</ButtonLink>
            <ButtonLink href={`mailto:${site.email}`} variant="outline">
              {c("emailUs")}
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
