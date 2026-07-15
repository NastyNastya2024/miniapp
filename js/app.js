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
      apiError: "Не удалось загрузить настройки. Проверьте API_BASE_URL в config.js и что бэкенд задеплоен.",
      pageTitle: "Настройки проекта",
      pageSubtitle: "Находит лидов в Telegram чатах<br>по триггерным словам",
      tabSettings: "Бот",
      tabMailing: "Рассылка",
      tabCabinet: "Профиль",
      tabBot: "Бот",
      tabProfile: "Профиль",
      cabinetTitle: "Личный кабинет",
      cabinetProfile: "Профиль",
      cabinetUserId: "ID пользователя",
      cabinetFirstName: "Имя",
      cabinetLastName: "Фамилия",
      cabinetUsername: "Username",
      cabinetBilling: "Платежные данные",
      cabinetPlan: "Тариф",
      cabinetPrice: "Стоимость",
      cabinetPaidUntil: "Оплачено до",
      cabinetBillingStatus: "Статус оплаты",
      cabinetStatusActive: "Активна",
      cabinetStatusExpired: "Истекла",
      cabinetStatusNotSet: "Не задана",
      cabinetSupport: "Связь с поддержкой",
      cabinetSupportPhone: "Телефон",
      cabinetSupportEmail: "Email",
      cabinetSupportTelegram: "Telegram",
      cabinetSupportNote: "Комментарий",
      cabinetEmpty: "—",
      sectionTelegram: "Telegram-аккаунт",
      telegramLead: "Подключите Telegram-аккаунт для работы бота в чатах.",
      connectAccount: "Подключить новый аккаунт",
      phone: "Телефон",
      phoneHint: "Номер аккаунта для рассылки — может отличаться от вашего",
      stepCode: "Код подтверждения",
      step2fa: "Пароль 2FA",
      stepCodeWait: "Сначала укажите телефон и отправьте код.",
      step2faWait: "Сначала подтвердите код из SMS.",
      stepPhoneDone: "Номер отправлен",
      stepCodeDone: "Код подтверждён",
      moreInfo: "Инструкция",
      instrPhoneTitle: "Шаг 1 — Телефон",
      instrPhone1: "Введите номер аккаунта для рассылки. Он может не совпадать с Telegram-аккаунтом, из которого вы открыли бота.",
      instrPhone2: "На телефоне с этим номером откройте Telegram — появится экран подтверждения номера, как на скрине.",
      instrCodeTitle: "Шаг 2 — Код подтверждения",
      instrCode1: "Код придёт в чат «Telegram» (с синей галочкой) на телефоне с указанным номером.",
      instrCode2: "Скопируйте 5-значный код из сообщения и вставьте в поле выше. Никому не сообщайте код.",
      instr2faTitle: "Шаг 3 — Пароль 2FA",
      instr2fa1: "Если на аккаунте включена двухэтапная аутентификация, Telegram попросит облачный пароль.",
      instr2fa2: "Введите пароль, который задавали в Настройки → Конфиденциальность → Двухэтапная аутентификация. Это не код из SMS.",
      stepPhoneHelp: "Важно: номер может не совпадать с Telegram-аккаунтом, из которого вы сейчас открыли бота.\n\nУкажите телефон того аккаунта, с которого бот будет писать в чаты — это может быть другой номер.\n\nФормат: +79001234567.\n\nКод придёт в приложение Telegram на телефон с этим номером — откройте Telegram на своём устройстве и проверьте чат «Telegram» или SMS.",
      stepCodeHelp: "Код приходит в чат «Telegram» (с синей галочкой) или по SMS на указанный номер.\n\nПример сообщения: «Код для входа в Telegram: 60078».\n\nНикому не сообщайте код — даже если пишут от имени Telegram.\n\nЭто одноразовый код на несколько минут. Не путайте с паролем 2FA.",
      step2faHelp: "Если на аккаунте включена двухэтапная аутентификация, Telegram запросит облачный пароль.\n\nЭто пароль, который вы задавали в Настройки → Конфиденциальность → Двухэтапная аутентификация.\n\nЕго не присылают по SMS — введите тот, что помните.\n\nЕсли забыли — нажмите «Забыли пароль?» в Telegram на телефоне с этим номером.",
      password2faHint: "Пароль из настроек Telegram, не код из SMS",
      sendCode: "Отправить код",
      enterCode: "Код из SMS",
      enterPassword: "Пароль 2FA",
      cancel: "Отмена",
      disable: "Отключить",
      apiNotConfigured: "Telegram API не настроен на сервере.",
      noAccount: "Аккаунт не подключён.",
      autoJoinLabel: "Автоматически вступать в группы при запуске",
      autoJoinFieldHint: "По умолчанию выключено — безопаснее вступать вручную в Telegram. Если включить, при «Запустить» аккаунт бота попытается сам вступить в группу.",
      autoJoinModalTitle: "Авто-join в группы",
      autoJoinModalLead: "Авто-join — автоматическое вступление подключённого Telegram-аккаунта бота в группу при запуске рассылки. Боту нужно состоять в группе, чтобы читать сообщения и находить совпадения по триггерам.",
      autoJoinModalHowTitle: "Как это работает",
      autoJoinModalHowText: "Добавьте чат (TELEGRAM_ID и название), включите авто-join и нажмите «Запустить». Аккаунт бота попытается вступить в группу без ваших действий в приложении Telegram.",
      autoJoinModalWhyFailTitle: "Почему авто-join может не сработать",
      autoJoinFail1: "Telegram-аккаунт бота не подключён или отключён",
      autoJoinFail2: "Глобальный переключатель авто-join на платформе выключен",
      autoJoinFail3: "Группа закрытая — нужна ссылка-приглашение, а не только ID",
      autoJoinFail4: "Вступление требует одобрения администратора группы",
      autoJoinFail5: "Указан неверный TELEGRAM_ID или аккаунт заблокирован в группе",
      autoJoinFail6: "Telegram ограничил аккаунт: flood wait, лимит вступлений, подозрение на спам",
      autoJoinFail7: "Администратор платформы принудительно отключил авто-join для бота",
      autoJoinModalRiskTitle: "Риски и ответственность",
      autoJoinModalRiskText: "Массовое автоматическое вступление в группы повышает риск блокировки аккаунта Telegram. Включая авто-join, вы принимаете эту ответственность на себя, включая требования законов о рекламе и персональных данных.",
      autoJoinModalManualHint: "Безопасная альтернатива: вступите в группы вручную в Telegram на телефоне с подключённым номером, добавьте чат сюда и запустите рассылку.",
      mailingLead: "Мониторинг чатов и обработка совпадений.",
      startMailingAccent: "Начать рассылку",
      startMailing: "Запустить",
      stopMailingAccent: "Остановить рассылку",
      stopMailing: "Остановить",
      aboutBot: "Как бот работает",
      aboutBotTitle: "Как бот работает",
      aboutBotLead: "Парсер бот находит лидов в Telegram-чатах по триггерным словам и помогает быстро начать диалог.",
      aboutBotText1: "Подключите Telegram-аккаунт, укажите характеристики бота, добавьте чаты и триггеры — затем запустите рассылку.",
      aboutBotText2: "Когда в чате появляется сообщение с триггером, бот фиксирует совпадение на вкладке «Рассылка».",
      faqSearchPlaceholder: "Поиск по FAQ…",
      faqEmpty: "Ничего не найдено. Попробуйте другой запрос.",
      faqWhyTitle: "Зачем этот бот?",
      faqWhyLead: "LeadBot находит клиентов там, где они уже обсуждают ваш продукт — в Telegram-группах — и сам начинает тёплый диалог.",
      faqWhyGroupCaption: "В группах люди спрашивают рекомендации, называют возраст, район и бюджет — это готовые лиды.",
      faqWhyDialogCaption: "Бот пишет от лица вашего менеджера: приветствие, фото, выгоды, цены и следующий шаг — без ручной работы.",
      faqAccountTitle: "Как добавить Telegram-аккаунт",
      faqAccountLead: "Рассылка идёт с отдельного пользовательского аккаунта. Подключение — на вкладке «Бот» → «Telegram-аккаунт» в три шага.",
      faqAccountStep1: "Введите номер телефона аккаунта для рассылки (он может отличаться от аккаунта, из которого вы открыли миниапп).",
      faqAccountStep2: "Откройте Telegram на этом телефоне и введите код из чата «Telegram» (синяя галочка).",
      faqAccountStep3: "Если включена 2FA — введите облачный пароль из Настройки → Конфиденциальность → Двухэтапная аутентификация.",
      faqSettingsTitle: "Характеристики бота",
      faqSettingsText: "На вкладке «Бот» опишите личность, цель диалога, продукт и контакты. Эти поля питают AI-ответы Claude Opus, чтобы бот говорил в тоне вашего бизнеса.",
      faqTriggersTitle: "Триггеры",
      faqTriggersText: "Ключевые слова и фразы, по которым бот ловит сообщения в чатах (например: «лагерь», «ищем курс»). Без триггеров рассылка не стартует.",
      faqTemplatesTitle: "Шаблоны диалогов",
      faqTemplatesText: "Необязательные заготовки сообщений. Можно не заполнять: для AI-диалогов достаточно характеристик бота.",
      faqChatsTitle: "Чаты",
      faqChatsText: "Telegram-группы и каналы для мониторинга. Добавьте чат вручную или через авто-join. Бот должен быть участником чата на подключённом аккаунте.",
      faqMailingTitle: "Рассылка",
      faqMailingText: "Вкладка «Рассылка»: запуск/остановка мониторинга, статистика и список совпадений. Когда в чате появляется триггер — совпадение попадает сюда.",
      faqCabinetTitle: "Личный кабинет",
      faqCabinetText: "Профиль Telegram, статус оплаты и контакты поддержки. Здесь же удобно смотреть, до какого срока активен доступ.",
      faqPaymentTitle: "Оплата и пакеты диалогов",
      faqPaymentText: "Кнопка «Пополнить баланс» открывает пакеты 100 / 500 / 1000 диалогов. Оплата через ЮKassa; после успешного платежа доступ продлевается автоматически.",
      topUpBalance: "Пополнить баланс",
      topUpTitle: "Пополнить баланс",
      topUpLead: "Оплата подписки и пополнение баланса.",
      topUpText: "Онлайн-оплата пока в подготовке. Напишите в поддержку — поможем продлить доступ.",
      paywallTitle: "LeadBot Premium",
      paywallSubtitle: "Покупайте пакеты диалогов Claude Opus — без привязки к сроку",
      paywallRub: "₽ Рубли",
      paywallStars: "Stars",
      paywallDialogsLabel: "{n} диалогов",
      paywallPerDialog: "{price} за диалог",
      paywallBestValue: "Выгодно",
      paywallFeatureDialogsTitle: "Пакет AI-диалогов",
      paywallFeatureDialogsText: "Claude Opus с thinking — оплата за диалоги, без отдельного списания токенов",
      paywallFeatureMailingTitle: "Рассылка без пауз",
      paywallFeatureMailingText: "Мониторинг чатов и ответы по триггерам, пока хватает диалогов",
      paywallFeatureSupportTitle: "Приоритетная поддержка",
      paywallFeatureSupportText: "Поможем с подключением аккаунта, чатами и настройкой триггеров",
      paywallCta: "Оплатить",
      paywallFoot: "Пакет {n} диалогов · {amount}",
      paywallPending: "Онлайн-оплата в подключении. Напишите в поддержку — активируем пакет вручную.",
      paywallRedirect: "Переходим к оплате…",
      paywallFailed: "Не удалось создать платёж. Попробуйте ещё раз или напишите в поддержку.",
      paywallNotConfigured: "Оплата временно недоступна. Напишите в поддержку.",
      mailingNotReady: "Заполните все условия ниже, чтобы начать рассылку.",
      mailingGoToSettings: "Для подключения аккаунта и заполнения настроек перейдите на вкладку «Бот».",
      mailingNeedAccount: "Подключите Telegram-аккаунт",
      mailingNeedSettings: "Заполните все поля в «Характеристики бота»",
      mailingNeedChats: "Добавьте хотя бы один чат",
      mailingNeedTriggers: "Добавьте хотя бы один триггер",
      mailingSuccessTitle: "Рассылка началась!",
      mailingSuccessText: "Мониторинг чатов запущен. Следите за совпадениями на вкладке «Рассылка».",
      mailingSuccessOk: "Отлично",
      templatesOptionalHint: "Необязательно — для запуска рассылки шаблоны диалогов можно не добавлять.",
      mailingChats: "Чатов",
      mailingMatches: "Совпадений",
      mailingRunning: "Рассылка запущена",
      mailingStopped: "Рассылка остановлена",
      sectionStats: "Статистика",
      sectionRuns: "Запуск",
      sectionRunsHistory: "История запусков",
      sectionMatches: "Совпадения",
      activeChats: "Чатов активно",
      lastActivity: "Последняя активность",
      colStarted: "Запуск",
      colStopped: "Остановка",
      colActions: "Действия",
      runActive: "идёт",
      runsEmpty: "Запусков пока не было",
      statsNoMailing: "Рассылки пока нет — создайте, чтобы запускать мониторинг чатов.",
      filterNew: "Новые",
      filterReviewed: "Просмотренные",
      filterDismissed: "Отклонённые",
      filterAll: "Все",
      matchWhen: "Когда",
      matchUser: "Пользователь",
      matchChat: "Чат",
      matchMessage: "Сообщение",
      matchStatus: "Статус",
      matchesEmpty: "Совпадений пока нет",
      pauseMailing: "Пауза",
      sectionSettings: "Характеристики бота",
      sectionTriggers: "Триггеры",
      sectionTemplates: "Шаблоны диалогов",
      sectionChats: "Чаты",
      settingsLead: "Персона, цели и контакты бота",
      settingsScrollHint: "Прокрутите вниз — поля внутри каждого раздела",
      botName: "Название",
      personality: "Личность",
      personalityHint: "Кто бот, его голос и роль. Пишите кратко.",
      personalityAndEnvironment: "Личность и окружение",
      personalityAndEnvironmentHint: "Кто бот, его голос и роль. Где и в каком контексте общается. Пишите кратко.",
      environment: "Окружение",
      environmentHint: "Где и в каком контексте бот общается.",
      dialogGoal: "Цель диалога",
      dialogGoalHint: "Чего бот должен добиться в переписке.",
      product: "Продукт, который продаём",
      productHint: "Короткое позиционирование — не источник фактов.",
      communicationRules: "Правила общения",
      communicationRulesHint: "Правила «делай/не делай». Кратко.",
      contactPerson: "Контактное лицо",
      contactPersonHint: "Кого бот называет контактом для клиента.",
      salesLinks: "Релевантные ссылки для продажи",
      salesLinksHint: "По одной ссылке на строку.",
      promptProfile: "Промпт-профиль",
      isDefault: "Бот проекта по умолчанию",
      requireAdConsentLabel: "Бот спрашивает согласие на рекламу",
      requireAdConsentHint: "Согласно ФЗ «О рекламе» № 38-ФЗ, ст. 18: реклама по сетям электросвязи (в т.ч. мессенджеры) допускается только при предварительном согласии получателя. Бот запрашивает согласие перед рекламным сообщением.",
      moreDetails: "Подробнее",
      consentModalTitle: "Согласие на рекламу",
      consentModalLead: "Перед рекламным сообщением бот запрашивает согласие получателя — это обязательное требование закона и снижает юридические риски.",
      consentExampleLabel: "Пример запроса бота",
      consentExampleText: "Разрешите прорекламировать вам продукт?",
      consentFinesIntro: "Штрафы за нарушение законодательства о рекламе (ст. 14.3 КоАП РФ, в связи с ФЗ № 38-ФЗ «О рекламе», ст. 18):",
      consentFine1: "для должностных лиц — от 4 000 до 20 000 ₽",
      consentFine2: "для юридических лиц — от 100 000 до 500 000 ₽",
      consentFine3: "при повторном нарушении — до 1 000 000 ₽",
      consentTemplatesHint: "В разделе «Шаблоны диалогов» вы можете добавить фразы, которыми бот будет говорить о рекламе после получения согласия.",
      pattern: "Триггерное слово",
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
      triggersLead: "По каким словам в чате искать потенциальных клиентов",
      templatesLead: "Текстовые заготовки для диалога",
      chatsLead: "Telegram-группы и каналы, которые отслеживает бот",
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
      apiError: "Failed to load settings. Check API_BASE_URL in config.js and backend deployment.",
      pageTitle: "Project settings",
      pageSubtitle: "Finds leads in Telegram chats<br>by trigger keywords",
      tabSettings: "Bot",
      tabMailing: "Mailing",
      tabCabinet: "Profile",
      tabBot: "Bot",
      tabProfile: "Profile",
      cabinetTitle: "Personal account",
      cabinetProfile: "Profile",
      cabinetUserId: "User ID",
      cabinetFirstName: "First name",
      cabinetLastName: "Last name",
      cabinetUsername: "Username",
      cabinetBilling: "Payment details",
      cabinetPlan: "Plan",
      cabinetPrice: "Price",
      cabinetPaidUntil: "Paid until",
      cabinetBillingStatus: "Payment status",
      cabinetStatusActive: "Active",
      cabinetStatusExpired: "Expired",
      cabinetStatusNotSet: "Not set",
      cabinetSupport: "Support contacts",
      cabinetSupportPhone: "Phone",
      cabinetSupportEmail: "Email",
      cabinetSupportTelegram: "Telegram",
      cabinetSupportNote: "Note",
      cabinetEmpty: "—",
      sectionTelegram: "Telegram account",
      telegramLead: "Connect a Telegram account for the bot to work in chats.",
      connectAccount: "Connect new account",
      phone: "Phone",
      phoneHint: "Mailing account — may differ from your current Telegram",
      stepCode: "Verification code",
      step2fa: "2FA password",
      stepCodeWait: "Enter your phone and send the code first.",
      step2faWait: "Confirm the SMS code first.",
      stepPhoneDone: "Number submitted",
      stepCodeDone: "Code confirmed",
      moreInfo: "Instructions",
      instrPhoneTitle: "Step 1 — Phone",
      instrPhone1: "Enter the mailing account phone. It may differ from the Telegram account you opened the bot from.",
      instrPhone2: "On the phone with that number, open Telegram — you will see a number confirmation screen like in the screenshot.",
      instrCodeTitle: "Step 2 — Verification code",
      instrCode1: "The code arrives in the Telegram chat (blue checkmark) on the phone with that number.",
      instrCode2: "Copy the 5-digit code from the message and paste it above. Never share the code.",
      instr2faTitle: "Step 3 — 2FA password",
      instr2fa1: "If two-step verification is enabled, Telegram will ask for your cloud password.",
      instr2fa2: "Enter the password from Settings → Privacy → Two-Step Verification. It is not the SMS code.",
      stepPhoneHelp: "Important: this number may differ from the Telegram account you are using to open the bot.\n\nEnter the phone of the account the bot will use for mailing — it can be a different number.\n\nFormat: +79001234567.\n\nThe code will arrive in Telegram on that phone — open the app and check the Telegram chat or SMS.",
      stepCodeHelp: "The code arrives in the Telegram chat (blue checkmark) or via SMS.\n\nExample: «Login code: 60078».\n\nNever share the code with anyone.\n\nIt is one-time and expires in minutes — not the 2FA password.",
      step2faHelp: "If two-step verification is enabled, Telegram will ask for your cloud password.\n\nYou set it in Settings → Privacy → Two-Step Verification.\n\nIt is not sent by SMS — enter the one you remember.\n\nIf forgotten, use «Forgot password?» in Telegram on that phone.",
      password2faHint: "Password from Telegram settings, not the SMS code",
      sendCode: "Send code",
      enterCode: "SMS code",
      enterPassword: "2FA password",
      cancel: "Cancel",
      disable: "Disable",
      apiNotConfigured: "Telegram API is not configured on the server.",
      noAccount: "No account connected.",
      autoJoinLabel: "Automatically join groups when mailing starts",
      autoJoinFieldHint: "Off by default — safer to join manually in Telegram. When enabled, pressing Start makes the bot account try to join the group.",
      autoJoinModalTitle: "Auto-join groups",
      autoJoinModalLead: "Auto-join lets the connected Telegram account join a group when you start mailing. The bot must be in the group to read messages and find trigger matches.",
      autoJoinModalHowTitle: "How it works",
      autoJoinModalHowText: "Add a chat (TELEGRAM_ID and title), enable auto-join, and press Start. The bot account will try to join the group without manual action in the Telegram app.",
      autoJoinModalWhyFailTitle: "Why auto-join may fail",
      autoJoinFail1: "The bot's Telegram account is not connected or is disabled",
      autoJoinFail2: "The platform's global auto-join switch is off",
      autoJoinFail3: "The group is private — an invite link is needed, not just an ID",
      autoJoinFail4: "Joining requires admin approval in the group",
      autoJoinFail5: "Wrong TELEGRAM_ID or the account is banned in the group",
      autoJoinFail6: "Telegram limited the account: flood wait, join limits, spam suspicion",
      autoJoinFail7: "A platform admin force-disabled auto-join for this bot",
      autoJoinModalRiskTitle: "Risks and liability",
      autoJoinModalRiskText: "Mass automatic joining raises the risk of a Telegram ban. By enabling auto-join you accept that liability, including advertising and personal-data law requirements.",
      autoJoinModalManualHint: "Safer alternative: join groups manually in Telegram on the phone with the connected number, add the chat here, then start mailing.",
      mailingLead: "Chat monitoring and match processing.",
      startMailingAccent: "Start mailing",
      startMailing: "Start",
      stopMailingAccent: "Stop mailing",
      stopMailing: "Stop",
      aboutBot: "How the bot works",
      aboutBotTitle: "How the bot works",
      aboutBotLead: "Parser bot finds leads in Telegram chats by trigger keywords and helps you start the conversation faster.",
      aboutBotText1: "Connect a Telegram account, fill in bot settings, add chats and triggers — then start mailing.",
      aboutBotText2: "When a chat message matches a trigger, the bot records it on the Mailing tab.",
      faqSearchPlaceholder: "Search FAQ…",
      faqEmpty: "Nothing found. Try another query.",
      faqWhyTitle: "What is this bot for?",
      faqWhyLead: "LeadBot finds customers where they already discuss your offer — in Telegram groups — and starts a warm dialog for you.",
      faqWhyGroupCaption: "In groups people ask for recommendations and name age, area, and budget — ready-made leads.",
      faqWhyDialogCaption: "The bot writes as your manager: greeting, photos, benefits, pricing, and a clear next step — without manual work.",
      faqAccountTitle: "How to add a Telegram account",
      faqAccountLead: "Mailing runs from a separate user account. Connect it on the Bot tab → Telegram account in three steps.",
      faqAccountStep1: "Enter the mailing account phone number (it may differ from the account that opened the miniapp).",
      faqAccountStep2: "Open Telegram on that phone and enter the code from the Telegram chat (blue checkmark).",
      faqAccountStep3: "If 2FA is on, enter the cloud password from Settings → Privacy → Two-Step Verification.",
      faqSettingsTitle: "Bot profile",
      faqSettingsText: "On the Bot tab describe persona, dialog goal, product, and contacts. These fields power Claude Opus replies in your brand voice.",
      faqTriggersTitle: "Triggers",
      faqTriggersText: "Keywords and phrases the bot watches for in chats (e.g. “camp”, “looking for a course”). Mailing cannot start without triggers.",
      faqTemplatesTitle: "Dialog templates",
      faqTemplatesText: "Optional message templates. You can skip them: AI dialogs work from the bot profile alone.",
      faqChatsTitle: "Chats",
      faqChatsText: "Telegram groups and channels to monitor. Add chats manually or via auto-join. The connected account must be a member.",
      faqMailingTitle: "Mailing",
      faqMailingText: "Mailing tab: start/stop monitoring, stats, and match list. When a trigger hits a chat message, the match appears here.",
      faqCabinetTitle: "Personal account",
      faqCabinetText: "Telegram profile, payment status, and support contacts. Check how long access remains active.",
      faqPaymentTitle: "Payments and dialog packs",
      faqPaymentText: "“Top up balance” opens packs of 100 / 500 / 1000 dialogs. Pay via YooKassa; after a successful payment access renews automatically.",
      topUpBalance: "Top up balance",
      topUpTitle: "Top up balance",
      topUpLead: "Subscription payment and balance top-up.",
      topUpText: "Online payment is being prepared. Contact support — we will help extend your access.",
      paywallTitle: "LeadBot Premium",
      paywallSubtitle: "Buy Claude Opus dialog packs — no time limit",
      paywallRub: "₽ Rubles",
      paywallStars: "Stars",
      paywallDialogsLabel: "{n} dialogs",
      paywallPerDialog: "{price} per dialog",
      paywallBestValue: "Best value",
      paywallFeatureDialogsTitle: "AI dialog pack",
      paywallFeatureDialogsText: "Claude Opus with thinking — pay per dialogs, no separate token billing",
      paywallFeatureMailingTitle: "Uninterrupted mailing",
      paywallFeatureMailingText: "Chat monitoring and trigger replies while dialogs remain",
      paywallFeatureSupportTitle: "Priority support",
      paywallFeatureSupportText: "Help with account setup, chats, and trigger configuration",
      paywallCta: "Pay",
      paywallFoot: "Pack of {n} dialogs · {amount}",
      paywallPending: "Online payment is being connected. Contact support — we will activate the pack manually.",
      paywallRedirect: "Redirecting to payment…",
      paywallFailed: "Could not create payment. Try again or contact support.",
      paywallNotConfigured: "Payments are temporarily unavailable. Contact support.",
      mailingNotReady: "Complete all requirements below to start mailing.",
      mailingGoToSettings: "To connect an account and fill in settings, go to the Bot tab.",
      mailingNeedAccount: "Connect a Telegram account",
      mailingNeedSettings: "Fill in all fields in Bot settings",
      mailingNeedChats: "Add at least one chat",
      mailingNeedTriggers: "Add at least one trigger",
      mailingSuccessTitle: "Mailing started!",
      mailingSuccessText: "Chat monitoring is running. Watch matches on the Mailing tab.",
      mailingSuccessOk: "Great",
      templatesOptionalHint: "Optional — dialog templates are not required to start mailing.",
      mailingChats: "Chats",
      mailingMatches: "Matches",
      mailingRunning: "Mailing is running",
      mailingStopped: "Mailing is stopped",
      sectionStats: "Statistics",
      sectionRuns: "Runs",
      sectionRunsHistory: "Run history",
      sectionMatches: "Matches",
      activeChats: "Active chats",
      lastActivity: "Last activity",
      colStarted: "Started",
      colStopped: "Stopped",
      colActions: "Actions",
      runActive: "running",
      runsEmpty: "No runs yet",
      statsNoMailing: "No mailing yet — create one to start monitoring chats.",
      filterNew: "New",
      filterReviewed: "Reviewed",
      filterDismissed: "Dismissed",
      filterAll: "All",
      matchWhen: "When",
      matchUser: "User",
      matchChat: "Chat",
      matchMessage: "Message",
      matchStatus: "Status",
      matchesEmpty: "No matches yet",
      pauseMailing: "Pause",
      sectionSettings: "Bot characteristics",
      sectionTriggers: "Triggers",
      sectionTemplates: "Dialog templates",
      sectionChats: "Chats",
      settingsLead: "Persona, goals and contacts",
      settingsScrollHint: "Scroll down — fields are inside each section",
      botName: "Name",
      personality: "Personality",
      personalityHint: "Who the bot is — voice and role. Keep it short.",
      personalityAndEnvironment: "Personality and environment",
      personalityAndEnvironmentHint: "Who the bot is, its voice and role. Where and in what context it talks. Keep it short.",
      environment: "Environment",
      environmentHint: "Where the bot talks and in what context.",
      dialogGoal: "Dialog goal",
      dialogGoalHint: "What the bot should achieve in conversation.",
      product: "Product we sell",
      productHint: "Short positioning — not a source of facts.",
      communicationRules: "Communication rules",
      communicationRulesHint: "Per-bot do/don'ts. Keep it short.",
      contactPerson: "Contact person",
      contactPersonHint: "Who the bot gives as contact to the client.",
      salesLinks: "Sales links",
      salesLinksHint: "One link per line.",
      promptProfile: "Prompt profile",
      isDefault: "Default project bot",
      requireAdConsentLabel: "Bot asks for advertising consent",
      requireAdConsentHint: "Under Federal Law No. 38-FZ On Advertising, Art. 18: advertising via telecom networks (including messengers) is allowed only with the recipient's prior consent. The bot asks for consent before a promotional message.",
      moreDetails: "Details",
      consentModalTitle: "Advertising consent",
      consentModalLead: "Before a promotional message, the bot asks for the recipient's consent — this is required by law and reduces legal risk.",
      consentExampleLabel: "Example bot message",
      consentExampleText: "May I promote our product to you?",
      consentFinesIntro: "Fines for violating advertising law (Art. 14.3 of the Administrative Code, in connection with Federal Law No. 38-FZ On Advertising, Art. 18):",
      consentFine1: "for officials — from 4,000 to 20,000 ₽",
      consentFine2: "for legal entities — from 100,000 to 500,000 ₽",
      consentFine3: "for repeat violations — up to 1,000,000 ₽",
      consentTemplatesHint: "In the Dialog templates section, you can add phrases the bot will use to talk about advertising after consent is received.",
      pattern: "Trigger word",
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
      triggersLead: "Keywords to find potential clients in chats",
      templatesLead: "Dialog message templates",
      chatsLead: "Telegram groups and channels monitored by the bot",
    },
  };

  const locale = (window.MINIAPP_CONFIG && window.MINIAPP_CONFIG.LOCALE) || "ru";
  const t = (key) => (T[locale] && T[locale][key]) || key;

  const INSTRUCTION_GUIDES = {
    stepPhoneHelp: {
      titleKey: "instrPhoneTitle",
      items: [
        { textKey: "instrPhone1", image: "img/instructions/phone-1.png" },
        { textKey: "instrPhone2", image: "img/instructions/phone-2.png" },
      ],
    },
    stepCodeHelp: {
      titleKey: "instrCodeTitle",
      items: [
        { textKey: "instrCode1", image: "img/instructions/code-1.png" },
        { textKey: "instrCode2", image: null },
      ],
    },
    step2faHelp: {
      titleKey: "instr2faTitle",
      items: [
        { textKey: "instr2fa1", image: "img/instructions/password-1.png" },
        { textKey: "instr2fa2", image: "img/instructions/password-2.png" },
      ],
    },
  };

  const root = document.getElementById("app");
  let state = null;
  let cabinet = null;
  let activeTab = "settings";
  let matchFilter = "";
  let showMailingHint = false;
  const openAccordions = new Set();

  const MAILING_RULES = ["account", "settings", "chats", "triggers"];

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
    else window.alert(msg);
  }

  function formatAccountPhone(account) {
    if (account.phone) return account.phone;
    const m = String(account.label || "").match(/^acc_(\d+)$/);
    if (m) return "+" + m[1];
    return account.label || "—";
  }

  function showInstructionModal(helpKey) {
    const guide = INSTRUCTION_GUIDES[helpKey];
    if (!guide) return;
    const modal = document.getElementById("instr-modal");
    const titleEl = document.getElementById("instr-modal-title");
    const bodyEl = document.getElementById("instr-modal-body");
    if (!modal || !titleEl || !bodyEl) return;

    titleEl.textContent = t(guide.titleKey);
    bodyEl.innerHTML = `<ol class="instr-guide">${guide.items.map((item, i) => `
      <li class="instr-guide__item">
        <p class="instr-guide__text"><span class="instr-guide__num">${i + 1}.</span> ${esc(t(item.textKey))}</p>
        ${item.image ? `<img class="instr-guide__img" src="./${item.image}" alt="">` : ""}
      </li>`).join("")}</ol>`;

    modal.classList.remove("instr-modal--hidden");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("instr-modal-open");
  }

  function closeInstructionModal() {
    const modal = document.getElementById("instr-modal");
    if (!modal) return;
    modal.classList.add("instr-modal--hidden");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("instr-modal-open");
  }

  function showMailingSuccessModal() {
    const modal = document.getElementById("success-modal");
    const titleEl = document.getElementById("success-modal-title");
    const textEl = document.getElementById("success-modal-text");
    const okBtn = document.getElementById("success-modal-ok");
    if (!modal || !titleEl || !textEl) return;
    titleEl.textContent = t("mailingSuccessTitle");
    textEl.textContent = t("mailingSuccessText");
    if (okBtn) okBtn.textContent = t("mailingSuccessOk");
    modal.classList.remove("success-modal--hidden");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("success-modal-open");
  }

  function closeSuccessModal() {
    const modal = document.getElementById("success-modal");
    if (!modal) return;
    modal.classList.add("success-modal--hidden");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("success-modal-open");
  }

  function openInfoModal(title, html) {
    const modal = document.getElementById("instr-modal");
    const titleEl = document.getElementById("instr-modal-title");
    const bodyEl = document.getElementById("instr-modal-body");
    if (!modal || !titleEl || !bodyEl) return;
    titleEl.textContent = title;
    bodyEl.innerHTML = html;
    modal.classList.remove("instr-modal--hidden");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("instr-modal-open");
  }

  const FAQ_ITEMS = [
    {
      id: "why",
      titleKey: "faqWhyTitle",
      keywords: ["зачем", "что это", "лид", "лиды", "группа", "диалог", "why", "lead", "what"],
      render: () => `
        <p class="faq-item__lead">${esc(t("faqWhyLead"))}</p>
        <figure class="faq-shot">
          <img class="faq-shot__img" src="./img/faq/why-group.png" alt="">
          <figcaption class="faq-shot__cap">${esc(t("faqWhyGroupCaption"))}</figcaption>
        </figure>
        <figure class="faq-shot">
          <img class="faq-shot__img" src="./img/faq/why-dialog.png" alt="">
          <figcaption class="faq-shot__cap">${esc(t("faqWhyDialogCaption"))}</figcaption>
        </figure>`,
    },
    {
      id: "account",
      titleKey: "faqAccountTitle",
      keywords: ["аккаунт", "телеграм", "телефон", "код", "2fa", "подключ", "account", "phone", "telegram"],
      render: () => `
        <p class="faq-item__lead">${esc(t("faqAccountLead"))}</p>
        <ol class="instr-guide">
          <li class="instr-guide__item">
            <p class="instr-guide__text"><span class="instr-guide__num">1.</span> ${esc(t("faqAccountStep1"))}</p>
            <img class="instr-guide__img" src="./img/instructions/phone-1.png" alt="">
          </li>
          <li class="instr-guide__item">
            <p class="instr-guide__text"><span class="instr-guide__num">2.</span> ${esc(t("faqAccountStep2"))}</p>
            <img class="instr-guide__img" src="./img/instructions/code-1.png" alt="">
          </li>
          <li class="instr-guide__item">
            <p class="instr-guide__text"><span class="instr-guide__num">3.</span> ${esc(t("faqAccountStep3"))}</p>
            <img class="instr-guide__img" src="./img/instructions/password-1.png" alt="">
          </li>
        </ol>`,
    },
    {
      id: "settings",
      titleKey: "faqSettingsTitle",
      keywords: ["характеристик", "личность", "промпт", "настройк", "profile", "persona", "settings"],
      render: () => `<p class="faq-item__text">${esc(t("faqSettingsText"))}</p>`,
    },
    {
      id: "triggers",
      titleKey: "faqTriggersTitle",
      keywords: ["триггер", "ключев", "слова", "trigger", "keyword"],
      render: () => `<p class="faq-item__text">${esc(t("faqTriggersText"))}</p>`,
    },
    {
      id: "templates",
      titleKey: "faqTemplatesTitle",
      keywords: ["шаблон", "сообщен", "template", "message"],
      render: () => `<p class="faq-item__text">${esc(t("faqTemplatesText"))}</p>`,
    },
    {
      id: "chats",
      titleKey: "faqChatsTitle",
      keywords: ["чат", "групп", "канал", "авто", "join", "chat", "group"],
      render: () => `<p class="faq-item__text">${esc(t("faqChatsText"))}</p>`,
    },
    {
      id: "mailing",
      titleKey: "faqMailingTitle",
      keywords: ["рассылк", "монитор", "совпаден", "запуск", "mailing", "match", "start"],
      render: () => `<p class="faq-item__text">${esc(t("faqMailingText"))}</p>`,
    },
    {
      id: "cabinet",
      titleKey: "faqCabinetTitle",
      keywords: ["кабинет", "профиль", "поддержк", "cabinet", "profile", "support"],
      render: () => `<p class="faq-item__text">${esc(t("faqCabinetText"))}</p>`,
    },
    {
      id: "payment",
      titleKey: "faqPaymentTitle",
      keywords: ["оплат", "баланс", "пакет", "юkassa", "yookassa", "диалог", "pay", "payment", "top up"],
      render: () => `<p class="faq-item__text">${esc(t("faqPaymentText"))}</p>`,
    },
  ];

  let faqOpenId = "why";
  let faqQuery = "";

  function faqMatches(item, query) {
    const q = (query || "").trim().toLowerCase();
    if (!q) return true;
    const title = String(t(item.titleKey) || "").toLowerCase();
    const blob = `${title} ${(item.keywords || []).join(" ")}`.toLowerCase();
    return blob.includes(q) || q.split(/\s+/).every((part) => !part || blob.includes(part));
  }

  function renderFaqListHtml() {
    const items = FAQ_ITEMS.filter((item) => faqMatches(item, faqQuery));
    if (!items.length) {
      return `<p class="faq-empty">${esc(t("faqEmpty"))}</p>`;
    }
    return items.map((item) => {
      const open = item.id === faqOpenId;
      return `<div class="faq-item${open ? " faq-item--open" : ""}" data-faq-id="${esc(item.id)}">
        <button type="button" class="faq-item__head" data-faq-toggle="${esc(item.id)}" aria-expanded="${open ? "true" : "false"}">
          <span class="faq-item__title">${esc(t(item.titleKey))}</span>
          <span class="faq-item__chev" aria-hidden="true"></span>
        </button>
        <div class="faq-item__body"${open ? "" : " hidden"}>
          ${item.render()}
        </div>
      </div>`;
    }).join("");
  }

  function paintFaqModalBody() {
    const bodyEl = document.getElementById("instr-modal-body");
    if (!bodyEl) return;
    const list = bodyEl.querySelector("[data-faq-list]");
    if (list) list.innerHTML = renderFaqListHtml();
    bindFaqHandlers(bodyEl);
  }

  function bindFaqHandlers(rootEl) {
    rootEl.querySelectorAll("[data-faq-toggle]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-faq-toggle");
        faqOpenId = faqOpenId === id ? "" : id;
        haptic("light");
        paintFaqModalBody();
      });
    });
  }

  function showAboutBotModal() {
    faqOpenId = "why";
    faqQuery = "";
    const modal = document.getElementById("instr-modal");
    const titleEl = document.getElementById("instr-modal-title");
    const bodyEl = document.getElementById("instr-modal-body");
    if (!modal || !titleEl || !bodyEl) return;
    titleEl.textContent = t("aboutBotTitle");
    bodyEl.innerHTML = `
      <div class="faq-modal">
        <label class="faq-search">
          <span class="faq-search__icon" aria-hidden="true">⌕</span>
          <input type="search" class="faq-search__input" data-faq-search
            placeholder="${esc(t("faqSearchPlaceholder"))}" value="" autocomplete="off">
        </label>
        <div class="faq-list" data-faq-list>${renderFaqListHtml()}</div>
      </div>`;
    const input = bodyEl.querySelector("[data-faq-search]");
    if (input) {
      input.addEventListener("input", () => {
        faqQuery = input.value || "";
        const openItem = FAQ_ITEMS.find((i) => i.id === faqOpenId);
        if (openItem && !faqMatches(openItem, faqQuery)) {
          const match = FAQ_ITEMS.find((item) => faqMatches(item, faqQuery));
          faqOpenId = match ? match.id : "";
        }
        paintFaqModalBody();
      });
    }
    bindFaqHandlers(bodyEl);
    modal.classList.remove("instr-modal--hidden");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("instr-modal-open");
  }

  /* Premium paywall — packs by dialog count (thinking Opus pricing, RUB only) */
  const PAYWALL_PLANS = [
    { id: "p100", dialogs: 100, price: 2400, unit: "₽", badge: null },
    { id: "p500", dialogs: 500, price: 10000, unit: "₽", badge: null },
    { id: "p1000", dialogs: 1000, price: 18000, unit: "₽", badge: "best" },
  ];
  let paywallPlan = "p100";

  function formatPayAmount(amount, unit) {
    if (unit === "₽") return `${amount.toLocaleString("ru-RU")} ₽`;
    return `${amount.toLocaleString("ru-RU")} ${unit}`;
  }

  function closePaywall() {
    const modal = document.getElementById("paywall-modal");
    if (!modal) return;
    modal.classList.add("paywall--hidden");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("paywall-open");
    const tg = window.Telegram && window.Telegram.WebApp;
    if (tg && tg.setHeaderColor) tg.setHeaderColor("#2d74fe");
    if (tg && tg.setBackgroundColor) tg.setBackgroundColor("#ffffff");
  }

  function renderPaywallBody() {
    const body = document.getElementById("paywall-body");
    if (!body) return;
    const packs = PAYWALL_PLANS;
    const selected = packs.find((p) => p.id === paywallPlan) || packs[0];
    const perDialog = Math.round(selected.price / selected.dialogs);
    const showPrioritySupport = selected.id === "p1000";
    const foot = t("paywallFoot")
      .replace("{n}", String(selected.dialogs))
      .replace("{amount}", formatPayAmount(selected.price, selected.unit));

    const plansHtml = packs.map((p) => {
      const active = p.id === selected.id ? " paywall__plan--active" : "";
      const badge = p.badge === "best"
        ? `<span class="paywall__plan-badge">${esc(t("paywallBestValue"))}</span>`
        : "";
      const label = t("paywallDialogsLabel").replace("{n}", String(p.dialogs));
      return `<button type="button" class="paywall__plan${active}" data-paywall-plan="${esc(p.id)}">
          <span class="paywall__plan-price">${esc(formatPayAmount(p.price, p.unit))}</span>
          <span class="paywall__plan-period">${esc(label)}</span>
          ${badge}
        </button>`;
    }).join("");

    const supportFeatureHtml = showPrioritySupport ? `
        <li class="paywall__feature">
          <span class="paywall__feature-icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 21a9 9 0 100-18 9 9 0 000 18z" stroke="currentColor" stroke-width="1.6"/><path d="M8.5 12.5l2.2 2.2 4.8-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span>
          <div>
            <p class="paywall__feature-title">${esc(t("paywallFeatureSupportTitle"))}</p>
            <p class="paywall__feature-text">${esc(t("paywallFeatureSupportText"))}</p>
          </div>
        </li>` : "";

    body.innerHTML = `
      <div class="paywall__hero">
        <div class="paywall__badge" aria-hidden="true">
          <svg class="paywall__badge-check" viewBox="0 0 24 24" fill="none">
            <path d="M5 13l4 4L19 7" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <h2 class="paywall__title" id="paywall-title">${esc(t("paywallTitle"))}</h2>
        <p class="paywall__subtitle">${esc(t("paywallSubtitle"))}</p>
      </div>

      <div class="paywall__plans paywall__plans--3">
        ${plansHtml}
      </div>
      <p class="paywall__per-dialog">${esc(t("paywallPerDialog").replace("{price}", formatPayAmount(perDialog, selected.unit)))}</p>

      <ul class="paywall__features">
        <li class="paywall__feature">
          <span class="paywall__feature-icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 3l2.4 4.9L20 9l-4 3.9.9 5.1L12 15.9 7.1 18l.9-5.1L4 9l5.6-1.1L12 3z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>
          </span>
          <div>
            <p class="paywall__feature-title">${esc(t("paywallFeatureDialogsTitle"))}</p>
            <p class="paywall__feature-text">${esc(t("paywallFeatureDialogsText"))}</p>
          </div>
        </li>
        <li class="paywall__feature">
          <span class="paywall__feature-icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12h10M4 17h13" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
          </span>
          <div>
            <p class="paywall__feature-title">${esc(t("paywallFeatureMailingTitle"))}</p>
            <p class="paywall__feature-text">${esc(t("paywallFeatureMailingText"))}</p>
          </div>
        </li>
        ${supportFeatureHtml}
      </ul>

      <button type="button" class="paywall__cta" data-paywall-cta>${esc(t("paywallCta"))}</button>
      <p class="paywall__footnote">${esc(foot)}</p>
    `;

    body.querySelectorAll("[data-paywall-plan]").forEach((btn) => {
      btn.addEventListener("click", () => {
        paywallPlan = btn.getAttribute("data-paywall-plan") || "p100";
        haptic("light");
        renderPaywallBody();
      });
    });
    const cta = body.querySelector("[data-paywall-cta]");
    if (cta) {
      cta.addEventListener("click", async () => {
        haptic("medium");
        if (cta.disabled) return;
        cta.disabled = true;
        const prev = cta.textContent;
        cta.textContent = t("paywallRedirect");
        try {
          const res = await MiniappApi.createCheckout({ plan_id: paywallPlan || "p100" });
          const url = res && res.confirmation_url;
          if (!url) throw new Error(t("paywallFailed"));
          closePaywall();
          const tg = window.Telegram && window.Telegram.WebApp;
          if (tg && typeof tg.openLink === "function") tg.openLink(url);
          else window.location.assign(url);
        } catch (err) {
          haptic("error");
          cta.disabled = false;
          cta.textContent = prev;
          const detail = (err && err.data && err.data.detail) || "";
          if ((err && err.status === 503) || detail === "payment_not_configured") {
            showError(t("paywallNotConfigured"));
          } else {
            showError((err && err.message) || t("paywallFailed"));
          }
        }
      });
    }
  }

  function showTopUpModal() {
    const modal = document.getElementById("paywall-modal");
    if (!modal) return;
    paywallPlan = "p100";
    renderPaywallBody();
    modal.classList.remove("paywall--hidden");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("paywall-open");
    const tg = window.Telegram && window.Telegram.WebApp;
    /* Match paywall so no blue strip under Telegram chrome */
    if (tg && tg.setHeaderColor) tg.setHeaderColor("#0b1f44");
    if (tg && tg.setBackgroundColor) tg.setBackgroundColor("#050d1c");
  }

  function renderPageTopAction(label, dataAttr) {
    return `<div class="launch-section launch-section--hero">
      <button type="button" class="launch-section__btn launch-section__btn--secondary" ${dataAttr}>${esc(label)}</button>
    </div>`;
  }

  function renderHeroAction() {
    if (activeTab === "settings") {
      return renderPageTopAction(t("aboutBot"), "data-about-bot");
    }
    if (activeTab === "cabinet") {
      return renderPageTopAction(t("topUpBalance"), "data-topup-balance");
    }
    return renderLaunchSection();
  }

  function getMailingReadiness() {
    const b = state && state.bot;
    const p = (state && state.platform) || {};
    const missing = [];
    if (!p.has_active_account) missing.push("account");
    if (b && !isBotSettingsComplete(b)) missing.push("settings");
    if (!(state && state.chats && state.chats.length)) missing.push("chats");
    if (!(state && state.attached_triggers && state.attached_triggers.length)) missing.push("triggers");
    return { ready: missing.length === 0, missing };
  }

  function isBotSettingsComplete(bot) {
    const fields = [
      combinedPersonalityEnvironment(bot),
      bot.dialog_goal,
      bot.product,
      bot.communication_rules,
      bot.contact_person,
      bot.contact_materials,
    ];
    return fields.every((value) => String(value || "").trim().length > 0);
  }

  function mailingMissingLabel(code) {
    const map = {
      account: "mailingNeedAccount",
      settings: "mailingNeedSettings",
      chats: "mailingNeedChats",
      triggers: "mailingNeedTriggers",
    };
    return t(map[code] || code);
  }

  function renderConsentField() {
    return `<div class="field consent-field">
      <div class="consent-row">
        <input type="checkbox" id="require-ad-consent" class="consent-checkbox consent-checkbox--muted" checked disabled>
        <input type="hidden" name="require_ad_consent" value="on">
        <span class="consent-label">${t("requireAdConsentLabel")}</span>
        <button type="button" class="consent-more" data-consent-info>${t("moreDetails")}</button>
      </div>
      <p class="consent-hint">${t("requireAdConsentHint")}</p>
    </div>`;
  }

  function showConsentModal() {
    const modal = document.getElementById("instr-modal");
    const titleEl = document.getElementById("instr-modal-title");
    const bodyEl = document.getElementById("instr-modal-body");
    if (!modal || !titleEl || !bodyEl) return;

    titleEl.textContent = t("consentModalTitle");
    bodyEl.innerHTML = `
      <div class="consent-modal">
        <p class="consent-modal__lead">${t("consentModalLead")}</p>
        <div class="consent-example">
          <span class="consent-example__tag">${t("consentExampleLabel")}</span>
          <p class="consent-example__text">${esc(t("consentExampleText"))}</p>
        </div>
        <p class="consent-modal__text">${t("consentFinesIntro")}</p>
        <ul class="consent-modal__fines">
          <li>${t("consentFine1")}</li>
          <li>${t("consentFine2")}</li>
          <li>${t("consentFine3")}</li>
        </ul>
        <p class="consent-modal__templates">${t("consentTemplatesHint")}</p>
      </div>`;

    modal.classList.remove("instr-modal--hidden");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("instr-modal-open");
  }

  function showAutoJoinModal() {
    const modal = document.getElementById("instr-modal");
    const titleEl = document.getElementById("instr-modal-title");
    const bodyEl = document.getElementById("instr-modal-body");
    if (!modal || !titleEl || !bodyEl) return;

    titleEl.textContent = t("autoJoinModalTitle");
    bodyEl.innerHTML = `
      <div class="consent-modal">
        <p class="consent-modal__lead">${t("autoJoinModalLead")}</p>
        <p class="consent-modal__subtitle">${t("autoJoinModalHowTitle")}</p>
        <p class="consent-modal__text">${t("autoJoinModalHowText")}</p>
        <p class="consent-modal__subtitle">${t("autoJoinModalWhyFailTitle")}</p>
        <ul class="consent-modal__fines">
          <li>${t("autoJoinFail1")}</li>
          <li>${t("autoJoinFail2")}</li>
          <li>${t("autoJoinFail3")}</li>
          <li>${t("autoJoinFail4")}</li>
          <li>${t("autoJoinFail5")}</li>
          <li>${t("autoJoinFail6")}</li>
          <li>${t("autoJoinFail7")}</li>
        </ul>
        <p class="consent-modal__subtitle">${t("autoJoinModalRiskTitle")}</p>
        <p class="consent-modal__text">${t("autoJoinModalRiskText")}</p>
        <p class="consent-modal__templates">${t("autoJoinModalManualHint")}</p>
      </div>`;

    modal.classList.remove("instr-modal--hidden");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("instr-modal-open");
  }

  function renderAutoJoinField(p) {
    const checked = p.auto_join ? " checked" : "";
    return `<div class="field auto-join-field">
      <div class="consent-row">
        <input type="checkbox" id="auto-join" class="consent-checkbox"${checked}>
        <span class="consent-label">${t("autoJoinLabel")}</span>
        <button type="button" class="consent-more" data-auto-join-info>${t("moreDetails")}</button>
      </div>
      <p class="consent-hint">${t("autoJoinFieldHint")}</p>
    </div>`;
  }

  function haptic(type) {
    try {
      const hf = window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.HapticFeedback;
      if (!hf) return;
      if (type === "success" && hf.notificationOccurred) hf.notificationOccurred("success");
      else if (type === "error" && hf.notificationOccurred) hf.notificationOccurred("error");
      else if (hf.impactOccurred) hf.impactOccurred(type || "light");
    } catch (_) { /* ignore */ }
  }

  function esc(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function hintPara(text) {
    return `<p class="hint">${text}</p>`;
  }

  function field(label, body, hint) {
    return `<div class="field"><label class="label">${label}</label>${
      hint ? `<p class="field-hint field-hint--above">${hint}</p>` : ""
    }${body}</div>`;
  }

  function tableWrap(headHtml, bodyRowsHtml) {
    const rows = (bodyRowsHtml || "").trim();
    if (!rows) return "";
    return `<div class="table-wrap"><table>
      <thead>${headHtml}</thead>
      <tbody>${rows}</tbody>
    </table></div>`;
  }

  function combinedPersonalityEnvironment(bot) {
    const parts = [bot.personality, bot.environment]
      .map((s) => String(s || "").trim())
      .filter(Boolean);
    return parts.join("\n\n");
  }

  function captureOpenAccordions() {
    root.querySelectorAll("details.accordion[data-section]").forEach((el) => {
      const id = el.dataset.section;
      if (el.open) openAccordions.add(id);
      else openAccordions.delete(id);
    });
  }

  function accordion(sectionId, title, bodyHtml) {
    const open = openAccordions.has(sectionId) ? " open" : "";
    return `<details class="accordion" data-section="${sectionId}"${open}>
      <summary>${title}</summary>
      <div class="accordion__body">${bodyHtml}</div>
    </details>`;
  }

  function setupStep(num, title, state, bodyHtml, helpKey) {
    const cls = state === "done"
      ? "setup-step is-done"
      : state === "active"
        ? "setup-step is-active"
        : "setup-step is-locked";
    const numHtml = state === "done" ? "✓" : String(num);
    const helpBtn = helpKey
      ? `<button type="button" class="consent-more setup-step__instr" data-help="${helpKey}">${t("moreDetails")}</button>`
      : "";
    return `<li class="${cls}">
      <div class="setup-step__head">
        <div class="setup-step__head-main">
          <span class="setup-step__num">${numHtml}</span>
          <span class="setup-step__title">${title}</span>
          ${helpBtn}
        </div>
      </div>
      ${bodyHtml ? `<div class="setup-step__body">${bodyHtml}</div>` : ""}
    </li>`;
  }

  function accountListRow(account) {
    return `<div class="plain-list__row">
      <div class="plain-list__main">
        <span class="plain-list__label">${t("phone")}</span>
        <span class="plain-list__value">${esc(formatAccountPhone(account))}</span>
      </div>
      <div class="plain-list__actions">
        <span class="status-ok">${t("yes")}</span>
        <button type="button" class="btn btn-outline btn-sm" data-disable-account="${account.id}">${t("disable")}</button>
      </div>
    </div>`;
  }

  function renderTelegramSection(p) {
    const setup = p.account_setup || {};
    const activeAccounts = (p.accounts || []).filter((a) => a.status === "active");
    const setupStepName = setup.step === "code" || setup.step === "password"
      ? setup.step
      : "phone";

    const accountsTable = activeAccounts.length
      ? `<div class="plain-list">${activeAccounts.map(accountListRow).join("")}</div>`
      : "";

    if (!p.api_configured) {
      return accordion("telegram", t("sectionTelegram"), hintPara(t("apiNotConfigured")));
    }

    if (activeAccounts.length) {
      return accordion("telegram", t("sectionTelegram"), accountsTable);
    }

    const phoneState = setupStepName === "phone" ? "active" : "done";
    const codeState = setupStepName === "code"
      ? "active"
      : setupStepName === "password"
        ? "done"
        : "locked";
    const passwordState = setupStepName === "password" ? "active" : "locked";

    let phoneBody = "";
    if (phoneState === "active") {
      phoneBody = `<form id="form-account-phone">
        ${field(t("phone"), `<input class="input" name="phone" required placeholder="+79001234567">`, t("phoneHint"))}
        <div class="actions">
          <button type="submit" class="btn btn-primary">${t("sendCode")}</button>
        </div>
      </form>`;
    } else {
      phoneBody = `<p class="setup-step__note">${esc(setup.phone || "")} · ${t("stepPhoneDone")}</p>`;
    }

    let codeBody = "";
    if (codeState === "active") {
      codeBody = `<form id="form-account-code">
        ${field(t("enterCode"), `<input class="input" name="code" required>`)}
        <div class="actions">
          <button type="submit" class="btn btn-primary">${t("sendCode")}</button>
          <button type="button" class="btn btn-outline" data-cancel-connect>${t("cancel")}</button>
        </div>
      </form>`;
    } else if (codeState === "done") {
      codeBody = `<p class="setup-step__note">${t("stepCodeDone")}</p>`;
    } else {
      codeBody = `<p class="setup-step__wait">${t("stepCodeWait")}</p>`;
    }

    let passwordBody = "";
    if (passwordState === "active") {
      passwordBody = `<form id="form-account-password">
        ${field(t("enterPassword"), `<input class="input" name="password" type="password" required>`, t("password2faHint"))}
        <div class="actions">
          <button type="submit" class="btn btn-primary">${t("save")}</button>
          <button type="button" class="btn btn-outline" data-cancel-connect>${t("cancel")}</button>
        </div>
      </form>`;
    } else {
      passwordBody = `<p class="setup-step__wait">${t("step2faWait")}</p>`;
    }

    const stepsHtml = `<ol class="setup-steps">
      ${setupStep(1, t("phone"), phoneState, phoneBody, "stepPhoneHelp")}
      ${setupStep(2, t("stepCode"), codeState, codeBody, "stepCodeHelp")}
      ${setupStep(3, t("step2fa"), passwordState, passwordBody, "step2faHelp")}
    </ol>`;

    return accordion("telegram", t("sectionTelegram"), stepsHtml);
  }

  function telegramUserFallback() {
    const tg = window.Telegram && window.Telegram.WebApp;
    const user = tg && tg.initDataUnsafe && tg.initDataUnsafe.user;
    if (!user || !user.id) return null;
    return {
      telegram_id: user.id,
      username: user.username || null,
      first_name: user.first_name || null,
      last_name: user.last_name || null,
    };
  }

  function resolveCabinetUser() {
    if (cabinet && cabinet.user) return cabinet.user;
    return telegramUserFallback();
  }

  function billingStatusLabel(status) {
    if (status === "active") return t("cabinetStatusActive");
    if (status === "expired") return t("cabinetStatusExpired");
    return t("cabinetStatusNotSet");
  }

  function cabinetRow(label, value) {
    const display = value == null || String(value).trim() === "" ? t("cabinetEmpty") : String(value);
    return `<div class="cabinet-row">
      <span class="cabinet-row__label">${esc(label)}</span>
      <span class="cabinet-row__value">${esc(display)}</span>
    </div>`;
  }

  function renderCabinetTab() {
    const user = resolveCabinetUser() || {};
    const billing = (cabinet && cabinet.billing) || {};
    const support = (cabinet && cabinet.support) || {};
    const fullName = [user.first_name, user.last_name].filter(Boolean).join(" ");

    const profileBody = `
      ${cabinetRow(t("cabinetUserId"), user.telegram_id)}
      ${cabinetRow(t("cabinetFirstName"), user.first_name)}
      ${cabinetRow(t("cabinetLastName"), user.last_name)}
      ${cabinetRow(t("cabinetUsername"), user.username ? `@${user.username}` : "")}
      ${fullName ? `<p class="field-hint field-hint--block">${esc(fullName)}</p>` : ""}`;

    const billingBody = `
      ${cabinetRow(t("cabinetPlan"), billing.plan_name)}
      ${cabinetRow(t("cabinetPrice"), billing.price_label)}
      ${cabinetRow(t("cabinetPaidUntil"), billing.paid_until ? formatDt(billing.paid_until) : "")}
      ${cabinetRow(t("cabinetBillingStatus"), billingStatusLabel(billing.status))}`;

    const supportBody = `
      ${cabinetRow(t("cabinetSupportPhone"), support.phone)}
      ${cabinetRow(t("cabinetSupportEmail"), support.email)}
      ${cabinetRow(
        t("cabinetSupportTelegram"),
        support.telegram
          ? (String(support.telegram).startsWith("http") || String(support.telegram).startsWith("@")
            ? support.telegram
            : `@${support.telegram}`)
          : ""
      )}
      ${support.note ? `<p class="field-hint field-hint--block">${esc(support.note)}</p>` : ""}`;

    return `
      ${accordion("cabinet-profile", t("cabinetProfile"), profileBody)}
      ${accordion("cabinet-billing", t("cabinetBilling"), billingBody)}
      ${accordion("cabinet-support", t("cabinetSupport"), supportBody)}`;
  }

  function isMailingActive() {
    const p = (state && state.platform) || {};
    const snap = p.mailing_snapshot;
    return !!(snap && snap.active_run);
  }

  function renderLaunchSection() {
    if (isMailingActive()) {
      return `<div class="launch-section launch-section--hero">
      <button type="button" class="launch-section__btn launch-section__btn--stop" data-stop-mailing>${t("stopMailingAccent")}</button>
    </div>`;
    }

    const readiness = getMailingReadiness();
    const ready = readiness.ready;
    if (ready) showMailingHint = false;

    const btnCls = ready ? "launch-section__btn launch-section__btn--ready" : "launch-section__btn launch-section__btn--muted";
    const hintHtml = (!ready && showMailingHint && readiness.missing.length) ? `
      <div class="launch-section__hint launch-section__hint--hero">
        <div class="launch-section__rule launch-section__rule--lead">${esc(t("mailingGoToSettings"))}</div>
        ${readiness.missing.map((code) =>
          `<div class="launch-section__rule">• ${esc(mailingMissingLabel(code))}</div>`
        ).join("")}
      </div>` : "";
    return `<div class="launch-section launch-section--hero">
      <button type="button" class="${btnCls}" data-start-mailing${ready ? "" : " aria-disabled=\"true\""}>${t("startMailingAccent")}</button>
      ${hintHtml}
    </div>`;
  }


  function formatDt(iso) {
    if (!iso) return "—";
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return "—";
    const pad = (n) => String(n).padStart(2, "0");
    return `${pad(d.getDate())}.${pad(d.getMonth() + 1)}.${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
  }

  function mailingLastActivityIso(matches, activeRun) {
    let best = 0;
    for (const m of matches) {
      if (!m.matched_at) continue;
      const ts = new Date(m.matched_at).getTime();
      if (!Number.isNaN(ts) && ts > best) best = ts;
    }
    if (best) return new Date(best).toISOString();
    if (activeRun && activeRun.started_at) return activeRun.started_at;
    return null;
  }

  function renderMailingTab(p) {
    const snap = p.mailing_snapshot;
    const mailing = p.mailing;
    const stats = p.mailing_stats || {};
    if (!mailing) {
      return `
      <div class="mailing-panel">
        ${hintPara(t("statsNoMailing"))}
      </div>`;
    }
    const activeRun = snap && snap.active_run;
    const history = stats.history || [];
    const counts = stats.match_status_counts || {};
    const matches = stats.matches || [];
    const activeChats = (state.chats || []).filter((c) => c.is_active).length;
    const lastActivityIso = mailingLastActivityIso(matches, activeRun);

    const filterBtn = (status, label) => {
      const active = matchFilter === status ? " filter-tag--active" : "";
      const count = counts[status] || 0;
      return `<button type="button" class="filter-tag filter-tag--${status}${active}" data-match-filter="${status}">${label} <span>${count}</span></button>`;
    };

    const statsBody = `
          <div class="stats-grid stats-grid--mailing">
            <div class="stat-card">
              <span class="stat-label">${t("activeChats")}</span>
              <span class="stat-value">${activeChats}</span>
            </div>
            <div class="stat-card">
              <span class="stat-label">${t("lastActivity")}</span>
              <span class="stat-value stat-value--dt">${formatDt(lastActivityIso)}</span>
            </div>
          </div>
          ${activeRun ? `<p class="field-hint field-hint--block">${t("mailingRunning")}</p>` : ""}`;

    const matchRows = matches.map((m) => `
                <tr>
                  <td class="mono">${formatDt(m.matched_at)}</td>
                  <td>@${esc(m.username || "—")}</td>
                  <td>${esc(m.chat_title)}</td>
                  <td class="mono">${esc((m.text || "").slice(0, 70))}${(m.text || "").length > 70 ? "…" : ""}</td>
                  <td><span class="badge">${esc(m.status)}</span></td>
                </tr>`).join("");

    const matchesBody = `
          <div class="filter-tags">
            ${filterBtn("new", t("filterNew"))}
            ${filterBtn("reviewed", t("filterReviewed"))}
            ${filterBtn("dismissed", t("filterDismissed"))}
            ${matchFilter ? `<button type="button" class="filter-tag" data-match-filter="">${t("filterAll")}</button>` : ""}
          </div>
          ${matchRows
            ? tableWrap(
              `<tr><th>${t("matchWhen")}</th><th>${t("matchUser")}</th><th>${t("matchChat")}</th><th>${t("matchMessage")}</th><th>${t("matchStatus")}</th></tr>`,
              matchRows
            )
            : `<p class="field-hint">${t("matchesEmpty")}</p>`}`;

    const historyRows = [
      activeRun
        ? `<tr>
            <td>${formatDt(activeRun.started_at)}</td>
            <td>${activeRun.stopped_at ? formatDt(activeRun.stopped_at) : "—"}</td>
            <td><span class="badge">${t("runActive")}</span></td>
            <td class="text-right">${
              snap && snap.can_pause
                ? `<button type="button" class="btn btn-outline btn-sm" data-stop-mailing>${t("stopMailing")}</button>`
                : "—"
            }</td>
          </tr>`
        : "",
      ...history.map((r) => `
            <tr>
              <td>${formatDt(r.started_at)}</td>
              <td>${formatDt(r.stopped_at)}</td>
              <td>${esc(r.status)}</td>
              <td class="text-right">—</td>
            </tr>`),
    ].join("");

    const historyBody = (activeRun || history.length)
      ? tableWrap(
        `<tr><th>${t("colStarted")}</th><th>${t("colStopped")}</th><th>${t("matchStatus")}</th><th>${t("colActions")}</th></tr>`,
        historyRows
      )
      : `<p class="field-hint">${t("runsEmpty")}</p>`;

    return `
      ${accordion("mailing-stats", t("sectionStats"), statsBody)}
      ${accordion("mailing-matches", t("sectionMatches"), matchesBody)}
      ${accordion("mailing-history", t("sectionRunsHistory"), historyBody)}`;
  }

  function renderSettingsTab(b, profiles, p) {
    const templateRows = (state.attached_messages || []).map((m) => `
                <tr>
                  <td>${m.id}</td>
                  <td>${esc(m.name)}</td>
                  <td class="mono">${esc((m.text || "").slice(0, 80))}${(m.text || "").length > 80 ? "…" : ""}</td>
                  <td class="text-right"><button class="btn btn-outline btn-sm" data-detach-message="${m.id}">${t("detach")}</button></td>
                </tr>`).join("");

    const templatesBlock = `
          <div class="settings-subsection">
            <h3 class="settings-subsection__title">${esc(t("sectionTemplates"))}</h3>
            ${hintPara(t("templatesLead"))}
            <p class="field-hint field-hint--block">${t("templatesOptionalHint")}</p>
            <form id="form-message">
              <div class="field"><label class="label">${t("msgName")}</label>
                <input class="input" name="name" required></div>
              <div class="field"><label class="label">${t("msgText")}</label>
                <textarea class="textarea mono" name="text" required></textarea></div>
              <div class="actions"><button type="submit" class="btn btn-primary">${t("add")}</button></div>
            </form>
            ${tableWrap(
              `<tr><th>#</th><th>${t("msgName")}</th><th>${t("msgText")}</th><th></th></tr>`,
              templateRows
            )}
            ${(state.unattached_messages || []).length ? `
              ${hintPara(t("freeTemplates"))}
              <div class="chips">${state.unattached_messages.map((m) =>
                `<button class="btn btn-attach" data-attach-message="${m.id}">+ ${esc(m.name)}</button>`
              ).join("")}</div>` : ""}
          </div>`;

    const settingsBody = `
          <form id="form-settings">
            ${field(
              t("personalityAndEnvironment"),
              `<textarea class="textarea" name="personality_environment">${esc(combinedPersonalityEnvironment(b))}</textarea>`,
              t("personalityAndEnvironmentHint")
            )}
            ${field(t("dialogGoal"), `<textarea class="textarea" name="dialog_goal">${esc(b.dialog_goal)}</textarea>`, t("dialogGoalHint"))}
            ${field(t("product"), `<textarea class="textarea" name="product">${esc(b.product)}</textarea>`, t("productHint"))}
            ${field(t("communicationRules"), `<textarea class="textarea" name="communication_rules">${esc(b.communication_rules)}</textarea>`, t("communicationRulesHint"))}
            ${field(t("contactPerson"), `<input class="input" name="contact_person" value="${esc(b.contact_person)}">`, t("contactPersonHint"))}
            ${field(t("salesLinks"), `<textarea class="textarea" name="contact_materials">${esc(b.contact_materials)}</textarea>`, t("salesLinksHint"))}
            ${renderConsentField()}
            <div class="actions"><button type="submit" class="btn btn-primary">${t("save")}</button></div>
          </form>
          ${templatesBlock}`;

    const triggerRows = (state.attached_triggers || []).map((tr) => `
                <tr>
                  <td>${tr.id}</td>
                  <td class="mono">${esc(tr.pattern)}</td>
                  <td>${esc(tr.kind)}</td>
                  <td class="text-right"><button class="btn btn-outline btn-sm" data-detach-trigger="${tr.id}">${t("detach")}</button></td>
                </tr>`).join("");

    const triggersBody = `
          ${hintPara(t("triggersLead"))}
          <form id="form-trigger">
            <div class="field-row">
              <div class="field field-row__grow">
                <label class="label">${t("pattern")}</label>
                <input class="input" name="pattern" required>
              </div>
              <div class="field field-row__kind">
                <label class="label">${t("kind")}</label>
                <select class="select" name="kind">
                  <option value="keyword" selected>${t("keyword")}</option>
                  <option value="phrase">${t("phrase")}</option>
                  <option value="regex">${t("regex")}</option>
                </select>
              </div>
            </div>
            <div class="actions"><button type="submit" class="btn btn-primary">${t("add")}</button></div>
          </form>
          ${tableWrap(
            `<tr><th>#</th><th>${t("pattern")}</th><th>${t("kind")}</th><th></th></tr>`,
            triggerRows
          )}
          ${(state.unattached_triggers || []).length ? `
            ${hintPara(t("freeTriggers"))}
            <div class="chips">${state.unattached_triggers.map((tr) =>
              `<button class="btn btn-attach" data-attach-trigger="${tr.id}">+ ${esc(tr.pattern)}</button>`
            ).join("")}</div>` : ""}`;

    const chatRows = (state.chats || []).map((c) => `
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
                </tr>`).join("");

    const chatsBody = `
          ${hintPara(t("chatsLead"))}
          <form id="form-chat">
            <div class="field"><label class="label">${t("telegramId")}</label>
              <input class="input" name="telegram_id" type="number" required></div>
            <div class="field"><label class="label">${t("chatTitle")}</label>
              <input class="input" name="title" required></div>
            <div class="actions"><button type="submit" class="btn btn-primary">${t("add")}</button></div>
          </form>
          ${tableWrap(
            `<tr><th>#</th><th>${t("chatTitle")}</th><th>tg id</th><th>${t("active")}</th><th>${t("matches")}</th><th></th></tr>`,
            chatRows
          )}
          ${renderAutoJoinField(p)}`;

    return `
      ${renderTelegramSection(p)}
      ${accordion("bot-settings", t("sectionSettings"), settingsBody)}
      ${accordion("triggers", t("sectionTriggers"), triggersBody)}
      ${accordion("chats", t("sectionChats"), chatsBody)}`;
  }

  function navIcon(kind) {
    if (kind === "bot") {
      return `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="8" width="14" height="10" rx="3"/><path d="M12 4v4"/><circle cx="9" cy="13" r="1" fill="currentColor" stroke="none"/><circle cx="15" cy="13" r="1" fill="currentColor" stroke="none"/><path d="M8 18v2"/><path d="M16 18v2"/></svg>`;
    }
    if (kind === "mailing") {
      return `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 6h16v12H4z"/><path d="m4 7 8 6 8-6"/></svg>`;
    }
    return `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="3.5"/><path d="M5.5 19a6.5 6.5 0 0 1 13 0"/></svg>`;
  }

  function renderBottomNav() {
    const item = (tab, icon, labelKey) => `
      <button type="button" class="bottom-nav__item${activeTab === tab ? " bottom-nav__item--active" : ""}" data-tab="${tab}">
        <span class="bottom-nav__icon">${navIcon(icon)}</span>
        <span class="bottom-nav__label">${t(labelKey)}</span>
      </button>`;
    return `<nav class="bottom-nav" aria-label="Menu">
      ${item("settings", "bot", "tabBot")}
      ${item("mailing", "mailing", "tabMailing")}
      ${item("cabinet", "profile", "tabProfile")}
    </nav>`;
  }

  function render() {
    if (!state) return;
    root.classList.remove("loading");
    captureOpenAccordions();
    const b = state.bot;
    const profiles = state.profiles || [];
    const p = state.platform || {};
    const setup = p.account_setup || {};
    if (setup.step === "code" || setup.step === "password") {
      openAccordions.add("telegram");
    }

    root.innerHTML = `
      <div class="app-shell">
        <div class="app-hero">
          <header class="app-header">
            <img class="app-logo" src="./img/logo.png?v=20260711" width="52" height="52" alt="">
            <div class="app-header__body">
              <h1 class="app-title">${esc(b.name)}</h1>
              <p class="app-subtitle">${t("pageSubtitle")}</p>
            </div>
          </header>
          ${renderHeroAction()}
        </div>

        <div class="app-content">
          ${activeTab === "settings" ? renderSettingsTab(b, profiles, p)
            : activeTab === "mailing" ? renderMailingTab(p)
            : renderCabinetTab()}
        </div>
        ${renderBottomNav()}
      </div>
    `;

    bindEvents();
  }

  function bindEvents() {
    root.querySelectorAll("details.accordion[data-section]").forEach((el) => {
      el.addEventListener("toggle", () => {
        const id = el.dataset.section;
        if (el.open) openAccordions.add(id);
        else openAccordions.delete(id);
      });
    });

    root.querySelectorAll("[data-help]").forEach((btn) => {
      btn.addEventListener("click", () => showInstructionModal(btn.dataset.help));
    });

    root.querySelectorAll("[data-consent-info]").forEach((btn) => {
      btn.addEventListener("click", () => showConsentModal());
    });

    root.querySelectorAll("[data-auto-join-info]").forEach((btn) => {
      btn.addEventListener("click", () => showAutoJoinModal());
    });

    const autoJoinCheckbox = document.getElementById("auto-join");
    if (autoJoinCheckbox) {
      autoJoinCheckbox.addEventListener("change", async () => {
        const enabled = autoJoinCheckbox.checked;
        try {
          if (enabled) {
            await MiniappApi.enableAutoJoin({ deposit_agreed: true });
          } else {
            await MiniappApi.disableAutoJoin();
          }
          await load();
        } catch (err) {
          autoJoinCheckbox.checked = !enabled;
          showError(err.message);
        }
      });
    }

    const formSettings = document.getElementById("form-settings");
    if (formSettings) {
      formSettings.addEventListener("submit", async (e) => {
        e.preventDefault();
        const fd = new FormData(formSettings);
        try {
          await MiniappApi.saveSettings({
            name: state.bot.name,
            personality: String(fd.get("personality_environment") || "").trim(),
            environment: "",
            dialog_goal: fd.get("dialog_goal"),
            product: fd.get("product"),
            communication_rules: fd.get("communication_rules"),
            contact_person: fd.get("contact_person"),
            contact_materials: fd.get("contact_materials"),
            prompt_profile_id: state.bot.prompt_profile_id || null,
            is_default: state.bot.is_default,
            require_ad_consent: true,
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

    root.querySelectorAll("[data-tab]").forEach((btn) => {
      btn.addEventListener("click", () => {
        haptic("light");
        activeTab = btn.dataset.tab;
        render();
      });
    });

    root.querySelectorAll("[data-cancel-connect]").forEach((btn) => {
      btn.addEventListener("click", async () => {
        try { await MiniappApi.cancelAccountSetup(); } catch (_) {}
        await load();
      });
    });

    const formPhone = document.getElementById("form-account-phone");
    if (formPhone) {
      formPhone.addEventListener("submit", async (e) => {
        e.preventDefault();
        const fd = new FormData(formPhone);
        try {
          await MiniappApi.startAccountSetup({ phone: fd.get("phone") });
          await load();
        } catch (err) { showError(err.message); }
      });
    }
    const formCode = document.getElementById("form-account-code");
    if (formCode) {
      formCode.addEventListener("submit", async (e) => {
        e.preventDefault();
        const fd = new FormData(formCode);
        try {
          await MiniappApi.submitAccountCode({ code: fd.get("code") });
          await load();
        } catch (err) { showError(err.message); }
      });
    }
    const formPassword = document.getElementById("form-account-password");
    if (formPassword) {
      formPassword.addEventListener("submit", async (e) => {
        e.preventDefault();
        const fd = new FormData(formPassword);
        try {
          await MiniappApi.submitAccountPassword({ password: fd.get("password") });
          await load();
        } catch (err) { showError(err.message); }
      });
    }
    root.querySelectorAll("[data-disable-account]").forEach((btn) => {
      btn.addEventListener("click", async () => {
        try {
          await MiniappApi.disableAccount(btn.dataset.disableAccount);
          await load();
        } catch (err) { showError(err.message); }
      });
    });

    root.querySelectorAll("[data-match-filter]").forEach((btn) => {
      btn.addEventListener("click", async () => {
        matchFilter = btn.dataset.matchFilter || "";
        await load();
      });
    });

    root.querySelectorAll("[data-start-mailing]").forEach((btn) => {
      btn.addEventListener("click", async () => {
        const readiness = getMailingReadiness();
        if (!readiness.ready) {
          haptic("light");
          showMailingHint = true;
          render();
          return;
        }
        try {
          haptic("medium");
          const p = state.platform || {};
          if (!p.mailing) {
            await MiniappApi.createMailing();
          }
          await MiniappApi.startMailingRun();
          activeTab = "mailing";
          openAccordions.add("mailing-stats");
          openAccordions.add("mailing-history");
          showMailingHint = false;
          await load();
          haptic("success");
          showMailingSuccessModal();
        } catch (err) {
          haptic("error");
          showError(err.message);
        }
      });
    });
    root.querySelectorAll("[data-stop-mailing]").forEach((btn) => {
      btn.addEventListener("click", async () => {
        try {
          haptic("medium");
          await MiniappApi.stopMailingRun();
          flash(t("mailingStopped"));
          await load();
        } catch (err) {
          haptic("error");
          showError(err.message);
        }
      });
    });

    root.querySelectorAll("[data-about-bot]").forEach((btn) => {
      btn.addEventListener("click", () => {
        haptic("light");
        showAboutBotModal();
      });
    });
    root.querySelectorAll("[data-topup-balance]").forEach((btn) => {
      btn.addEventListener("click", () => {
        haptic("light");
        showTopUpModal();
      });
    });
  }

  async function load() {
    hideError();
    try {
      const [botState, meState] = await Promise.all([
        MiniappApi.getBot(matchFilter || undefined),
        MiniappApi.getMe().catch(() => null),
      ]);
      state = botState;
      cabinet = meState;
      render();
    } catch (err) {
      const msg = err.message || t("error");
      const hint = err.status ? t("apiError") : msg;
      showError(hint);
      root.innerHTML = `<div class="loading">${esc(hint)}</div>`;
    }
  }

  async function init() {
    const embedMode = new URLSearchParams(window.location.search).get("embed") === "admin";
    if (embedMode) {
      document.body.classList.add("is-admin-embed");
      document.documentElement.classList.add("is-admin-embed");
    }

    document.querySelectorAll("[data-close-instr]").forEach((el) => {
      el.addEventListener("click", closeInstructionModal);
    });
    document.querySelectorAll("[data-close-success]").forEach((el) => {
      el.addEventListener("click", closeSuccessModal);
    });
    document.querySelectorAll("[data-close-paywall]").forEach((el) => {
      el.addEventListener("click", closePaywall);
    });
    document.addEventListener("keydown", (ev) => {
      if (ev.key !== "Escape") return;
      closePaywall();
    });

    const tg = window.Telegram && window.Telegram.WebApp;
    if (tg) {
      tg.ready();
      tg.expand();
      if (tg.setHeaderColor) tg.setHeaderColor("#2d74fe");
      if (tg.setBackgroundColor) tg.setBackgroundColor("#ffffff");
      if (tg.disableVerticalSwipes) tg.disableVerticalSwipes();
      const mobilePlatforms = ["ios", "android", "android_x", "weba", "webk"];
      if (mobilePlatforms.includes(tg.platform) || window.innerWidth <= 900) {
        document.body.classList.add("is-mobile-app");
        document.documentElement.classList.add("is-mobile-app");
      }
      const safe = tg.safeAreaInset || tg.contentSafeAreaInset;
      if (safe) {
        const rootEl = document.documentElement;
        rootEl.style.setProperty("--tg-safe-top", `${safe.top || 0}px`);
        rootEl.style.setProperty("--tg-safe-right", `${safe.right || 0}px`);
        rootEl.style.setProperty("--tg-safe-bottom", `${safe.bottom || 0}px`);
        rootEl.style.setProperty("--tg-safe-left", `${safe.left || 0}px`);
      }
    } else if (window.innerWidth <= 900) {
      document.body.classList.add("is-mobile-app");
      document.documentElement.classList.add("is-mobile-app");
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
