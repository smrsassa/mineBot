// Discord.js
const Discord = require("discord.js");
const jimp = require('jimp');
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");
// LowDB
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const { isNumber } = require("util");
const adapter = new FileSync('./database/database.json');
const db = low(adapter);
// My functions
const msg = require('./functions/msg.js');
const coord = require('./functions/coordenadas.js');

client.on("ready", () => {
  console.log(`bot foi iniciado, com ${client.users.cache.size} usuarios, em ${client.channels.cache.size} canais, em ${client.guilds.cache.size} servidores`);

  client.user.setStatus("online");
  client.user.setActivity("!help", { type: "WATCHING" });
});

client.on('message', message => {
  let fullMsg = message.content
  let comando = fullMsg.split(" ")[0];

  // Comandos que envolvem coordenadas
  if ( comando === '!cord' ) {
    coord.seecord(fullMsg, message, db);
  }

  if ( comando === '!addcord' ) {
    coord.adicionarcord(fullMsg, message, db, isNumber);
  }

  if ( comando === '!upcord' ) {
    coord.updatecord(fullMsg, message, db);
  }

  if ( comando === '!delcord' ) {
    coord.deletarcord(fullMsg, message, db)
  }

  if (fullMsg === '!cheat') {
    msg.seecheats(Discord ,message);
  }

  if (fullMsg === 'what is my avatar') {
    message.reply(message.author.displayAvatarURL());
  }
});

client.login(config.token);
