export const guideLocales = ["es", "en", "zh"] as const;
export const guideSlugs = ["el-beso", "miraflores-walk"] as const;
export const parkMap = "https://maps.app.goo.gl/f3hGnVCU134Ugba38";
export const municipalRoutes = "https://www.miraflores.gob.pe/los-servicios/cultura-y-turismo/turismo/rutas-turisticas/";
export const municipalPlan = "https://www.miraflores.gob.pe/wp-content/uploads/2020/10/PDTL-MIRAFLORES_web.pdf";

export const guideLabels = {
  es: { heading: "Guías de Miraflores", home: "Parque del Amor", map: "Abrir en Google Maps", source: "Municipalidad de Miraflores", photo: "Parque del Amor en el malecón de Miraflores" },
  en: { heading: "Miraflores travel guides", home: "Love Park", map: "Open in Google Maps", source: "Municipality of Miraflores", photo: "Love Park on the Miraflores waterfront" },
  zh: { heading: "米拉弗洛雷斯游览指南", home: "爱情公园", map: "在 Google 地图中打开", source: "米拉弗洛雷斯区政府", photo: "米拉弗洛雷斯海滨的爱情公园" },
};

type Guide = { title: string; intro: string; sections: [string, string][] };

export const guides: Record<(typeof guideLocales)[number], Record<(typeof guideSlugs)[number], Guide>> = {
  es: {
    "el-beso": {
      title: "El Beso y los mosaicos del Parque del Amor",
      intro: "Una visita centrada en la escultura de Víctor Delfín, las bancas de mosaico y los miradores del Malecón Cisneros, en Miraflores, Lima.",
      sections: [
        ["Historia del parque", "El Parque del Amor se inauguró el 14 de febrero de 1993. Su pieza central, El Beso, muestra a una pareja abrazada y fue realizada por el escultor peruano Víctor Delfín."],
        ["Qué observar", "Rodea la escultura para distinguir las dos figuras. Después sigue la curva de las bancas y detente a leer las inscripciones entre los azulejos. Desde el paseo superior puedes ver cómo el conjunto se abre hacia el Pacífico."],
        ["Ubicación y acceso", "Busca Parque del Amor en el Malecón Cisneros, Miraflores. Desde el paseo costero, mantente en el nivel superior del acantilado. Si llegas en taxi, indica el nombre del parque y del malecón."],
        ["Dónde tomar fotos", "Para encuadrar la pareja con el mar, prueba desde el lado interior del paseo. Si el cielo está nublado, acércate a los mosaicos para destacar su textura y color. Usa los senderos habilitados y deja libre el paso."],
        ["¿Cuánto tiempo reservar?", "Como referencia, calcula entre 20 y 30 minutos para la escultura, las bancas y una parada en el mirador. Si quieres seguir por la costa, enlaza con la ruta a Larcomar."],
      ],
    },
    "miraflores-walk": {
      title: "Miraflores a pie: Parque Kennedy, Parque del Amor y Larcomar",
      intro: "Un paseo desde el centro de Miraflores hasta los jardines y miradores del Pacífico, con una parada en el Parque del Amor.",
      sections: [
        ["1. Comienza en el Parque Kennedy", "Empieza junto al Parque Central y toma la avenida José Larco hacia la costa. Es el tramo urbano del recorrido, con cruces y comercios."],
        ["2. Visita el Parque del Amor", "Continúa hacia el Malecón Cisneros. Da una vuelta por El Beso y los mosaicos antes de retomar el sendero superior junto al acantilado."],
        ["3. Termina en Larcomar", "Sigue hacia el sur por el malecón, pasando por el puente Villena Rey hacia el Malecón de la Reserva. Haz una parada para mirar la Costa Verde desde el paseo superior."],
        ["Cómo adaptar el paseo", "Para un recorrido breve, empieza en el Parque del Amor y camina solo hasta Larcomar. Con niebla, dedica más tiempo a los mosaicos y jardines. El viento puede sentirse más en el borde costero."],
        ["¿Hay que bajar a la playa?", "Todo el itinerario principal discurre por la parte alta de Miraflores. Sigue los cruces señalizados y comprueba los accesos en el mapa si quieres añadir un descenso a la Costa Verde."],
      ],
    },
  },
  en: {
    "el-beso": {
      title: "El Beso sculpture and mosaics at Love Park, Lima",
      intro: "See Víctor Delfín’s sculpture, the tiled benches and the Pacific viewpoints on Malecón Cisneros in Miraflores.",
      sections: [
        ["History", "Love Park opened on February 14, 1993. Its centerpiece, El Beso, depicts an embracing couple and was created by Peruvian sculptor Víctor Delfín."],
        ["What to look for", "Walk around the sculpture to see how the figures overlap. Follow the curved benches and look for inscriptions among the tiles. From the upper promenade, you can see how the park opens toward the Pacific."],
        ["Location and access", "Find Parque del Amor on Malecón Cisneros in Miraflores. Follow the upper cliffside promenade. If taking a taxi, give the driver both the park and promenade names."],
        ["Photography", "Try framing the couple against the ocean from the inland side of the path. On overcast days, move closer to the mosaic tiles for color and texture. Keep the walking path clear."],
        ["How long should I allow?", "Allow roughly 20 to 30 minutes for the sculpture, benches and a viewpoint stop. Continue along the waterfront to Larcomar for a longer visit."],
      ],
    },
    "miraflores-walk": {
      title: "Miraflores walking route: Kennedy Park, Love Park and Larcomar",
      intro: "Walk from central Miraflores to Pacific viewpoints and gardens, stopping at Love Park along the way.",
      sections: [
        ["1. Start at Kennedy Park", "Begin at Parque Central and follow Avenida José Larco toward the coast. This is the urban part of the walk, with shops and street crossings."],
        ["2. Visit Love Park", "Head to Malecón Cisneros. Give yourself time to see El Beso and the tiled benches before rejoining the upper cliffside path."],
        ["3. Finish at Larcomar", "Continue south along the promenade, crossing Puente Villena Rey toward Malecón de la Reserva. Pause on the upper promenade for a view of the Costa Verde."],
        ["Adapt the walk", "For a shorter outing, start at Love Park and finish at Larcomar. On a foggy day, spend more time seeing the mosaics and gardens. The cliff edge is exposed to coastal winds."],
        ["Does the route go down to the beach?", "The main walk stays on the upper level of Miraflores. Use marked crossings, and check the map for separate access routes if you want to descend to the Costa Verde."],
      ],
    },
  },
  zh: {
    "el-beso": {
      title: "利马爱情公园的《亲吻》雕塑与马赛克长椅",
      intro: "沿米拉弗洛雷斯的西斯内罗斯海滨步道，细看维克托·德尔芬的雕塑、彩砖长椅和太平洋观景台。",
      sections: [
        ["公园历史", "爱情公园于 1993 年 2 月 14 日开放。园内的《亲吻》由秘鲁雕塑家维克托·德尔芬创作，表现一对相拥的恋人。"],
        ["值得细看的地方", "绕雕塑走一圈，观察两个人物从不同角度呈现的姿态。沿弧形长椅寻找彩砖之间的题字，再从上层步道看公园如何朝太平洋敞开。"],
        ["地址与到达方式", "公园位于利马米拉弗洛雷斯区的西斯内罗斯海滨步道。沿崖顶步道即可到达。乘出租车时可同时提供地图上的公园名称与步道名称。"],
        ["拍摄机位", "从步道靠内陆的一侧尝试把雕塑与海面纳入同一画面。阴天可以近拍彩砖纹理与题字。拍摄时请留出通行空间。"],
        ["建议停留多久？", "若计划看雕塑、长椅和观景台，可预留约 20 至 30 分钟。想走远一些，可接上前往拉尔科马尔的海滨路线。"],
      ],
    },
    "miraflores-walk": {
      title: "米拉弗洛雷斯步行路线：肯尼迪公园、爱情公园与拉尔科马尔",
      intro: "从米拉弗洛雷斯市区走到太平洋崖顶，中途到爱情公园看雕塑和彩砖。",
      sections: [
        ["1. 从肯尼迪公园出发", "从中央公园一带沿何塞·拉尔科大道朝海岸步行。这一段经过商店和市区路口。"],
        ["2. 到爱情公园停留", "走到西斯内罗斯海滨步道，在爱情公园看《亲吻》雕塑和马赛克长椅，再回到上层崖顶步道。"],
        ["3. 到拉尔科马尔结束", "沿海滨向南，经比列纳雷伊桥走向保护区海滨步道，可从上层步道俯瞰绿海岸。"],
        ["怎样缩短路线", "时间有限可从爱情公园直接走到拉尔科马尔。有海雾时可多留时间看彩砖和园景，临崖一带海风较明显。"],
        ["需要走到海滩吗？", "这条路线全程走米拉弗洛雷斯上层步道。过马路时使用标示路口。若另有下到绿海岸的计划，先在地图上核对下行通道。"],
      ],
    },
  },
};
