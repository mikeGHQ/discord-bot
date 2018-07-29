// const Discord = require('discord.js');
const commando = require('discord.js-commando');

const bot = new commando.Client();

bot.registry.registerGroups([
    ['random', 'Random']
]); // create a new group
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

const BotToken = 'BotToken';
bot.login(BotToken)
    .then(() => {
        console.log('Bot is up and running');
    })
    .catch(error => {
        console.log('Bot not connected', error.message);
    });
