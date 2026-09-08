const copy = {
  en: {
    home: "Home", support: "Support", privacy: "Privacy", menu: "Menu", language: "Cambiar a español",
    eyebrow: "A daily ritual with room to roam", title: "Look closer. Find the pattern.",
    lede: "Fourteen original word, logic, number, grouping, and pattern games. Everyone receives the same Daily Signal, then unlimited play keeps the observatory open.",
    supportCta: "Get support", privacyCta: "Read privacy policy", collection: "A collection, not a clone",
    collectionIntro: "Each game has its own visual instrument and interaction, while shared controls make the whole collection immediately familiar.",
    dailyTitle: "One signal, worldwide", dailyBody: "A deterministic daily edition gives every player the same fair puzzle for each language and date.",
    unlimitedTitle: "Keep playing", unlimitedBody: "Validated generation produces more puzzles when the daily set is complete, without ads, subscriptions, or waiting.",
    clearTitle: "Learn by playing", clearBody: "Concise goals, playable lessons, progressive hints, automatic saving, and spoiler-safe sharing support every game.",
    footer: "Puzzle Observatory by Corvus", supportTitle: "Support", supportIntro: "If something is not working, tell us what happened and we will help.",
    contactTitle: "Contact", contactBody: "Email Corvus support at", helpfulTitle: "Helpful details", helpfulBody: "Include your device model, operating system version, app version, game name, and what you expected to happen. Do not include puzzle answers if you want to avoid spoilers.",
    dataTitle: "Your data", dataBody: "You can export a summary or delete all local player data from the You tab inside the app.",
    privacyTitle: "Privacy", updated: "Last updated: September 7, 2026", privacyIntro: "Puzzle Observatory is designed to work locally and contains no advertising or cross-app tracking.",
    localTitle: "Data on your device", localBody: "The app stores puzzle attempts, board snapshots, solve results, streaks, quality ratings, cached daily editions, and preferences so play can resume reliably. This information remains on your device in this version.",
    diagnosticsTitle: "Diagnostics", diagnosticsBody: "Anonymous quality diagnostics are off by default. If enabled, Apple MetricKit can provide aggregate performance and diagnostic payloads. Structured local events contain only game type and outcome. This version does not upload those payloads.",
    appleTitle: "Apple services", appleBody: "Daily puzzles are included in the app and remain available offline. Game Center and private iCloud synchronization are not active in this version.",
    feedbackTitle: "Feedback and ratings", feedbackBody: "The app may offer Apple's system rating prompt after sustained use. Choosing Feedback opens your mail app with app and operating system versions prefilled. Email is sent only if you choose to send it.",
    collectTitle: "Tracking and collection", collectBody: "The app privacy manifest declares no tracking and no collected data types. No third-party analytics SDK is included.",
    questionsTitle: "Questions", questionsBody: "For privacy questions, contact"
  },
  es: {
    home: "Inicio", support: "Soporte", privacy: "Privacidad", menu: "Menú", language: "Switch to English",
    eyebrow: "Un ritual diario con espacio para explorar", title: "Mira de cerca. Encuentra el patrón.",
    lede: "Catorce juegos originales de palabras, lógica, números, grupos y patrones. Todos reciben la misma Señal Diaria y luego pueden seguir jugando sin límites.",
    supportCta: "Obtener soporte", privacyCta: "Leer la política de privacidad", collection: "Una colección, no un clon",
    collectionIntro: "Cada juego tiene su propio instrumento visual e interacción, mientras los controles compartidos hacen que toda la colección resulte familiar.",
    dailyTitle: "Una señal, en todo el mundo", dailyBody: "Una edición diaria determinista ofrece a cada jugador el mismo puzzle justo para cada idioma y fecha.",
    unlimitedTitle: "Sigue jugando", unlimitedBody: "La generación validada produce más puzzles al terminar la selección diaria, sin anuncios, suscripciones ni esperas.",
    clearTitle: "Aprende jugando", clearBody: "Objetivos breves, lecciones jugables, pistas progresivas, guardado automático y resultados sin spoilers acompañan cada juego.",
    footer: "Puzzle Observatory de Corvus", supportTitle: "Soporte", supportIntro: "Si algo no funciona, cuéntanos qué ocurrió y te ayudaremos.",
    contactTitle: "Contacto", contactBody: "Escribe al soporte de Corvus en", helpfulTitle: "Detalles útiles", helpfulBody: "Incluye el modelo del dispositivo, la versión del sistema, la versión de la app, el nombre del juego y qué esperabas que ocurriera. No incluyas respuestas si quieres evitar spoilers.",
    dataTitle: "Tus datos", dataBody: "Puedes exportar un resumen o borrar todos los datos locales del jugador desde la pestaña Tú dentro de la app.",
    privacyTitle: "Privacidad", updated: "Última actualización: 7 de septiembre de 2026", privacyIntro: "Puzzle Observatory está diseñada para funcionar localmente y no contiene publicidad ni seguimiento entre apps.",
    localTitle: "Datos en tu dispositivo", localBody: "La app guarda intentos, estados de tableros, resultados, rachas, valoraciones de calidad, ediciones diarias en caché y preferencias para retomar cada partida. En esta versión, esa información permanece en tu dispositivo.",
    diagnosticsTitle: "Diagnósticos", diagnosticsBody: "Los diagnósticos anónimos de calidad están desactivados por defecto. Si los activas, Apple MetricKit puede proporcionar datos agregados de rendimiento y diagnóstico. Los eventos locales estructurados contienen solamente el tipo de juego y el resultado. Esta versión no los sube.",
    appleTitle: "Servicios de Apple", appleBody: "Los puzzles diarios están incluidos en la app y siguen disponibles sin conexión. Game Center y la sincronización privada con iCloud no están activos en esta versión.",
    feedbackTitle: "Comentarios y valoraciones", feedbackBody: "Después de un uso sostenido, la app puede ofrecer el diálogo de valoración del sistema de Apple. La opción Comentarios abre tu app de correo con las versiones de la app y del sistema. El mensaje solo se envía si tú decides enviarlo.",
    collectTitle: "Seguimiento y recopilación", collectBody: "El manifiesto de privacidad declara que no hay seguimiento ni tipos de datos recopilados. No se incluye ningún SDK de analítica de terceros.",
    questionsTitle: "Preguntas", questionsBody: "Para consultas de privacidad, escribe a"
  }
};

const requestedLanguage = new URLSearchParams(location.search).get("lang");
const savedLanguage = localStorage.getItem("puzzle-language");
let language = requestedLanguage === "es" || requestedLanguage === "en"
  ? requestedLanguage
  : savedLanguage || (navigator.language.startsWith("es") ? "es" : "en");

function applyLanguage() {
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = copy[language][node.dataset.i18n];
    if (value) node.textContent = value;
  });
  document.querySelector("[data-language]")?.setAttribute("aria-label", copy[language].language);
}

document.querySelector("[data-language]")?.addEventListener("click", () => {
  language = language === "en" ? "es" : "en";
  localStorage.setItem("puzzle-language", language);
  applyLanguage();
});

const menuButton = document.querySelector("[data-menu]");
const nav = document.querySelector("[data-nav]");
menuButton?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
document.addEventListener("click", (event) => {
  if (nav?.classList.contains("open") && !nav.contains(event.target) && !menuButton.contains(event.target)) {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }
});
applyLanguage();
