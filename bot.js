const Discord = require("discord.js");
const jimp = require('jimp');
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
/* Enviar imagem de bem vindo
client.on("guildMemberAdd", async member => {

  let canal = client.channels.get("705225611878203505")
  let fonte = await jimp.loadFont(jimp.FONT_SANS_32_BLACK);
  let masc = await jimp.read('img/mascara.png');
  let fundo = await jimp.read('img/fundo.png');

  jimp.read(member.user.displayAvatarURL)
    .then(avatar => {

      avatar.resize(130, 130);
      masc.resize(130, 130);
      avatar.mask(masc);

      fundo.print(fonte, 180, 175, member.user.username);

      fundo.composite(avatar, 30, 30).write('users_img/bemvindo.png');

      canal.send(``, { files: ["bemvindo.png"] });

    })
    .catch(err => {
      console.log('ERRO: erro ao carregar a imagem (jimp.js)');
    });

});
*/
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