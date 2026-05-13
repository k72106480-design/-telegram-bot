const TelegramBot = require('node-telegram-bot-api');

const token = process.env.BOT_TOKEN;AAGYMYOEhl89E7YE4BRHES0UhLAJi8MFPL8
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, "🔥 أهلاً في Prime Subs");
});