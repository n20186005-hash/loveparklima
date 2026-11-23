// Ordered by the visitor's approach within each walk or district outing.
const routes = [
  ["ovalo-miraflores", "parque-siete-junio", "parque-kennedy", "iglesia-virgen-milagrosa", "palacio-municipal-miraflores", "sala-luis-miro-quesada", "centro-cultural-ricardo-palma"],
  ["parque-reducto", "parque-tradiciones", "casa-museo-ricardo-palma", "instituto-raul-porras-barrenechea", "huaca-pucllana"],
  ["lugar-de-la-memoria", "parque-maria-reiche", "parque-miguel-grau", "parque-itzhak-rabin", "parque-chino", "faro-de-la-marina", "parque-raimondi"],
  ["puente-villena-rey", "parque-intihuatana", "malecon-de-la-reserva", "parque-salazar", "larcomar", "parque-bicentenario"],
  ["playa-waikiki", "playa-redondo"],
  ["museo-amano", "bosque-el-olivar", "huaca-huallamarca"],
  ["mac-lima", "parque-husares-de-junin", "paseo-saenz-pena"],
  ["parque-municipal-de-barranco", "biblioteca-manuel-beingolea", "iglesia-santisima-cruz", "parque-federico-villarreal", "puente-de-los-suspiros", "ermita-de-barranco", "mirador-catalina-recavarren", "plazuela-chabuca-granda", "bajada-de-banos"],
  ["museo-de-la-electricidad", "museo-pedro-de-osma"],
  ["playa-barranquito", "playa-los-yuyos", "playa-las-sombrillas", "playa-agua-dulce", "pantanos-de-villa"],
  ["parque-de-la-amistad", "loma-amarilla", "museo-oro-del-peru", "gran-teatro-nacional"],
  ["huaca-santa-catalina", "museo-historia-natural-lima", "circuito-magico-del-agua"],
  ["parque-de-la-exposicion", "mali-lima", "museo-de-arte-italiano", "museo-metropolitano-lima", "museo-cultura-peruana"],
  ["museo-nacional-arqueologia", "mateo-salado", "huaca-la-luz", "huaca-huantille"],
];

export function relatedStops(slug: string) {
  const route = routes.find((group) => group.includes(slug));
  if (!route) return [];
  const index = route.indexOf(slug);
  const start = Math.max(0, Math.min(index - 1, route.length - 4));
  return route.slice(start, start + 4).filter((stop) => stop !== slug);
}

export const nearbyRouteLabels = {
  zh: { title: "串联周边景点", note: "按各站的开放时间安排先后。跨街区或上下海岸时，先查看实际步行或公交路线。", directions: "查看两站之间的路线", map: "地点与交通", arrival: "从爱情公园出发", visit: "参观重点", admission: "核对当前票价", reviews: "通过该景点的地图条目查看最新评分及评论。" },
  en: { title: "Combine nearby stops", note: "Check each stop’s opening hours. For trips across districts or between cliff and shore, check walking or transit directions first.", directions: "Directions between stops", map: "Location and transport", arrival: "From Love Park", visit: "Visit highlights", admission: "Check current admission", reviews: "Find the latest rating and comments in this attraction’s map listing." },
  es: { title: "Combina paradas cercanas", note: "Organiza las paradas según sus horarios. Si cambias de distrito o bajas a la costa, consulta la ruta a pie o en transporte público.", directions: "Cómo ir de un punto al otro", map: "Ubicación y transporte", arrival: "Desde el Parque del Amor", visit: "Qué ver en la visita", admission: "Consultar tarifa vigente", reviews: "Consulta la puntuación y los comentarios recientes en la ficha de este lugar." },
  qu: { title: "Qaylla watukunata huñuy", note: "Sapa watunapa kichana pachanta qhaway. Huk llaqtaman utaq mama qucha pataman riyta munaspa, ñawpaqta purina ñanta maskay.", directions: "Iskay watunapa chawpinpi ñanta qhaway", map: "Maypi, imayna chayamuy", arrival: "Munakuy pampamanta", visit: "Ima qhawanapaq", admission: "Kunan yaykuna qullqita tapuy", reviews: "Kay watunapa Google Maps nisqapi kunan tupuyta, watuqkunapa niyninkunatapas qhaway." },
};

const planning = {
  shoreline: {
    zh: "从崖顶去海滩时，找标示开放的下坡通道。把返程上坡、过街和停车时间算进去；只看海景也可以走到岸边后原路返回。",
    en: "Use a signed open descent from the cliff to the beach. Allow for the climb back, street crossings and parking. For a quick look at the shore, return via the same access.",
    es: "Baja del acantilado por un acceso señalizado y abierto. Cuenta el tiempo de subida, los cruces y el estacionamiento. Para una visita corta, vuelve por el mismo acceso.",
    qu: "Qaqa patamanta mama quchaman kichasqa uray ñanta qatipay. Kutimuspa wichaypaq pachata rakiy. Pisi pacha kaptin chay ñanllamanta kutiy.",
  },
  waterfront: {
    zh: "先在上层步道辨认下一站和返回方向。想看日落时可提前到场，在宽处停看或拍照，给持续通行的人留出空间。",
    en: "Use the upper promenade to identify the next stop and your return route. For sunset, arrive early and stop in a wider area so the path stays clear.",
    es: "En el paseo superior, ubica la siguiente parada y el regreso. Si vas al atardecer, llega antes y detente donde el paso sea ancho.",
    qu: "Hanaq ñanmanta qatiq watunata, kutina ñantapas qhaway. Inti chinkaypaq ñawpaqta chayay, ancho ñanpi sayay.",
  },
  venue: {
    zh: "先看当天开放的展厅或活动，再决定参观顺序。留意最后入场时间；有预约或演出票时，从票面指定的入口报到。",
    en: "Check which galleries or events are open that day before choosing your order. Note last admission, and use the entrance shown on any reservation or ticket.",
    es: "Comprueba qué salas o actividades están abiertas ese día antes de elegir el orden. Revisa el último ingreso y usa la entrada indicada en la reserva o el boleto.",
    qu: "Kunan p'unchaw ima rikuchina kichasqa kasqanta qhaway. Qhipa yaykuna pachata tapuy; boletoyuq kaspa, chaypi nisqa punkuman riy.",
  },
  ruins: {
    zh: "先从开放的外围观察遗构，再向工作人员核对可进入的区域。若室内或导览暂停，可将外观停留与同区下一站合并。",
    en: "Start at the open perimeter and ask staff which areas you can enter. If indoor access or tours are suspended, combine an exterior stop with the next nearby visit.",
    es: "Empieza por el perímetro abierto y pregunta qué sectores se pueden visitar. Si las salas o visitas guiadas están suspendidas, combina el exterior con otra parada cercana.",
    qu: "Kichasqa muyuriymanta wak'ata qhaway. Mayman yaykuyta atisqaykita tapuy. Ukhuman mana yaykuyta atispa, hawata qhaway, chaymanta qaylla watunaman riy.",
  },
};

export function visitPlanning(slug: string, locale: keyof typeof nearbyRouteLabels) {
  if (slug.startsWith("playa-")) return planning.shoreline[locale];
  if (slug.startsWith("huaca-") || slug === "mateo-salado") return planning.ruins[locale];
  if (/^(museo-|mac-lima$|mali-lima$|gran-teatro|sala-)/.test(slug)) return planning.venue[locale];
  if (routes[2].includes(slug) && slug !== "lugar-de-la-memoria" || routes[3].includes(slug) && slug !== "larcomar") return planning.waterfront[locale];
  return undefined;
}
