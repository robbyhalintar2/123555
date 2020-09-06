    const Discord = require("discord.js")

    module.exports = {
    name: "avatar",
    category: "utility",
    description: "Gets the avatar of a user or yourself",
    usage: "[command | user] or [command]",
    run: async (client, message, args) => {
    //command
    
{
    const user = message.mentions.users.first();
    if(!user)
        return message.reply('Please mention the user who you want the avatar from.');

    if(!user.avatarURL)
        return message.channel.send(`That user does not have an avatar`);

    {
    
    const avatar = new Discord.MessageEmbed()
          .setTitle(`${user.username}'s Avatar`)
          .setColor("RANDOM")
          .setImage(user.avatarURL())
          .setURL(user.avatarURL())  
          message.channel.send(avatar)
        };
    }
       
    }
    
    };