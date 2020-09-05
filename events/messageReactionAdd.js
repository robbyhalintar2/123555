let buttons = ["\u23ea", "\u2b05", "\u27a1", "\u23e9", "\u23f9", "\u0023\u20e3", "\ud83d\udd20"];

module.exports = async (message, emoji, userID, bot) => {
	if(emoji.user && emoji.user.bot) return;
	if(emoji.name == "\u274c" && bot.recent[message.channel.id] && bot.recent[message.channel.id].find(r => r.user_id == userID && message.id == r.id)) {
		if(!message.channel.guild || message.channel.permissionsOf(bot.user.id).has("manageMessages"))
			bot.deleteMessage(message.channel.id,message.id);
		return;
	} else if(emoji.name == "\u2753" && bot.recent[message.channel.id]) {
		let recent = bot.recent[message.channel.id].find(r => message.id == r.id);
		if(!recent) return;
		let response = { content: `That proxy was sent by <@!${recent.user_id}> (tag at time of sending: ${recent.tag} - id: ${recent.user_id}).`, allowedMentions: { users: false } };
		let target;
		try {
			target = await bot.getDMChannel(userID);
			await bot.send(target,response);
		} catch(e) {
			target = message.channel;
			response.content = `<@${userID}>: ${response.content}\n(also I am unable to DM you!)`;
			await bot.send(target,response);
		}
		await bot.removeMessageReaction(message.channel.id, message.id, emoji.name, userID);
		return;
	}
	if(!bot.pages[message.id] || bot.pages[message.id].user != userID || !buttons.includes(emoji.name)) return;
	let data = bot.pages[message.id];
	try {
		if(message.channel.type != 1 && message.channel.permissionsOf(bot.user.id).has("manageMessages"))
			await bot.removeMessageReaction(message.channel.id, message.id, emoji.name, userID);
	} catch(e) {
		if(!e.message.startsWith("Request timed out") && e.code != 500 && e.code != 10008) bot.err(message,e,false);
	}
	let msg1,msg2;
	switch(emoji.name) {
		case "\u23ea": // first page
			data.index = 0;
			break;
			
		case "\u2b05": // previous page
			data.index--;
			if(data.index < 0) data.index = data.pages.length - 1;
			break;
			
		case "\u27a1": // next page
			data.index++;
			if(data.index >= data.pages.length) data.index = 0;
			break;
			
		case "\u23e9": // last page
			data.index = data.pages.length-1;
			break;
			
		case "\u23f9": // stop
			delete bot.pages[message.id];
			if(message.channel.type != null && message.channel.type != 1 && !message.channel.permissionsOf(bot.user.id).has("manageMessages")) return;
			try {
				return await bot.deleteMessage(message.channel.id, message.id);
			} catch(e) {
				return bot.err(message, e, false);
			}

		case "\u0023\u20e3": //go to num
			if(bot.dialogs[message.channel.id + userID]) return;
			try {
				msg1 = await bot.send(message.channel, "Enter a page number to go to.");
				message.author = {id: userID};
				msg2 = await bot.waitMessage(message);
				if(!isNaN(Number(msg2.content))) {
					data.index = Math.round(Number(msg2.content)-1);
					if(data.index < 0) data.index = 0;
					if(data.index >= data.pages.length) data.index = data.pages.length - 1;
				} else {
					msg1.edit("Invalid number.");
					let id = msg1.id;
					//setTimeout(() => bot.deleteMessage(message.channel.id,id).catch(ignoreDeletion), 3000);
					msg1 = null;
				}
			} catch(e) {
				if(e == "timeout") {
					msg1.edit("Timed out - canceling.").catch(ignoreDeletion);
					let id = msg1.id;
					/*setTimeout(() => {
						bot.deleteMessage(message.channel.id,id).catch(ignoreDeletion);
					},3000);*/
					msg1 = null;
				} else {
					bot.err(message, e, false);
				}
			}
			//if(msg1) msg1.delete().catch(ignoreDeletion);
			//if(msg2 && msg2.channel.type != 1) msg2.delete().catch(ignoreDeletion);
			break;
		case "\ud83d\udd20": //find in list
			if(bot.dialogs[message.channel.id + userID]) return;
			try {
				msg1 = await bot.send(message.channel, "Enter text to search for.");
				message.author = {id: userID};
				msg2 = await bot.waitMessage(message);
				let search = msg2.content.toLowerCase();
				let searchFunc = test => {
					for(let i = 0; i < data.pages.length; i++) {
						if(!data.pages[i].embed.fields || data.pages[i].embed.fields.length == 0) continue;
						for(let j = 0; j < data.pages[i].embed.fields.length; j++) {
							if(test(data.pages[i].embed.fields[j])) {
								return i;
							}
						}
					}
					return -1;
				}
				let res = searchFunc(f => f.name.toLowerCase() == search);
				if(res < 0) res = searchFunc(f => f.name.toLowerCase().includes(search));
				if(res < 0) res = searchFunc(f => f.value.toLowerCase().includes(search));
				if(res < 0) {
					msg1.edit("No result found.").catch(ignoreDeletion);
					let id = msg1.id;
					/*setTimeout(() => {
						bot.deleteMessage(message.channel.id,id).catch(ignoreDeletion);
					},3000);*/
					msg1 = null;
				} else data.index = res;
			} catch(e) {
				if(e == "timeout") {
					msg1.edit("Timed out - canceling.").catch(ignoreDeletion);
					let id = msg1.id;
					/*setTimeout(() => {
						bot.deleteMessage(message.channel.id,id).catch(ignoreDeletion);
					},3000);*/
					msg1 = null;
				} else {
					bot.err(message, e, false);
				}
			}
			//if(msg1) msg1.delete().catch(ignoreDeletion);
			//if(msg2 && msg2.channel.type != 1) msg2.delete().catch(ignoreDeletion);
			break;
	}
	try {
		await bot.editMessage(message.channel.id, message.id, data.pages[data.index]).catch(ignoreDeletion); //ignore message already deleted
	} catch(e) {
		bot.err(message, e, false);
	}
};

function ignoreDeletion(e) {
	if(e.code != 10008) throw e;
}
