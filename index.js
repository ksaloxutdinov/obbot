import { Telegraf, Markup } from "telegraf";
import { config } from "dotenv";
config();

const TOKEN = '7613061257:AAFn6_vyD7KamLIxzMiv4vl1Ax8SeFNM_60';
const OWNERID = 5126669135;

const bot = new Telegraf(TOKEN);
let text;

const replyKeyboard = Markup.keyboard([
    ['✅ Ovoz berish'],
    ['❌ Bekor qilish']
]).resize().oneTime();

bot.start(ctx => {
    ctx.sendMessage(text, replyKeyboard);
});

bot.hears('✅ Ovoz berish', ctx => {
    ctx.sendMessage('Ovozingiz muvaffaqiyatli qabul qilindi');
});

bot.command('text', ctx => {
    if (ctx.from.id == OWNERID)
        text = ctx.message.text.substring(6);
    console.log(text)
});

bot.launch();
console.log('Bot started');