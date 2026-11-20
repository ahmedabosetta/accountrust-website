import type { Metadata } from "next";
import Image from "next/image";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { accountingServices, taxFaqs } from "@/content/accounting";
import { industries, odooFaqs, odooMethod, odooWhy } from "@/content/odoo";
import { site } from "@/content/site";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import { FaqList, Card, ButtonLink, Eyebrow, Section, SectionTitle } from "@/components/ui";
import type { Locale } from "@/content/types";
import { alternates } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: alternates(locale, ""),
  };
}

export default async function HomePage({ params }: Props) {
  const { locale: raw } = await params;
  if (!hasLocale(routing.locales, raw)) notFound();
  const locale = raw as Locale;
  setRequestLocale(locale);

  const t = await getTranslations("home");
  const c = await getTranslations("common");
  const n = await getTranslations("nav");

  const pillarPrice = accountingServices.find((s) => s.id === "personal");

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-slate text-white">
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover opacity-25"
        />
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-[1.25fr_1fr] md:py-28">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-silver">
              {t("eyebrow")}
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
              {t("title")}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/90">{t("intro")}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={site.bookingUrl} external>
                {t("ctaBook")}
              </ButtonLink>
              <ButtonLink href="/odoo" variant="outline">
                {t("seeOdoo")}
              </ButtonLink>
            </div>
            <p className="mt-8 text-sm text-white/80">{t("heroNote")}</p>
          </div>
          <div className="self-end rounded-xl bg-white/10 p-6 backdrop-blur">
            <p className="text-sm font-bold uppercase tracking-wide text-silver">
              {t("startingFrom")}
            </p>
            <p className="mt-2 text-5xl font-bold">
              {pillarPrice?.price}
            </p>
            <p className="mt-2 text-sm text-white/80">
              {pillarPrice?.name[locale]}
            </p>
            <ul className="mt-6 space-y-3 text-sm text-white/90">
              {accountingServices.map((s) => (
                <li key={s.id} className="flex justify-between gap-4 border-b border-white/15 pb-2">
                  <span>{s.name[locale]}</span>
                  <span className="whitespace-nowrap font-bold">
                    {c("startingAt")} {s.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Two pillars */}
      <Section>
        <SectionTitle title={t("pillarsTitle")} intro={t("pillarsIntro")} />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Card title={t("odooCardTitle")} text={t("odooCardText")} accent="odoo">
            <div className="mt-6">
              <Link href="/odoo" className="font-bold text-odoo hover:underline">
                {t("seeOdoo")} →
              </Link>
            </div>
          </Card>
          <Card title={t("accountingCardTitle")} text={t("accountingCardText")}>
            <div className="mt-6">
              <Link href="/accounting" className="font-bold text-slate hover:underline">
                {t("seeAccounting")} →
              </Link>
            </div>
          </Card>
        </div>
      </Section>

      {/* Why accountants */}
      <Section tone="mist">
        <SectionTitle title={t("whyTitle")} />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {odooWhy.map((item) => (
            <Card key={item.id} title={item.title[locale]} text={item.text[locale]} accent="odoo" />
          ))}
        </div>
      </Section>

      {/* Method */}
      <Section>
        <SectionTitle title={t("methodTitle")} intro={t("methodIntro")} />
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

      {/* Industries */}
      <Section tone="mist">
        <SectionTitle title={t("industriesTitle")} intro={t("industriesIntro")} />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((item) => (
            <div key={item.id} className="rounded-xl bg-white p-5 shadow-sm">
              <h3 className="font-bold text-slate">{item.title[locale]}</h3>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/industries" className="font-bold text-odoo hover:underline">
            {n("industries")} →
          </Link>
        </div>
      </Section>

      {/* About teaser */}
      <Section>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <Eyebrow>{n("about")}</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold text-slate md:text-4xl">{t("aboutTitle")}</h2>
            <p className="mt-4 text-lg text-neutral-700">
              {t("aboutIntro")}
            </p>
            <div className="mt-6">
              <ButtonLink href="/about" variant="outline">
                {c("learnMore")}
              </ButtonLink>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src="/images/about.jpg"
              alt=""
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* FAQ teaser */}
      <Section tone="mist">
        <SectionTitle title={t("faqTitle")} />
        <div className="mt-10">
          <FaqList items={[...odooFaqs.slice(0, 2), taxFaqs[0]]} locale={locale} />
        </div>
        <div className="mt-6">
          <Link href="/faq" className="font-bold text-odoo hover:underline">
            {c("viewAll")} →
          </Link>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="rounded-2xl bg-slate px-8 py-12 text-white md:px-12">
          <h2 className="text-3xl font-bold md:text-4xl">{t("ctaTitle")}</h2>
          <p className="mt-4 max-w-2xl text-lg text-white/90">{t("ctaText")}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={site.bookingUrl} external>
              {t("ctaBook")}
            </ButtonLink>
            <ButtonLink href="/contact" variant="outline">
              {t("ctaContact")}
            </ButtonLink>
          </div>
          <p className="mt-6 text-sm text-white/80">
            <Link href="/odoo" className="underline">
              {t("seeOdoo")}
            </Link>
          </p>
        </div>
      </Section>
    </>
  );
}
