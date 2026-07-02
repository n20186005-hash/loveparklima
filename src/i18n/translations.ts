export type Locale = "zh" | "en" | "es" | "qu";
export type LinkItem = { name: string; url: string };
export type FAQItem = { question: string; answer: string };
export type TransportOption = { name: string; time: string; price: string; steps: string[] };
export type TimelineEvent = { period: string; description: string };
export type HistorySection = { subtitle: string; content: string };
export type ArchitectureSection = { subtitle: string; content: string };
export type CultureSection = { subtitle: string; content: string };
export type LoveParkSection = { subtitle: string; content: string };

export type Translations = {
  nav: { about: string; culture?: string; history?: string; bestTime?: string; visiting: string; transportation: string; tips: string; gallery: string; reviews: string; faq: string; location: string };
  hero: { tagline: string; title: string; subtitle: string; cta: string };
  rating: { reviews: string; source: string };
  about: { title: string; p1: string; p2: string; highlights: { title: string; items: string[] }; bestTime?: { title: string; content: string; tip: string } };
  visiting: { title: string; hours: { title: string; content: string; note: string }; price: { title: string; content: string; note: string }; duration: { title: string; content: string; note: string }; tips: { title: string; items: string[] } };
  transportation: { title: string; airport: { title: string; content: string; options: TransportOption[] }; city: { title: string; content: string; steps: string[] }; selfDrive?: { title: string; content: string; steps: string[] } };
  tips: { title: string; items: string[] };
  gallery: { title: string; viewMore: string };
  reviews: { title: string; subtitle: string; viewMore: string };
  faq: { title: string; subtitle: string; items: FAQItem[] };
  location: { title: string; address: string; openMaps: string };
  footer: { callToAction: string; text: string; made: string; linksTitle: string; links: LinkItem[] };
};

export const translations: Record<Locale, Translations> = {
  zh: {
    nav: { about: "景点概览", visiting: "游览指南", transportation: "交通指南", tips: "游览建议", gallery: "照片画廊", reviews: "游客评价", faq: "常见问题", location: "地图位置" },
    hero: { tagline: "秘鲁利马 · 米拉弗洛雷斯海滨公园", title: "爱情公园", subtitle: "Love Park · Parque del Amor · 太平洋畔的爱情圣地", cta: "探索公园" },
    rating: { reviews: "条评价", source: "Google 评论" },
    about: {
      title: "爱情公园（Love Park）：利马米拉弗洛雷斯的浪漫地标",
      p1: "爱情公园（Love Park，西班牙语：Parque del Amor）位于秘鲁首都利马的著名海滨区——米拉弗洛雷斯（Miraflores）。这座面向太平洋的公园，以其浪漫的氛围、独特的马赛克装饰和标志性的「亲吻雕塑」而闻名，是利马最受欢迎的旅游景点之一。\n\n公园建于1993年，位于米拉弗洛雷斯的海滨步道（Malecón Cisneros）上，与「爱情的女神」维纳斯（Venus）有着深厚的渊源——公园于当年情人节（2月14日）正式对外开放。公园的设计灵感来源于西班牙巴塞罗那的奎尔公园（Park Güell），由设计师Eduardo Villanueva创作。",
      p2: "公园最著名的标志是中央的「亲吻雕塑」（El Beso）。这座雕塑由秘鲁著名艺术家Víctor Delfín创作，描绘了一对情侣热烈亲吻的场景。雕塑周围的波浪形长椅上，铺满了色彩斑斓的马赛克瓷砖，每一块都由附近的艺术家们手工绘制。这些马赛克不仅美观，更承载着人们对于爱情和幸福的美好祝愿。\n\n💡 **旅行知识：** 爱情公园是观赏太平洋日落的最佳地点之一。傍晚时分，金色的阳光洒在海面上，与公园的色彩交相辉映，浪漫至极。",
      highlights: { title: "景点亮点", items: ["亲吻雕塑: Víctor Delfín创作的标志性雕塑", "马赛克长椅: 色彩斑斓的手工瓷砖艺术", "太平洋日落: 利马最佳日落观赏点", "海滨步道: 可漫步至印加市场", "浪漫氛围: 情人节举办的婚礼胜地", "免费开放: 全天候开放的公共空间"] },
    },
    visiting: {
      title: "游览指南",
      hours: { title: "开放时间", content: "06:00 - 23:00\n全年开放", note: "⚠️ 提醒：建议日落前到达，欣赏太平洋日落美景。" },
      price: { title: "门票费用", content: "免费开放\n无需购票\n欢迎所有游客", note: "⚠️ 重要提示：爱情公园是免费公共公园，无需门票。" },
      duration: { title: "建议游览时长", content: "建议预留 30 分钟 - 1 小时", note: "可以结合米拉弗洛雷斯海滨步道游览，安排半天时间探索周边景点。" },
      tips: { title: "游览建议物品", items: ["舒适的步行鞋", "防晒用品与墨镜（利马阳光强烈）", "相机和备用电池（日落美景不容错过）", "帽子和轻薄外套（海风较凉）", "水和零食", "当地地图或导游APP"] },
    },
    transportation: {
      title: "交通指南",
      airport: { title: "第一程：豪尔赫·查韦斯国际机场 (LIM) ➔ 米拉弗洛雷斯", content: "所有游客需先到达利马（Lima）——秘鲁的首都和最大城市。然后从利马机场前往米拉弗洛雷斯区（约40分钟车程）。", options: [
        { name: "出租车 / 私人包车", price: "约 50 - 80 索尔", time: "约 40 分钟", steps: ["耗时与费用： 约 40 分钟", "私人包车费用约 50-80 索尔", "可在利马机场安排"] },
        { name: "机场大巴（Airport Shuttle）", price: "约 15 - 25 索尔", time: "约 1 小时", steps: ["从机场乘坐大巴到米拉弗洛雷斯", "票价约15-25索尔", "约每30分钟一班，车程1小时"] }
      ]},
      city: { title: "利马市区 ➔ 爱情公园", content: "爱情公园位于米拉弗洛雷斯区的海滨步道（Malecón Cisneros），交通便利，可乘坐出租车、公交车或步行到达。", steps: ["推荐：从米拉弗洛雷斯中心步行约10-15分钟", "也可乘坐出租车，约10分钟车程", "公交车可乘坐至Parque del Amor站"] },
    },
    tips: { title: "游览建议", items: [
      "⚠️ 最佳时间：建议傍晚到达，欣赏太平洋日落",
      "💡 交通建议：建议从利马市区乘坐出租车前往，既节省时间又舒适。",
      "请做好防晒措施，利马阳光强烈，即使阴天也要涂防晒霜",
      "公园免费开放，无需购票",
      "请尊重当地文化，保持公园整洁",
      "建议聘请当地导游（约50-100索尔），了解更多历史故事和艺术背景",
      "可以结合参观米拉弗洛雷斯其他景点，如印加市场、肯尼迪公园等",
      "注意保管个人物品，市中心游客较多，提防小偷",
      "尊重当地文化和传统",
      "保持景点整洁，不要乱扔垃圾。带走的只有照片，留下的只有脚印"
    ] },
    gallery: { title: "照片画廊", viewMore: "在 Google Maps 查看更多相片" },
    reviews: { title: "游客评价 (Visitor Reviews)", subtitle: "来自爱情公园的声音：Google Maps 真实见证", viewMore: "在 Google Maps 查看更多评价" },
    faq: { title: "常见问题", subtitle: "深入了解爱情公园", items: [
      { question: "爱情公园的开放时间是？", answer: "爱情公园的开放时间为每天06:00-23:00，全年无休。但由于是户外公园，建议白天或傍晚参观，安全和光线更佳。日落时分是观赏的最佳时机。" },
      { question: "参观爱情公园需要门票吗？", answer: "不需要。爱情公园是免费的公共公园，无需购买门票，欢迎所有游客前来参观。公园全年对外开放，您可以随时前往。" },
      { question: "爱情公园有什么特别之处？", answer: "爱情公园因其标志性的「亲吻雕塑」和色彩斑斓的马赛克装饰而闻名。公园由设计师Eduardo Villanueva创作，设计灵感来源于西班牙巴塞罗那的奎尔公园。中央的「亲吻雕塑」由秘鲁著名艺术家Víctor Delfín创作，描绘了一对情侣热烈亲吻的场景。此外，这里是观赏太平洋日落的最佳地点之一。" },
      { question: "如何前往爱情公园？有什么交通建议？", answer: "爱情公园位于秘鲁利马米拉弗洛雷斯区，地址是Mal. Cisneros, Miraflores LIMA 18。\n\n⚠️ 重要交通建议：\n1. 从利马机场乘坐出租车到米拉弗洛雷斯约40分钟\n2. 从米拉弗洛雷斯中心步行到爱情公园约10-15分钟\n3. 具体导航可在 Google Maps 中搜索Parque del Amor, Miraflores\n4. 也可以参加利马市区游旅行团，包含爱情公园" },
      { question: "游览爱情公园需要注意什么？有什么安全建议？", answer: "游览时需要注意：\n1. 🌞 防晒：利马阳光强烈，即使阴天也要涂防晒霜，戴墨镜和帽子\n2. 👟 舒适：穿着舒适的步行鞋，方便在公园和海滨步道漫步\n3. 🏛️ 文化尊重：请尊重当地文化和传统，保持公园整洁\n4. 💰 安全：保管好个人物品，游客较多，提防小偷\n5. 🎨 艺术欣赏：仔细欣赏马赛克瓷砖的艺术之美" },
      { question: "附近还有哪些值得一游的景点？", answer: "爱情公园位于米拉弗洛雷斯区，游览完公园后，可以参观以下景点：\n1. 印加市场（Inca Market）——购买秘鲁手工艺品\n2. 肯尼迪公园（Kennedy Park）——观赏猫猫和夜市\n3. 拉尔科博物馆（Larco Museum）——秘鲁黄金收藏\n4. 圣弗朗西斯科修道院（San Francisco Monastery）——利马历史文化\n5. 帕恰卡马克遗址（Pachacamac）——古老的神庙遗址" }
    ]},
    location: { title: "地图位置", address: "Mal. Cisneros, Miraflores LIMA 18\nPerú\n（利马米拉弗洛雷斯区）", openMaps: "在 Google Maps 查看位置" },
    footer: { callToAction: "作为利马的重要旅游景点，请与我们一起爱护公园、保护环境。保持景点整洁，共同维护这一美丽的公共空间。", text: "© 2026 爱情公园指南 · 保留所有权利。\n本网站是一个独立的第三方指南项目，致力于准确传播爱情公园信息。我们与秘鲁政府或其他官方机构没有任何关联。", made: "本网站是一个独立的第三方指南项目。为探索者与学习者而制。", linksTitle: "相关链接", links: [
      { name: "秘鲁外贸和旅游部", url: "https://www.gob.pe/mincetur" },
      { name: "秘鲁国家旅游局官方指南 - 利马大区专页", url: "https://www.peru.travel/es/destinos/lima" },
      { name: "利马都会区市政府", url: "https://www.gob.pe/munilima" },
      { name: "米拉弗洛雷斯区政府", url: "https://www.miraflores.gob.pe/" }
    ]}
  },

  en: {
    nav: { about: "Overview", visiting: "Visit Guide", transportation: "Getting There", tips: "Travel Tips", gallery: "Photo Gallery", reviews: "Reviews", faq: "FAQ", location: "Location" },
    hero: { tagline: "Lima, Peru · Miraflores Seaside Park", title: "Love Park", subtitle: "Love Park · Parque del Amor · Romantic Landmark on the Pacific", cta: "Explore the Park" },
    rating: { reviews: "reviews", source: "Google Reviews" },
    about: {
      title: "Love Park (Parque del Amor): Lima's Romantic Landmark in Miraflores",
      p1: "Love Park (Spanish: Parque del Amor) is located in Miraflores, the famous seaside district of Lima, the capital of Peru. This park facing the Pacific Ocean is famous for its romantic atmosphere, unique mosaic decorations, and the iconic 'Kiss Sculpture', making it one of Lima's most popular tourist attractions.\n\nThe park was built in 1993 on the seaside promenade (Malecón Cisneros) in Miraflores, with a deep connection to Venus, the goddess of love—the park officially opened on Valentine's Day (February 14) of that year. The park's design was inspired by Park Güell in Barcelona, Spain, and was created by designer Eduardo Villanueva.",
      p2: "The park's most famous landmark is the central 'Kiss Sculpture' (El Beso). This sculpture was created by renowned Peruvian artist Víctor Delfín, depicting a couple passionately kissing. The wave-shaped benches surrounding the sculpture are covered with colorful mosaic tiles, each hand-painted by local artists. These mosaics are not only beautiful but also carry people's best wishes for love and happiness.\n\n💡 **Travel Knowledge:** Love Park is one of the best spots in Lima to watch the Pacific sunset. In the evening, golden sunlight spreads across the sea, creating a perfect harmony with the park's colors—an extremely romantic scene.",
      highlights: { title: "Highlights", items: ["Kiss Sculpture: Iconic sculpture by Víctor Delfín", "Mosaic Benches: Colorful hand-painted tile art", "Pacific Sunset: Best sunset viewing spot in Lima", "Seaside Promenade: Walkable to Inca Market", "Romantic Atmosphere: Popular wedding venue on Valentine's Day", "Free Admission: Public space open all day"] },
    },
    visiting: {
      title: "Visit Guide",
      hours: { title: "Opening Hours", content: "06:00 - 23:00\nOpen every day", note: "⚠️ Note: Arrive before sunset to enjoy the beautiful Pacific sunset." },
      price: { title: "Entrance Fee", content: "Free Admission\nNo ticket required\nAll visitors welcome", note: "⚠️ Important Note: Love Park is a free public park, no tickets needed." },
      duration: { title: "Recommended Duration", content: "Recommended: 30 minutes - 1 hour", note: "Can be combined with Miraflores seaside promenade tour, plan half a day to explore nearby attractions." },
      tips: { title: "Recommended Items", items: ["Comfortable walking shoes", "Sun protection & sunglasses (strong Lima sunlight)", "Camera and spare batteries (don't miss the sunset)", "Hat and light jacket (cool sea breeze)", "Water and snacks", "Local map or guide APP"] },
    },
    transportation: {
      title: "Getting There",
      airport: { title: "From Jorge Chávez International Airport (LIM) to Miraflores", content: "All visitors must first arrive in Lima—the capital and largest city of Peru. Then travel from Lima airport to Miraflores district (about 40 minutes drive).", options: [
        { name: "Taxi / Private Transfer", price: "About 50 - 80 soles", time: "About 40 minutes", steps: ["About 40 minutes", "Private transfer about 50-80 soles", "Can be arranged at Lima airport"] },
        { name: "Airport Shuttle", price: "About 15 - 25 soles", time: "About 1 hour", steps: ["Take shuttle from airport to Miraflores", "Ticket about 15-25 soles", "Departs every 30 minutes, 1-hour journey"] }
      ]},
      city: { title: "Lima City to Love Park", content: "Love Park is located on the seaside promenade (Malecón Cisneros) in Miraflores district. Transportation is convenient, accessible by taxi, bus, or on foot.", steps: ["Recommended: Walk from Miraflores center, about 10-15 minutes", "Taxi ride about 10 minutes", "Bus available to Parque del Amor station"] },
    },
    tips: { title: "Travel Tips", items: [
      "⚠️ Best Time: Arrive in the evening to enjoy the Pacific sunset",
      "💡 Transportation Tip: Recommended to take taxi from Lima city center, saves time and comfortable.",
      "Take sun protection measures, Lima sunlight is strong, apply sunscreen even on cloudy days",
      "Park is free, no ticket needed",
      "Respect local culture, keep the park clean",
      "Hire a local guide (about 50-100 soles) to learn more about history and art",
      "Visit other Miraflores attractions like Inca Market, Kennedy Park",
      "Keep personal belongings safe, many tourists, beware of pickpockets",
      "Respect local culture and traditions",
      "Keep the attraction clean, do not litter. Take only photos, leave only footprints"
    ] },
    gallery: { title: "Photo Gallery", viewMore: "View More Photos on Google Maps" },
    reviews: { title: "Visitor Reviews", subtitle: "Voices from Love Park: Real Reviews from Google Maps", viewMore: "View More Reviews on Google Maps" },
    faq: { title: "Frequently Asked Questions", subtitle: "Learn More About Love Park", items: [
      { question: "What are the opening hours of Love Park?", answer: "Love Park is open daily from 06:00-23:00, every day of the year. However, as it is an outdoor park, daytime or evening visits are recommended for better safety and lighting. Sunset time is the best time to visit." },
      { question: "Is there an entrance fee to see Love Park?", answer: "No. Love Park is a free public park, no entrance fee required. All visitors are welcome. The park is open all year round, you can visit at any time." },
      { question: "What is special about Love Park?", answer: "Love Park is famous for its iconic 'Kiss Sculpture' and colorful mosaic decorations. The park was designed by Eduardo Villanueva, inspired by Park Güell in Barcelona, Spain. The central 'Kiss Sculpture' was created by renowned Peruvian artist Víctor Delfín, depicting a couple passionately kissing. In addition, it is one of the best spots to watch the Pacific sunset." },
      { question: "How to get to Love Park? Any transportation recommendations?", answer: "Love Park is located in Miraflores district, Lima, Peru. The address is Mal. Cisneros, Miraflores LIMA 18.\n\n⚠️ Important Transportation Recommendations:\n1. Taxi from Lima airport to Miraflores about 40 minutes\n2. Walk from Miraflores center to Love Park about 10-15 minutes\n3. For specific navigation, search for 'Parque del Amor, Miraflores' in Google Maps\n4. You can also join a Lima city tour, which includes Love Park" },
      { question: "What should I pay attention to when visiting? Any safety recommendations?", answer: "When visiting, please note:\n1. 🌞 Sun protection: Lima sunlight is strong, apply sunscreen even on cloudy days, wear sunglasses and hat\n2. 👟 Comfort: Wear comfortable walking shoes for walking in the park and seaside promenade\n3. 🏛️ Cultural respect: Please respect local culture and traditions, keep the park clean\n4. 💰 Safety: Keep personal belongings safe, many tourists, beware of pickpockets\n5. 🎨 Art appreciation: Carefully appreciate the beauty of mosaic tile art" },
      { question: "What other attractions are worth visiting nearby?", answer: "Love Park is located in Miraflores district. After visiting the park, you can visit the following attractions:\n1. Inca Market — Buy Peruvian handicrafts\n2. Kennedy Park — See cats and night market\n3. Larco Museum — Peruvian gold collection\n4. San Francisco Monastery — Lima history and culture\n5. Pachacamac — Ancient temple ruins" }
    ]},
    location: { title: "Map Location", address: "Mal. Cisneros, Miraflores LIMA 18\nPeru\n(Miraflores District, Lima)", openMaps: "View Location on Google Maps" },
    footer: { callToAction: "As an important tourist attraction in Lima, please join us in caring for the park and protecting the environment. Keep the attraction clean and maintain this beautiful public space together.", text: "© 2026 Love Park Guide · All rights reserved.\nThis website is an independent third-party guide project dedicated to accurately sharing information about Love Park. We are not affiliated with the Peruvian government or any official authority.", made: "This website is an independent third-party guide project. Made for explorers and learners.", linksTitle: "Related Links", links: [
      { name: "Peru Ministry of Foreign Trade and Tourism", url: "https://www.gob.pe/mincetur" },
      { name: "Official Peru Travel Guide - Lima Region", url: "https://www.peru.travel/es/destinos/lima" },
      { name: "Lima Metropolitan Municipality", url: "https://www.gob.pe/munilima" },
      { name: "Miraflores District Municipality", url: "https://www.miraflores.gob.pe/" }
    ]}
  },

  es: {
    nav: { about: "Descripción", visiting: "Guía de Visita", transportation: "Cómo Llegar", tips: "Consejos", gallery: "Galería", reviews: "Reseñas", faq: "Preguntas Frecuentes", location: "Ubicación" },
    hero: { tagline: "Lima, Perú · Parque Marítimo de Miraflores", title: "Parque del Amor", subtitle: "Parque del Amor · Love Park · Punto Romántico en el Pacífico", cta: "Explorar" },
    rating: { reviews: "reseñas", source: "Google Reviews" },
    about: {
      title: "Parque del Amor: El Punto Romántico de Lima en Miraflores",
      p1: "El Parque del Amor está ubicado en Miraflores, el famoso distrito costero de Lima, la capital de Perú. Este parque frente al Océano Pacífico es famoso por su atmósfera romántica, únicas decoraciones de mosaico y la icónica 'Escultura del Beso', convirtiéndose en una de las atracciones turísticas más populares de Lima.\n\nEl parque fue construido en 1993 en el malecón costero (Malecón Cisneros) de Miraflores, con una profunda conexión con Venus, la diosa del amor—el parque se inauguró oficialmente el Día de San Valentín (14 de febrero) de ese año. El diseño del parque fue inspirado por el Park Güell en Barcelona, España, y fue creado por el diseñador Eduardo Villanueva.",
      p2: "El hito más famoso del parque es la 'Escultura del Beso' (El Beso) central. Esta escultura fue creada por el renombrado artista peruano Víctor Delfín, que describe a una pareja besándose apasionadamente. Los bancos con forma de onda que rodean la escultura están cubiertos con coloridos mosaicos, cada uno pintado a mano por artistas locales. Estos mosaicos no solo son hermosos, sino que también llevan los mejores deseos de las personas para el amor y la felicidad.\n\n💡 **Consejo de Viaje:** El Parque del Amor es uno de los mejores lugares en Lima para ver la puesta del sol en el Pacífico. En la tarde, la luz dorada del sol se extiende sobre el mar, creando una armonía perfecta con los colores del parque—una escena extremadamente romántica.",
      highlights: { title: "Puntos Destacados", items: ["Escultura del Beso: Escultura icónica por Víctor Delfín", "Bancos de Mosaico: Arte de azulejos pintados a mano", "Puesta del Sol Pacífico: Mejor lugar en Lima para ver la puesta del sol", "Malecón Costero: Caminable al Mercado Inca", "Atmósfera Romántica: Lugar popular de bodas en el Día de San Valentín", "Entrada Gratuita: Espacio público abierto todo el día"] },
    },
    visiting: {
      title: "Guía de Visita",
      hours: { title: "Horario de Apertura", content: "06:00 - 23:00\nAbierto todos los días", note: "⚠️ Nota: Llegue antes de la puesta del sol para disfrutar de la hermosa vista." },
      price: { title: "Entrada", content: "Entrada Gratuita\nNo se requiere boleto\nTodos los visitantes bienvenidos", note: "⚠️ Nota Importante: El Parque del Amor es un parque público gratuito, no se necesitan boletos." },
      duration: { title: "Duración Recomendada", content: "Recomendado: 30 minutos - 1 hora", note: "Puede combinarse con un tour del malecón de Miraflores, planear medio día para explorar atracciones cercanas." },
      tips: { title: "Qué llevar", items: ["Zapatos cómodos para caminar", "Protección solar y gafas de sol (sol fuerte en Lima)", "Cámara y baterías de repuesto (no se pierda la puesta del sol)", "Sombrero y chaqueta ligera (brisa fresca del mar)", "Agua y snacks", "Mapa local o APP de guía"] },
    },
    transportation: {
      title: "Cómo Llegar",
      airport: { title: "Desde el Aeropuerto Internacional Jorge Chávez (LIM) a Miraflores", content: "Todos los visitantes deben llegar primero a Lima—la capital y ciudad más grande de Perú. Luego viajar del aeropuerto de Lima al distrito de Miraflores (about 40 minutos en auto).", options: [
        { name: "Taxi / Transferencia Privada", price: "Aprox. 50 - 80 soles", time: "Aprox. 40 minutos", steps: ["Aprox. 40 minutos", "Transferencia privada about 50-80 soles", "Puede ser organizado en aeropuerto Lima"] },
        { name: "Bus del Aeropuerto (Airport Shuttle)", price: "Aprox. 15 - 25 soles", time: "Aprox. 1 hora", steps: ["Tomar bus del aeropuerto a Miraflores", "Boleto about 15-25 soles", "Sale cada 30 minutos, 1 hora de viaje"] }
      ]},
      city: { title: "Lima al Parque del Amor", content: "El Parque del Amor está ubicado en el malecón costero (Malecón Cisneros) en el distrito de Miraflores. El transporte es conveniente, accesible en taxi, bus o a pie.", steps: ["Recomendado: Caminar desde el centro de Miraflores, about 10-15 minutos", "Taxi about 10 minutos", "Bus disponible a la estación Parque del Amor"] },
    },
    tips: { title: "Consejos", items: [
      "⚠️ Mejor Momento: Llegue en la tarde para disfrutar la puesta del sol",
      "💡 Consejo de Transporte: Recomendado tomar taxi del centro de Lima, ahorra tiempo y cómodo.",
      "Tome medidas de protección solar",
      "El parque es gratuito, no se requiere boleto",
      "Respetar la cultura local",
      "Contratar un guía local"
    ] },
    gallery: { title: "Galería", viewMore: "Ver Más Fotos en Google Maps" },
    reviews: { title: "Reseñas de Visitantes", subtitle: "Voces del Parque del Amor", viewMore: "Ver Más Reseñas en Google Maps" },
    faq: { title: "Preguntas Frecuentes", subtitle: "Aprenda Más Sobre el Parque del Amor", items: [
      { question: "¿Cuál es el horario del Parque del Amor?", answer: "06:00-23:00, todos los días." },
      { question: "¿Hay entrada?", answer: "No, entrada gratuita." }
    ]},
    location: { title: "Ubicación", address: "Mal. Cisneros, Miraflores LIMA 18\nPerú\n(Distrito de Miraflores, Lima)", openMaps: "Ver en Google Maps" },
    footer: { callToAction: "Como un importante atractivo turístico en Lima, únanse a nosotros para cuidar el parque.", text: "© 2026 Guía del Parque del Amor.", made: "Hecho para exploradores.", linksTitle: "Enlaces", links: [
      { name: "MINCETUR", url: "https://www.gob.pe/mincetur" },
      { name: "Peru Travel - Lima", url: "https://www.peru.travel/es/destinos/lima" },
      { name: "Municipalidad de Lima", url: "https://www.gob.pe/munilima" },
      { name: "Municipalidad de Miraflores", url: "https://www.miraflores.gob.pe/" }
    ]}
  },

  qu: {
    nav: { about: "Qhaway", visiting: "Puriy", transportation: "Chaykamuy", tips: "Yachay", gallery: "Rikuy", reviews: "Niykuna", faq: "Tapuykuna", location: "Maypi" },
    hero: { tagline: "Lima, Piruw · Miraflores", title: "Love Park", subtitle: "Love Park · Parque del Amor", cta: "Rikuy" },
    rating: { reviews: "niykuna", source: "Google niykuna" },
    about: {
      title: "Love Park: Lima",
      p1: "Love Park, Miraflores, Lima, Piruwpi. Romantic park. Kayqa Pacífico ñawpaqpi.",
      p2: "Love Park sculpture. Víctor Delfín.",
      highlights: { title: "Rikuy", items: ["Sculpture: Víctor Delfín", "Mosaic: Colorful", "Sunset: Pacific", "Free: All visitors"] },
    },
    visiting: {
      title: "Puriy",
      hours: { title: "Punchaw", content: "06:00-23:00\nSapa punchaw", note: "⚠️ Punchaw rikuy." },
      price: { title: "Qullqi", content: "Free", note: "⚠️ Free." },
      duration: { title: "Unay", content: "30 min - 1 ura", note: "Miraflores puriy." },
      tips: { title: "Apamuy", items: ["Bota", "Inti amachana", "Cámara"] },
    },
    transportation: {
      title: "Chaykamuy",
      airport: { title: "Lima-manta", content: "Lima-man antawan hamuy.", options: [
        { name: "Taxi", price: "50 - 80 soles", time: "40 min", steps: ["Lima-manta Miraflores-man taxi", "40 min"] }
      ]},
      city: { title: "Lima", content: "Miraflores-man.", steps: ["Taxi", "Bus", "Google Maps-mi maskuy"] },
    },
    tips: { title: "Yachay", items: [
      "Love Park, Lima",
      "Taxi",
      "Free"
    ] },
    gallery: { title: "Rikuy", viewMore: "Google Maps nisqapi astawan rikuy" },
    reviews: { title: "Niykuna", subtitle: "Love Park niykuna", viewMore: "Astawan niykuna" },
    faq: { title: "Tapuykuna", subtitle: "Yachay", items: [
      { question: "Hayk'aq kachkan?", answer: "06:00-23:00. Sapa p'unchay." },
      { question: "Qullqi paganan chá?", answer: "Mana. Free." }
    ]},
    location: { title: "Maypipas", address: "Mal. Cisneros, Miraflores\nPerú", openMaps: "Google Maps nisqapi maytapas rikuy" },
    footer: { callToAction: "Love Park cuiday.", text: "© 2026 Love Park.", made: "Kayqa puriy yachay.", linksTitle: "Imakunata", links: [
      { name: "MINCETUR", url: "https://www.gob.pe/mincetur" },
      { name: "Peru Travel - Lima", url: "https://www.peru.travel/es/destinos/lima" },
      { name: "Lima Gobierno", url: "https://www.gob.pe/munilima" },
      { name: "Miraflores", url: "https://www.miraflores.gob.pe/" }
    ]}
  }
};
