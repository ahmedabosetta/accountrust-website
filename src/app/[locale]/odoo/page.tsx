import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { odooFaqs, odooMethod, odooServices, odooWhy } from "@/content/odoo";
import { routing } from "@/i18n/routing";
import type { Locale } from "@/content/types";
import { alternates, faqJsonLd, jsonLdString } from "@/lib/seo";
import { ButtonLink, Card, FaqList, PageHero, Section, SectionTitle } from "@/components/ui";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "odoo" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: alternates(locale, "/odoo"),
  };
}

export default async function OdooPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!hasLocale(routing.locales, raw)) notFound();
  const locale = raw as Locale;
  setRequestLocale(locale);

  const t = await getTranslations("odoo");
  const c = await getTranslations("common");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString(faqJsonLd(odooFaqs, locale)) }}
      />
      <PageHero eyebrow={t("eyebrow")} title={t("title")} intro={t("intro")}>
        <ButtonLink href="/contact" variant="primary">
          {t("ctaButton")}
        </ButtonLink>
        <ButtonLink href="#services" variant="outline">
          {c("learnMore")}
        </ButtonLink>
      </PageHero>

      <Section id="services">
        <SectionTitle title={t("servicesTitle")} />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {odooServices.map((s) => (
            <Card key={s.id} title={s.title[locale]} text={s.text[locale]} accent="odoo" />
          ))}
        </div>
      </Section>

      <Section tone="mist">
        <div className="grid gap-10 md:grid-cols-2">
          <SectionTitle title={t("integrationsTitle")} intro={t("integrationsText")} />
          <SectionTitle title={t("whyTitle")} />
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {odooWhy.map((item) => (
            <Card key={item.id} title={item.title[locale]} text={item.text[locale]} />
          ))}
        </div>
      </Section>

      <Section id="method">
        <SectionTitle title={t("methodTitle")} />
        <ol className="mt-10 grid gap-6 md:grid-cols-4">
          {odooMethod.map((step, i) => (
            <li key={step.id} className="rounded-xl border border-slate/15 p-6">
              <span className="text-sm font-bold text-odoo">0{i + 1}</span>
              <h3 className="mt-2 text-xl font-bold text-slate">{step.title[locale]}</h3>
              <p className="mt-3 text-neutral-700">{step.text[locale]}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="mist">
        <SectionTitle title={t("faqTitle")} />
        <div className="mt-10">
          <FaqList items={odooFaqs} locale={locale} />
        </div>
      </Section>

      <Section>
        <div className="rounded-2xl bg-odoo px-8 py-12 text-white md:px-12">
          <h2 className="text-3xl font-bold md:text-4xl">{t("ctaTitle")}</h2>
          <p className="mt-4 max-w-2xl text-lg text-white/90">{t("ctaText")}</p>
          <div className="mt-8">
            <ButtonLink href="/contact" variant="primary">
              {t("ctaButton")}
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
