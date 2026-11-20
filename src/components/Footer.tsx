import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { site } from "@/content/site";

export async function Footer() {
  const t = await getTranslations("footer");
  const c = await getTranslations("common");

  return (
    <footer className="bg-slate-dark text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div>
          <p className="text-lg font-bold">{site.name}</p>
          <p className="mt-2 text-sm text-white/80">{c("footerTagline")}</p>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wide text-silver">
            {t("servicesTitle")}
          </h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/odoo" className="hover:underline">{t("odooLink")}</Link></li>
            <li><Link href="/accounting" className="hover:underline">{t("accountingLink")}</Link></li>
            <li><Link href="/industries" className="hover:underline">{t("industriesLink")}</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wide text-silver">
            {t("companyTitle")}
          </h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/about" className="hover:underline">{t("aboutLink")}</Link></li>
            <li><Link href="/faq" className="hover:underline">{t("faqLink")}</Link></li>
            <li><Link href="/contact" className="hover:underline">{t("contactLink")}</Link></li>
            <li><a href={site.bookingUrl} className="hover:underline">{t("bookLink")}</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wide text-silver">
            {t("contactTitle")}
          </h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={`tel:${site.phoneE164}`} className="hover:underline">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:underline break-all">
                {site.email}
              </a>
            </li>
            <li className="text-white/80">
              {site.address.street}, {site.address.city}, {site.address.region}{" "}
              {site.address.postalCode}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-white/70">
          © {site.name}. {c("rights")}
        </p>
      </div>
    </footer>
  );
}
