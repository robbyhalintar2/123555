const { Command } = require("klasa");
const config = require("../../assets/settings.json");

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            name: "permlevel",
            runIn: ["text"],
            guarded: true,
            description: "Checks your permission level."
        });
    }

    async run(msg) {
        var permLevel = 0;

        if (msg.author === this.client.owner || this.client.secondary.includes(msg.author.id)) {
            var guild = msg.guild;
            var authorLvl = (msg.author === this.client.owner) ? 10 : 9;
            var author = guild.members.cache.get(msg.author.id);

            if (!guild) { permLevel = 0; }
            else if (guild.owner.id === msg.author.id) { permLevel = 3; }
            else if (author.permissions.has("ADMINISTRATOR")) { permLevel = 2; }
            else if (author.roles.cache.has(guild.settings.modRole)) { permLevel = 1; }
            else { permLevel = 0; }

            

            var info = msg.language.get("ADDPERMS")[permLevel];
            return msg.sendLocale("PERMLEVEL_OWNER", [msg.language.get("PERMLEVEL")[authorLvl], info]);
        } 
        
        for (var i = 5; i < 8; i++) {
            var check = await msg.hasAtLeastPermissionLevel(i);
            if (check) { permLevel = i; }
        }

        msg.sendLocale("PERMLEVEL_USER", [msg.language.get("PERMLEVEL")[permLevel]]);
    }
};