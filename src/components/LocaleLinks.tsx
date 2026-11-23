import Link from "next/link";
import { guideLocales } from "@/i18n/guides";
import type { Locale } from "@/i18n/translations";

const languages = {
  zh: ["中文", "中文"],
  en: ["EN", "English"],
  es: ["ES", "Español"],
  qu: ["QU", "Runasimi"],
} as const;

export default function LocaleLinks({ locale, path }: { locale: Locale; path: string }) {
  return (
    <div className="lang-switcher">
      {guideLocales.map((language) => (
        <Link key={language} href={`/${language}${path}`} hrefLang={language} lang={language}
          aria-label={languages[language][1]} aria-current={language === locale ? "page" : undefined}
          className={`lang-btn${language === locale ? " active" : ""}`}>
          {languages[language][0]}
        </Link>
      ))}
    </div>
  );
}
