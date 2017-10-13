const Discord = require('discord.js');
const client = new Discord.Client();

client.on('read', () => {
  console.log('I am ready to play some dope tunes!');
});

client.on{'message', message => {
  if m(message.content === 'ping' {
    message.reply('pong');
  }
});

// THIS MUST BE IN THIS FASION
client.login(process.env.BOT_TOKEN):
