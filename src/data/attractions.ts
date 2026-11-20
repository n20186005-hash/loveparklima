import data from "./attractions.json";
import { guideLocales } from "@/i18n/guides";

export type AttractionLocale = (typeof guideLocales)[number];
type Copy = {
  name: string;
  manager: string;
  history: string;
  features: string;
  visit: string;
  route: string;
  photoTip: string;
  faq: string;
  answer: string;
};
export type Attraction = (typeof data)[number];

export const attractions = data;
export const loveParkInventory = "https://consultasenlinea.mincetur.gob.pe/fichaInventario/index.aspx?cod_Ficha=8832";
export function attractionCopy(attraction: Attraction, locale: AttractionLocale): Copy {
  return locale === "es" ? attraction : attraction[locale];
}

export function attractionAddress(attraction: Attraction) {
  const locality = attraction.address.endsWith(", Lima") ? "" : `, ${attraction.district}, Lima`;
  return `${attraction.address}${locality}, Perú`;
}

export function attractionMap(attraction: Attraction) {
  const query = [attraction.name, attractionAddress(attraction)].join(", ");
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export const attractionLabels = {
  es: {
    nearby: "Lugares cercanos", home: "Parque del Amor", about: "Sobre este lugar",
    basic: "Información práctica", address: "Ubicación", manager: "Administración",
    transport: "Cómo llegar", walking: "Ruta a pie desde el Parque del Amor", transit: "Transporte público desde el Parque del Amor",
    visit: "Consejos de visita", history: "Historia", features: "Qué observar",
    photo: "Dónde tomar fotos", faq: "Preguntas frecuentes", reviews: "Valoraciones de visitantes",
    map: "Ver ubicación en Google Maps", reviewLink: "Consultar la ficha y las reseñas en Google Maps",
    source: "Información de referencia", photoSource: "Fuente de la foto",
    coast: "Parques y costa de Miraflores", culture: "Historia y cultura de Miraflores",
    barranco: "Barranco", other: "Sigue explorando", parkRating: "Parque del Amor · 4,5/5 · 30.706 reseñas de Google Maps",
    ratingContext: "Referencia de la ficha del parque usada en la portada.",
    hours: "Horario", admission: "Entrada",
    parkHours: "Abierto 24 horas según el inventario turístico. El inventario recomienda la visita entre las 08:00 y las 21:00.",
    parkAdmission: "Ingreso gratuito",
    parkTransit: "Desde la estación Ricardo Palma del Metropolitano, el inventario turístico indica unos 20 minutos a pie (1,7 km).",
    walkRoute: "Parque Kennedy → Parque del Amor → Larcomar",
    parkAddress: "Malecón Cisneros, Miraflores, Lima, Perú",
    parkManager: "Municipalidad Distrital de Miraflores",
    parkAbout: "La Municipalidad Distrital de Miraflores se encarga del Parque del Amor. Inaugurado en 1993, el parque reúne la escultura de Víctor Delfín, bancas de mosaico y vistas del Pacífico en el Malecón Cisneros.",
    walkAbout: "La caminata enlaza distintos espacios de Miraflores. La Municipalidad Distrital de Miraflores mantiene los parques y espacios públicos del circuito. Consulta con Larcomar los horarios y accesos del centro comercial.",
  },
  en: {
    nearby: "Nearby attractions", home: "Love Park", about: "About this place",
    basic: "Visitor information", address: "Location", manager: "Managed by",
    transport: "Getting there", walking: "Walking directions from Love Park", transit: "Public transit from Love Park",
    visit: "Visiting tips", history: "History", features: "What to look for",
    photo: "Photo spots", faq: "Frequently asked questions", reviews: "Visitor reviews",
    map: "Find on Google Maps", reviewLink: "See the listing and visitor reviews on Google Maps",
    source: "Visitor information source", photoSource: "Photo source",
    coast: "Miraflores parks and waterfront", culture: "Miraflores history and culture",
    barranco: "Barranco", other: "Explore nearby", parkRating: "Love Park · 4.5/5 · 30,706 Google Maps reviews",
    ratingContext: "Love Park listing snapshot displayed on the homepage.",
    hours: "Opening hours", admission: "Admission",
    parkHours: "The national tourism inventory lists 24-hour access and recommends visiting between 8 am and 9 pm.",
    parkAdmission: "Free admission",
    parkTransit: "The national tourism inventory lists a 1.7 km walk of about 20 minutes from Ricardo Palma Metropolitano station.",
    walkRoute: "Kennedy Park → Love Park → Larcomar",
    parkAddress: "Malecón Cisneros, Miraflores, Lima, Peru",
    parkManager: "Municipality of Miraflores",
    parkAbout: "The Municipality of Miraflores manages Love Park. Opened in 1993, the park brings together Víctor Delfín’s sculpture, mosaic benches and Pacific views on Malecón Cisneros.",
    walkAbout: "This walk links several sites in Miraflores. The district municipality maintains parks and public spaces along the circuit. Check with Larcomar for shopping centre hours and access.",
  },
  zh: {
    nearby: "周边游览", home: "爱情公园", about: "关于景点",
    basic: "基本信息", address: "地址", manager: "管理主体",
    transport: "交通方式", walking: "查看从爱情公园出发的步行路线", transit: "查看从爱情公园出发的公共交通路线",
    visit: "游览建议", history: "历史背景", features: "建筑与观察重点",
    photo: "拍照机位", faq: "常见问答", reviews: "游客评价",
    map: "在 Google 地图中查看地点", reviewLink: "查看 Google 地图地点页及游客评价",
    source: "参考资料", photoSource: "照片来源",
    coast: "米拉弗洛雷斯海滨与公园", culture: "米拉弗洛雷斯历史与文化",
    barranco: "巴兰科", other: "继续探索周边", parkRating: "爱情公园 · 4.5/5 · 30,706 条 Google 地图评价",
    ratingContext: "沿用首页登载的爱情公园评分记录。",
    hours: "开放时间", admission: "门票",
    parkHours: "秘鲁旅游资源名录列为全天开放，建议在 08:00 至 21:00 到访。",
    parkAdmission: "免费入园",
    parkTransit: "按秘鲁旅游资源名录，从快速公交 Ricardo Palma 站步行约 1.7 公里，约 20 分钟。",
    walkRoute: "肯尼迪公园 → 爱情公园 → 拉尔科马尔",
    parkAddress: "秘鲁利马米拉弗洛雷斯区西斯内罗斯海滨步道",
    parkManager: "米拉弗洛雷斯区政府",
    parkAbout: "爱情公园由米拉弗洛雷斯区政府管理。公园于 1993 年开放，西斯内罗斯海滨步道上的《亲吻》雕塑、马赛克长椅与太平洋景观构成了这里最鲜明的特色。",
    walkAbout: "这条步行路线串联米拉弗洛雷斯区的多处地点。沿途公园和公共空间由区政府维护，拉尔科马尔购物中心的营业时间和出入口可向商场查询。",
  },
};
