const { Command } = require("klasa");
const { MessageEmbed } = require("discord.js");

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            name: "balance",
            enabled: true,
            runIn: ["text"],
            aliases: ["bal", "credits", "profile"],
            requiredPermissions: ["EMBED_LINKS"],
            description: "Check credit amounts and cooldowns",
            usage: "<user:usersearch>"
        });

        this.humanUse = "[user]";
    }

    async run(msg, [user]) {
        var data = this.client.dataManager("select", user.id, "users");
        if (!data) { return msg.sendLocale("DATACHECK_NOACCOUNT"); }

        var cooldown = JSON.parse(data.cooldowns);
        let time = [((Date.now() - cooldown.credit) / 86400000), ((Date.now() - cooldown.rep) / 86400000)];
        
        for (var x = 0; x < 2; x++) {
            if (time[x] >= 14) { time.push(`${(time[x]/7).toFixed(2)} weeks`); }
            else if (time[x] >= 1) { time.push(`${time[x].toFixed(2)} days`); }
            else { time.push(`${(time[0] * 24).toFixed(2)} hours`); }
        }

        const embed = new MessageEmbed()
            .setTimestamp()
            .setFooter(msg.guild.name, msg.guild.iconURL())
            .setThumbnail(user.displayAvatarURL())
            .setColor(0x04d5fd)
            .setAuthor(`${user.username} | ${user.id}`)
            .addField("Credits:", `${(data.credits).toLocaleString()} (Last redeem: ${time[2]} ago)`)
            .addField("Reputation:", `${data.rep} (Last Rep: ${time[3]} ago)`);

        msg.channel.send(embed);
    }
};