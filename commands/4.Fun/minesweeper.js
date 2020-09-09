const Discord = require('discord.js');
const Minesweeper = require('discord.js-minesweeper');
exports.run = async (client, message, args) => {
  try {
    let minesweeper;
    switch (args[0]) {
      case '1':
        minesweeper = new Minesweeper({
          rows: 6,
          columns: 6,
          mines: 5,
        });
        break;
      case '2':
        minesweeper = new Minesweeper({
          rows: 7,
          columns: 7,
          mines: 6,
          emote: 'tada',
        });
        break;
      case '3':
        minesweeper = new Minesweeper({
          rows: 9,
          columns: 9,
          mines: 7,
        });
        break;
      case '4':
        minesweeper = new Minesweeper({
          rows: 11,
          columns: 11,
          mines: 8,
        });
        break;
      case '5':
        minesweeper = new Minesweeper({
          rows: 12,
          columns: 13,
          mines: 9,
        });
        break;
      default:
        minesweeper = new Minesweeper();
        break;
    }

    message.channel.send(minesweeper.start()).then(t => t.delete({timeout: 1.2e+6}));
  } catch (error) {
    return message.channel.send(`Something went wrong: ${error.message}`);
    // Restart the bot as usual.
  }
}

exports.conf = {
  aliases: ["ms"],
  cooldown: 8
}

exports.help = {
  name: 'minesweeper',
  description: 'bermain minesweeper',
  usage: 'k!ms',
  example: 'k!ms'
}
