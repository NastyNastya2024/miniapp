// Настройки миниапп.
// ВАРИАНТ 1 (рекомендуется): миниапп на том же домене, что API:
//   https://leadbot.bigautoduck.ru/miniapp/?bot_id=1  →  API_BASE_URL: ""
// ВАРИАНТ 2: GitHub Pages — нужен рабочий HTTPS API + CORS на бэкенде:
window.MINIAPP_CONFIG = {
  API_BASE_URL: "",

  // ID бота по умолчанию (парсер-бот проекта)
  DEFAULT_BOT_ID: 1,

  // Локаль для интерфейса: "ru" | "en"
  LOCALE: "ru",
};
