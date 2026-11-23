import LocaleLinks from "@/components/LocaleLinks";
import Image from "next/image";
import Link from "next/link";
import type { AttractionLocale } from "@/data/attractions";

export default function TravelHero({ locale, path, home, title, subtitle, region, hours, map, mapLabel, reviewMap, reviews, image, alt, photoSource, photoLabel }: {
  locale: AttractionLocale;
  path: string;
  home: string;
  title: string;
  subtitle: string;
  region?: string;
  hours: string;
  map: string;
  mapLabel: string;
  reviewMap: string;
  reviews: string;
  image: string;
  alt: string;
  photoSource?: string;
  photoLabel?: string;
}) {
  return (
    <>
      <nav className="site-nav scrolled travel-nav" aria-label={home}>
        <Link className="travel-brand" href={`/${locale}`}>{home}</Link>
        <LocaleLinks locale={locale} path={path} />
      </nav>
      <header className="hero travel-hero">
        <div className="hero-bg travel-hero-bg"><Image src={image} alt={alt} fill unoptimized loading="eager" /></div>
        <div className="hero-texture" />
        <div className="hero-overlay" />
        <div className="hero-content">
          {region && <p className="hero-tagline">{region}</p>}
          <h1 className="hero-title">{title}</h1>
          <p className="hero-subtitle">{subtitle}</p>
          <p className="travel-hours">{hours}</p>
          <div className="travel-actions">
            <a href={map} className="hero-cta">{mapLabel}</a>
            <a href={reviewMap} className="hero-cta travel-review">{reviews}</a>
          </div>
        </div>
        {photoSource && <a className="travel-photo-credit" href={photoSource}>{photoLabel}</a>}
      </header>
    </>
  );
}
