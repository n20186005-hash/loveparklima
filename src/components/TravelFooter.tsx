import Link from "next/link";
import { translations, type Locale } from "@/i18n/translations";
import { guideLabels, guides, guideSlugs } from "@/i18n/guides";

import { policyLabels } from "@/i18n/policies";

export default function TravelFooter({ locale }: { locale: Locale }) {
  const t = translations[locale];
  const guideLocale = locale;
  return (
    <footer className="site-footer">
      <div className="footer-links">
        <p className="footer-links-title">{t.footer.linksTitle}</p>
        <div className="footer-links-grid">
          {t.footer.links.map((link: { name: string; url: string }, i: number) => (
            <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="footer-link-item">
              {link.name}
            </a>
          ))}
        </div>
      </div>
      {guideLocale && (
        <nav className="footer-links" aria-label={guideLabels[guideLocale].heading}>
          <p className="footer-links-title">{guideLabels[guideLocale].heading}</p>
          <div className="footer-links-grid">
            {guideSlugs.map((slug) => (
              <Link key={slug} href={`/${guideLocale}/guide/${slug}`} className="footer-link-item">
                {guides[guideLocale][slug].title}
              </Link>
            ))}
          </div>
        </nav>
      )}
      <div className="footer-legal" style={{ maxWidth: "1100px", margin: "0 auto", padding: "1rem 2rem 0", textAlign: "center" }}>
        <Link href={`/${locale}/privacy`} style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.8rem", marginRight: "1.5rem" }}>
          {policyLabels[locale].titles.privacy}
        </Link>
        <Link href={`/${locale}/terms`} style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.8rem", marginRight: "1.5rem" }}>
          {policyLabels[locale].titles.terms}
        </Link>
        <Link href={`/${locale}/cookies`} style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.8rem" }}>
          {policyLabels[locale].titles.cookies}
        </Link>
      </div>
      <p className="footer-text" style={{ marginTop: "2rem", fontSize: "0.9rem", fontWeight: 600, color: "var(--color-gold)" }}>
        {t.footer.callToAction}
      </p>
      <p className="footer-text" style={{ marginTop: "1rem", whiteSpace: "pre-line" }}>{t.footer.text}</p>
    </footer>
  );
}

