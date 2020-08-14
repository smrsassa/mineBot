module.exports.seecord = function (fullMsg, message, db) { 
  let nome_coord = fullMsg.split(" ")[1];

  if ( nome_coord != undefined ) {
    let row = db.get('locations').find({nome: nome_coord}).value();
  
    message.reply('X: '+row.X+' Y: '+row.Y+' Z: '+row.Z+' | Comando: /tp '+row.X+' '+row.Y+' '+row.Z);
  } else {
    let rows = db.get('locations').value();
    let arrayRows = [];

    for ( var c = 0; c < rows.length; c++) {
      arrayRows.push({name: rows[c].nome, value: 'X: '+rows[c].X+' Y: '+rows[c].Y+' Z: '+rows[c].Z});
    }

    let objEmbed = {
      color: 0x0099ff,
      title: 'Todas as coordenadas',
      fields: arrayRows
    };

    message.reply({ embed: objEmbed });
  }
};

module.exports.adicionarcord = function (fullMsg, message, db, isNumber) { 
    let nome_coord = fullMsg.split(" ")[1];
    let coord_X = fullMsg.split(" ")[2];
    let coord_Y = fullMsg.split(" ")[3];
    let coord_Z = fullMsg.split(" ")[4];
    let arrComando = fullMsg.split(" ");

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
};

module.exports.updatecord = function (fullMsg, message, db) { 
  let nome_coord = fullMsg.split(" ")[1];
  let valor_alterado = fullMsg.split(" ")[2];
  let valor_atualizado = fullMsg.split(" ")[3];

  switch (valor_alterado) {
    case "nome": case "Nome": case "NOME":
      db.get('locations')
        .find({ nome: nome_coord })
        .assign({nome: valor_atualizado})
        .write();

      message.reply('Nome da coordenada foi atualizado');
      break;
    case "X": case "x":
      db.get('locations')
        .find({ nome: nome_coord })
        .assign({X: valor_atualizado})
        .write();

      message.reply('Coordenada X foi atualizado');
      break;
    case "Y": case "y":
      db.get('locations')
        .find({ nome: nome_coord })
        .assign({Y: valor_atualizado})
        .write();

      message.reply('Coordenada Y foi atualizado');
      break;
    case "Z": case "z":
      db.get('locations')
        .find({ nome: nome_coord })
        .assign({Z: valor_atualizado})
        .write();

      message.reply('Coordenada Z foi atualizado');
      break;
    default:
      message.reply(valor_alterado);
      break;
  }
};

module.exports.deletarcord = function (fullMsg, message, db) { 
  let nome_coord = fullMsg.split(" ")[1];

  db.get('locations')
    .remove({ nome: nome_coord })
    .write()

  message.reply('Coordenada '+nome_coord+' foi deletada');
};
