const Discord = require("discord.js");
const jimp = require('jimp');
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('./database/database.json');
const db = low(adapter);

client.on("ready", () => {
  console.log(`bot foi iniciado, com ${client.users.cache.size} usuarios, em ${client.channels.cache.size} canais, em ${client.guilds.cache.size} servidores`);

  //Trocando status / atividade do bot
  client.user.setStatus("online");
  client.user.setActivity("Minecraft", { type: "WATCHING" })

  // Set some defaults (required if your JSON file is empty)
  db.defaults({ locations: [], seeds: [], ToDo: [] }).write()
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

  let fullMsg = message.content
  let comando = comando.split(" ")[0];
  let pedido = comando.split(" ")[1];

  //message.channel.send('X: 546 Y: 64 Z: 123 | Comando: /tp 546 64 123');
  if (comando === 'what is my avatar') {
    // Send the user's avatar URL
    message.reply(message.author.displayAvatarURL());
  }
});

client.login(config.token);