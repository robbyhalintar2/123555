const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {

  if (message.channel.id === "447408276628307969") return;

  let prefix = client.config.prefix;

  if (!args[0]) {
    let module = client.helps.array();
    if (!client.config.owners.includes(message.author.id)) module = module.filter(x => !x.hide)
    const embed = new MessageEmbed()
      .setColor(client.warna.kato)
      .setTimestamp()
      .setFooter(`© 2020, Perkumpulan Orang Santai • Total: ${client.commands.size} commands`, client.user.avatarURL)
      .setDescription(`Ketik \`${client.config.prefix}help [command] / ${client.config.prefix2}help [command]\` untuk menambahkan informasi lebih lanjut mengenai sebuah perintah.`)
      .setTitle(`<:kato:750342786825584811> ${client.user.username}-Bot Command List <:kato:750342786825584811>`)

    for (const mod of module) {
      embed.addField(`${mod.name}`, mod.cmds.map(x => `\`${x}\``).join(' . '), true);
    }
    return message.channel.send(embed);
  } else {
    let cmd = args[0];
    if (client.commands.has(cmd) || client.commands.get(client.aliases.get(cmd))) {
      let command = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd))
      let name = command.help.name;
      let desc = command.help.description;
      let cooldown = command.conf.cooldown;
      let aliases = command.conf.aliases.join(', ') ? command.conf.aliases.join(', ') : 'No aliases provided.';
      let usage = prefix + command.help.usage !== undefined ? command.help.usage : "No usage provided.";
      let example = prefix + command.help.example !== undefined ? command.help.example : "No example provided."

      let embed = new MessageEmbed().setColor("#985ce7").setTitle(name).setDescription(desc).setThumbnail(client.user.avatarURL).setFooter('[] opsional, <> diwajibkan. • Jangan tambahkan simbol ini ketika mengetik sebuah perintah.')
        .addField('Usage', usage, true)
        .addField('Aliases', aliases, true)
        .addField('Cooldown', `${cooldown} second(s)`, true)
        .addField('Example', `${example}`, true)
      return message.channel.send(embed);
    }
    if (!client.commands.has(cmd) || !client.commands.get(client.aliases.get(cmd))) {
      message.channel.send({ embed: { color: 0xcc5353, description: "gaada command bos, dih." } })
    }
  }
}

exports.conf = {
  aliases: [],
  cooldown: 5
}

exports.help = {
  name: 'help',
  description: 'Menampilkan daftar perintah bot Kato.',
  usage: 'help [command name]',
  example: 'help [command name]'
}