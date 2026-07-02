export function generateSchema(locale: string) {
  const baseUrl = `https://${process.env.CURRENT_SITE_DOMAIN || "lovepark.com"}`;
  const localUrl = `${baseUrl}/${locale}`;

  const name = locale === "es"
    ? "Parque del Amor"
    : locale === "zh"
    ? "爱情公园"
    : locale === "qu"
    ? "Love Park"
    : "Love Park";

  const description = locale === "es"
    ? "Parque del Amor en Miraflores, Lima. Parque romántico con vista al Pacífico."
    : locale === "zh"
    ? "利马米拉弗洛雷斯的爱情公园（Love Park），浪漫的海滨公园和标志性景点。"
    : locale === "qu"
    ? "Love Park, Lima, Piruw. Romantic park."
    : "Love Park in Miraflores, Lima, Peru. Romantic seaside park with Pacific Ocean view.";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["TouristAttraction", "Park"],
        "name": name,
        "description": description,
        "url": localUrl,
        "image": `${baseUrl}/gallery/love-park (1).jpg`,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Miraflores",
          "addressCountry": "PE"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -12.126438853306795,
          "longitude": -77.02970492373255
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "06:00",
          "closes": "23:00"
        },
        "priceRange": "Free",
        "isAccessibleForFree": true,
        "telephone": "+51927960730",
        "sameAs": [
          "https://maps.app.goo.gl/f3hGnVCU134Ugba38"
        ]
      },
      {
        "@type": "WebSite",
        "url": localUrl,
        "name": name,
        "inLanguage": locale === "es" ? "es-PE" : locale === "zh" ? "zh-CN" : locale === "qu" ? "qu-PE" : "en-US",
        "isAccessibleForFree": true
      }
    ]
  };
}
