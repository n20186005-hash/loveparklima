import type { Locale } from "./translations";

type CookiesCopy = {
  intro: string; consent: string; consentText: string; save: string; reject: string; saved: string;
  enabled: string; disabled: string; provider: string;
  categories: readonly (readonly [name: string, description: string, provider: string])[];
};

export const cookiesCopy: Record<Locale, CookiesCopy> = {
  zh: {
    intro: "我们使用 Cookie 来改善您的浏览体验。您可以在下方管理您的偏好设置。",
    consent: "同意管理", consentText: "您可以随时更改您的 Cookie 设置。禁用某些 Cookie 可能会影响网站的功能。",
    save: "保存偏好设置", reject: "拒绝可选 Cookie", saved: "偏好设置已保存！", enabled: "激活", disabled: "停用", provider: "提供者",
    categories: [
      ["必要 Cookie", "这些 Cookie 对于网站正常运行至关重要，无法禁用。", "始终保持活跃"],
      ["分析型 Cookie", "它们通过收集匿名使用数据，帮助我们了解访客如何与我们的网站互动。", "Google Analytics"],
      ["偏好 Cookie", "它们会记住您的设置，例如语言和主题偏好。", "用户偏好"],
      ["营销 Cookie", "它们用于展示相关广告并衡量广告活动的有效性。", "个性化广告"],
    ],
  },
  en: {
    intro: "We use cookies to improve your browsing experience. Manage your preferences below.",
    consent: "Consent management", consentText: "You can change your cookie settings at any time. Disabling some cookies may affect site functionality.",
    save: "Save preferences", reject: "Reject optional cookies", saved: "Preferences saved!", enabled: "Enabled", disabled: "Disabled", provider: "Provider",
    categories: [
      ["Necessary cookies", "These cookies are essential for the site to work and cannot be disabled.", "Always active"],
      ["Analytics cookies", "These collect anonymous usage data to help us understand how visitors use the site.", "Google Analytics"],
      ["Preference cookies", "These remember settings such as your language and theme.", "User preferences"],
      ["Marketing cookies", "These show relevant ads and measure campaign performance.", "Personalized advertising"],
    ],
  },
  es: {
    intro: "Usamos cookies para mejorar tu experiencia de navegación. Puedes gestionar tus preferencias aquí.",
    consent: "Gestión del consentimiento", consentText: "Puedes cambiar los ajustes de cookies en cualquier momento. Desactivar algunas cookies puede afectar el funcionamiento del sitio.",
    save: "Guardar preferencias", reject: "Rechazar cookies opcionales", saved: "¡Preferencias guardadas!", enabled: "Activadas", disabled: "Desactivadas", provider: "Proveedor",
    categories: [
      ["Cookies necesarias", "Son imprescindibles para el funcionamiento del sitio y no se pueden desactivar.", "Siempre activas"],
      ["Cookies de análisis", "Recogen datos de uso anónimos para ayudarnos a entender cómo se usa el sitio.", "Google Analytics"],
      ["Cookies de preferencias", "Recuerdan ajustes como el idioma y el tema.", "Preferencias del usuario"],
      ["Cookies de marketing", "Muestran anuncios relevantes y miden el rendimiento de las campañas.", "Publicidad personalizada"],
    ],
  },
  qu: {
    intro: "Cookiekunata kay p'anqapi aswan allinta purinaykipaq llamk'achiyku. Kay urapi munasqaykita akllay.",
    consent: "Saqiyta kamachiy", consentText: "Hayk'aqpas cookiekunata tikrayta atinki. Wakinkunata wañuchispa p'anqapa llamk'aynin tikrakunman.",
    save: "Akllasqaykita waqaychay", reject: "Akllana cookiekunata mana chaskiy", saved: "Akllasqayki waqaychasqa!", enabled: "Kichasqa", disabled: "Wañuchisqa", provider: "Quq",
    categories: [
      ["Munasqa cookiekuna", "P'anqa llamk'ananpaq munasqa kanku; mana wañuchiyta atinkichu.", "Wiñay llamk'aq"],
      ["Yachana cookiekuna", "Watuqpa sutinta mana huñuspa, imayna p'anqata llamk'achisqanta yachachinku.", "Google Analytics"],
      ["Akllana cookiekuna", "Rimayta, p'anqapa rikch'aynintapas yuyarinku.", "Watuqpa akllasqan"],
      ["Willana cookiekuna", "Qhatu willakuykunata rikuchinku, chaykunapa llamk'ayninta tupunku.", "Sapaq qhatu willakuy"],
    ],
  },
};
