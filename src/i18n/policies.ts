import type { Locale } from "./translations";

export const policySlugs = ["privacy", "terms", "cookies"] as const;
type Policy = (typeof policySlugs)[number];

export const policyLabels: Record<Locale, { titles: Record<Policy, string>; home: string; updated: string }> = {
  zh: { titles: { privacy: "隐私政策", terms: "服务条款", cookies: "Cookie 设置" }, home: "返回首页", updated: "最后更新时间：2026年6月" },
  en: { titles: { privacy: "Privacy Policy", terms: "Terms of Service", cookies: "Cookie Settings" }, home: "Back to homepage", updated: "Last updated: June 2026" },
  es: { titles: { privacy: "Política de privacidad", terms: "Condiciones de uso", cookies: "Preferencias de cookies" }, home: "Volver al inicio", updated: "Última actualización: junio de 2026" },
  qu: { titles: { privacy: "Sapaq willakuy kamachiy", terms: "Llamk'achinapaq kamachiykuna", cookies: "Cookie akllanakuna" }, home: "Qallariy p'anqaman kutiy", updated: "Qhipa musuqyachiy: junio 2026" },
};

type PolicySection = readonly [title: string, content: string, list?: readonly string[]];
export const policyCopy: Record<Exclude<Locale, "zh">, Record<Exclude<Policy, "cookies">, PolicySection[]>> = {
  en: {
    privacy: [
      ["Information we collect", "We collect only the minimum data needed to provide our services. This may include:", ["Browsing data such as IP address, browser type, and pages visited", "Cookies and similar technologies", "Information you voluntarily provide through a contact form or email"]],
      ["How we use information", "We use the information we collect to:", ["Improve the site and visitor experience", "Analyze traffic and usage patterns", "Respond to requests", "Meet legal obligations"]],
      ["Third-party services", "The site may use Google Maps for maps and location data, Google Analytics for traffic analysis, and Unsplash for images. These services have their own privacy policies."],
      ["Your rights", "The GDPR and related laws provide rights that include:", ["Access to your personal data", "Requesting corrections or deletion", "Objecting to processing", "Complaining to a supervisory authority"]],
    ],
    terms: [
      ["Access and use", "By accessing and using the site, you agree to these terms."],
      ["Use of content", "The site is for information only. It is an independent travel guide and is unaffiliated with attractions, government agencies, or commercial operators."],
      ["Accuracy of information", "We aim to provide accurate and timely information. Schedules, conditions, and services may change, and we cannot guarantee accuracy or completeness. Verify important information with official sources before travel."],
      ["Intellectual property", "The design and original content are protected by copyright. Images sourced from Unsplash are used under its license. Google Maps data is used under Google's terms."],
      ["Limitation of liability", "The site is provided as is, without warranty. We are not liable for losses arising from use of its information, including travel decisions based on the content."],
    ],
  },
  es: {
    privacy: [
      ["Información que recopilamos", "Recopilamos solo los datos mínimos necesarios para prestar el servicio. Pueden incluir:", ["Datos de navegación, como dirección IP, tipo de navegador y páginas visitadas", "Cookies y tecnologías similares", "Información que facilites voluntariamente en un formulario de contacto o por correo electrónico"]],
      ["Cómo utilizamos la información", "Utilizamos los datos recopilados para:", ["Mejorar el contenido y la experiencia del sitio", "Analizar el tráfico y los patrones de uso", "Responder a solicitudes", "Cumplir nuestras obligaciones jurídicas"]],
      ["Servicios de terceros", "El sitio puede usar Google Maps para mapas y ubicaciones, Google Analytics para analizar el tráfico y Unsplash para imágenes. Estos servicios tienen sus propias políticas de privacidad."],
      ["Tus derechos", "El RGPD y la normativa relacionada reconocen derechos como:", ["Acceder a tus datos personales", "Solicitar su rectificación o supresión", "Oponerte al tratamiento", "Presentar una reclamación ante la autoridad de control"]],
    ],
    terms: [
      ["Acceso y uso", "Al acceder al sitio y utilizarlo, aceptas estas condiciones."],
      ["Uso del contenido", "El sitio tiene fines informativos. Es una guía turística independiente sin afiliación a atracciones, organismos públicos ni operadores comerciales."],
      ["Exactitud de la información", "Procuramos ofrecer información precisa y oportuna, pero no garantizamos su exactitud ni integridad. Los horarios, las condiciones y los servicios pueden cambiar. Verifica la información importante en fuentes oficiales antes de viajar."],
      ["Propiedad intelectual", "El diseño y el contenido original están protegidos por derechos de autor. Las imágenes obtenidas de Unsplash se usan bajo su licencia. Los datos de Google Maps se utilizan de acuerdo con las condiciones de Google."],
      ["Limitación de responsabilidad", "El sitio se ofrece tal cual, sin garantías. No nos responsabilizamos por pérdidas derivadas del uso de su información, incluidas las decisiones de viaje basadas en su contenido."],
    ],
  },
  qu: {
    privacy: [
      ["Huñusqayku willakuykuna", "Kay yanapay llamk'ananpaq aswan pisi willakuyllata huñuyku. Kaykunata huñuyta atiyku:", ["IP, maskana laya, qhawasqa p'anqakuna", "Cookiekuna, chayman rikch'akuq llamk'achiykuna", "Qam munasqaykiwan formulario utaq correo nisqapi apachimusqayki"]],
      ["Imapaq willakuyta llamk'achiyku", "Huñusqa willakuyta kaykunapaq llamk'achiyku:", ["P'anqata, watuypa allin kayninta allichaypaq", "Hayk'a runa hamusqanta, imayna p'anqata llamk'achisqanta yachanapaq", "Tapuykunata kutichinapaq", "Kamachiykunata hunt'anapaq"]],
      ["Wak llamk'achiqkuna", "P'anqa Google Maps nisqata mapapaq, Google Analytics nisqata watukuykuna yupaypaq, Unsplash nisqatapas rikch'aykunapaq llamk'achiyta atin. Sapankapa sapaq willakuypa kamachiynin kachkan."],
      ["Qampa hayniykikuna", "RGPD kamachiyman, huk kamachiykunaman hinapas kay haynikuna kachkan:", ["Qampa willakuyniykita qhaway", "Allichayta utaq pichayta mañay", "Willakuyta llamk'achinankuta hark'ay", "Qhawaq kamachiqman quejata quy"]],
    ],
    terms: [
      ["Yaykuy, llamk'achiy", "Kay p'anqaman yaykuspa, llamk'achispapas kay kamachiykunata chaskinki."],
      ["Willakuyta llamk'achiy", "Kay p'anqaqa willanapaqmi. Sapallan watukuy yanapaqmi; watuna k'uchukunawan, suyupa kamachiqninkunawan, qhatu huñukunawanpas mana tupaqchu."],
      ["Willakuypa chiqaq kaynin", "Chiqaq, kunan willakuyta qunapaq llamk'ayku. Ichaqa mana hunt'asqa utaq chiqaq kasqanta asiguraykuchu. Pachakuna, yanapaykuna tikrakuyta atin. Manaraq riyta qallarispa, kamachiqpa willakuyninta chiqaqchay."],
      ["Ruwaqpa haynin", "P'anqapa rikch'aynin, ñawpaq rurasqankunapas ruwaqpa hayninwan amachasqa kanku. Unsplashmanta rikch'aykunata chaypa saqiy kamachiyninwan llamk'achiyku. Google Maps willakuyta Googlepa kamachiyninman hina llamk'achiyku."],
      ["Responsabilidadpa tukukuynin", "P'anqata kasqanman hina quyku, mana garantiyuq. Kay willakuyta llamk'achispa chinkachisqaykimanta, kay willakuyman hina puriyta akllasqaykimantapas mana ñuqaykupa huchaykuchu."],
    ],
  },
};
