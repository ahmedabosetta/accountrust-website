import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { site } from "@/content/site";
import { routing } from "@/i18n/routing";
import { alternates } from "@/lib/seo";
import { ContactForm } from "@/components/ContactForm";
import { ButtonLink, Card, PageHero, Section, SectionTitle } from "@/components/ui";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: alternates(locale, "/contact"),
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!hasLocale(routing.locales, raw)) notFound();
  setRequestLocale(raw);

  const t = await getTranslations("contact");
  const c = await getTranslations("common");

  const odooSubject = encodeURIComponent(t("odooEmailSubject"));
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}`,
  )}`;

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} intro={t("intro")}>
        <ButtonLink href={`tel:${site.phoneE164}`}>{c("callUs")}</ButtonLink>
        <ButtonLink href={`mailto:${site.email}`} variant="outline">
          {c("emailUs")}
        </ButtonLink>
      </PageHero>

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          <Card title={c("phoneLabel")}>
            <a href={`tel:${site.phoneE164}`} className="mt-3 text-lg font-bold text-slate hover:underline">
              {site.phone}
            </a>
          </Card>
          <Card title={c("emailLabel")}>
            <a href={`mailto:${site.email}`} className="mt-3 break-all text-lg font-bold text-slate hover:underline">
              {site.email}
            </a>
          </Card>
          <Card title={c("addressLabel")}>
            <a href={mapUrl} className="mt-3 block text-lg text-slate hover:underline" target="_blank" rel="noopener noreferrer">
              {site.address.street}
              <br />
              {site.address.city}, {site.address.region} {site.address.postalCode}
            </a>
          </Card>
        </div>
      </Section>

      <Section tone="mist">
        <ContactForm />
      </Section>

      <Section tone="mist">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl bg-white p-8 shadow-sm">
            <SectionTitle title={t("bookTitle")} intro={t("bookText")} />
            <div className="mt-8">
              <ButtonLink href={site.bookingUrl} external>
                {t("bookButton")}
              </ButtonLink>
            </div>
          </div>
          <div className="rounded-xl bg-white p-8 shadow-sm">
            <SectionTitle title={t("odooTitle")} intro={t("odooText")} />
            <div className="mt-8">
              <ButtonLink href={`mailto:${site.email}?subject=${odooSubject}`} variant="light">
                {c("talkToUs")}
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
