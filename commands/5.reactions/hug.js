const { MessageEmbed } = require("discord.js");
const client = require("nekos.life");
const { sfw } = new client();

exports.run = async (client, message, args) => {
  try {
    let hug = await sfw.hug();
    let member = message.mentions.members.first()
    if (!args[0]) return message.reply("mention seseorang untuk melanjutkan!")
    if (member) {
      let embed = new MessageEmbed()
        .setTitle(`${message.guild.member(message.author).displayName} memeluk ${message.guild.member(member).displayName} (✿◡‿◡)`)
        .setColor("#985ce7")
        .setImage(hug.url);

      message.channel.send(embed);
    } else message.reply("sepertinya terjadi kesalahan");

  } catch (error) {
    return message.channel.send(`Something went wrong: ${error.message}`);
    // Restart the bot as usual.
  }
}

exports.conf = {
  aliases: ["peluk"],
  cooldown: 5
}

exports.help = {
  name: 'hug',
  description: 'reaksi',
  usage: 'k!hug <user>',
  example: 'k!hug @juned'
}