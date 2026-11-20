import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { accountingServices, taxFaqs } from "@/content/accounting";
import { site } from "@/content/site";
import type { Locale } from "@/content/types";
import { alternates } from "@/lib/seo";
import { routing } from "@/i18n/routing";
import { ButtonLink, FaqList, PageHero, Section, SectionTitle } from "@/components/ui";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "accounting" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: alternates(locale, "/accounting"),
  };
}

export default async function AccountingPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!hasLocale(routing.locales, raw)) notFound();
  const locale = raw as Locale;
  setRequestLocale(locale);

  const t = await getTranslations("accounting");
  const c = await getTranslations("common");

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} intro={t("intro")}>
        <ButtonLink href={site.bookingUrl} external>
          {c("bookOnline")}
        </ButtonLink>
        <ButtonLink href="/contact" variant="outline">
          {c("callUs")}
        </ButtonLink>
      </PageHero>

      <Section id="services">
        <SectionTitle title={t("pricesTitle")} intro={t("pricesNote")} />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {accountingServices.map((s) => (
            <article
              key={s.id}
              className="flex flex-col rounded-xl border border-slate/15 bg-white p-7 shadow-sm"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <h2 className="text-2xl font-bold text-slate">{s.name[locale]}</h2>
                <p className="whitespace-nowrap rounded-full bg-mist px-4 py-1 text-sm font-bold text-slate">
                  {c("startingAt")}                   {s.price}
                  {" · "}
                  {s.unit[locale]}
                </p>
              </div>
              <p className="mt-3 text-neutral-700">{s.description[locale]}</p>
              <ul className="mt-5 list-disc space-y-2 ps-6 text-neutral-800">
                {s.items[locale].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="mt-auto pt-7">
                <ButtonLink href={site.bookingUrl} external variant="light">
                  {c("bookNow")}
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="mist">
        <SectionTitle title={t("faqTitle")} />
        <div className="mt-10">
          <FaqList items={taxFaqs} locale={locale} />
        </div>
      </Section>

      <Section>
        <div className="rounded-2xl bg-slate px-8 py-12 text-white md:px-12">
          <h2 className="text-3xl font-bold md:text-4xl">{t("ctaTitle")}</h2>
          <p className="mt-4 max-w-2xl text-lg text-white/90">{t("ctaText")}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={site.bookingUrl} external>
              {c("bookOnline")}
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
