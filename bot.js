const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
  console.log(`bot foi iniciado, com ${client.users.cache.size} usuarios, em ${client.channels.cache.size} canais, em ${client.guilds.cache.size} servidores`);
  client.user.setActivity(`Eu estou em ${client.guilds.cache.size} servidores`);
});

client.on("guildCreate", guild => {
  console.log(`bot entrou nos servidor: ${guilds.name} (id: ${guilds.id}). População: ${guilds.memberCount} membros!`);
  client.user.setActivity(`Estou em ${client.guilds.cache.size} servidore`);
});

client.on("guildDelete", guild => {
  console.log(`O bot foi removido do servidor: ${guilds.name} (id: ${guilds.id})`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on('message', message => {
  if (message.content === '!casa') {
    message.channel.send('X: 546 Y: 64 Z: 123 | Comando: /tp 546 64 123');
  }
  if (message.content === 'what is my avatar') {
    // Send the user's avatar URL
    message.reply(message.author.displayAvatarURL());
  }
});

client.login(config.token);