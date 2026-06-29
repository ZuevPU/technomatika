# MAX-бот ТЕХНОМАТИКА

Чат-бот для мессенджера MAX: приветствие при открытии чата и кнопка «Открыть» для мини-приложения с материалами КПК.

## Перед первым запуском

### 1. Перевыпустите токен бота

Если токен когда-либо попадал в чат или в git — **создайте новый**:

1. Откройте [MAX для партнёров](https://business.max.ru)
2. **Чат-боты** → выберите бота **id7720258550_bot**
3. В настройках бота → **Перевыпустить токен**
4. Скопируйте новый токен в `bot/.env` (не коммитьте!)

### 2. Настройте мини-приложение в кабинете MAX

1. **Чат-боты** → **id7720258550_bot** → **Расширенные настройки** → **Настроить**
2. URL мини-приложения:
   ```
   https://zuevpu.github.io/technomatika
   ```
3. Вид кнопки в шапке чата: **«Открыть»** → **Сохранить**

После сохранения в шапке чата появится постоянная кнопка запуска приложения.

## Локальный запуск

```bash
cd bot
npm install
cp .env.example .env
# отредактируйте .env — вставьте BOT_TOKEN
npm start
```

Откройте `https://max.ru/id7720258550_bot` в MAX — должно прийти приветствие с inline-кнопкой «Открыть».

## Деплой на Timeweb Cloud

Бот работает через long polling (`bot.start()`), входящий HTTP не нужен.

### Вариант A: App Platform (рекомендуется)

1. Зайдите в [Timeweb Cloud](https://timeweb.cloud) → **App Platform** → **Создать приложение**
2. Подключите репозиторий с GitHub
3. Настройки сборки:
   - **Root directory:** `bot`
   - **Build command:** `npm install`
   - **Start command:** `node bot.js`
   - **Тип:** Worker / фоновый процесс (не веб-сервис с портом)
4. Переменные окружения:

   | Ключ | Значение |
   |------|----------|
   | `BOT_TOKEN` | новый токен из кабинета MAX |
   | `BOT_USERNAME` | `id7720258550_bot` |

5. Запустите деплой и проверьте логи — должно быть сообщение `Technomatika MAX bot starting…` без ошибок.

### Вариант B: VPS (Ubuntu)

```bash
# на сервере
git clone <url-репозитория> technomatika && cd technomatika/bot
npm install
cp .env.example .env && nano .env   # вставьте BOT_TOKEN

# systemd-сервис
sudo tee /etc/systemd/system/technomatika-bot.service << 'EOF'
[Unit]
Description=Technomatika MAX Bot
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=/path/to/technomatika/bot
EnvironmentFile=/path/to/technomatika/bot/.env
ExecStart=/usr/bin/node bot.js
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
EOF

sudo systemctl enable --now technomatika-bot
sudo systemctl status technomatika-bot
```

## Проверка

- [ ] В кабинете MAX указан URL мини-приложения
- [ ] Бот запущен (локально или в облаке), в логах нет ошибок
- [ ] Открыть чат с ботом → приходит приветствие + кнопка «Открыть»
- [ ] Нажать «Открыть» → открывается сайт на GitHub Pages внутри MAX
- [ ] Команда `/start` → то же приветствие

## Ссылки

- Бот: https://max.ru/id7720258550_bot
- Мини-приложение: https://zuevpu.github.io/technomatika
- [MAX Bot API (JS)](https://dev.max.ru/docs/chatbots/bots-coding/library/js)
