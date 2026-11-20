import type { Metadata } from "next";
import Image from "next/image";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Localized, Locale } from "@/content/types";
import { asset, site } from "@/content/site";
import { routing } from "@/i18n/routing";
import { alternates } from "@/lib/seo";
import { ButtonLink, Eyebrow, PageHero, Section } from "@/components/ui";

// Values taken from the existing site copy ("customized service",
// "long-term relationship", "trustworthy advice").
const values: { title: Localized<string>; text: Localized<string> }[] = [
  {
    title: { en: "Customized service", fr: "Service sur mesure" },
    text: {
      en: "Every client’s accounting needs are unique and diverse, so we tailor our service to each one.",
      fr: "Les besoins comptables de chaque client sont uniques et variés. Nous adaptons donc notre service à chacun.",
    },
  },
  {
    title: { en: "Long-term relationships", fr: "Relations à long terme" },
    text: {
      en: "We build lasting relationships with our clients and encourage them to call whenever a challenge comes up during the year.",
      fr: "Nous bâtissons des relations durables avec nos clients et les encourageons à appeler dès qu’un défi se présente au cours de l’année.",
    },
  },
  {
    title: { en: "Trustworthy advice", fr: "Des conseils dignes de confiance" },
    text: {
      en: "We give our clients and friends advice and service they can rely on.",
      fr: "Nous offrons à nos clients et à nos proches des conseils et un service sur lesquels ils peuvent compter.",
    },
  },
];

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: alternates(locale, "/about"),
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!hasLocale(routing.locales, raw)) notFound();
  const locale = raw as Locale;
  setRequestLocale(locale);

  const t = await getTranslations("about");
  const c = await getTranslations("common");

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} intro={t("intro")} />

      <Section>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src={asset("/images/about.jpg")}
              alt=""
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <Eyebrow>{site.shortName}</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold text-slate md:text-4xl">
              {t("valuesTitle")}
            </h2>
            <div className="mt-6 space-y-6">
              {values.map((v) => (
                <div key={v.title.en} className="border-s-4 border-odoo ps-5">
                  <h3 className="text-xl font-bold text-slate">{v.title[locale]}</h3>
                  <p className="mt-2 text-neutral-700">{v.text[locale]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section tone="mist">
        <div className="rounded-2xl bg-slate px-8 py-12 text-white md:px-12">
          <h2 className="text-3xl font-bold md:text-4xl">{t("ctaTitle")}</h2>
          <p className="mt-4 max-w-2xl text-lg text-white/90">{t("ctaText")}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={site.bookingUrl} external>
              {c("bookOnline")}
            </ButtonLink>
            <ButtonLink href="/contact" variant="outline">
              {c("callUs")}
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
