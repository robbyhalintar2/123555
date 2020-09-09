const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  try {
    if (client.config.channel.includes(message.channel.id)) return;
    if (!message.member.voice.channel) return message.channel.send({
      embed: {
        color: client.warna.error,
        description: `${client.emoji.error} | Kamu harus masuk Channel Voice telebih dahulu!`
      }
    })
    if (!client.player.isPlaying(message.guild.id)) return message.channel.send({
      embed: {
        color: client.warna.error,
        description: `${client.emoji.error} | You must be in a voice channel!`
      }
    })

    const mode = client.player.getQueue(message.guild.id).repeatMode;
    if (mode) {
      client.player.setRepeatMode(message.guild.id, false)
      message.channel.send('*Repeat* telah dinonaktifkan!');
    } else {
      client.player.setRepeatMode(message.guild.id, true)
      message.channel.send('*Repeat* telah diaktifkan!');
    }
    // Get the current song
    let song = await client.player.nowPlaying(message.guild.id);

    message.channel.send({
      embed: {
        color: client.warna.success,
        description: `${client.emoji.repeat} | Repeating [${song.name}](${song.url})!`
      }
    })
  } catch (error) {
    return message.channel.send(`Something went wrong: ${error.message}`);
    // Restart the bot as usual.
  }
}

exports.conf = {
  aliases: ["loop"],
  cooldown: 5
}

exports.help = {
  name: 'repeat',
  description: 'mengulang kembali lagu',
  usage: 'k!repeat',
  example: 'k!repeat'
}