"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

type Notice = "idle" | "missing" | "offline";

export function ContactForm() {
  const t = useTranslations("contact");
  const [notice, setNotice] = useState<Notice>("idle");

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    // The form is visible for design review. It does not send anything yet.
    setNotice(name && email && message ? "offline" : "missing");
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-xl bg-white p-8 shadow-sm">
      <h2 className="text-3xl font-bold text-slate md:text-4xl">{t("formTitle")}</h2>
      <p className="mt-4 text-lg text-neutral-700">{t("formIntro")}</p>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <label className="block text-sm font-bold text-slate">
          {t("formName")}
          <input
            name="name"
            type="text"
            autoComplete="name"
            className="mt-2 w-full rounded-md border border-slate/25 px-3 py-3 font-normal text-ink"
          />
        </label>
        <label className="block text-sm font-bold text-slate">
          {t("formEmail")}
          <input
            name="email"
            type="email"
            autoComplete="email"
            className="mt-2 w-full rounded-md border border-slate/25 px-3 py-3 font-normal text-ink"
          />
        </label>
        <label className="block text-sm font-bold text-slate">
          {t("formPhone")}
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            className="mt-2 w-full rounded-md border border-slate/25 px-3 py-3 font-normal text-ink"
          />
        </label>
        <label className="block text-sm font-bold text-slate">
          {t("formTopic")}
          <select
            name="topic"
            className="mt-2 w-full rounded-md border border-slate/25 bg-white px-3 py-3 font-normal text-ink"
            defaultValue="accounting"
          >
            <option value="accounting">{t("formTopicAccounting")}</option>
            <option value="odoo">{t("formTopicOdoo")}</option>
            <option value="other">{t("formTopicOther")}</option>
          </select>
        </label>
        <label className="block text-sm font-bold text-slate md:col-span-2">
          {t("formMessage")}
          <textarea
            name="message"
            rows={5}
            className="mt-2 w-full rounded-md border border-slate/25 px-3 py-3 font-normal text-ink"
          />
        </label>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex items-center justify-center rounded-md bg-slate px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-dark"
      >
        {t("formSubmit")}
      </button>

      {notice !== "idle" && (
        <p role="status" className="mt-4 rounded-md bg-mist px-4 py-3 text-sm font-semibold text-slate">
          {notice === "missing" ? t("formRequired") : t("formNotice")}
        </p>
      )}
    </form>
  );
}
