import LocaleLinks from "@/components/LocaleLinks";
import Link from "next/link";
import { notFound } from "next/navigation";
import TravelFooter from "@/components/TravelFooter";
import CookiesClient from "@/app/cookies/CookiesClient";
import PrivacyPage from "@/components/PrivacyChinese";
import TermsPage from "@/components/TermsChinese";
import { guideLocales } from "@/i18n/guides";
import { policyCopy, policyLabels, policySlugs } from "@/i18n/policies";

type Props = { params: Promise<{ locale: string; policy: string }> };
export function generateStaticParams() {
  return guideLocales.flatMap((locale) => policySlugs.map((policy) => ({ locale, policy })));
}
async function lookup(params: Props["params"]) {
  const values = await params;
  const locale = guideLocales.find((item) => item === values.locale);
  const policy = policySlugs.find((item) => item === values.policy);
  if (!locale || !policy) notFound();
  return { locale, policy, labels: policyLabels[locale] };
}
export async function generateMetadata({ params }: Props) {
  const { locale, policy, labels } = await lookup(params);
  return {
    title: labels.titles[policy],
    alternates: {
      canonical: `/${locale}/${policy}`,
      languages: Object.fromEntries(guideLocales.map((item) => [item, `/${item}/${policy}`])),
    },
  };
}
export default async function PolicyPage({ params }: Props) {
  const { locale, policy, labels } = await lookup(params);
  return (
    <>
      <nav className="site-nav scrolled travel-nav" aria-label={labels.home}>
        <Link href={`/${locale}`}>{labels.home}</Link>
        <LocaleLinks locale={locale} path={`/${policy}`} />
      </nav>
      <main className="section policy-page">
        {policy === "cookies" ? <CookiesClient locale={locale} /> : locale === "zh" ? (
          policy === "privacy" ? <PrivacyPage /> : <TermsPage />
        ) : (
          <article className="info-card attraction-block">
            <h1 className="section-title">{labels.titles[policy]}</h1>
            <p>{labels.updated}</p>
            {policyCopy[locale][policy].map(([title, content, list]) => (
              <section key={title} className="attraction-block">
                <h2>{title}</h2><p>{content}</p>
                {list && <ul className="policy-list">{list.map((item) => <li key={item}>{item}</li>)}</ul>}
              </section>
            ))}
          </article>
        )}
      </main>
      <TravelFooter locale={locale} />
    </>
  );
}
