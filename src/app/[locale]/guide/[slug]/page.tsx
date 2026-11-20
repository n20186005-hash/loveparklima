import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { attractionCopy, attractionLabels, attractions, loveParkInventory } from "@/data/attractions";
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
  const related = slug === "el-beso" ? "miraflores-walk" : "el-beso";
  const relatedAttractions = attractions.filter((place) =>
    (slug === "el-beso" ? ["puente-villena-rey", "parque-intihuatana"] : ["parque-kennedy", "larcomar"]).includes(place.slug),
  );
  const directions = new URL("https://www.google.com/maps/dir/");
  directions.search = new URLSearchParams({
    api: "1", origin: "Parque Kennedy, Miraflores, Lima", destination: "Larcomar, Miraflores, Lima",
    waypoints: "Parque del Amor, Miraflores, Lima", travelmode: "walking",
  }).toString();
  return (
    <main className="section attraction-page">
      <nav aria-label={labels.heading}>
        <Link href={`/${locale}`}>{labels.home}</Link>
        {" · "}
        {guideLocales.filter((language) => language !== locale).map((language) => (
          <span key={language}><Link href={`/${language}/guide/${slug}`} hrefLang={language}>
            {{ es: "Español", en: "English", zh: "中文" }[language]}
          </Link>{" · "}</span>
        ))}
      </nav>
      <article>
        <header>
          <h1 className="section-title">{guide.title}</h1>
          <p>{guide.intro}</p>
          <p><a href={slug === "el-beso" ? parkMap : directions.href}>{labels.map}</a></p>
          <Image src="/gallery/love-park (1).jpg" alt={labels.photo} width={2500} height={1406} unoptimized
            style={{ width: "100%", height: "auto", maxHeight: "55vh", objectFit: "cover", borderRadius: "0.75rem" }} />
        </header>
        <section className="info-card attraction-block">
          <h2>{details.about} · {labels.home}</h2>
          <p>{slug === "el-beso" ? details.parkAbout : details.walkAbout}</p>
          <a href={slug === "el-beso" ? loveParkInventory : municipalRoutes}>{labels.source}</a>
        </section>
        <section className="attraction-block">
          <h2>{details.basic}</h2>
          <dl>
            <dt>{details.address}</dt><dd>{slug === "el-beso" ? details.parkAddress : details.walkRoute}</dd>
            <dt>{details.manager}</dt><dd>{details.parkManager}</dd>
            {slug === "el-beso" && (
              <>
                <dt>{details.hours}</dt><dd>{details.parkHours}</dd>
                <dt>{details.admission}</dt><dd>{details.parkAdmission}</dd>
              </>
            )}
          </dl>
        </section>
        <section className="attraction-block">
          <h2>{details.transport}</h2>
          {slug === "el-beso" ? (
            <>
              <p>{details.parkTransit}</p>
              <a href={parkMap}>{labels.map}</a>
            </>
          ) : (
            <>
              <p>{guide.sections[0][1]}</p>
              <a href={directions.href}>{labels.map}</a>
            </>
          )}
        </section>
        <section className="attraction-block">
          <h2>{details.reviews}</h2>
          <p><a href={parkMap}>{details.parkRating}</a></p>
          <p>{details.ratingContext}</p>
        </section>
        {guide.sections.map(([title, content]) => (
          <section key={title} style={{ marginBlock: "1.75rem" }}>
            <h2 className="section-subtitle">{title}</h2>
            <p>{content}</p>
          </section>
        ))}
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
  );
}
