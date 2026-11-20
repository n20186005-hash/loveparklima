import type { AttractionLocale } from "./attractions";

// Three stops per route, in the order shown to visitors.
const stops: Record<string, [string, string, string]> = {
  "parque-kennedy": ["Entrada de Larco › Rotonda y jardines › Parque 7 de Junio", "Larco entrance › Rotunda and gardens › 7 June Park", "拉尔科大道入口 › 圆形花园 › 六月七日公园"],
  "parque-siete-junio": ["Calle Virgen Milagrosa › Anfiteatro › Jardines de Kennedy", "Calle Virgen Milagrosa › Amphitheater › Kennedy Park gardens", "圣母显灵街 › 露天剧场 › 肯尼迪公园花园"],
  "parque-reducto": ["Avenida Benavides › Explanada conmemorativa › Réplica de la estación", "Avenida Benavides › Memorial forecourt › Replica railway station", "贝纳维德斯大道 › 纪念广场 › 复建火车站"],
  "parque-tradiciones": ["Avenida Ricardo Palma › Fuente › Banco de Ricardo Palma", "Avenida Ricardo Palma › Fountain › Ricardo Palma’s bench", "里卡多·帕尔马大道 › 喷泉 › 帕尔马长椅"],
  "parque-salazar": ["Final de José Larco › Jardines superiores › Balcón sobre la costa", "End of José Larco › Upper gardens › Coastal overlook", "何塞·拉尔科大道尽头 › 上层花园 › 海岸观景栏杆"],
  "parque-raimondi": ["Malecón Cisneros › Jardines y monumento › Paseo hacia el faro", "Malecón Cisneros › Gardens and monument › Path toward the lighthouse", "西斯内罗斯海滨步道 › 花园及纪念碑 › 通往灯塔的小径"],
  "faro-de-la-marina": ["Parque Raimondi › Plaza del faro › Baranda de la Costa Verde", "Raimondi Park › Lighthouse plaza › Costa Verde railing", "雷蒙迪公园 › 灯塔广场 › 绿海岸观景栏杆"],
  "parque-maria-reiche": ["Malecón de la Marina › Dibujos vegetales › Sendero superior", "Malecón de la Marina › Planted designs › Upper footpath", "海军海滨步道 › 植被图案 › 上层小径"],
  "parque-bicentenario": ["Acceso superior de Armendáriz › Senderos señalizados › Mirador del parque", "Upper Armendáriz entrance › Signed paths › Park overlook", "阿门达里斯上层入口 › 有标示的小径 › 公园观景处"],
  "parque-chino": ["Cuadra 11 del malecón › Puente del jardín › Pabellón y paseo costero", "Promenade block 11 › Garden bridge › Pavilion and waterfront path", "海滨步道第 11 街区 › 园中小桥 › 亭子与海滨小径"],
  "parque-intihuatana": ["Puente Villena Rey › Escultura Intihuatana › Jardín del Malecón de la Reserva", "Villena Rey Bridge › Intihuatana sculpture › Malecón de la Reserva garden", "比列纳雷伊桥 › 拴日石雕塑 › 保护区海滨步道花园"],
  "parque-miguel-grau": ["Malecón Miguel Grau › Estatua y plaza › Paseo junto al acantilado", "Malecón Miguel Grau › Statue and plaza › Cliffside promenade", "米格尔·格劳海滨步道 › 雕像与广场 › 崖顶步道"],
  "parque-itzhak-rabin": ["Malecón Cisneros › Busto conmemorativo › Sendero hacia el parque Grau", "Malecón Cisneros › Memorial bust › Path toward Grau Park", "西斯内罗斯海滨步道 › 纪念胸像 › 通往格劳公园的小径"],
  "huaca-pucllana": ["Acceso de General Borgoño › Circuito arqueológico guiado › Museo de sitio", "General Borgoño entrance › Guided archaeological circuit › Site museum", "博尔戈尼奥将军街入口 › 导览考古路线 › 遗址博物馆"],
  "casa-museo-ricardo-palma": ["General Suárez 189 › Fachada de la casa › Salas autorizadas o Parque Tradiciones", "General Suárez 189 › House frontage › Open rooms or Tradiciones Park", "苏亚雷斯将军街 189 号 › 故居外观 › 开放展室或传统公园"],
  "iglesia-virgen-milagrosa": ["Parque Central › Portada del templo › Vista de las torres desde el jardín", "Central Park › Church entrance › Tower view from the garden", "中央公园 › 教堂门廊 › 从花园眺望双塔"],
  "palacio-municipal-miraflores": ["Avenida Larco › Fachada consistorial › Jardín junto a la iglesia", "Avenida Larco › Town hall façade › Garden beside the church", "拉尔科大道 › 市政宫正立面 › 教堂旁花园"],
  "museo-amano": ["Calle Retiro 160 › Vitrinas de textiles › Comparación de técnicas y motivos", "Calle Retiro 160 › Textile displays › Compare techniques and patterns", "雷蒂罗街 160 号 › 纺织品展柜 › 比较技法与纹样"],
  "lugar-de-la-memoria": ["Bajada San Martín › Recorrido por testimonios y archivos › Vista exterior hacia la costa", "Bajada San Martín › Testimonies and archives › Exterior coastal view", "圣马丁下坡道 › 口述证言与档案展区 › 馆外海岸视角"],
  "puente-villena-rey": ["Parque del Amor › Acera del puente › Malecón de la Reserva", "Love Park › Bridge sidewalk › Malecón de la Reserva", "爱情公园 › 桥上人行道 › 保护区海滨步道"],
  "instituto-raul-porras-barrenechea": ["Narciso de la Colina 398 › Exterior de la casa › Calle Alfonso Ugarte", "Narciso de la Colina 398 › House exterior › Calle Alfonso Ugarte", "纳西索·德拉科利纳街 398 号 › 故居外观 › 阿方索·乌加特街"],
  "sala-luis-miro-quesada": ["Parque Central › Entrada junto a Diez Canseco › Exposición vigente", "Central Park › Entrance near Diez Canseco › Current exhibition", "中央公园 › 迭斯坎塞科街附近入口 › 当期展览"],
  "centro-cultural-ricardo-palma": ["Larco 770 › Cartelera de salas y auditorio › Continuación hacia Parque Salazar", "Larco 770 › Gallery and auditorium listings › Continue toward Salazar Park", "拉尔科大道 770 号 › 展厅与礼堂活动公告 › 继续前往萨拉萨尔公园"],
  "larcomar": ["Parque Salazar › Terrazas superiores › Niveles comerciales", "Salazar Park › Upper terraces › Shopping levels", "萨拉萨尔公园 › 上层露台 › 商场楼层"],
  "puente-de-los-suspiros": ["Parque Municipal › Pasarela de madera › Vista desde la Bajada de Baños", "Municipal Park › Wooden footbridge › View from Bajada de Baños", "市立公园 › 木质人行桥 › 从巴尼奥斯坡道仰看"],
  "bajada-de-banos": ["Jr. Domeyer › Paso bajo el puente › Tramo bajo, si está habilitado", "Jr. Domeyer › Pass beneath the bridge › Lower section if open", "多梅耶尔街 › 叹息桥下穿道 › 开放时走向坡道下段"],
  "ermita-de-barranco": ["Puente de los Suspiros › Fachada de la Ermita › Plazuela Chabuca Granda", "Bridge of Sighs › Chapel façade › Chabuca Granda Square", "叹息桥 › 小教堂外立面 › 查布卡·格兰达小广场"],
  "parque-municipal-de-barranco": ["Avenida Almirante Grau › Jardines y biblioteca › Salida hacia el barranco", "Avenida Almirante Grau › Gardens and library › Exit toward the ravine", "格劳海军上将大道 › 花园与图书馆 › 通向峡谷的出口"],
  "biblioteca-manuel-beingolea": ["Parque Municipal › Torre del reloj › Fachada de la plaza", "Municipal Park › Clock tower › Square-facing façade", "市立公园 › 钟楼 › 面向广场的立面"],
  "plazuela-chabuca-granda": ["Ermita › Escalinata ajardinada › Esculturas de la plazuela", "Chapel › Landscaped steps › Square’s sculptures", "小教堂 › 园林阶梯 › 小广场雕塑"],
  "paseo-saenz-pena": ["Avenida San Martín › Casas y jardines del paseo › Extremo junto al acantilado", "Avenida San Martín › Avenue houses and gardens › Cliffside end", "圣马丁大道 › 林荫道住宅与花园 › 崖顶尽端"],
  "museo-pedro-de-osma": ["Pedro de Osma 421 › Jardín de la casona › Salas de arte virreinal", "Pedro de Osma 421 › Mansion garden › Viceregal art galleries", "佩德罗·德奥斯马大道 421 号 › 宅邸花园 › 总督时期艺术展厅"],
  "museo-de-la-electricidad": ["Pedro de Osma 105 › Exhibición de generación eléctrica › Sección de tranvías", "Pedro de Osma 105 › Power generation display › Tram section", "佩德罗·德奥斯马大道 105 号 › 发电展区 › 有轨电车展区"],
  "iglesia-santisima-cruz": ["Biblioteca Municipal › Fachada de la iglesia › Jardines del Parque Municipal", "Municipal Library › Church façade › Municipal Park gardens", "市立图书馆 › 圣十字教堂正立面 › 市立公园花园"],
  "el-beso": ["Acceso del Malecón Cisneros › Escultura El Beso › Bancas de mosaico y mirador", "Malecón Cisneros entrance › El Beso sculpture › Mosaic benches and overlook", "西斯内罗斯步道入口 › 《亲吻》雕塑 › 马赛克长椅与观景处"],
  "miraflores-walk": ["Parque Kennedy › Parque del Amor › Puente Villena Rey y Larcomar", "Kennedy Park › Love Park › Villena Rey Bridge and Larcomar", "肯尼迪公园 › 爱情公园 › 比列纳雷伊桥与拉尔科马尔"],
};

export function itinerary(slug: string, locale: AttractionLocale) {
  return stops[slug][{ es: 0, en: 1, zh: 2 }[locale]].split(" › ");
}
