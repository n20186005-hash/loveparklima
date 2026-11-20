import Link from "next/link";
import { attractionCopy, attractionLabels, attractions, type AttractionLocale } from "@/data/attractions";

export default function NearbyAttractions({ locale }: { locale: AttractionLocale }) {
  const labels = attractionLabels[locale];
  return (
    <section id="nearby" className="section attraction-index">
      <h2 className="section-title">{labels.nearby}</h2>
      <div className="section-divider" />
      <div className="info-grid">
        {(["coast", "culture", "barranco", "near-north", "south", "city"] as const).map((category) => (
          <div key={category} className="info-card">
            <h3>{labels[category]}</h3>
            <ul>
              {attractions.filter((place) => place.category === category).map((place) => (
                <li key={place.slug}><Link href={`/${locale}/explore/${place.slug}`}>{attractionCopy(place, locale).name}</Link></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
