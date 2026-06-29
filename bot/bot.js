import 'dotenv/config';
import http from 'node:http';
import { Bot, Keyboard } from '@maxhub/max-bot-api';

const BOT_TOKEN = process.env.BOT_TOKEN;
const BOT_USERNAME = process.env.BOT_USERNAME ?? 'id7720258550_bot';
const PORT = Number(process.env.PORT ?? 8080);

if (!BOT_TOKEN) {
  console.error('BOT_TOKEN is not set. Copy bot/.env.example to bot/.env and add your token.');
  process.exit(1);
}

const WELCOME_TEXT =
  'Учебный хаб КПК «Техноматика» для учителей информатики. Презентации, конспекты лекций, дополнительные и самостоятельные работы по модулям очного обучения. Все материалы курса — в одном месте.\n\n' +
  'Чтобы ознакомиться с материалами, нажмите «Открыть».';

const MINI_APP_LINK = `https://max.ru/${BOT_USERNAME}?startapp`;

const welcomeKeyboard = Keyboard.inlineKeyboard([
  [Keyboard.button.link('Открыть', MINI_APP_LINK)],
]);

const bot = new Bot(BOT_TOKEN);

async function sendWelcome(ctx) {
  await ctx.reply(WELCOME_TEXT, {
    attachments: [welcomeKeyboard],
  });
}

bot.on('bot_started', sendWelcome);
bot.command('start', sendWelcome);

http
  .createServer((req, res) => {
    if (req.url === '/health' || req.url === '/') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ status: 'ok' }));
      return;
    }
    res.writeHead(404);
    res.end();
  })
  .listen(PORT, () => {
    console.log(`Health check listening on :${PORT}`);
  });

console.log(`Technomatika MAX bot starting (@${BOT_USERNAME})…`);
bot.start();