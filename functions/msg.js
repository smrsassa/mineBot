module.exports.seehelp = function (Discord, message) {
  const indexEmbed = new Discord.MessageEmbed()
	  .setColor('#006600')
	  .setTitle('Vou te ajudar com os comandos!')
	  .setDescription('Troque para os valores os textos e {}')
	  .addFields(
      { name: 'Coordenadas', value: 'Todos os comandos relacionados a coordenadas' },
      { name: 'Ver uma coordenada(para ver todas de o comando sem indicar o nome)', value: '!cord {Nome da coord}' },
      { name: 'Adicionar uma coordenada', value: '!addcord {Nome da coord} {X} {Y} {Z}' },
      { name: 'Editar uma coordenada', value: '!upcord {Nome da coord} {valor que deseja alterar(n para alterar o nome, x,y ou z para as coordenadas)} {novo valor}' },
      { name: 'Apagar uma coordenada', value: '!delcord {Nome da coord}' },
      { name: 'Ver comandos mais usados Mine', value: '!cheat' }
	  )
	  .setFooter('Acesse o projeto no github para me dar mais ideias sugestões ', 'https://shifter.sapo.pt/wp-content/uploads/2020/04/GitHub-Gratuito-Shifter_01.jpg');
  message.reply(indexEmbed);
}

module.exports.seecheats = function (Discord, message) {
  const comandEmbed = new Discord.MessageEmbed()
	  .setColor('#006600')
	  .setTitle('Principais comandos')
	  .addFields(
      { name: '/list', value: 'Exibe a lista de comandos' },
      { name: '/gamemode [0, 1, 2, 3]', value: 'Muda o modo de jogo (Sobrevivência, Criativo, Aventura e Espectador)' },
      { name: '/give [nome do item]', value: 'Materializa um item em seu inventário' },
      { name: '/kill [@r, @e, @a, @p]', value: 'Mata um jogador aleatório, todas as entidades, todos os jogadores ou o jogador mais próximo' },
      { name: '/time set [23000, noon, 12000, midnight, day, night]', value: 'Muda o horário para o nascer do Sol, meio-dia, pôr-do-Sol, meia-noite, dia, noite' },
      { name: '/weather [clear, rain, snow, thunder] [tempo de duração]', value: 'Muda o clima para céu aberto, chuva, neve ou tempestade' },
      { name: '/instantmine', value: 'Minera instantaneamente com qualquer arma' },
      { name: '/dropstore', value: 'Invoca um baú e guarda todo o seu inventário nele' },
      { name: '/summon [nome da entidade]', value: 'Invoca uma entidade' },
      { name: '/spawnpoint [nome do jogador] [x, y, z]', value: 'Especifica um ponto no mapa como local de respawn, onde o personagem irá reaparecer após morrer. É preciso definir as coordenadas em x, y e z' },
      { name: '/falldamage, /firedamage e /waterdamage', value: 'Desliga o dano por queda, fogo ou água' },
      { name: '/instantplant', value: 'Faz sementes plantadas crescerem instantaneamente' },
      { name: '/duplicate', value: 'Duplica o rol de itens em seu inventário e os materializa no chão' },
    )
    message.reply(comandEmbed);
}