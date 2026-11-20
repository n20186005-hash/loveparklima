import type { Attraction, AttractionLocale } from "./attractions";

type Localized = readonly [string, string, string];
const index = { es: 0, en: 1, zh: 2 } as const;
const free: Localized = ["Entrada gratuita.", "Free admission.", "免费参观。"];
const exterior: Localized = ["La visita exterior es gratuita.", "The exterior is free to view.", "外观可免费参观。"];
const publicAccess: Localized = [
  "Espacio exterior. Conviene ir con luz natural y respetar los cierres señalizados.",
  "Outdoor site. Visit in daylight and follow signs for any closures.",
  "室外景点，建议白天前往，并遵守现场封闭标示。",
];
const confirmAccess: Localized = [
  "Consulta al responsable del recinto antes de desplazarte si quieres entrar.",
  "Check with the venue before setting out if you plan to go inside.",
  "计划入内时，请在出发前向管理方核对开放时段。",
];
const confirmFare: Localized = [
  "Consulta si la actividad, exposición o visita guiada requiere entrada.",
  "Check whether your event, exhibition or guided visit requires a ticket.",
  "活动、展览和导览的收费以管理方公告为准。",
];
const outdoors = new Set([
  "parque-kennedy", "parque-siete-junio", "parque-tradiciones", "parque-salazar",
  "parque-raimondi", "faro-de-la-marina", "parque-maria-reiche", "parque-bicentenario",
  "parque-chino", "parque-intihuatana", "parque-miguel-grau", "parque-itzhak-rabin",
  "puente-villena-rey", "puente-de-los-suspiros", "bajada-de-banos", "plazuela-chabuca-granda",
  "parque-municipal-de-barranco", "paseo-saenz-pena",
]);
const exteriorVisit = new Set(["faro-de-la-marina", "ermita-de-barranco", "iglesia-virgen-milagrosa",
  "iglesia-santisima-cruz", "instituto-raul-porras-barrenechea", "palacio-municipal-miraflores"]);

const tueSun = (end: string): Localized => [`Martes a domingo, 10:00–${end}.`, `Tuesday–Sunday, 10:00–${end}.`, `周二至周日 10:00–${end}。`];
const inventoryHours = (hours: string): Localized => [
  `El inventario turístico indica ${hours}. Consulta posibles cierres locales.`,
  `The tourism inventory lists ${hours}. Check for local closures.`,
  `旅游资源名录列出的游览时段为 ${hours}，请留意临时封闭。`,
];
const dayAndNight: Localized = ["El inventario turístico indica acceso las 24 horas.", "The tourism inventory lists 24-hour access.", "旅游资源名录列为全天开放。"];
const artsCenter = "https://www.miraflores.gob.pe/los-servicios/cultura-y-turismo/cultura-miraflores/";
const artsAccess = {
  hours: ["Palacio de las Artes: martes a domingo, 11:00–21:00.", "Palacio de las Artes: Tuesday–Sunday, 11:00–21:00.", "艺术宫：周二至周日 11:00–21:00。"] as Localized,
  admission: free,
  source: artsCenter,
};
const details: Record<string, { hours?: Localized; admission?: Localized; notes?: Localized; source?: string }> = {
  "palacio-municipal-miraflores": artsAccess,
  "sala-luis-miro-quesada": artsAccess,
  "parque-reducto": {
    hours: ["Museo de sitio: lunes a sábado, 09:00–17:00 según PROMPERÚ. Consulta la reserva.",
      "Site museum: Monday–Saturday, 09:00–17:00 according to PROMPERÚ. Check reservation requirements.",
      "据秘鲁旅游推广机构，园内遗址博物馆周一至周六 09:00–17:00 开放，请核对预约要求。"],
    admission: ["Museo de sitio: S/ 5 adultos y S/ 2 estudiantes.", "Site museum: S/5 for adults and S/2 for students.", "园内遗址博物馆：成人 S/ 5、学生 S/ 2。"],
    source: "https://target2.promperu.gob.pe/destinos/lima/ciudad-de-lima/miraflores",
  },
  "parque-kennedy": { hours: dayAndNight },
  "parque-raimondi": { hours: dayAndNight },
  "parque-intihuatana": { hours: dayAndNight },
  "faro-de-la-marina": {
    hours: ["El inventario indica acceso permanente a la explanada exterior.", "The inventory lists round-the-clock access to the outdoor plaza.", "旅游资源名录列明室外广场全天可达。"],
  },
  "parque-maria-reiche": { hours: inventoryHours("06:00–22:00") },
  "parque-chino": { hours: inventoryHours("09:00–21:00") },
  "puente-de-los-suspiros": { hours: inventoryHours("08:00–20:00") },
  "bajada-de-banos": { hours: inventoryHours("05:00–20:00") },
  "parque-municipal-de-barranco": { hours: inventoryHours("06:00–22:00") },
  "plazuela-chabuca-granda": { hours: inventoryHours("08:00–21:00") },
  "paseo-saenz-pena": { hours: dayAndNight },
  "parque-bicentenario": {
    hours: ["06:00–21:00 según el inventario turístico.", "06:00–21:00, as listed in the tourism inventory.", "旅游资源名录列出的开放时段为 06:00–21:00。"],
  },
  "huaca-pucllana": {
    hours: ["De miércoles a lunes, 09:00–17:00. Visita nocturna de miércoles a domingo, 18:45–21:00, excepto el primer domingo del mes.",
      "Wednesday–Monday, 09:00–17:00. Evening circuit Wednesday–Sunday, 18:45–21:00, except the first Sunday of the month.",
      "白天为周三至周一 09:00–17:00。夜间路线为周三至周日 18:45–21:00，每月第一个周日除外。"],
    admission: ["Entrada general S/ 15 de día o S/ 17 de noche. Consulta la tarifa reducida y reserva con el sitio.",
      "General admission S/15 by day or S/17 by night. Check discount eligibility and reserve with the site.",
      "普通票白天 S/ 15、夜间 S/ 17。请向遗址确认预约及优惠票资格。"],
    notes: ["Sigue al guía por las áreas habilitadas y evita tocar los muros de adobe.", "Follow your guide through open areas and avoid touching the adobe walls.", "请跟随导览员走开放路线，避免触碰土坯墙。"],
    source: "https://museos.cultura.pe/index.php/node/349",
  },
  "museo-amano": {
    hours: ["Martes a domingo, 10:00–17:00. Lunes con cita.", "Tuesday–Sunday, 10:00–17:00. Monday by appointment.", "周二至周日 10:00–17:00，周一须预约。"],
    admission: ["Entrada general S/ 35. Guía y descuentos según el tarifario.", "General admission S/35. Check the fee schedule for tours and discounts.", "普通票 S/ 35。导览费用与优惠资格可查馆方价目表。"],
  },
  "lugar-de-la-memoria": {
    hours: tueSun("18:00"),
    admission: ["Entrada gratuita. Lleva DNI, carné de extranjería o pasaporte.", "Free admission. Bring a DNI, Peruvian foreign resident card or passport.", "免费入馆，携带秘鲁身份证、外国人居留证或护照。"],
  },
  "museo-pedro-de-osma": {
    notes: ["El museo prohíbe las fotos en el interior. Usa el guardarropa para bolsos grandes.", "Photography is prohibited inside. Use the cloakroom for large bags.", "馆内禁止拍照，大件包袋可寄存。"],
    hours: ["Martes a domingo, 10:00–18:00. Consulta los cierres especiales.", "Tuesday–Sunday, 10:00–18:00. Check scheduled closures.", "周二至周日 10:00–18:00，特殊闭馆日期请查馆方公告。"],
    admission: ["Adultos: S/ 30 nacionales y S/ 35 extranjeros. El guiado y las tarifas reducidas tienen condiciones propias.",
      "Adults: S/30 for Peruvian nationals and S/35 for foreign visitors. Tours and reduced fares have separate terms.",
      "成人票为秘鲁籍 S/ 30、外国游客 S/ 35。导览与优惠票另有条件。"],
  },
  "larcomar": {
    hours: ["Acceso general 06:00–22:00. Las tiendas y restaurantes tienen horarios propios.", "General access 06:00–22:00. Individual shops and restaurants set their own hours.", "公共区域 06:00–22:00，各商铺及餐厅另有营业时间。"],
    admission: ["Acceso general gratuito. Compras, servicios y estacionamiento se cobran por separado.", "Free general access. Purchases, services and parking are separate.", "公共区域免费进入，购物、服务和停车另外计费。"],
    source: "https://www.larcomar.com/",
  },
  "biblioteca-manuel-beingolea": {
    hours: ["Lunes a sábado, 08:00–17:00 según el inventario turístico. Confirma en festivos.", "Monday–Saturday, 08:00–17:00 per the tourism inventory. Check on holidays.", "旅游资源名录列为周一至周六 08:00–17:00，节假日请向图书馆核实。"],
    admission: ["El inventario indica que los servicios de biblioteca son gratuitos.", "The inventory lists free library services.", "旅游资源名录列明图书馆服务免费。"],
  },
  "ermita-de-barranco": {
    hours: ["El inventario registra acceso interior restringido. Planea ver la fachada y respeta los cierres.", "The inventory records restricted interior access. Plan to see the façade and follow closure signs.", "旅游资源名录列明内部限入。建议安排外观参观，并遵守围挡及封闭标示。"],
  },
  "centro-cultural-ricardo-palma": {
    hours: ["Lunes a domingo, 10:00–21:00 según la municipalidad. La biblioteca y el auditorio tienen programación propia.",
      "Monday–Sunday, 10:00–21:00 according to the municipality. Check separate library hours and auditorium listings.",
      "据区政府公告为周一至周日 10:00–21:00。图书馆时段和礼堂节目另行查询。"],
    admission: ["Acceso libre al centro. Consulta las condiciones de cada función.", "Free access to the center. Check admission for individual performances.", "文化中心免费进入，个别演出的入场条件请另行核对。"],
    source: artsCenter,
  },
  "el-beso": {
    hours: ["Acceso 24 horas en el inventario turístico. Visita recomendada de 08:00 a 21:00.", "The tourism inventory lists 24-hour access and recommends visiting 08:00–21:00.", "旅游资源名录列为全天开放，建议 08:00–21:00 到访。"],
    admission: free,
  },
  "miraflores-walk": {
    hours: ["Haz el paseo con luz natural. Consulta el horario de Larcomar si vas a entrar.", "Walk the route in daylight. Check Larcomar’s hours if you plan to go inside.", "建议白天步行。计划进入拉尔科马尔时，请核对商场营业时间。"],
    admission: ["El paseo por las vías públicas no requiere entrada. Comercios y servicios se pagan aparte.", "The public walking route is free. Shops and services charge separately.", "公共步行路线免费，商铺和服务另计。"],
  },
};

export function visitDetails(slug: string, locale: AttractionLocale, source: string) {
  const place = details[slug];
  const isOutdoor = outdoors.has(slug);
  return {
    hours: (place?.hours ?? (isOutdoor ? publicAccess : confirmAccess))[index[locale]],
    admission: (place?.admission ?? (exteriorVisit.has(slug) ? exterior : isOutdoor ? free : confirmFare))[index[locale]],
    notes: place?.notes?.[index[locale]],
    source: place?.source ?? source,
  };
}

const stays = {
  center: ["Alójate cerca de Parque Kennedy si quieres encadenar este punto con otros del centro de Miraflores. Si el hotel da a Larco o Diagonal, pide una habitación interior si prefieres menos ruido.",
    "Stay around Kennedy Park to combine this stop with other central Miraflores sights. Ask for an interior room if your lodging faces Larco or Diagonal and you prefer less street noise.",
    "想步行串联米拉弗洛雷斯中心的景点，可住肯尼迪公园一带。若住宿临拉尔科大道或迪亚戈纳尔大道，又想减少街道噪声，可询问是否有朝内客房。"],
  coast: ["Busca alojamiento entre el malecón y la avenida Larco si piensas repetir el paseo costero. Al comparar distancias, usa la ruta por la parte alta del acantilado.",
    "Look between the promenade and Avenida Larco if you expect to return to the coast on foot. Compare distances using routes along the top of the cliff.",
    "计划多次步行前往海滨时，可考虑住在海滨步道与拉尔科大道之间。比较步行距离时，选用崖顶道路。"],
  barranco: ["El centro de Barranco facilita combinar la visita con el parque municipal y Pedro de Osma. Para evitar la pendiente, elige alojamiento en la parte alta, cerca de la avenida Grau.",
    "Central Barranco puts the municipal park and Pedro de Osma Avenue within reach. For fewer steep walks, look on the upper side near Avenida Grau.",
    "住在巴兰科中心，便于把这处景点与市立公园、佩德罗·德奥斯马大道排在一起。想少走坡道，可选格劳大道附近的上层街区。"],
} satisfies Record<string, Localized>;

export function stayAdvice(locale: AttractionLocale, category: Attraction["category"]) {
  return stays[category === "barranco" ? "barranco" : category === "coast" ? "coast" : "center"][index[locale]];
}

export const visitLabels = {
  es: { walkPhoto: "En el malecón superior, encuadra el puente Villena Rey y la Costa Verde desde un punto ancho del paseo. Deja libre la acera del puente.", intro: "Explora este lugar", discover: "Descubre el lugar", route: "Recorrido recomendado", notes: "Antes de la visita", stay: "Dónde alojarse", location: "Dirección y mapa", officialName: "Nombre local", district: "Distrito", verify: "Consultar horarios y condiciones", heritage: "Respeta las zonas delimitadas y consulta las reglas de fotografía antes de entrar.", weather: "En el malecón puede haber viento o neblina. Usa los senderos abiertos y mantente detrás de las barandas." },
  en: { walkPhoto: "Frame Villena Rey Bridge and the Costa Verde from a wide spot on the upper promenade. Keep the bridge sidewalk clear.", intro: "Explore this place", discover: "Discover the site", route: "Suggested route", notes: "Before you go", stay: "Where to stay", location: "Address and map", officialName: "Local name", district: "District", verify: "Check access, hours and admission", heritage: "Stay within marked areas and check photography rules before entering.", weather: "The coastal promenade can be windy or foggy. Use open paths and stay behind the railings." },
  zh: { walkPhoto: "在上层步道较宽处把比列纳雷伊桥与绿海岸纳入同一画面，留出桥上人行道供行人通行。", intro: "探索景点", discover: "发现景点魅力", route: "建议游览路线", notes: "游览须知", stay: "住宿建议", location: "交通指南与地图", officialName: "当地名称", district: "行政区", verify: "核对开放时间及入场规定", heritage: "请遵守景点划定的参观区域，入内前核对拍摄规定。", weather: "海滨步道有时风大或起雾，请走开放小径，并留在栏杆内侧。" },
};
