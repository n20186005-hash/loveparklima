export function generateSchema(locale: string) {
  const baseUrl = `https://${process.env.CURRENT_SITE_DOMAIN || "loveparklima.com"}`;
  const localUrl = `${baseUrl}/${locale}`;

  const name = locale === "es"
    ? "Parque del Amor"
    : locale === "zh"
    ? "爱情公园"
    : locale === "qu"
    ? "Love Park"
    : "Love Park";

  const description = locale === "es"
    ? "Parque del Amor en Miraflores, Lima. Parque romántico inspirado en el Park Güell de Gaudí, con la escultura 'El Beso' de Víctor Delfín."
    : locale === "zh"
    ? "利马米拉弗洛雷斯的爱情公园（Love Park），由建筑师Javier Sologuren设计，灵感来自高迪的奎尔公园。公园内有Víctor Delfín创作的亲吻雕塑。"
    : locale === "qu"
    ? "Love Park, Lima, Piruw. Romantic park."
    : "Love Park in Miraflores, Lima, designed by architect Javier Sologuren, inspired by Gaudí's Park Güell. Features Víctor Delfín's 'El Beso' sculpture.";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["TouristAttraction", "Park", "Place"],
        "name": name,
        "alternateName": ["Parque del Amor", "Love Park", "爱情公园", "El Parque del Amor de Miraflores"],
        "description": description,
        "url": localUrl,
        "image": `${baseUrl}/gallery/love-park (1).jpg`,
        
        // 精确地理坐标
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -12.1265,
          "longitude": -77.0371
        },
        
        // 地址信息
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Mal. Cisneros",
          "addressLocality": "Miraflores",
          "addressRegion": "Lima",
          "addressCountry": "PE",
          "postalCode": "LIMA 18"
        },
        
        // 开放时间
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "06:00",
          "closes": "23:00"
        },
        
        // 价格信息（免费）
        "priceRange": "Free",
        "isAccessibleForFree": true,
        
        // 设计师信息
        "architect": {
          "@type": "Person",
          "name": "Javier Sologuren",
          "jobTitle": "Architect",
          "nationality": "Peruvian"
        },
        
        // 雕塑作者信息
        "sculpture": {
          "@type": "CreativeWork",
          "name": "El Beso (The Kiss)",
          "creator": {
            "@type": "Person",
            "name": "Víctor Delfín",
            "jobTitle": "Artist",
            "nationality": "Peruvian"
          },
          "dateCreated": "1993",
          "description": "First large-scale public artwork in Peru depicting Mestizo couple kissing, broke social taboos"
        },
        
        // 灵感来源
        "inspiredBy": {
          "@type": "Place",
          "name": "Park Güell",
          "location": {
            "@type": "Place",
            "name": "Barcelona, Spain"
          },
          "architect": {
            "@type": "Person",
            "name": "Antoni Gaudí"
          }
        },
        
        // 联系电话（米拉弗洛雷斯区政府）
        "telephone": "+51 1 617-7000",
        
        // 社交媒体和地图链接
        "sameAs": [
          "https://maps.app.goo.gl/f3hGnVCU134Ugba38",
          "https://www.miraflores.gob.pe/turismo/parque-del-amor"
        ],
        
        // 开放日期（1993年情人节）
        "openingDate": "1993-02-14",
        
        // 非盈利属性
        "additionalProperty": {
          "@type": "PropertyValue",
          "name": "nonprofit",
          "value": "true"
        }
      },
      
      // Website 结构化数据
      {
        "@type": "WebSite",
        "url": localUrl,
        "name": name,
        "inLanguage": locale === "es" ? "es-PE" : locale === "zh" ? "zh-CN" : locale === "qu" ? "qu-PE" : "en-US",
        "isAccessibleForFree": true,
        "publisher": {
          "@type": "Organization",
          "name": "Love Park Guide",
          "nonprofit": true
        }
      }
    ]
  };
}
