module.exports = {
	permitted: (msg) => { return msg.author.id === process.env.DISCORD_OWNERID; },
	execute: async (bot, msg, args, cfg) => {
		if(msg.author.id != bot.owner) return;
		process.send({name: "broadcast", msg: {name: "reload", type: args[0], targets: args.slice(1), channel: msg.channel.id}});
		if(args[0] == "queue") process.send({name:"reloadQueue"});
		if(args[0] == "ipc") process.send({name:"reloadIPC"});
	}
};