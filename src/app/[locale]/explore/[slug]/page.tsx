import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { attractionAddress, attractionCopy, attractionLabels, attractionMap, attractions } from "@/data/attractions";
import { orientation } from "@/data/orientations";
import { visitorContext, visitorLabels } from "@/data/visitor-context";
import { itinerary } from "@/data/itinerary";
import { visitDetails, visitLabels, stayAdvice } from "@/data/visit-details";
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
  const sections = visitLabels[locale];
  const visitor = visitorLabels[locale];
  const context = visitorContext(attraction.slug, locale);
  const areaStay = visitor.stays[attraction.category];
  const baseline = visitDetails(attraction.slug, locale, attraction.source);
  const details = copy.extra
    ? { ...baseline, hours: copy.extra.hours, admission: copy.extra.admission, source: copy.extra.source ?? baseline.source }
    : baseline;
  const stops = copy.extra?.stops ?? itinerary(attraction.slug, locale);
  const tagline = [...new Intl.Segmenter(locale, { granularity: "sentence" }).segment(copy.features)][0].segment.trim();
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
          <p className="about-text">{tagline}</p>
          <p>{details.hours}</p>
          <p className="attraction-actions"><a href={map}>{labels.map}</a><a href={map}>{labels.reviews} · Google Maps</a></p>
          <figure>
            <Image src={attraction.image} alt={copy.name} width={attraction.width} height={attraction.height}
              unoptimized className="attraction-photo" />
            <figcaption><a href={attraction.imageSource}>{labels.photoSource}</a></figcaption>
          </figure>
        </header>
        <section className="attraction-block">
          <h2>{sections.intro}</h2>
          <p>{copy.extra?.intro ?? orientation(attraction.slug, locale)}</p>
        </section>
        <section className="attraction-block">
          <h2>{labels.visit}</h2>
          <p>{copy.visit}</p>
          {context?.duration && <p><strong>{visitor.duration}</strong> · {context.duration}</p>}
        </section>
        <section className="attraction-block">
          <h2>{labels.features}</h2>
          <p>{copy.features}</p>
        </section>
        <section className="info-card attraction-block">
          <h2>{labels.about} · {copy.name}</h2>
          <p><strong>{labels.manager}</strong> · {copy.manager}</p>
          <a href={attraction.source}>{labels.source}</a>
        </section>
        <section className="attraction-block">
          <h2>{labels.basic}</h2>
          <dl className="attraction-facts">
            <dt>{sections.officialName}</dt><dd>{attraction.name}</dd>
            <dt>{sections.district}</dt><dd>{attraction.district}</dd>
            {context && <><dt>{visitor.category}</dt><dd>{context.category}</dd></>}
            {context?.duration && <><dt>{visitor.duration}</dt><dd>{context.duration}</dd></>}
            <dt>{labels.address}</dt><dd>{address}</dd>
            <dt>{visitor.start}</dt><dd>{stops[0]}</dd>
            <dt>{labels.manager}</dt><dd>{copy.manager}</dd>
            <dt>{labels.hours}</dt><dd>{details.hours}</dd>
            <dt>{labels.admission}</dt><dd>{details.admission}</dd>
            <dt>{labels.source}</dt><dd><a href={details.source}>{sections.verify}</a></dd>
          </dl>
        </section>
        <section className="attraction-block">
          <h2>{labels.hours}</h2>
          <p>{details.hours}</p>
          <a href={details.source}>{sections.verify}</a>
        </section>
        <section className="attraction-block">
          <h2>{labels.admission}</h2>
          <p>{details.admission}</p>
        </section>
        <section className="attraction-block">
          <h2>{labels.transport}</h2>
          <p>{copy.route}</p>
          <ul>
            <li><a href={`https://www.google.com/maps/dir/?${directions}&travelmode=walking`}>{labels.walking}</a></li>
            <li><a href={`https://www.google.com/maps/dir/?${directions}&travelmode=transit`}>{labels.transit}</a></li>
            <li><a href={`https://www.google.com/maps/dir/?${directions}&travelmode=driving`}>{labels.driving}</a></li>
          </ul>
        </section>
        <section className="attraction-block">
          <h2>{sections.discover}</h2>
          <h3>{labels.history}</h3>
          <p>{copy.history}</p>
          {context?.observation && <>
            <h3>{visitor.observation}</h3>
            <p>{context.observation}</p>
          </>}
        </section>
        <section className="attraction-block">
          <h2>{sections.route}</h2>
          <ol className="attraction-steps">{stops.map((stop) => <li key={stop}>{stop}</li>)}</ol>
        </section>
        <section className="attraction-block">
          <h2>{sections.notes}</h2>
          <p>{details.notes ?? (attraction.category === "coast" ? sections.weather : sections.heritage)}</p>
          <details className="faq-item"><summary>{copy.faq}</summary><p>{copy.answer}</p></details>
        </section>
        <section className="attraction-block">
          <h2>{labels.photo}</h2>
          <p>{copy.photoTip}</p>
        </section>
        <section className="attraction-block">
          <h2>{sections.stay}</h2>
          {areaStay && <p>{areaStay}</p>}
          <p>{stayAdvice(locale, attraction.category)}</p>
        </section>
        <section className="attraction-block">
          <h2>{labels.reviews}</h2>
          <a href={map}>{labels.reviewLink}</a>
        </section>
        <section className="attraction-block">
          <h2>{sections.location}</h2>
          <p>{address}</p>
          <a href={map}>{labels.map}</a>
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
