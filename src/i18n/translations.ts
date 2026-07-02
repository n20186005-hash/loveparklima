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
  nav: { about: string; geography?: string; art?: string; ecology?: string; photography?: string; visiting: string; transportation: string; tips: string; gallery: string; reviews: string; faq: string; location: string };
  hero: { tagline: string; title: string; subtitle: string; cta: string };
  rating: { reviews: string; source: string };
  about: { title: string; p1: string; p2: string; highlights: { title: string; items: string[] }; bestTime?: { title: string; content: string; tip: string } };
  geography?: { title: string; subtitle: string; content: string; climate: { title: string; content: string } };
  art?: { title: string; sculpture: { title: string; content: string }; mosaic: { title: string; content: string } };
  ecology?: { title: string; flora: { title: string; content: string }; fauna: { title: string; content: string } };
  photography?: { title: string; spots: { title: string; items: { name: string; description: string }[] } };
  visiting: { title: string; hours: { title: string; content: string; note: string }; price: { title: string; content: string; note: string }; duration: { title: string; content: string; note: string }; tips: { title: string; items: string[] } };
  transportation: { title: string; airport: { title: string; content: string; options: TransportOption[] }; publicTransport?: { title: string; content: string; options: { name: string; description: string; steps: string[] }[] }; cycling?: { title: string; content: string }; localTransport?: { title: string; description?: string; content?: string; steps?: string[] }; city: { title: string; content: string; steps: string[] } };
  tips: { title: string; items: string[] };
  gallery: { title: string; viewMore: string };
  reviews: { title: string; subtitle: string; viewMore: string };
  faq: { title: string; subtitle: string; items: FAQItem[] };
  location: { title: string; address: string; openMaps: string };
  footer: { callToAction: string; text: string; made: string; linksTitle: string; links: LinkItem[] };
};

export const translations: Record<Locale, Translations> = {
  zh: {
    nav: { about: "景点概览", geography: "地理科普", art: "艺术赏析", ecology: "生态观察", photography: "摄影攻略", visiting: "游览指南", transportation: "交通指南", tips: "游览建议", gallery: "照片画廊", reviews: "游客评价", faq: "常见问题", location: "地图位置" },
    hero: { tagline: "秘鲁利马 · 米拉弗洛雷斯海滨公园", title: "爱情公园", subtitle: "Love Park · Parque del Amor · 太平洋畔的爱情圣地", cta: "探索公园" },
    rating: { reviews: "条评价", source: "Google 评论" },
    about: {
      title: "爱情公园（Love Park）：利马米拉弗洛雷斯的浪漫地标",
      p1: "爱情公园（Love Park，西班牙语：Parque del Amor）位于秘鲁首都利马的著名海滨区——米拉弗洛雷斯（Miraflores）。这座面向太平洋的公园，以其浪漫的氛围、独特的马赛克装饰和标志性的「亲吻雕塑」而闻名，是利马最受欢迎的旅游景点之一。\n\n公园建于1993年，位于米拉弗洛雷斯的海滨步道（Malecón Cisneros）上，于当年情人节（2月14日）正式对外开放。公园由秘鲁建筑师**Javier Sologuren**设计，其灵感深受西班牙巴塞罗那高迪（Antoni Gaudí）的奎尔公园启发。",
      p2: `公园最著名的标志是中央的「亲吻雕塑」（El Beso）。这座雕塑由秘鲁著名艺术家Víctor Delfín创作，描绘了一对情侣热烈亲吻的场景。

**文化意义：** 《亲吻》雕塑在1993年揭幕时曾引起保守社会的巨大争议，因为它是秘鲁首座公开描绘"梅斯蒂索人"（Mestizo，原住民与欧洲混血）热烈拥吻的大型公共艺术。它打破了当时的阶级与种族偏见，是象征平等与纯粹爱情的重要文化符号。

雕塑周围的波浪形长椅上，铺满了色彩斑斓的马赛克瓷砖，每一块都由附近的艺术家们手工绘制。这些马赛克不仅美观，更承载着人们对于爱情和幸福的美好祝愿。这些马赛克长椅上镶嵌着秘鲁当代最著名诗人们的经典爱情诗句（如 Augusto Tamayo Vargas, Washington Delgado 等人的作品），赋予了公园极高的文学底蕴。

**年度传统：** 由于公园在1993年情人节落成，这里保留了一个有趣的年度传统——每年情人节会举办"最长接吻比赛"，成为当地独特的文化景观。

💡 **旅行知识：** 爱情公园是观赏太平洋日落的最佳地点之一。傍晚时分，金色的阳光洒在海面上，与公园的色彩交相辉映，浪漫至极。`,
      highlights: { title: "景点亮点", items: ["亲吻雕塑: Víctor Delfín创作的标志性雕塑", "马赛克长椅: 色彩斑斓的手工瓷砖艺术", "太平洋日落: 利马最佳日落观赏点", "海滨步道: 可漫步至印加市场", "浪漫氛围: 情人节举办的婚礼胜地", "免费开放: 全天候开放的公共空间"] },
    },
    geography: {
      title: "地理与地质科普",
      subtitle: `矗立在"绿海岸"悬崖之上`,
      content: `爱情公园并非建在普通的平地上，而是坐落于利马著名的"绿海岸"（Costa Verde）悬崖边缘。数百万年的太平洋海浪拍打与地壳抬升，造就了利马这段落差高达数十米、绵延不绝的壮观海岸悬崖。

站在这里，不仅能俯瞰浩瀚的太平洋，还能观察到利马独特的"Garúa"（海雾）气候现象——由于秘鲁寒流的影响，利马极少下雨，但在冬季，浓密的海雾会笼罩悬崖，为沿岸的植物提供生长所需的水分。`,
      climate: {
        title: "Garúa 气候现象",
        content: `利马的气候非常独特。由于秘鲁寒流（Humboldt Current）的影响，利马属于干旱的亚热带气候。
        
**冬季（5月-10月）：** 浓密的海雾（Garúa）几乎每天笼罩海岸，气温约12-18°C，湿度很高但不会下雨。

**夏季（12月-4月）：** 海雾消散，阳光充足，气温约20-28°C，是游览的最佳季节。

**全年：** 利马年降雨量不足2厘米，是世界上最干燥的首都之一。`
      }
    },
    art: {
      title: "艺术赏析视角",
      sculpture: {
        title: "解读《亲吻》雕塑",
        content: `Víctor Delfín 的《亲吻》高3米、长12米，采用粗犷的线条和厚重的材质。请注意雕塑中人物的面部特征——他们并没有采用传统的欧洲古典唯美面孔，而是有着鲜明的安第斯原住民（Andean）轮廓。这是对秘鲁本土文化认同的强烈表达。

这座雕塑在1993年揭幕时引起了巨大争议，因为它打破了当时保守社会的种族和阶级偏见，成为象征平等与纯粹爱情的重要文化符号。`
      },
      mosaic: {
        title: "马赛克艺术的隐喻",
        content: `环绕公园的波浪形矮墙，采用了类似西班牙巴塞罗那奎尔公园（Park Güell）的"Trencadís"（碎瓷砖拼贴）技法。这种设计不仅打破了直线条的僵硬，更像太平洋的波浪一样灵动。

瓷砖上不仅有著名诗句，如果仔细寻找，还能看到当地艺术家们巧妙融入的秘鲁传统几何图腾。这些马赛克长椅上镶嵌着秘鲁当代最著名诗人们的经典爱情诗句（如 Augusto Tamayo Vargas, Washington Delgado 等人的作品），赋予了公园极高的文学底蕴。`
      }
    },
    ecology: {
      title: "动植物与生态观察",
      flora: {
        title: "抗旱植物与花卉",
        content: `作为一个海滨绿地，爱情公园也是微型的生态观察点。公园内精心培育了适应干旱和强海风的本土抗旱植物与花卉。

常见植物包括：
• 仙人掌和多肉植物
• 耐盐碱的海岸灌木
• 秘鲁本土的花卉品种
• 适应强风的低矮植被`
      },
      fauna: {
        title: "观鸟爱好者的好去处",
        content: `悬崖边缘是观鸟爱好者的好去处。游客经常可以看到成群的：
• 秘鲁鹈鹕（Peruvian Pelican）—— 大型水鸟，翼展可达2.5米
• 印加燕鸥（Inca Tern）—— 独特的黑色燕鸥，带有红色喙部和白色胡须
• 海鸥（Gulls）—— 多种海鸥在悬崖下方的海面上盘旋捕食

最佳观鸟时间：清晨（7:00-9:00）和傍晚（17:00-19:00）`
      }
    },
    photography: {
      title: "最佳摄影机位",
      spots: {
        title: "推荐拍照角度",
        items: [
          {
            name: "机位一（经典打卡）",
            description: `站在雕塑正前方，使用广角镜头，将正在接吻的雕塑与背后的浩瀚太平洋融为一体。建议日落前1小时拍摄，光线最佳。`
          },
          {
            name: "机位二（浪漫剪影）",
            description: `傍晚 17:30 - 18:30 之间（视季节而定），站在雕塑侧后方，利用太平洋的落日余晖，拍摄雕塑的暗部剪影。使用点测光模式，曝光补偿-1EV。`
          },
          {
            name: "机位三（文艺细节）",
            description: `寻找长椅上最打动你的一句西班牙语情诗（如"Amor es.../爱情是..."），以色彩斑斓的马赛克为前景，虚化背景的海浪。建议使用大光圈（f/1.8-f/2.8）和50mm定焦镜头。`
          }
        ]
      }
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
      publicTransport: {
        title: "利马公共交通（推荐）",
        content: "利马拥有南美典型的BRT（快速公交）系统和完善的公交网络，是体验当地生活的最佳方式。",
        options: [
          {
            name: "快捷公交系统 (Metropolitano)",
            description: "利马的BRT系统，快速便捷",
            steps: [
              "乘坐Metropolitano（B线或C线）",
              "在Ricardo Palma站或Benavides站下车",
              "沿着Av. Ricardo Palma或Av. Benavides向海边步行约20-25分钟",
              "或换乘几分钟的出租车，即可抵达悬崖边的爱情公园",
              "💡 提示：这种方式能完美避开利马市区拥堵的地面交通"
            ]
          },
          {
            name: "蓝色快速公交 (Corredor Azul)",
            description: "沿阿雷基帕大道行驶的蓝色公交车",
            steps: [
              "乘坐301路等蓝色公交车",
              "沿Av. Arequipa行驶",
              "在米拉弗洛雷斯区的终点站或靠近公园的站点下车",
              "步行即可到达爱情公园"
            ]
          }
        ]
      },
      cycling: {
        title: "沿着海岸线骑行（微出行/自行车）",
        content: `爱情公园所在的"米拉弗洛雷斯海滨步道（Malecón）"拥有利马规划最完善的自行车道。

推荐路线：
• 从南部的波西米亚区巴兰科（Barranco）出发
• 从北部的圣伊西德罗（San Isidro）出发
• 租用共享自行车或滑板车，沿着壮丽的悬崖海岸线一路骑行至爱情公园

💡 提示：这是欣赏太平洋悬崖海岸线的最佳方式，沿途风景绝美。`
      },
      localTransport: {
        title: "传统的微型巴士 (Micros/Combis)",
        description: "极具拉美特色的私人小巴，车身通常涂满鲜艳的颜色。虽然路线复杂、不适合初级游客，但对于想要体验极致本地生活的人来说，是前往米拉弗洛雷斯区最接地气的方式。",
        steps: [
          "在利马市区寻找前往Miraflores的小巴",
          "车费约1-2索尔，非常便宜",
          "⚠️ 注意：路线复杂，建议在当地人陪同下乘坐"
        ]
      },
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
      { question: "爱情公园有什么特别之处？", answer: `爱情公园因其标志性的「亲吻雕塑」和色彩斑斓的马赛克装饰而闻名。公园由秘鲁建筑师**Javier Sologuren**设计，灵感深受西班牙巴塞罗那高迪（Antoni Gaudí）的奎尔公园启发。中央的「亲吻雕塑」（El Beso）由秘鲁著名艺术家Víctor Delfín创作，描绘了一对情侣热烈亲吻的场景。

**文化意义：** 这座雕塑在1993年揭幕时曾引起保守社会的巨大争议，因为它是秘鲁首座公开描绘"梅斯蒂索人"热烈拥吻的大型公共艺术，打破了当时的阶级与种族偏见。

此外，公园的马赛克长椅上镶嵌着秘鲁著名诗人的爱情诗句，赋予公园极高的文学底蕴。这里也是观赏太平洋日落的最佳地点之一。` },
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
    nav: { about: "Overview", geography: "Geography", art: "Art", ecology: "Ecology", photography: "Photography", visiting: "Visit Guide", transportation: "Getting There", tips: "Travel Tips", gallery: "Photo Gallery", reviews: "Reviews", faq: "FAQ", location: "Location" },
    hero: { tagline: "Lima, Peru · Miraflores Seaside Park", title: "Love Park", subtitle: "Love Park · Parque del Amor · Romantic Landmark on the Pacific", cta: "Explore the Park" },
    rating: { reviews: "reviews", source: "Google Reviews" },
    about: {
      title: "Love Park (Parque del Amor): Lima's Romantic Landmark in Miraflores",
      p1: "Love Park (Spanish: Parque del Amor) is located in Miraflores, the famous seaside district of Lima, the capital of Peru. This park facing the Pacific Ocean is famous for its romantic atmosphere, unique mosaic decorations, and the iconic 'Kiss Sculpture', making it one of Lima's most popular tourist attractions.\n\nThe park was built in 1993 on the seaside promenade (Malecón Cisneros) in Miraflores, and officially opened on Valentine's Day (February 14) of that year. The park was designed by Peruvian architect **Javier Sologuren**, deeply inspired by Antoni Gaudí's Park Güell in Barcelona, Spain.",
      p2: `The park's most famous landmark is the central 'Kiss Sculpture' (El Beso). This sculpture was created by renowned Peruvian artist Víctor Delfín, depicting a couple passionately kissing.

**Cultural Significance:** When 'El Beso' was unveiled in 1993, it caused huge controversy in conservative society, as it was the first large-scale public artwork in Peru to depict a Mestizo couple (mixed indigenous and European heritage) kissing passionately. It broke through class and racial prejudices of the time, becoming an important cultural symbol of equality and pure love.

The wave-shaped benches surrounding the sculpture are covered with colorful mosaic tiles, each hand-painted by local artists. These mosaics are not only beautiful but also carry people's best wishes for love and happiness. The mosaic benches are inlaid with classic love poems by Peru's most famous contemporary poets (such as works by Augusto Tamayo Vargas, Washington Delgado, and others), giving the park extremely high literary value.

**Annual Tradition:** Since the park was inaugurated on Valentine's Day in 1993, a unique annual tradition has been preserved—every Valentine's Day, a 'longest kiss contest' is held here, becoming a distinctive cultural landscape of the local community.

💡 **Travel Knowledge:** Love Park is one of the best spots in Lima to watch the Pacific sunset. In the evening, golden sunlight spreads across the sea, creating a perfect harmony with the park's colors—an extremely romantic scene.`,
      highlights: { title: "Highlights", items: ["Kiss Sculpture: Iconic sculpture by Víctor Delfín", "Mosaic Benches: Colorful hand-painted tile art", "Pacific Sunset: Best sunset viewing spot in Lima", "Seaside Promenade: Walkable to Inca Market", "Romantic Atmosphere: Popular wedding venue on Valentine's Day", "Free Admission: Public space open all day"] },
    },
    geography: {
      title: "Geography & Geology",
      subtitle: "Standing on the 'Green Coast' Cliff",
      content: `Love Park is not built on ordinary flat ground, but stands on the edge of Lima's famous "Costa Verde" (Green Coast) cliffs. Millions of years of Pacific Ocean wave erosion and crustal uplift have created this spectacular coastline cliff in Lima, with a drop of tens of meters and continuous extension.

Standing here, you can not only overlook the vast Pacific Ocean, but also observe Lima's unique "Garúa" (sea fog) climate phenomenon—due to the influence of the Peru Current, Lima rarely rains, but in winter, dense sea fog envelops the cliffs, providing moisture for coastal plants.`,
      climate: {
        title: "Garúa Climate Phenomenon",
        content: `Lima's climate is very unique. Due to the influence of the Peru Current (Humboldt Current), Lima has an arid subtropical climate.
        
**Winter (May-October):** Dense sea fog (Garúa) envelops the coast almost every day, temperature about 12-18°C, high humidity but no rain.

**Summer (December-April):** Sea fog dissipates, sunny weather, temperature about 20-28°C, best season to visit.

**Year-round:** Lima's annual rainfall is less than 2 centimeters, one of the driest capitals in the world.`
      }
    },
    art: {
      title: "Art Appreciation",
      sculpture: {
        title: "Interpreting 'El Beso' Sculpture",
        content: `Víctor Delfín's "El Beso" is 3 meters high and 12 meters long, using bold lines and heavy materials. Please note the facial features of the characters in the sculpture—they do not adopt traditional European classical beautiful faces, but have distinct Andean indigenous contours. This is a strong expression of Peruvian local cultural identity.

This sculpture caused huge controversy when unveiled in 1993, as it broke through the racial and class prejudices of conservative society at that time, becoming an important cultural symbol of equality and pure love.`
      },
      mosaic: {
        title: "Metaphor of Mosaic Art",
        content: `The wave-shaped low walls surrounding the park adopt the "Trencadís" (broken tile collage) technique similar to Park Güell in Barcelona, Spain. This design not only breaks the stiffness of straight lines, but also looks like the waves of the Pacific Ocean.

Not only are there famous poems on the tiles, but if you look carefully, you can also see Peruvian traditional geometric totems cleverly integrated by local artists. These mosaic benches are inlaid with classic love poems by Peru's most famous contemporary poets (such as works by Augusto Tamayo Vargas, Washington Delgado, and others), giving the park extremely high literary value.`
      }
    },
    ecology: {
      title: "Flora & Fauna Observation",
      flora: {
        title: "Drought-resistant Plants & Flowers",
        content: `As a seaside green space, Love Park is also a miniature ecological observation point. The park carefully cultivates local drought-resistant plants and flowers that adapt to drought and strong sea winds.

Common plants include:
• Cacti and succulent plants
• Salt-tolerant coastal shrubs
• Peruvian native flower varieties
• Low vegetation adapted to strong winds`
      },
      fauna: {
        title: "Great Spot for Birdwatchers",
        content: `The cliff edge is a great spot for birdwatchers. Visitors can often see groups of:
• Peruvian Pelican—large water bird, wingspan up to 2.5 meters
• Inca Tern—unique black tern with red beak and white whiskers
• Gulls—various gulls hovering and feeding on the sea surface below the cliff

Best birdwatching time: Early morning (7:00-9:00) and evening (17:00-19:00)`
      }
    },
    photography: {
      title: "Best Photography Spots",
      spots: {
        title: "Recommended Camera Angles",
        items: [
          {
            name: "Spot 1 (Classic Check-in)",
            description: `Stand in front of the sculpture, use a wide-angle lens to integrate the kissing sculpture with the vast Pacific Ocean behind it. It is recommended to shoot 1 hour before sunset for the best light.`
          },
          {
            name: "Spot 2 (Romantic Silhouette)",
            description: `Between 17:30 - 18:30 in the evening (depending on the season), stand behind the sculpture, use the sunset glow of the Pacific Ocean to shoot the dark silhouette of the sculpture. Use spot metering mode, exposure compensation -1EV.`
          },
          {
            name: "Spot 3 (Artistic Details)",
            description: `Look for the most touching Spanish love poem on the bench (such as "Amor es.../Love is..."), use the colorful mosaic as the foreground, blur the sea waves in the background. It is recommended to use a large aperture (f/1.8-f/2.8) and a 50mm fixed-focus lens.`
          }
        ]
      }
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
      publicTransport: {
        title: "Lima Public Transport (Recommended)",
        content: "Lima has a typical BRT (Bus Rapid Transit) system and comprehensive bus network in South America, which is the best way to experience local life.",
        options: [
          {
            name: "Metropolitano (BRT System)",
            description: "Lima's BRT system, fast and convenient",
            steps: [
              "Take Metropolitano (Line B or C)",
              "Get off at Ricardo Palma Station or Benavides Station",
              "Walk towards the sea along Av. Ricardo Palma or Av. Benavides for about 20-25 minutes",
              "Or transfer to a taxi for a few minutes to reach Love Park on the cliff",
              "💡 Tip: This way can perfectly avoid Lima's congested ground traffic"
            ]
          },
          {
            name: "Corredor Azul (Blue Bus)",
            description: "Blue buses running along Avenida Arequipa",
            steps: [
              "Take blue buses like Route 301",
              "Runs along Av. Arequipa",
              "Get off at the terminal in Miraflores district or a station near the park",
              "Walk to reach Love Park"
            ]
          }
        ]
      },
      cycling: {
        title: "Cycling Along the Coastline (Micro-mobility/Bike)",
        content: `The "Miraflores Seaside Promenade (Malecón)" where Love Park is located has Lima's best-planned bicycle lane.

Recommended routes:
• Start from Barranco (Bohemian district) in the south
• Start from San Isidro in the north
• Rent shared bikes or scooters, ride along the magnificent cliff coastline to Love Park

💡 Tip: This is the best way to enjoy the Pacific cliff coastline, with beautiful scenery along the way.`
      },
      localTransport: {
        title: "Traditional Micros/Combis (Mini-buses)",
        description: "Private minibuses with unique Latin American characteristics, usually painted with bright colors. Although the routes are complex and not suitable for beginner tourists, for those who want to experience the ultimate local life, it is the most authentic way to go to Miraflores district.",
        steps: [
          "Look for minibuses heading to Miraflores in Lima city center",
          "Fare about 1-2 soles, very cheap",
          "⚠️ Note: Complex routes, recommended to take with locals"
        ]
      },
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
      { question: "What is special about Love Park?", answer: `Love Park is famous for its iconic 'Kiss Sculpture' and colorful mosaic decorations. The park was designed by Peruvian architect **Javier Sologuren**, deeply inspired by Antoni Gaudí's Park Güell in Barcelona, Spain. The central 'Kiss Sculpture' (El Beso) was created by renowned Peruvian artist Víctor Delfín, depicting a couple passionately kissing.

**Cultural Significance:** When 'El Beso' was unveiled in 1993, it caused huge controversy in conservative society, as it was the first large-scale public artwork in Peru to depict a Mestizo couple kissing passionately, breaking through class and racial prejudices of the time.

In addition, the park's mosaic benches are inlaid with classic love poems by Peru's most famous poets, giving the park extremely high literary value. It is also one of the best spots to watch the Pacific sunset.` },
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
    nav: { about: "Descripción", geography: "Geografía", art: "Arte", ecology: "Ecología", photography: "Fotografía", visiting: "Guía de Visita", transportation: "Cómo Llegar", tips: "Consejos", gallery: "Galería", reviews: "Reseñas", faq: "Preguntas Frecuentes", location: "Ubicación" },
    hero: { tagline: "Lima, Perú · Parque Marítimo de Miraflores", title: "Parque del Amor", subtitle: "Parque del Amor · Love Park · Punto Romántico en el Pacífico", cta: "Explorar" },
    rating: { reviews: "reseñas", source: "Google Reviews" },
    about: {
      title: "Parque del Amor: El Punto Romántico de Lima en Miraflores",
      p1: "El Parque del Amor está ubicado en Miraflores, el famoso distrito costero de Lima, la capital de Perú. Este parque frente al Océano Pacífico es famoso por su atmósfera romántica, únicas decoraciones de mosaico y la icónica 'Escultura del Beso', convirtiéndose en una de las atracciones turísticas más populares de Lima.\n\nEl parque fue construido en 1993 en el malecón costero (Malecón Cisneros) de Miraflores, y se inauguró oficialmente el Día de San Valentín (14 de febrero) de ese año. El parque fue diseñado por el arquitecto peruano **Javier Sologuren**, profundamente inspirado por el Park Güell de Antoni Gaudí en Barcelona, España.",
      p2: `El hito más famoso del parque es la 'Escultura del Beso' (El Beso) central. Esta escultura fue creada por el renombrado artista peruano Víctor Delfín, que describe a una pareja besándose apasionadamente.

**Significado Cultural:** Cuando 'El Beso' fue develada en 1993, causó una gran controversia en la sociedad conservadora, ya que fue la primera obra de arte pública a gran escala en Perú que depictaba a una pareja mestiza besándose apasionadamente. Rompió los prejuicios de clase y raza de la época, convirtiéndose en un importante símbolo cultural de igualdad y amor puro.

Los bancos con forma de onda que rodean la escultura están cubiertos con coloridos mosaicos, cada uno pintado a mano por artistas locales. Estos mosaicos no solo son hermosos, sino que también llevan los mejores deseos de las personas para el amor y la felicidad. Los bancos de mosaico están incrustados con poemas de amor clásicos de los poetas contemporáneos más famosos del Perú (como obras de Augusto Tamayo Vargas, Washington Delgado y otros), dando al parque un valor literario extremadamente alto.

**Tradición Anual:** Desde que el parque se inauguró el Día de San Valentín en 1993, se ha preservado una tradición anual única: cada Día de San Valentín, se celebra un 'concurso del beso más largo' aquí, convirtiéndose en un paisaje cultural distintivo de la comunidad local.

💡 **Consejo de Viaje:** El Parque del Amor es uno de los mejores lugares en Lima para ver la puesta del sol en el Pacífico. En la tarde, la luz dorada del sol se extiende sobre el mar, creando una armonía perfecta con los colores del parque—una escena extremadamente romántica.`,
      highlights: { title: "Puntos Destacados", items: ["Escultura del Beso: Escultura icónica por Víctor Delfín", "Bancos de Mosaico: Arte de azulejos pintados a mano", "Puesta del Sol Pacífico: Mejor lugar en Lima para ver la puesta del sol", "Malecón Costero: Caminable al Mercado Inca", "Atmósfera Romántica: Lugar popular de bodas en el Día de San Valentín", "Entrada Gratuita: Espacio público abierto todo el día"] },
    },
    geography: {
      title: "Geografía y Geología",
      subtitle: "De pié en el acantilado de la 'Costa Verde'",
      content: `El Parque del Amor no está construido en terreno plano común, sino que se encuentra sobre el borde del acantilado de la famosa "Costa Verde" de Lima. Millones de años de golpes de olas del Océano Pacífico y levantamiento tectónico han creado este espectacular acantilado costero en Lima, con una caída de decenas de metros y extensión continua.

De pié aquí, no solo puede ver el vasto Océano Pacífico, sino también observar el único fenómeno climático "Garúa" de Lima—debido a la influencia de la Corriente de Perú, Lima raramente llueve, pero en invierno, la densa neblina marina envuelve el acantilado, proporcionando la humedad necesaria para las plantas costeras.`,
      climate: {
        title: "Fenómeno Climático Garúa",
        content: `El clima de Lima es muy único. Debido a la influencia de la Corriente de Perú (Corriente de Humboldt), Lima tiene un clima subtropical árido.
        
**Invierno (mayo-octubre):** La densa neblina marina (Garúa) envuelve la costa casi todos los días, temperatura about 12-18°C, alta humedad pero sin lluvia.

**Verano (diciembre-abril):** La neblina marina se disipa, clima soleado, temperatura about 20-28°C, mejor época para visitar.

**Todo el año:** La precipitación anual de Lima es menos de 2 centímetros, una de las capitales más secas del mundo.`
      }
    },
    art: {
      title: "Perspectiva de Análisis Artístico",
      sculpture: {
        title: "Interpretación de la escultura 'El Beso'",
        content: `El "El Beso" de Víctor Delfín tiene 3 metros de alto y 12 metros de largo, utilizando líneas rudas y materiales pesados. Por favor, note las características faciales de los personajes en la escultura—no adoptan caras clásicas europeas tradicionales bellas, sino tienen contornos distintivos indígenas andinos. Esta es una expresión fuerte de identidad cultural local peruana.

Esta escultura causó gran controversia cuando fue develada en 1993, ya que rompió los prejuicios de raza y clase de la sociedad conservadora de ese tiempo, convirtiéndose en un importante símbolo cultural de igualdad y amor puro.`
      },
      mosaic: {
        title: "Metáfora del arte de mosaico",
        content: `Los muros bajos con forma de onda que rodean el parque adoptan la técnica "Trencadís" (collage de azulejos rotos) similar al Park Güell en Barcelona, España. Este diseño no solo rompe la rigidez de las líneas rectas, sino que también se ve como las olas del Océano Pacífico.

No solo hay poemas famosos en los azulejos, sino que si busca cuidadosamente, también puede ver totems geométricos tradicionales peruanos integrados ingeniosamente por artistas locales. Estos bancos de mosaico están incrustados con poemas de amor clásicos de los poetas contemporáneos más famosos del Perú (como obras de Augusto Tamayo Vargas, Washington Delgado y otros), dando al parque un valor literario extremadamente alto.`
      }
    },
    ecology: {
      title: "Observación de Flora y Fauna",
      flora: {
        title: "Plantas y flores resistentes a la sequía",
        content: `Como un espacio verde costero, el Parque del Amor también es un punto de observación ecológica en miniatura. El parque cultiva cuidadosamente plantas y flores locales resistentes a la sequía y vientos fuertes marinos.

Plantas comunes incluyen:
• Cactos y plantas suculentas
• Arbustos costeros tolerantes a la sal
• Variedades de flores nativas peruanas
• Vegetación baja adaptada a vientos fuertes`
      },
      fauna: {
        title: "Buen lugar para observadores de aves",
        content: `El borde del acantilado es un buen lugar para observadores de aves. Los visitantes frecuentemente pueden ver grupos de:
• Pelícano Peruano (Peruvian Pelican)—ave acuática grande, envergadura de alas hasta 2.5 metros
• Charrán Inca (Inca Tern)—charrán negro único con pico rojo y bigotes blancos
• Gaviotas (Gulls)—varias gaviotas circulando y alimentándose sobre la superficie del mar debajo del acantilado

Mejor hora para observar aves: Mañana temprano (7:00-9:00) y tarde (17:00-19:00)`
      }
    },
    photography: {
      title: "Mejores Ángulos de Fotografía",
      spots: {
        title: "Ángulos de cámara recomendados",
        items: [
          {
            name: "Ángulo 1 (Check-in clásico)",
            description: `Párese frente a la escultura, use lente gran angular, integre la escultura besándose con el vasto Océano Pacífico detrás de ella. Se recomienda disparar 1 hora antes del atardecer, la luz es mejor.`
          },
          {
            name: "Ángulo 2 (Silueta romántica)",
            description: `Entre 17:30 - 18:30 en la tarde (dependiendo de la estación), párese detrás de la escultura, use el resplandor del sol poniente del Pacífico para disparar la silueta oscura de la escultura. Use modo de medición puntual, compensación de exposición -1EV.`
          },
          {
            name: "Ángulo 3 (Detalles artísticos)",
            description: `Busque el poema de amor en español más conmovedor en el banco (como "Amor es.../El amor es..."), use el mosaico colorido como primer plano, desenfoque las olas del mar en el fondo. Se recomienda usar abertura grande (f/1.8-f/2.8) y lente de enfoque fijo 50mm.`
          }
        ]
      }
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
      publicTransport: {
        title: "Transporte Público de Lima (Recomendado)",
        content: "Lima tiene un sistema típico de BRT (Transporte Rápido en Autobús) y una red integral de autobuses en Sudamérica, que es la mejor manera de experimentar la vida local.",
        options: [
          {
            name: "Metropolitano (Sistema BRT)",
            description: "Sistema BRT de Lima, rápido y conveniente",
            steps: [
              "Tomar Metropolitano (Línea B o C)",
              "Bajar en la estación Ricardo Palma o estación Benavides",
              "Caminar hacia el mar por Av. Ricardo Palma o Av. Benavides por about 20-25 minutos",
              "O transferir a un taxi por unos minutos para llegar al Parque del Amor en el acantilado",
              "💡 Consejo: Esta manera puede evitar perfectamente el tráfico congestionado de Lima"
            ]
          },
          {
            name: "Corredor Azul (Autobús Azul)",
            description: "Autobuses azules que corren por Avenida Arequipa",
            steps: [
              "Tomar autobuses azules como la Ruta 301",
              "Corre por Av. Arequipa",
              "Bajar en la terminal en el distrito de Miraflores o una estación cerca del parque",
              "Caminar para llegar al Parque del Amor"
            ]
          }
        ]
      },
      cycling: {
        title: "Ciclismo a lo largo de la costa (Micromovilidad/Bicicleta)",
        content: `El "Malecón de Miraflores" donde está ubicado el Parque del Amor tiene el carril para bicicletas mejor planificado de Lima.

Rutas recomendadas:
• Empezar desde Barranco (distrito bohemio) en el sur
• Empezar desde San Isidro en el norte
• Alquilar bicicletas compartidas o patinetes, montar a lo largo del magnífico acantilado costero hasta el Parque del Amor

💡 Consejo: Esta es la mejor manera de disfrutar el acantilado costero del Pacífico, con hermoso paisaje a lo largo del camino.`
      },
      localTransport: {
        title: "Micros/Combis (Minibuses tradicionales)",
        description: "Minibuses privados con únicas características latinoamericanas, usualmente pintados con colores brillantes. Aunque las rutas son complejas y no adecuadas para turistas principiantes, para aquellos que quieren experimentar la vida local definitiva, es la manera más auténtica de ir al distrito de Miraflores.",
        steps: [
          "Buscar minibuses que van a Miraflores en el centro de Lima",
          "Pasaje about 1-2 soles, muy barato",
          "⚠️ Nota: Rutas complejas, recomendado tomar con locales"
        ]
      },
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
