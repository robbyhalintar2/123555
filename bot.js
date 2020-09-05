const fs = require("fs");
const Sentry = require("@sentry/node");
Sentry.init({dsn: process.env.SENTRY_DSN });

const Base = require("eris-sharder").Base;

class Tupperbox extends Base {
	constructor(bot) {
		super(bot);
	}

	launch() {
		let bot = this.bot;
		bot.base = this;
		bot.sentry = Sentry;
		bot.db = require("./modules/db");
		bot.cmd = require("./modules/cmd");
		bot.proxy = require("./modules/proxy");
		bot.recent = {};
		bot.pages = {};
		bot.cmds = {};
		bot.dialogs = {};
		bot.owner = process.env.DISCORD_OWNERID;
		bot.defaultCfg = { prefix: process.env.DEFAULT_PREFIX, lang: process.env.DEFAULT_LANG };
		try { bot.blacklist = require("./modules/blacklist.json"); }
		catch(e) { bot.blacklist = []; }
		require("./modules/ipc")(bot);
		require("./modules/util")(bot);

		let files = fs.readdirSync("./commands");
		files.forEach(file => {
			bot.cmds[file.slice(0,-3)] = require("./commands/"+file);
		});

		files = fs.readdirSync("./events");
		files.forEach(file => {
			bot.on(file.slice(0,-3), (...args) => require("./events/"+file)(...args,bot));
		});

		process.on("message", message => {
			if(bot.ipc[message.name]) bot.ipc[message.name](message);
		});

		setInterval(() => bot.updateStatus(),3600000); //every hour
		bot.updateStatus();
	
		if (!process.env.DISCORD_INVITE) {
			delete bot.cmds.invite;
		}
		if(!fs.existsSync("privacy.txt")) {
			console.log("no privacy");
			delete bot.cmds.privacy;
		}
	}
}

module.exports = Tupperbox;