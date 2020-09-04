const { Command } = require("klasa");

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            name: "kick",
            enabled: true,
            runIn: ["text"],
            aliases: ["k"],
            permissionLevel: 5,
            requiredPermissions: ["KICK_MEMBERS", "EMBED_LINKS"],
            description: "Kicks the mentioned user.",
            usage: "<user:usersearch> <reason:str>", usageDelim: ","
        });

        this.humanUse = "<user>_<reason>";
    }

    async run(msg, [user, reason]) {
        user = msg.guild.members.cache.get(user.id);
        if (user.kickable === false) { return msg.reply("I cannot kick that member"); }
        
        var data = this.client.util.modEmbed(msg, "kick", user, reason);
        
        if (data.embed.thumbnail) {
            await user.send({embed: data.DMembed});
            await user.kick(`Automated Action - Moderator: ${msg.author.username} | Reason: ${reason}`);
        }

        this.client.util.defaultChannel(msg.guild, "mod").send({embed: data.embed});
    }
};