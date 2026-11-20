import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { asset, site } from "@/content/site";
import { LanguageSwitcher } from "./LanguageSwitcher";

export async function Header() {
  const t = await getTranslations("nav");

  return (
    <header className="sticky top-0 z-50 border-b border-slate/15 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-5 py-3">
        <Link href="/" className="flex items-center" aria-label={site.name}>
          <Image
            src={asset(site.logo)}
            alt={site.name}
            width={76}
            height={67}
            priority
          />
        </Link>

        <nav aria-label="Main" className="order-3 flex w-full flex-wrap gap-x-5 gap-y-1 text-sm font-semibold text-slate lg:order-2 lg:w-auto">
          <Link href="/odoo" className="hover:text-odoo">{t("odoo")}</Link>
          <Link href="/accounting" className="hover:text-odoo">{t("accounting")}</Link>
          <Link href="/industries" className="hover:text-odoo">{t("industries")}</Link>
          <Link href="/about" className="hover:text-odoo">{t("about")}</Link>
          <Link href="/faq" className="hover:text-odoo">{t("faq")}</Link>
          <Link href="/contact" className="hover:text-odoo">{t("contact")}</Link>
        </nav>

        <div className="order-2 flex items-center gap-3 lg:order-3">
          <LanguageSwitcher />
          <a
            href={site.bookingUrl}
            className="rounded-md bg-slate px-4 py-2 text-sm font-bold text-white transition hover:bg-slate-dark"
          >
            {t("bookOnline")}
          </a>
        </div>
      </div>
    </header>
  );
}
