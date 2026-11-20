import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { attractionAddress, attractionCopy, attractionLabels, attractionMap, attractions } from "@/data/attractions";
import { guideLocales } from "@/i18n/guides";

type Props = { params: Promise<{ locale: string; slug: string }> };
export function generateStaticParams() {
  return guideLocales.flatMap((locale) => attractions.map(({ slug }) => ({ locale, slug })));
}

async function getAttraction(params: Props["params"]) {
  const values = await params;
  const locale = guideLocales.find((language) => language === values.locale);
  const attraction = attractions.find(({ slug }) => slug === values.slug);
  if (!locale || !attraction) notFound();
  return { locale, attraction, copy: attractionCopy(attraction, locale), labels: attractionLabels[locale] };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, attraction, copy } = await getAttraction(params);
  const path = `/${locale}/explore/${attraction.slug}`;
  return {
    title: copy.name,
    description: copy.visit,
    openGraph: { title: copy.name, description: copy.visit, url: path, images: [attraction.image] },
    twitter: { card: "summary_large_image", title: copy.name, description: copy.visit, images: [attraction.image] },
    alternates: {
      canonical: path,
      languages: Object.fromEntries(guideLocales.map((language) => [language, `/${language}/explore/${attraction.slug}`])),
    },
  };
}

export default async function AttractionPage({ params }: Props) {
  const { locale, attraction, copy, labels } = await getAttraction(params);
  const map = attractionMap(attraction);
  const address = attractionAddress(attraction);
  const directions = new URLSearchParams({
    api: "1",
    origin: "Parque del Amor, Malecón Cisneros, Miraflores, Lima",
    destination: `${attraction.name}, ${address}`,
  });
  const related = attractions.filter((place) => place.category === attraction.category && place.slug !== attraction.slug).slice(0, 3);
  return (
    <main className="section attraction-page">
      <nav className="attraction-nav" aria-label={labels.nearby}>
        <Link href={`/${locale}#nearby`}>{labels.home} · {labels.nearby}</Link>
        {guideLocales.filter((language) => language !== locale).map((language) => (
          <Link key={language} href={`/${language}/explore/${attraction.slug}`} hrefLang={language}>
            {{ es: "Español", en: "English", zh: "中文" }[language]}
          </Link>
        ))}
      </nav>
      <article>
        <header>
          <p className="section-label">{attraction.district} · Lima</p>
          <h1 className="section-title">{copy.name}</h1>
          <p className="about-text">{copy.features}</p>
          <p className="attraction-actions"><a href={map}>{labels.map}</a></p>
          <figure>
            <Image src={attraction.image} alt={copy.name} width={attraction.width} height={attraction.height}
              unoptimized className="attraction-photo" />
            <figcaption><a href={attraction.imageSource}>{labels.photoSource}</a></figcaption>
          </figure>
        </header>
        <section className="info-card attraction-block">
          <h2>{labels.about} · {copy.name}</h2>
          <p><strong>{labels.manager}</strong> · {copy.manager}</p>
          <p>{copy.history}</p>
        </section>
        <section className="attraction-block">
          <h2>{labels.basic}</h2>
          <dl><dt>{labels.address}</dt><dd>{address}</dd></dl>
        </section>
        <section className="attraction-block">
          <h2>{labels.transport}</h2>
          <p>{copy.route}</p>
          <ul>
            <li><a href={`https://www.google.com/maps/dir/?${directions}&travelmode=walking`}>{labels.walking}</a></li>
            <li><a href={`https://www.google.com/maps/dir/?${directions}&travelmode=transit`}>{labels.transit}</a></li>
          </ul>
        </section>
        <section className="attraction-block">
          <h2>{labels.visit}</h2>
          <p>{copy.visit}</p>
        </section>
        <section className="attraction-block">
          <h2>{labels.photo}</h2>
          <p>{copy.photoTip}</p>
        </section>
        <section className="attraction-block">
          <h2>{labels.faq}</h2>
          <details className="faq-item"><summary>{copy.faq}</summary><p>{copy.answer}</p></details>
        </section>
        <section className="attraction-block">
          <h2>{labels.reviews}</h2>
          <a href={map}>{labels.reviewLink}</a>
        </section>
        <section className="attraction-block">
          <h2>{labels.source}</h2>
          <a href={attraction.source}>{new URL(attraction.source).hostname.replace(/^www\./, "")}</a>
        </section>
      </article>
      <aside className="attraction-block">
        <h2>{labels.other}</h2>
        <ul>{related.map((place) => (
          <li key={place.slug}><Link href={`/${locale}/explore/${place.slug}`}>{attractionCopy(place, locale).name}</Link></li>
        ))}</ul>
      </aside>
    </main>
  );
}
