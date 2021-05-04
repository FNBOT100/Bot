const Discord = require('discord.js');
const bot = new Discord.Client();

token = 'ODM4MTM3ODEzOTE2NTgxOTQw.YI2uqg.n9y3qSCXbxI5yxKYN5RlIxK8xKs';

bot.once('ready', () => {
	console.log('Starting Up !!');
});

bot.login = (token);