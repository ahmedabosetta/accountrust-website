import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { Faq } from "@/content/accounting";
import type { Locale } from "@/content/types";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold uppercase tracking-[0.18em] text-odoo">
      {children}
    </p>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-slate text-white">
      {image && (
        <>
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="-z-10 object-cover opacity-30"
          />
        </>
      )}
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-silver">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/90">{intro}</p>
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
}

export function Section({
  id,
  tone = "white",
  children,
}: {
  id?: string;
  tone?: "white" | "mist";
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={tone === "mist" ? "bg-mist" : "bg-white"}
    >
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">{children}</div>
    </section>
  );
}

export function SectionTitle({
  title,
  intro,
}: {
  title: string;
  intro?: string;
}) {
  return (
    <div className="max-w-3xl">
      <h2 className="text-3xl font-bold text-slate md:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-lg text-neutral-700">{intro}</p>}
    </div>
  );
}

export function Card({
  title,
  text,
  children,
  accent = "slate",
}: {
  title: string;
  text?: string;
  children?: React.ReactNode;
  accent?: "slate" | "odoo";
}) {
  return (
    <div className="flex h-full flex-col rounded-xl border border-slate/15 bg-white p-6 shadow-sm">
      <span
        className={`mb-4 block h-1 w-12 rounded ${
          accent === "odoo" ? "bg-odoo" : "bg-slate"
        }`}
      />
      <h3 className="text-xl font-bold text-slate">{title}</h3>
      {text && <p className="mt-3 text-neutral-700">{text}</p>}
      {children}
    </div>
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  children,
  external = false,
}: {
  href: string;
  variant?: "primary" | "light" | "outline";
  children: React.ReactNode;
  external?: boolean;
}) {
  const styles = {
    primary: "bg-white text-slate hover:bg-mist",
    light: "bg-slate text-white hover:bg-slate-dark",
    outline: "border-2 border-white text-white hover:bg-white hover:text-slate",
  }[variant];
  const className = `inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-bold transition ${styles}`;

  if (external || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export function FaqList({ items, locale }: { items: Faq[]; locale: Locale }) {
  return (
    <div className="divide-y divide-slate/15 rounded-xl border border-slate/15 bg-white">
      {items.map((item) => (
        <details key={item.q[locale]} className="group p-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold text-slate">
            {item.q[locale]}
            <span className="text-2xl text-odoo transition group-open:rotate-45" aria-hidden>
              +
            </span>
          </summary>
          <ul className="mt-4 list-disc space-y-2 ps-6 text-neutral-700">
            {item.a[locale].map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </details>
      ))}
    </div>
  );
}
