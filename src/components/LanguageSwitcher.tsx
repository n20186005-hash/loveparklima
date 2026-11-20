"use client";

import { useLang } from "./LangProvider";
import type { Locale } from "@/i18n/translations";

const LANG_LABELS: Record<Locale, string> = {
  zh: "中文",
  en: "EN",
  es: "ES",
  qu: "QU",
};

export function LanguageSwitcher() {
  const { locale } = useLang();
  return (
    <div className="lang-switcher">
      {(["zh", "en", "es", "qu"] as Locale[]).map((l) => (
        <button
          key={l}
          className={`lang-btn ${locale === l ? "active" : ""}`}
          onClick={() => {
            if (l !== locale) {
              window.location.href = window.location.pathname.replace(/^\/(zh|en|es|qu)(?=\/|$)/, `/${l}`) + window.location.search + window.location.hash;
            }
          }}
          lang={l}
          aria-pressed={locale === l}
          aria-label={{ zh: "中文", en: "English", es: "Español", qu: "Runasimi" }[l]}
        >
          {LANG_LABELS[l]}
        </button>
      ))}
    </div>
  );
}
