const Discord = require('discord.js');
const neko = require('nekos.life')
const { nsfw } = new neko()

exports.run = async (client, message, args) => {
  if (!['710431360954794004'].includes(message.channel.id)) return;
  try {
    const genre = [nsfw.neko(), nsfw.nekoGif(), nsfw.kemonomimi(), nsfw.eroKemonomimi(), nsfw.kitsune(), nsfw.eroKitsune(), nsfw.holo()];
    const random = genre[Math.floor(Math.random() * genre.length)];
    rhentai = await random
    let embed = new Discord.MessageEmbed()
      .setTitle('( ͡°( ͡° ͜ʖ( ͡° ͜ʖ ͡°)ʖ ͡°) ͡°)')
      .setColor('#985ce7')
      .setImage(rhentai.url)

    message.channel.send(embed)
  } catch (error) {
    return message.channel.send(`Something went wrong: ${error.message}`);
    // Restart the bot as usual.
  }
}

exports.conf = {
  aliases: ['neko', 'kitsune'],
  cooldown: 1
}

exports.help = {
  name: 'kemonomimi',
  description: 'Get a NSFW URL of a kemonomimi image/gif',
  usage: 'k!kemonomimi',
  example: 'k!neko'
}