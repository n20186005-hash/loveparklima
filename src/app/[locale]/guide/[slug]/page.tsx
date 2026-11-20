import type { Metadata } from "next";
import TravelFooter from "@/components/TravelFooter";
import TravelHero from "@/components/TravelHero";
import Link from "next/link";
import { attractionCopy, attractionLabels, attractions, loveParkInventory } from "@/data/attractions";
import { itinerary } from "@/data/itinerary";
import { stayAdvice, visitDetails, visitLabels } from "@/data/visit-details";
import { notFound } from "next/navigation";
import { guideLabels, guideLocales, guides, guideSlugs, municipalPlan, municipalRoutes, parkMap } from "@/i18n/guides";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return guideLocales.flatMap((locale) => guideSlugs.map((slug) => ({ locale, slug })));
}

async function getGuide(params: Props["params"]) {
  const values = await params;
  const locale = guideLocales.find((value) => value === values.locale);
  const slug = guideSlugs.find((value) => value === values.slug);
  if (!locale || !slug) notFound();
  return { locale, slug, guide: guides[locale][slug], labels: guideLabels[locale] };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug, guide } = await getGuide(params);
  const path = `/${locale}/guide/${slug}`;
  return {
    title: guide.title,
    description: guide.intro,
    openGraph: { title: guide.title, description: guide.intro, url: path, images: ["/gallery/love-park (1).jpg"] },
    twitter: { card: "summary_large_image", title: guide.title, description: guide.intro, images: ["/gallery/love-park (1).jpg"] },
    alternates: {
      canonical: path,
      languages: Object.fromEntries(guideLocales.map((language) => [language, `/${language}/guide/${slug}`])),
    },
  };
}

export default async function GuidePage({ params }: Props) {
  const { locale, slug, guide, labels } = await getGuide(params);
  const details = attractionLabels[locale];
  const sections = visitLabels[locale];
  const sculpture = slug === "el-beso";
  const access = visitDetails(slug, locale, sculpture ? loveParkInventory : municipalRoutes);
  const hours = sculpture ? details.parkHours : access.hours;
  const admission = sculpture ? details.parkAdmission : access.admission;
  const stops = itinerary(slug, locale);
  const related = slug === "el-beso" ? "miraflores-walk" : "el-beso";
  const relatedAttractions = attractions.filter((place) =>
    (slug === "el-beso" ? ["puente-villena-rey", "parque-intihuatana"] : ["parque-kennedy", "larcomar"]).includes(place.slug),
  );
  const directions = new URL("https://www.google.com/maps/dir/");
  directions.search = new URLSearchParams({
    api: "1", origin: "Parque Kennedy, Miraflores, Lima", destination: "Larcomar, Miraflores, Lima",
    waypoints: "Parque del Amor, Miraflores, Lima", travelmode: "walking",
  }).toString();
  const map = sculpture ? parkMap : directions.href;
  const [first, second, third, fourth, fifth] = guide.sections;
  return (
    <>
    <main className="section attraction-page travel-page">
      <TravelHero locale={locale} path={`/guide/${slug}`} home={labels.home}
        title={guide.title} subtitle={guide.intro} hours={hours} map={map} mapLabel={labels.map}
        reviewMap={parkMap} reviews={details.parkRating} image="/gallery/love-park (1).jpg" alt={labels.photo} />
      <article>
        <section className="attraction-block">
          <h2>{sections.intro}</h2>
          <p>{sculpture ? first[1] : details.walkRoute}</p>
        </section>
        <section className="attraction-block">
          <h2>{details.visit}</h2>
          <h3>{sculpture ? fifth[0] : fourth[0]}</h3>
          <p>{sculpture ? fifth[1] : fourth[1]}</p>
        </section>
        <section className="attraction-block">
          <h2>{details.features}</h2>
          <p>{second[1]}</p>
        </section>
        <section className="info-card attraction-block">
          <h2>{details.about} · {labels.home}</h2>
          <p>{sculpture ? details.parkAbout : details.walkAbout}</p>
          <a href={access.source}>{labels.source}</a>
        </section>
        <section className="attraction-block">
          <h2>{details.basic}</h2>
          <dl className="attraction-facts">
            <dt>{sections.officialName}</dt><dd>{sculpture ? "El Beso" : details.walkRoute}</dd>
            <dt>{sections.district}</dt><dd>Miraflores</dd>
            <dt>{details.address}</dt><dd>{details.parkAddress}</dd>
            <dt>{details.manager}</dt><dd>{details.parkManager}</dd>
            <dt>{details.hours}</dt><dd>{hours}</dd>
            <dt>{details.admission}</dt><dd>{admission}</dd>
          </dl>
        </section>
        <section className="attraction-block">
          <h2>{details.hours}</h2><p>{hours}</p>
          <a href={access.source}>{sections.verify}</a>
        </section>
        <section className="attraction-block">
          <h2>{details.admission}</h2><p>{admission}</p>
        </section>
        <section className="attraction-block">
          <h2>{details.transport}</h2>
          <p>{sculpture ? details.parkTransit : first[1]}</p>
          <a href={map}>{labels.map}</a>
        </section>
        <section className="attraction-block">
          <h2>{sections.discover}</h2>
          <h3>{sculpture ? first[0] : third[0]}</h3>
          <p>{sculpture ? first[1] : third[1]}</p>
        </section>
        <section className="attraction-block">
          <h2>{sections.route}</h2>
          <ol className="attraction-steps">
            {stops.map((stop, i) => (
              <li key={stop}><strong>{stop}</strong>{!sculpture && <p>{guide.sections[i][1]}</p>}</li>
            ))}
          </ol>
        </section>
        <section className="attraction-block">
          <h2>{sections.notes}</h2>
          <p>{sections.weather}</p>
          {!sculpture && <details className="faq-item"><summary>{fifth[0]}</summary><p>{fifth[1]}</p></details>}
        </section>
        <section className="attraction-block">
          <h2>{details.photo}</h2>
          <p>{sculpture ? fourth[1] : sections.walkPhoto}</p>
        </section>
        <section className="attraction-block">
          <h2>{sections.stay}</h2><p>{stayAdvice(locale, "coast")}</p>
        </section>
        <section className="attraction-block">
          <h2>{details.reviews}</h2>
          <p><a href={parkMap}>{details.parkRating}</a></p>
          <p>{details.ratingContext}</p>
        </section>
        <section className="attraction-block">
          <h2>{sections.location}</h2>
          <p>{sculpture ? third[1] : details.walkRoute}</p>
          <p>{details.parkAddress}</p>
          <a href={map}>{labels.map}</a>
        </section>
        <p><a href={slug === "el-beso" ? municipalPlan : municipalRoutes}>{labels.source}</a></p>
      </article>
      <aside style={{ marginTop: "2rem" }}>
        <p><Link href={`/${locale}#nearby`}>{details.nearby}</Link></p>
        <Link href={`/${locale}/guide/${related}`}>{guides[locale][related].title}</Link>
        <ul className="attraction-block">
          {relatedAttractions.map((place) => (
            <li key={place.slug}><Link href={`/${locale}/explore/${place.slug}`}>{attractionCopy(place, locale).name}</Link></li>
          ))}
        </ul>
      </aside>
    </main>
    <TravelFooter locale={locale} />
    </>
  );
}
