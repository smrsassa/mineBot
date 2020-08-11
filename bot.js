const Discord = require("discord.js");
const jimp = require('jimp');
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const { isNumber } = require("util");
const adapter = new FileSync('./database/database.json');
const db = low(adapter);

client.on("ready", () => {
  console.log(`bot foi iniciado, com ${client.users.cache.size} usuarios, em ${client.channels.cache.size} canais, em ${client.guilds.cache.size} servidores`);

  //Trocando status / atividade do bot
  client.user.setStatus("online");
  client.user.setActivity("!help", { type: "WATCHING" })

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
  let comando = fullMsg.split(" ")[0];
  let arrComando = fullMsg.split(" ");

  if ( comando === '!help' ) {
    const exampleEmbed = new Discord.MessageEmbed()
	    .setColor('#006600')
	    .setTitle('Vou te ajudar com os comandos!')
	    .setDescription('Troque para os valores os textos e {}')
	    .setThumbnail('https://i.imgur.com/wSTFkRM.png')
	    .addFields(
        { name: 'Coordenadas', value: 'Todos os comandos relacionados a coordenadas' },
        { name: 'Ver uma coordenada(para ver todas de o comando sem indicar o nome)', value: '!cord {Nome da coord}' },
        { name: 'Adicionar uma coordenada', value: '!addcord {Nome da coord} {X} {Y} {Z}' },
        { name: 'Editar uma coordenada', value: '!upcord {Nome da coord} {valor que deseja alterar(n para alterar o nome, x,y ou z para as coordenadas)} {novo valor}' },
        { name: 'Apagar uma coordenada', value: '!delcord {Nome da coord}' },
        { name: 'Seed', value: 'Todos os comandos relacionados a seed' },
        { name: 'Ver uma seed(para ver todas de o comando sem indicar o nome)', value: '!seed {nome da seed}' },
        { name: 'Adicionar uma seed', value: '!addseed {nome da seed} {numero da seed}' },
        { name: 'Apagar uma seed', value: '!delseed {nome da seed}' }
	    )
	    .setFooter('Acesse o projeto no github para me dar mais ideias sugestões ', 'https://shifter.sapo.pt/wp-content/uploads/2020/04/GitHub-Gratuito-Shifter_01.jpg');
      message.reply(exampleEmbed);
  }

  if ( comando === '!addcord' ) {
    let nome_coord = fullMsg.split(" ")[1];
    let coord_X = fullMsg.split(" ")[2];
    let coord_Y = fullMsg.split(" ")[3];
    let coord_Z = fullMsg.split(" ")[4];

    if ( (isNumber(parseFloat(coord_X)) && isNumber(parseFloat(coord_Y)) && isNumber(parseFloat(coord_Z))) && arrComando.length == 5 ) {
      db.get('locations')
        .push({ nome: nome_coord, X: coord_X, Y: coord_Y, Z: coord_Z})
        .write()

      message.reply('Nova coordenadas foi adicionada');
    } else {
      if ( (isNumber(parseFloat(coord_X)) && isNumber(parseFloat(coord_Y)) && isNumber(parseFloat(coord_Z))) ) {
        message.reply('Coordenadas são compostas apenas por números');
      } else {
        message.reply('Digite o comando corretamente');
      }
    }
  }

  //message.channel.send('X: 546 Y: 64 Z: 123 | Comando: /tp 546 64 123');
  if (comando === 'what is my avatar') {
    // Send the user's avatar URL
    message.reply(message.author.displayAvatarURL());
  }
});

client.login(config.token);
