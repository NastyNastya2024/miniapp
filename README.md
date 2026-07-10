# LeadBot Mini App

Telegram Mini App для **настроек конкретного проекта**: триггеры, шаблоны диалогов, чаты, персона бота.

Платформенная админка LeadBot (аккаунт Telegram, рассылка, дашборд) остаётся на бэкенде.

## URL

- GitHub Pages: `https://nastynastya2024.github.io/miniapp/?bot_id=1`
- После переноса на AWS: поменяйте `API_BASE_URL` в `config.js`

## Настройка

### 1. Миниапп (`config.js`)

```js
window.MINIAPP_CONFIG = {
  API_BASE_URL: "https://your-aws-domain.example.com",
  DEFAULT_BOT_ID: null,
  LOCALE: "ru",
};
```

### 2. Бэкенд LeadBot (`.env`)

```env
TELEGRAM_BOT_TOKEN=...          # токен бота из @BotFather
MINIAPP_URL=https://your-miniapp-url/
MINIAPP_ALLOWED_ORIGINS=https://your-miniapp-origin
MINIAPP_DEV_MODE=false
```

### 3. BotFather

Укажите URL миниаппа в настройках Web App бота, например:

`https://nastynastya2024.github.io/miniapp/?bot_id=1`

## Разделение

| LeadBot Admin | Mini App |
|---|---|
| Telegram-аккаунт | Настройки (персона, цели) |
| Авто-вступление в чаты | Триггеры |
| Рассылка / статистика | Шаблоны диалогов |
| Платформа / тарифы | Чаты |
