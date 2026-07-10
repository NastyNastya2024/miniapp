# LeadBot Mini App

Настройки проекта (триггеры, чаты, персона бота) — в Telegram Mini App на **сервере AWS**.

## URL миниаппа (без домена)

```
http://3.82.3.33:8000/miniapp/?bot_id=1
```

Миниапп и API на **одном адресе** — CORS не нужен.

## BotFather

В настройках бота → **Menu Button** / **Web App** укажите:

```
http://3.82.3.33:8000/miniapp/?bot_id=1
```

## Смена IP сервера

Если IP изменился, обновите в `~/leadbot/.env` на сервере:

```env
MINIAPP_URL=http://НОВЫЙ_IP:8000/miniapp/
MINIAPP_ALLOWED_ORIGINS=http://НОВЫЙ_IP:8000
```

Затем: `docker compose -f docker-compose.yml -f docker-compose.server.yml up -d admin`

## Разделение

| LeadBot Admin (`:8000/login`) | Mini App (`:8000/miniapp/`) |
|---|---|
| Telegram-аккаунт | Настройки бота |
| Рассылка | Триггеры |
| Платформа | Шаблоны, чаты |
