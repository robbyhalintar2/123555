
const Discord = require("discord.js");
const superagent = require("snekfetch");
const utils = require('../../utils');

        module.exports = {
            name: "cuddle",
            category: "fun",
          description: "Allows you to cuddle another user",
          usage: "[command | user]",
          run: async (client, message, args) => {
          //command
          if(message.guild === null)return;
          const user = message.mentions.users.first();
          if(!user)
              return message.reply('Mention someone to cuddle.');

          superagent.get('https://nekos.life/api/v2/img/cuddle')
              .end((err, response) => {
            const lewdembed = new Discord.MessageEmbed()
            .setTitle(user.username + " Just got a cuddle from " + message.author.username)
            .setImage(response.body.url)
            .setColor(`RANDOM`)
            .setDescription((user.toString() + " got a cuddle from " + message.author.toString()))
            .setFooter(`this is so cute`)
            .setURL(response.body.url);
        message.channel.send(lewdembed);
          })

          }
          };