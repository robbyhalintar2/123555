const { Command } = require("klasa");
const { MessageEmbed } = require("discord.js");

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            name: "giveAward",
            enabled: true,
            runIn: ["text"],
            permissionLevel: 9,
            requiredPermissions: ["EMBED_LINKS"],
            description: "Award a user based on their efforts",
            usage: "<user:usersearch> <suggest|bug|minor|major> <text:str>[...]",
            usageDelim: " "
        });

        this.humanUse = "<user> <suggest|bug|minor|major> <text>";

        this.customizeResponse("suggest", msg => msg.client.speech(msg, ["func-system", "award", "noType"]))
            .customizeResponse("text", msg => msg.client.speech(msg, ["func-system", "award", "noText"]));
    }

    async run(msg, [user, type, ...text]) {
        if (user === null) { return; }

        var overallData = this.client.dataManager("select", "Overall", "awards");
        var userData = this.client.dataManager("select", user.id, "awards");
        if (!userData) { return msg.sendLocale("DATACHECK_NOUSER"); }

        type = type.toLowerCase();
        const awards = this.client.settings.get("awards");

        this.client.dataManager("update", [`${type}=${overallData[type] + 1}`, "Overall"], "awards");
        this.client.dataManager("update", [`${type}=${userData[type] + 1}`, user.id], "awards");

        var userAccData = this.client.dataManager("select", user.id, "users");
        this.client.dataManager("update", [`credits=${userAccData.credits + awards[type]}`, user.id], "users");

        const embed = new MessageEmbed()
            .setColor(0x04d5fd)
            .setTimestamp()
            .setTitle("🎉 Award Notification! 🎉")
            .addField(`To ${user.tag} for the reason of ${text.join(" ")}`, `User has been awarded ${awards[type]} credits!`)
            .setFooter(`Awarded to: ${user.tag} (${user.id}) on`, user.displayAvatarURL());

        msg.channel.send(this.client.speech(msg, ["func-system", "award", "success"], [["-id", user.id], ["-credit", awards[type]]]));
        this.client.channels.get(this.client.settings.get("awardChannel")).send({embed});       
    }
};