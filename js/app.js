(function () {
  const T = {
    ru: {
      loading: "Загрузка…",
      error: "Ошибка",
      save: "Сохранить",
      add: "Добавить",
      detach: "отвязать",
      yes: "да",
      no: "нет",
      start: "запустить",
      stop: "остановить",
      noBotId: "Укажите bot_id в URL: ?bot_id=1",
      sectionSettings: "Настройки",
      sectionTriggers: "Триггеры",
      sectionTemplates: "Шаблоны диалогов",
      sectionChats: "Чаты",
      settingsLead: "Персона, цели и контакты бота",
      triggersLead: "По каким словам в чате искать потенциальных клиентов",
      templatesLead: "Текстовые заготовки для диалога",
      chatsLead: "Telegram-группы и каналы, которые отслеживает бот",
      personality: "Личность",
      environment: "Окружение",
      dialogGoal: "Цель диалога",
      product: "Продукт, который продаём",
      communicationRules: "Правила общения",
      contactPerson: "Контактное лицо",
      salesLinks: "Релевантные ссылки для продажи",
      promptProfile: "Промпт-профиль",
      isDefault: "Бот проекта по умолчанию",
      pattern: "Шаблон",
      kind: "Тип",
      keyword: "ключевое слово",
      phrase: "фраза",
      regex: "регулярное выражение",
      noTriggers: "нет привязанных триггеров",
      freeTriggers: "Свободные триггеры проекта:",
      msgName: "Название",
      msgText: "Текст",
      noTemplates: "нет привязанных шаблонов",
      freeTemplates: "Свободные шаблоны диалогов:",
      chatTitle: "Название",
      telegramId: "TELEGRAM_ID",
      active: "Активен",
      matches: "Совпадения",
      noChats: "Чатов пока нет",
      saved: "Сохранено",
    },
    en: {
      loading: "Loading…",
      error: "Error",
      save: "Save",
      add: "Add",
      detach: "detach",
      yes: "yes",
      no: "no",
      start: "start",
      stop: "stop",
      noBotId: "Set bot_id in URL: ?bot_id=1",
      sectionSettings: "Settings",
      sectionTriggers: "Triggers",
      sectionTemplates: "Dialog templates",
      sectionChats: "Chats",
      settingsLead: "Persona, goals and contacts",
      triggersLead: "Keywords to find potential clients in chats",
      templatesLead: "Dialog message templates",
      chatsLead: "Telegram groups and channels monitored by the bot",
      personality: "Personality",
      environment: "Environment",
      dialogGoal: "Dialog goal",
      product: "Product we sell",
      communicationRules: "Communication rules",
      contactPerson: "Contact person",
      salesLinks: "Sales links",
      promptProfile: "Prompt profile",
      isDefault: "Default project bot",
      pattern: "Pattern",
      kind: "Type",
      keyword: "keyword",
      phrase: "phrase",
      regex: "regex",
      noTriggers: "no attached triggers",
      freeTriggers: "Free project triggers:",
      msgName: "Name",
      msgText: "Text",
      noTemplates: "no attached templates",
      freeTemplates: "Free dialog templates:",
      chatTitle: "Title",
      telegramId: "TELEGRAM_ID",
      active: "Active",
      matches: "Matches",
      noChats: "No chats yet",
      saved: "Saved",
    },
  };

  const locale = (window.MINIAPP_CONFIG && window.MINIAPP_CONFIG.LOCALE) || "ru";
  const t = (key) => (T[locale] && T[locale][key]) || key;

  const root = document.getElementById("app");
  let state = null;

  function showError(msg) {
    const el = document.getElementById("global-error");
    if (!el) return;
    el.textContent = msg;
    el.classList.remove("alert--hidden");
  }

  function hideError() {
    const el = document.getElementById("global-error");
    if (el) el.classList.add("alert--hidden");
  }

  function flash(msg) {
    const tg = window.Telegram && window.Telegram.WebApp;
    if (tg && tg.showAlert) tg.showAlert(msg);
  }

  function esc(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function render() {
    if (!state) return;
    const b = state.bot;
    const profiles = state.profiles || [];

    root.innerHTML = `
      <header class="app-header">
        <div class="app-logo">LB</div>
        <h1 class="app-title">${esc(b.name)}${b.is_default ? `<span class="badge">${locale === "ru" ? "по умолчанию" : "default"}</span>` : ""}</h1>
      </header>

      <details class="accordion" open>
        <summary>${t("sectionSettings")}</summary>
        <div class="accordion__body">
          <p class="hint">${t("settingsLead")}</p>
          <form id="form-settings">
            <div class="field"><label class="label">${t("personality")}</label>
              <textarea class="textarea" name="personality">${esc(b.personality)}</textarea></div>
            <div class="field"><label class="label">${t("environment")}</label>
              <textarea class="textarea" name="environment">${esc(b.environment)}</textarea></div>
            <div class="field"><label class="label">${t("dialogGoal")}</label>
              <textarea class="textarea" name="dialog_goal">${esc(b.dialog_goal)}</textarea></div>
            <div class="field"><label class="label">${t("product")}</label>
              <textarea class="textarea" name="product">${esc(b.product)}</textarea></div>
            <div class="field"><label class="label">${t("communicationRules")}</label>
              <textarea class="textarea" name="communication_rules">${esc(b.communication_rules)}</textarea></div>
            <div class="field"><label class="label">${t("contactPerson")}</label>
              <input class="input" name="contact_person" value="${esc(b.contact_person)}"></div>
            <div class="field"><label class="label">${t("salesLinks")}</label>
              <textarea class="textarea" name="contact_materials">${esc(b.contact_materials)}</textarea></div>
            <div class="field"><label class="label">${t("promptProfile")}</label>
              <select class="select" name="prompt_profile_id">
                <option value="">—</option>
                ${profiles.map((p) => `<option value="${p.id}"${p.id === b.prompt_profile_id ? " selected" : ""}>${esc(p.name)}</option>`).join("")}
              </select></div>
            <div class="field check-row">
              <input type="checkbox" name="is_default" id="is-default"${b.is_default ? " checked" : ""}>
              <label for="is-default">${t("isDefault")}</label>
            </div>
            <div class="actions"><button type="submit" class="btn btn-primary">${t("save")}</button></div>
          </form>
        </div>
      </details>

      <details class="accordion">
        <summary>${t("sectionTriggers")}</summary>
        <div class="accordion__body">
          <p class="hint">${t("triggersLead")}</p>
          <form id="form-trigger">
            <div class="field"><label class="label">${t("pattern")}</label>
              <input class="input" name="pattern" required></div>
            <div class="field"><label class="label">${t("kind")}</label>
              <select class="select" name="kind">
                <option value="keyword">${t("keyword")}</option>
                <option value="phrase">${t("phrase")}</option>
                <option value="regex">${t("regex")}</option>
              </select></div>
            <div class="actions"><button type="submit" class="btn btn-primary">${t("add")}</button></div>
          </form>
          <div class="table-wrap"><table>
            <thead><tr><th>#</th><th>${t("pattern")}</th><th>${t("kind")}</th><th></th></tr></thead>
            <tbody>
              ${(state.attached_triggers || []).map((tr) => `
                <tr>
                  <td>${tr.id}</td>
                  <td class="mono">${esc(tr.pattern)}</td>
                  <td>${esc(tr.kind)}</td>
                  <td class="text-right"><button class="btn btn-outline btn-sm" data-detach-trigger="${tr.id}">${t("detach")}</button></td>
                </tr>`).join("") || `<tr><td colspan="4" class="empty">${t("noTriggers")}</td></tr>`}
            </tbody>
          </table></div>
          ${(state.unattached_triggers || []).length ? `
            <p class="hint">${t("freeTriggers")}</p>
            <div class="chips">${state.unattached_triggers.map((tr) =>
              `<button class="btn btn-attach" data-attach-trigger="${tr.id}">+ ${esc(tr.pattern)}</button>`
            ).join("")}</div>` : ""}
        </div>
      </details>

      <details class="accordion">
        <summary>${t("sectionTemplates")}</summary>
        <div class="accordion__body">
          <p class="hint">${t("templatesLead")}</p>
          <form id="form-message">
            <div class="field"><label class="label">${t("msgName")}</label>
              <input class="input" name="name" required></div>
            <div class="field"><label class="label">${t("msgText")}</label>
              <textarea class="textarea mono" name="text" required></textarea></div>
            <div class="actions"><button type="submit" class="btn btn-primary">${t("add")}</button></div>
          </form>
          <div class="table-wrap"><table>
            <thead><tr><th>#</th><th>${t("msgName")}</th><th>${t("msgText")}</th><th></th></tr></thead>
            <tbody>
              ${(state.attached_messages || []).map((m) => `
                <tr>
                  <td>${m.id}</td>
                  <td>${esc(m.name)}</td>
                  <td class="mono">${esc((m.text || "").slice(0, 80))}${(m.text || "").length > 80 ? "…" : ""}</td>
                  <td class="text-right"><button class="btn btn-outline btn-sm" data-detach-message="${m.id}">${t("detach")}</button></td>
                </tr>`).join("") || `<tr><td colspan="4" class="empty">${t("noTemplates")}</td></tr>`}
            </tbody>
          </table></div>
          ${(state.unattached_messages || []).length ? `
            <p class="hint">${t("freeTemplates")}</p>
            <div class="chips">${state.unattached_messages.map((m) =>
              `<button class="btn btn-attach" data-attach-message="${m.id}">+ ${esc(m.name)}</button>`
            ).join("")}</div>` : ""}
        </div>
      </details>

      <details class="accordion">
        <summary>${t("sectionChats")}</summary>
        <div class="accordion__body">
          <p class="hint">${t("chatsLead")}</p>
          <form id="form-chat">
            <div class="field"><label class="label">${t("telegramId")}</label>
              <input class="input" name="telegram_id" type="number" required></div>
            <div class="field"><label class="label">${t("chatTitle")}</label>
              <input class="input" name="title" required></div>
            <div class="actions"><button type="submit" class="btn btn-primary">${t("add")}</button></div>
          </form>
          <div class="table-wrap"><table>
            <thead><tr><th>#</th><th>${t("chatTitle")}</th><th>tg id</th><th>${t("active")}</th><th>${t("matches")}</th><th></th></tr></thead>
            <tbody>
              ${(state.chats || []).map((c) => `
                <tr>
                  <td>${c.id}</td>
                  <td>${esc(c.title)}</td>
                  <td class="mono">${c.telegram_id}</td>
                  <td class="${c.is_active ? "status-ok" : "status-off"}">${c.is_active ? t("yes") : t("no")}</td>
                  <td>${state.match_counts && state.match_counts[c.id] != null ? state.match_counts[c.id] : 0}</td>
                  <td class="text-right">
                    <button class="btn btn-outline btn-sm" data-toggle-chat="${c.id}">
                      ${c.is_active ? t("stop") : t("start")}
                    </button>
                  </td>
                </tr>`).join("") || `<tr><td colspan="6" class="empty">${t("noChats")}</td></tr>`}
            </tbody>
          </table></div>
        </div>
      </details>
    `;

    bindEvents();
  }

  function bindEvents() {
    const formSettings = document.getElementById("form-settings");
    if (formSettings) {
      formSettings.addEventListener("submit", async (e) => {
        e.preventDefault();
        const fd = new FormData(formSettings);
        try {
          await MiniappApi.saveSettings({
            personality: fd.get("personality"),
            environment: fd.get("environment"),
            dialog_goal: fd.get("dialog_goal"),
            product: fd.get("product"),
            communication_rules: fd.get("communication_rules"),
            contact_person: fd.get("contact_person"),
            contact_materials: fd.get("contact_materials"),
            prompt_profile_id: fd.get("prompt_profile_id") || null,
            is_default: fd.get("is_default") === "on",
          });
          flash(t("saved"));
          await load();
        } catch (err) { showError(err.message); }
      });
    }

    const formTrigger = document.getElementById("form-trigger");
    if (formTrigger) {
      formTrigger.addEventListener("submit", async (e) => {
        e.preventDefault();
        const fd = new FormData(formTrigger);
        try {
          await MiniappApi.createTrigger({
            pattern: fd.get("pattern"),
            kind: fd.get("kind"),
          });
          formTrigger.reset();
          await load();
        } catch (err) { showError(err.message); }
      });
    }

    const formMessage = document.getElementById("form-message");
    if (formMessage) {
      formMessage.addEventListener("submit", async (e) => {
        e.preventDefault();
        const fd = new FormData(formMessage);
        try {
          await MiniappApi.createMessage({
            name: fd.get("name"),
            text: fd.get("text"),
          });
          formMessage.reset();
          await load();
        } catch (err) { showError(err.message); }
      });
    }

    const formChat = document.getElementById("form-chat");
    if (formChat) {
      formChat.addEventListener("submit", async (e) => {
        e.preventDefault();
        const fd = new FormData(formChat);
        try {
          await MiniappApi.createChat({
            telegram_id: Number(fd.get("telegram_id")),
            title: fd.get("title"),
            type: "supergroup",
          });
          formChat.reset();
          await load();
        } catch (err) { showError(err.message); }
      });
    }

    root.querySelectorAll("[data-detach-trigger]").forEach((btn) => {
      btn.addEventListener("click", async () => {
        try {
          await MiniappApi.detachTrigger(btn.dataset.detachTrigger);
          await load();
        } catch (err) { showError(err.message); }
      });
    });

    root.querySelectorAll("[data-attach-trigger]").forEach((btn) => {
      btn.addEventListener("click", async () => {
        try {
          await MiniappApi.attachTrigger(btn.dataset.attachTrigger);
          await load();
        } catch (err) { showError(err.message); }
      });
    });

    root.querySelectorAll("[data-detach-message]").forEach((btn) => {
      btn.addEventListener("click", async () => {
        try {
          await MiniappApi.detachMessage(btn.dataset.detachMessage);
          await load();
        } catch (err) { showError(err.message); }
      });
    });

    root.querySelectorAll("[data-attach-message]").forEach((btn) => {
      btn.addEventListener("click", async () => {
        try {
          await MiniappApi.attachMessage(btn.dataset.attachMessage);
          await load();
        } catch (err) { showError(err.message); }
      });
    });

    root.querySelectorAll("[data-toggle-chat]").forEach((btn) => {
      btn.addEventListener("click", async () => {
        try {
          await MiniappApi.toggleChat(btn.dataset.toggleChat);
          await load();
        } catch (err) { showError(err.message); }
      });
    });
  }

  async function load() {
    hideError();
    try {
      state = await MiniappApi.getBot();
      render();
    } catch (err) {
      showError(err.message || t("error"));
      root.innerHTML = `<div class="loading">${esc(err.message || t("error"))}</div>`;
    }
  }

  async function init() {
    const tg = window.Telegram && window.Telegram.WebApp;
    if (tg) {
      tg.ready();
      tg.expand();
      if (tg.setHeaderColor) tg.setHeaderColor("secondary_bg_color");
    }

    if (!MiniappApi.getBotId()) {
      showError(t("noBotId"));
      root.innerHTML = `<div class="loading">${t("noBotId")}</div>`;
      return;
    }

    root.innerHTML = `<div class="loading">${t("loading")}</div>`;
    await load();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
