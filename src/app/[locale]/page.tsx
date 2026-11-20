import HomePage from "./HomePage";
import NearbyAttractions from "./NearbyAttractions";
import { attractionLabels } from "@/data/attractions";
import { guideLocales } from "@/i18n/guides";
import { generateSchema } from "../schema";

function SchemaScript({ locale }: { locale: string }) {
  const schema = generateSchema(locale);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const attractionLocale = guideLocales.find((language) => language === locale);
  return (
    <>
      <SchemaScript locale={locale} />
      <HomePage
        params={params}
        nearby={attractionLocale && <NearbyAttractions locale={attractionLocale} />}
        nearbyLabel={attractionLocale && attractionLabels[attractionLocale].nearby}
      />
    </>
  );
}
