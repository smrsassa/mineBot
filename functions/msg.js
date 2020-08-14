module.exports.seecord = function () {
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