(function () {
  const cfg = window.MINIAPP_CONFIG || {};

  function getBotId() {
    const params = new URLSearchParams(window.location.search);
    const fromUrl = params.get("bot_id");
    if (fromUrl) return parseInt(fromUrl, 10);

    const tg = window.Telegram && window.Telegram.WebApp;
    const startParam = tg && tg.initDataUnsafe && tg.initDataUnsafe.start_param;
    if (startParam) {
      const m = String(startParam).match(/b(?:ot)?[_-]?(\d+)/i);
      if (m) return parseInt(m[1], 10);
    }

    if (cfg.DEFAULT_BOT_ID) return cfg.DEFAULT_BOT_ID;
    return null;
  }

  function getInitData() {
    const tg = window.Telegram && window.Telegram.WebApp;
    return (tg && tg.initData) || "";
  }

  function apiBase() {
    const configured = (cfg.API_BASE_URL || "").trim().replace(/\/$/, "");
    if (configured) return configured;
    // Co-hosted on leadbot domain → same origin (no CORS).
    if (!window.location.hostname.includes("github.io")) {
      return window.location.origin;
    }
    // GitHub Pages fallback until DNS/HTTPS на AWS настроены.
    return "https://leadbot.bigautoduck.ru";
  }

  async function request(method, path, body) {
    const base = apiBase();
    const botId = getBotId();
    const headers = {
      "Content-Type": "application/json",
      "X-Telegram-Init-Data": getInitData(),
    };
    if (botId) headers["X-Miniapp-Bot-Id"] = String(botId);

    const opts = { method, headers };
    if (body !== undefined) opts.body = JSON.stringify(body);

    let res;
    try {
      res = await fetch(base + path, opts);
    } catch (networkErr) {
      const err = new Error(
        "Не удалось подключиться к API (" + base + "). " +
        "Проверьте DNS, HTTPS и что бэкенд задеплоен с /api/miniapp."
      );
      err.network = true;
      throw err;
    }
    const text = await res.text();
    let data = null;
    try { data = text ? JSON.parse(text) : null; } catch (_) { data = { detail: text }; }

    if (!res.ok) {
      const err = new Error((data && data.detail) || res.statusText || "Request failed");
      err.status = res.status;
      err.data = data;
      throw err;
    }
    return data;
  }

  window.MiniappApi = {
    getBotId,
    getBot: () => request("GET", "/api/miniapp/bot"),
    saveSettings: (payload) => request("PUT", "/api/miniapp/bot/settings", payload),
    createTrigger: (payload) => request("POST", "/api/miniapp/bot/triggers", payload),
    detachTrigger: (id) => request("POST", `/api/miniapp/bot/triggers/${id}/detach`),
    attachTrigger: (id) => request("POST", `/api/miniapp/bot/triggers/${id}/attach`),
    createMessage: (payload) => request("POST", "/api/miniapp/bot/messages", payload),
    detachMessage: (id) => request("POST", `/api/miniapp/bot/messages/${id}/detach`),
    attachMessage: (id) => request("POST", `/api/miniapp/bot/messages/${id}/attach`),
    listChats: () => request("GET", "/api/miniapp/chats"),
    createChat: (payload) => request("POST", "/api/miniapp/chats", payload),
    toggleChat: (id) => request("POST", `/api/miniapp/chats/${id}/toggle`),
  };
})();
