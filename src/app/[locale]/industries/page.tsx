import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { industries } from "@/content/odoo";
import type { Locale } from "@/content/types";
import { alternates } from "@/lib/seo";
import { routing } from "@/i18n/routing";
import { ButtonLink, Card, PageHero, Section, SectionTitle } from "@/components/ui";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "industries" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: alternates(locale, "/industries"),
  };
}

export default async function IndustriesPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!hasLocale(routing.locales, raw)) notFound();
  const locale = raw as Locale;
  setRequestLocale(locale);

  const t = await getTranslations("industries");

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} intro={t("intro")} />

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((item) => (
            <Card key={item.id} title={item.title[locale]} text={item.text[locale]} accent="odoo" />
          ))}
        </div>
      </Section>

      <Section tone="mist">
        <div className="rounded-2xl bg-white px-8 py-12 shadow-sm md:px-12">
          <SectionTitle title={t("ctaTitle")} intro={t("ctaText")} />
          <div className="mt-8">
            <ButtonLink href="/contact" variant="light">
              {t("ctaButton")}
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
