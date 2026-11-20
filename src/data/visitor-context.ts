import type { AttractionLocale } from "./attractions";

type Localized = readonly [string, string, string];
const language = { es: 0, en: 1, zh: 2 } as const;
const quCategory = {
  outdoor: "Hawa watukuy", shore: "Costa Verde mama qucha pata", ruins: "Ñawpa wak'a",
  museum: "Rikuchina wasi", venue: "Takina wasi", nature: "Sallqa purina ñan",
  church: "Yupaychana wasi", civic: "Llaqta kawsay wasi", shopping: "Qhatu wasi", library: "Ñawinchana wasi",
};

const entries: Record<string, readonly [category: keyof typeof categories, minutes: string, observation?: Localized]> = {
  "parque-kennedy": ["outdoor", "20–40"],
  "parque-siete-junio": ["outdoor", "10–20"],
  "parque-reducto": ["outdoor", "25–45"],
  "parque-tradiciones": ["outdoor", "15–30"],
  "parque-salazar": ["outdoor", "15–30"],
  "parque-raimondi": ["outdoor", "20–40"],
  "faro-de-la-marina": ["outdoor", "15–30"],
  "parque-maria-reiche": ["outdoor", "20–40"],
  "parque-bicentenario": ["outdoor", "35–60"],
  "parque-chino": ["outdoor", "15–30"],
  "parque-intihuatana": ["outdoor", "10–20"],
  "parque-miguel-grau": ["outdoor", "10–25"],
  "parque-itzhak-rabin": ["outdoor", "15–30"],
  "huaca-pucllana": ["ruins", "60–90"],
  "casa-museo-ricardo-palma": ["museum", ""],
  "iglesia-virgen-milagrosa": ["church", "10–25"],
  "palacio-municipal-miraflores": ["civic", ""],
  "museo-amano": ["museum", "45–75"],
  "lugar-de-la-memoria": ["museum", "60–120"],
  "puente-villena-rey": ["outdoor", "10–20"],
  "instituto-raul-porras-barrenechea": ["civic", ""],
  "sala-luis-miro-quesada": ["museum", "25–50"],
  "centro-cultural-ricardo-palma": ["civic", ""],
  "larcomar": ["shopping", "45–90"],
  "puente-de-los-suspiros": ["outdoor", "10–25"],
  "bajada-de-banos": ["outdoor", "25–45"],
  "ermita-de-barranco": ["church", "10–20"],
  "parque-municipal-de-barranco": ["outdoor", "20–40"],
  "biblioteca-manuel-beingolea": ["library", ""],
  "plazuela-chabuca-granda": ["outdoor", "10–20"],
  "paseo-saenz-pena": ["outdoor", "20–40"],
  "museo-pedro-de-osma": ["museum", "75–120"],
  "museo-de-la-electricidad": ["museum", "30–60"],
  "iglesia-santisima-cruz": ["church", "10–25"],
  "ovalo-miraflores": ["outdoor", "10–20", ["Mira la fuente desde una esquina de Pardo y luego desde Arequipa. Las dos perspectivas muestran por qué el cruce sirve de referencia para caminar al Parque Central.", "View the fountain from a corner on Pardo and then from Arequipa. The two perspectives show why this junction is a useful landmark on the walk to Parque Central.", "先从帕尔多大道街角看喷泉，再沿斑马线换到阿雷基帕大道一侧。两个角度能帮助辨认环岛与中央公园的步行方向。"]],
  "malecon-de-la-reserva": ["outdoor", "45–75", ["En las terrazas de Salazar, compara la línea de jardines de arriba con la carretera y las playas de abajo. El recorrido principal mantiene la cota alta hasta Armendáriz.", "From the Salazar terraces, compare the line of upper gardens with the road and beaches below. The main walk stays on the upper level as far as Armendáriz.", "在萨拉萨尔公园附近的露台对照上层花园与下方公路、海滩。主路线可沿崖顶走向阿门达里斯，无需下到海岸公路。"]],
  "playa-waikiki": ["shore", "20–40", ["Desde el paseo, observa dónde esperan los surfistas y dónde empieza a romper la ola. El perfil del acantilado permite reconocer el nivel del malecón alto.", "From the promenade, watch where surfers wait and where the wave begins to break. The cliff profile helps you identify the upper promenade.", "站在步道上观察冲浪者候浪的位置与浪开始破碎的水域，再借崖壁轮廓辨认上层海滨步道。"]],
  "playa-redondo": ["shore", "20–40", ["Mira hacia el acantilado para ver cómo la playa queda debajo de la línea edificada de Miraflores. Un encuadre lateral recoge mejor la curva del litoral.", "Look toward the cliff to see how the beach lies below the built-up edge of Miraflores. A side view captures the curve of the coast more clearly.", "回望崖壁，可看见海滩在米拉弗洛雷斯建筑线下方的位置。沿岸侧拍比正对海面更容易拍出海岸弧线。"]],
  "huaca-huallamarca": ["ruins", "45–75", ["Detente en la base para comparar el ancho de la plataforma con la pendiente de la rampa. Después usa las fichas del museo de sitio para distinguir las fases de ocupación.", "Pause at the base to compare the width of the platform with the slope of the ramp. Then use the site museum labels to distinguish the phases of occupation.", "先在遗址底部比较平台宽度与坡道坡度，再借遗址博物馆的展签区分不同占据时期。"]],
  "bosque-el-olivar": ["outdoor", "30–60", ["Sigue los senderos entre los olivos y compara los troncos de distintas formas. Desde el borde residencial se aprecia cómo el barrio se organiza alrededor del jardín.", "Follow the paths among the olives and compare the shapes of the trunks. From the residential edge, notice how the neighborhood sits around the grove.", "沿小径比较形状各异的老橄榄树干，再从住宅街边观察街区如何围绕树林展开。"]],
  "huaca-santa-catalina": ["ruins", "20–40", ["La vista desde Parque Scout ayuda a distinguir los muros de tierra del paisaje residencial. Si ese día hay acceso al recinto, pregunta qué sectores se pueden recorrer.", "The view from Parque Scout helps distinguish the earthen walls from the residential surroundings. If the site is open, ask which areas visitors can enter.", "可从童军公园辨认住宅街景中的土筑遗墙。若遗址当日开放，再向工作人员核对哪些区域可进入。"]],
  "mac-lima": ["museum", "60–90", ["Empieza por el patio y observa el reflejo de los pabellones antes de entrar. Reserva la mayor parte del tiempo para la muestra vigente y lee sus cartelas en orden.", "Start at the courtyard and look for the reflection of the pavilions before going inside. Allow most of your time for the current exhibition and read the labels in sequence.", "先在庭院看展馆在水面上的倒影，再入内。给当期展览留出主要时间，按展线阅读展签。"]],
  "playa-las-sombrillas": ["shore", "20–40", ["Desde el extremo del paseo, mira la sucesión de sombrillas con la arena en primer plano. En una visita corta, quédate en la zona de acceso habilitado.", "From the end of the promenade, look along the row of umbrellas with the sand in the foreground. For a short visit, stay near the signed public access.", "从开放步道尽端沿遮阳伞一线取景，可将沙地留作前景。时间较短时，在标示入口附近停留即可。"]],
  "playa-los-yuyos": ["shore", "20–40", ["Compara el agua a ambos lados del rompeolas desde el paseo. Ese punto permite apreciar también la separación entre la vía costera y la playa.", "Compare the water on either side of the breakwater from the walkway. You can also see how the beach is separated from the coastal road.", "从步道比较防波设施两侧的水面，同时观察滨海公路与海滩之间的空间。"]],
  "playa-barranquito": ["shore", "20–40", ["Mira la orilla desde un tramo lateral del paseo para apreciar dónde las olas se acercan al pie del acantilado. Revisa la salida antes de seguir a otra playa.", "Look along the shore from a side section of the promenade to see where the surf approaches the foot of the cliffs. Check your exit before continuing to another beach.", "从步道侧向观察浪带与崖脚的距离。若想继续走向另一处海滩，先核对离开当前海滩的路线。"]],
  "parque-husares-de-junin": ["outdoor", "15–30", ["La entrada frente a Las Magnolias ayuda a orientarte. Cruza el jardín antes de seguir por Paul Harris y compara la vista desde el parque con la del malecón.", "The entrance opposite Las Magnolias is a good orientation point. Cross the garden before continuing along Paul Harris and compare the park and promenade views.", "以木兰街对面的入口定位，穿过花园后再接保罗·哈里斯步道，比较园内视角与沿岸视角。"]],
  "parque-federico-villarreal": ["outdoor", "20–40", ["Mira cómo cambian la pendiente y la vegetación al pasar del jardín a la Bajada de Baños. Puedes recorrer el parque y volver a San Martín si no quieres bajar.", "Notice how the slope and vegetation change from the garden to Bajada de Baños. You can loop through the park and return to San Martín if you prefer to stay up top.", "从花园走向巴尼奥斯坡道时，留意坡度与植被的变化。想保持在上层街区，可绕园一圈再回到圣马丁大道。"]],
  "mirador-catalina-recavarren": ["outdoor", "10–20", ["Lee la placa dedicada a Catalina Recavarren antes de acercarte a la baranda. Desde allí se entiende cómo el mirador remata el paseo junto a la Ermita.", "Read the plaque to Catalina Recavarren before approaching the railing. From there you can see how the viewpoint ends the walk beside the chapel.", "先读卡塔利娜·雷卡瓦伦的纪念铭牌，再走到栏杆旁。这里能看清小教堂侧旁步道如何在观景台收尾。"]],
  "playa-agua-dulce": ["shore", "30–60", ["Desde el paseo bajo, el arco de arena permite reconocer la ensenada de Chorrillos. Si llegas en vehículo, localiza primero un punto de descenso peatonal.", "From the lower promenade, the arc of sand makes the Chorrillos bay easy to recognize. If arriving by vehicle, first locate a pedestrian access point.", "从下层步道可以用弧形沙滩辨认乔里约斯湾。乘车抵达时，先确认能步行进入的入口。"]],
  "pantanos-de-villa": ["nature", "75–120", ["Detente en los observatorios autorizados y alterna la mirada entre el agua abierta y el totoral. Pregunta en recepción qué circuito está habilitado ese día.", "Pause at designated observation points and alternate between open water and reed beds. Ask at reception which circuit is open that day.", "在指定观鸟点交替观察开阔水面与芦苇带。入园时先向接待处确认当天开放的线路。"]],
  "parque-de-la-amistad": ["outdoor", "45–75", ["Mira el arco de frente en la plaza y repite la vista desde la laguna. El paseo ferroviario se aprecia también desde tierra si no está prestando servicio.", "See the arch straight on from the plaza and again from the lagoon. The railway features can also be viewed on foot whenever the service is unavailable.", "先在广场正面观察拱门，再到湖边换一个角度。铁路项目未运行时，仍可从开放步道看相关设施。"]],
  "loma-amarilla": ["nature", "40–70", ["Empieza en el sendero señalizado de la ladera. Compara la vista a media subida con la parte alta y confirma la ruta de regreso antes de alargar el recorrido.", "Start on the marked hillside path. Compare the mid-slope outlook with the upper park and check your return route before extending the walk.", "从有标示的坡地小径上行，比较半山与高处的视野。想走得更远时，先确认回程路线。"]],
  "museo-oro-del-peru": ["museum", "75–120", ["Organiza dos recorridos: primero las piezas de metalurgia andina y después la colección de armas. Compara materiales y técnica dentro de cada sección antes de pasar a la siguiente.", "Plan two circuits: Andean metalwork first, then the arms collection. Compare materials and craftsmanship within each section before moving on.", "可以分两段参观：先看安第斯金属工艺，再看世界武器藏品。每段各挑几件，比较材质与制作技法。"]],
  "gran-teatro-nacional": ["venue", "", ["Desde la explanada de Javier Prado se distinguen los accesos al recinto. Si tienes boleto, usa la puerta y la hora indicadas para tu función.", "The Javier Prado forecourt gives you a view of the venue entrances. With a ticket, use the gate and arrival time specified for your performance.", "在哈维尔·普拉多大道前广场可辨认各入口。持票入场时，请按具体演出的门号和到场时间安排。"]],
  "museo-nacional-arqueologia": ["museum", "60–100", ["Usa el patio para situar las alas del museo. Después elige las galerías abiertas según el período histórico que más te interese y deja tiempo para leer los contextos.", "Use the courtyard to get your bearings among the museum wings. Then choose open galleries by the period that interests you and leave time for the interpretive labels.", "先在庭院辨认展馆各翼，再按感兴趣的时期选择当天开放的展厅，并留出阅读展品背景的时间。"]],
  "mateo-salado": ["ruins", "45–75", ["Desde el recorrido permitido compara el tamaño de las pirámides y su disposición relativa. La escala se entiende mejor con las calles actuales de Lima como referencia.", "From the permitted route, compare the size and relative positions of the pyramids. Their scale is easier to understand against the modern streets of Lima.", "从开放线路比较各土筑金字塔的体量与相对位置，以周围的现代利马街区作为尺度参照。"]],
  "circuito-magico-del-agua": ["outdoor", "60–90", ["Divide el paseo entre las fuentes monumentales y el tramo que quieras ver iluminado. Confirma la programación de ese día si buscas un espectáculo específico.", "Divide the walk between the monumental fountains and the part you want to see illuminated. Check that day’s program if you want a specific show.", "可将散步分成大型喷泉与夜间灯光两段。若专程看某场演出，请先核对当日安排。"]],
  "parque-de-la-exposicion": ["outdoor", "30–60", ["La explanada de Paseo Colón marca el paso del jardín al palacio. En el interior del parque, compara el tamaño y la función visible de los pabellones.", "The Paseo Colón forecourt marks the transition from garden to palace. Inside the park, compare the scale and apparent purpose of the pavilions.", "由科隆大道前广场辨认花园与博览宫的衔接，再到园内比较不同展亭的大小与空间用途。"]],
  "mali-lima": ["museum", "75–120", ["Mira el volumen del palacio desde el parque antes de entrar. En las galerías, elige un par de salas para comparar cómo se exhiben piezas de distintas épocas.", "Study the palace massing from the park before entering. In the galleries, choose two rooms to compare how pieces from different periods are presented.", "进馆前可从公园观察博览宫的体量。入内后选两处展厅，对照不同时期作品的陈列方式。"]],
  "museo-de-arte-italiano": ["museum", "45–75", ["Dedica unos minutos a distinguir los motivos de los mosaicos exteriores. Al entrar, compara cómo la pintura y la escultura ocupan el espacio de las galerías.", "Spend a few minutes picking out motifs in the exterior mosaics. Inside, compare how paintings and sculpture occupy the gallery space.", "先花几分钟辨认外墙马赛克纹样，再入内比较绘画与雕塑在展厅内的布置。"]],
  "museo-metropolitano-lima": ["museum", "45–75", ["La fachada permite reconocer el origen administrativo del edificio. Consulta al entrar qué parte del recorrido histórico o audiovisual funciona ese día.", "The frontage reflects the building’s earlier government use. At the entrance, check which part of the historical or audiovisual circuit is available that day.", "可从立面观察建筑原有的行政用途。入馆时请核对当天开放的是历史展线、视听展区还是两者。"]],
  "museo-historia-natural-lima": ["museum", "60–90", ["Agrupa la visita entre fauna actual y registro fósil. En ambos recorridos, usa las fichas de procedencia para conectar las piezas con los ambientes de Perú.", "Group your visit into living fauna and the fossil record. In both areas, use the provenance labels to connect the specimens to Peru’s environments.", "把参观分成现生动物与化石记录两段，借标本来源说明把展品与秘鲁的不同自然环境联系起来。"]],
  "museo-cultura-peruana": ["museum", "45–75", ["Empieza observando los motivos de la fachada y sigue con el arte popular. Compara la materia y el uso de las piezas antes de pasar a otra vitrina.", "Start with the motifs on the façade before moving on to the folk art. Compare the materials and uses of the pieces before moving to another case.", "先观察建筑立面的纹饰，再看馆内民间艺术。走向下一组展柜前，可比较器物的材料和用途。"]],
  "huaca-la-luz": ["ruins", "15–30", ["Usa el cruce de Venus y Marte para localizar el perímetro. Mira cómo los restos de tierra se distinguen de la trama de calles de la urbanización.", "Use the Venus and Marte junction to locate the perimeter. Notice how the earthen remains stand out against the residential street grid.", "以金星街和火星街交会处定位遗址外围，观察土筑遗构与住宅区街格的反差。"]],
  "huaca-huantille": ["ruins", "20–40", ["Desde el tramo autorizado, observa antes el volumen completo del adobe y luego los cambios en sus bordes. La visita se puede combinar con el entorno del Mercado Modelo.", "From an authorized section, take in the full adobe mass first, then look for changes along its edges. You can pair the stop with the Mercado Modelo area.", "在允许参观的路段，先看土坯遗址的整体轮廓，再细看边缘起伏。可将这站与示范市场一带合并游览。"]],
};

const categories = {
  outdoor: ["Espacio exterior", "Outdoor landmark", "户外景点"],
  shore: ["Playa de la Costa Verde", "Costa Verde beach", "绿海岸海滩"],
  ruins: ["Sitio arqueológico", "Archaeological site", "考古遗址"],
  museum: ["Museo o galería", "Museum or gallery", "博物馆或展馆"],
  venue: ["Teatro", "Theater", "剧院"],
  nature: ["Senderos naturales", "Nature trails", "自然步道"],
  church: ["Templo", "Church or chapel", "教堂或礼拜堂"],
  civic: ["Edificio cívico o cultural", "Civic or cultural building", "市政或文化建筑"],
  shopping: ["Centro comercial", "Shopping center", "购物中心"],
  library: ["Biblioteca", "Library", "图书馆"],
} satisfies Record<string, Localized>;

export function visitorContext(slug: string, locale: AttractionLocale) {
  const entry = entries[slug];
  if (!entry) return undefined;
  const [category, minutes, observation] = entry;
  if (locale === "qu") return { category: quCategory[category], observation: undefined, duration: minutes && `yaqa ${minutes} minuta` };
  const i = language[locale];
  return { category: categories[category][i], observation: observation?.[i], duration: minutes && (locale === "zh" ? `约 ${minutes} 分钟` : `≈ ${minutes} min`) };
}

export const visitorLabels = {
  es: {
    category: "Tipo de visita", duration: "Tiempo orientativo", start: "Punto de partida", observation: "Qué observar durante la visita",
    stays: {
      "near-north": "Alójate cerca de El Olivar si quieres caminar entre el bosque y Huallamarca. Usa Miraflores como base si el resto de tu itinerario se concentra en la costa.",
      south: "Para una sola excursión al sur puedes mantener tu base en Miraflores o Barranco. Si tienes varias visitas en Surco o una función nocturna en San Borja, compara alojamientos cerca de tu última parada.",
      city: "Cerca de Paseo Colón puedes combinar los museos del Parque de la Exposición a pie. Si también planeas visitar Pueblo Libre o Magdalena, calcula esos traslados por separado al elegir dónde dormir.",
    } as Partial<Record<string, string>>,
  },
  en: {
    category: "Type of visit", duration: "Suggested time", start: "Suggested starting point", observation: "What to look for during the visit",
    stays: {
      "near-north": "Stay near El Olivar if you want to walk between the grove and Huallamarca. Keep Miraflores as a base if most of your other plans are along the coast.",
      south: "Miraflores or Barranco works as a base for one outing south. For several Surco stops or an evening show in San Borja, compare lodging near your last stop.",
      city: "Staying near Paseo Colón lets you combine the Exhibition Park museums on foot. If you are also visiting Pueblo Libre or Magdalena, compare those journeys separately when choosing where to stay.",
    } as Partial<Record<string, string>>,
  },
  zh: {
    category: "景点类型", duration: "建议停留", start: "建议起点", observation: "现场观察重点",
    stays: {
      "near-north": "想步行串联橄榄树林与瓦亚马尔卡遗址，可住在埃尔奥利瓦尔一带。其余行程多在海滨时，也可住米拉弗洛雷斯，另安排半天前往圣伊西德罗。",
      south: "只安排一次南部行程，可住米拉弗洛雷斯或巴兰科。若在苏尔科安排多站，或计划在圣博尔哈看晚场演出，可优先比较末站附近的住宿。",
      city: "住科隆大道一带，便于步行串联博览会公园周边博物馆。若还要去普韦布洛利夫雷或马格达莱纳，订房前请分别估算这两段交通。",
    } as Partial<Record<string, string>>,
  },
  qu: { category: "Watukuy laya", duration: "Hayk'a unay", start: "Qallariy k'uchu", observation: "Ima qhawanapaq", stays: {} as Partial<Record<string, string>> },
};
