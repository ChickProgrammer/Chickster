const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('$'))return;  
		// VIP
		let embed = new Discord.RichEmbed()
		.setDescription("VIP: 500000 Coins [$buy VIP]")
		.setColor("#FFFFFF")
		message.channel.send(embed)
		let role = message.guild.roles.cache.find(r => r.id === "759341855363694613");
		// The member you want to add the role to
		let member = message.mentions.members.first();
		// Add role to the member
		member.roles.add(role);

		//CATEGORY OWNER
		let embed = new Discord.RichEmbed()
		.setDescription("CATEGORY OWNER: 5000000 Coins [$buy OwnCat]")
		.setColor("#FFFFFF")
		message.channel.send(embed)
		let role = message.guild.roles.cache.find(r => r.id === "778010328784830475");
		// The member you want to add the role to
		let member = message.mentions.members.first();
		// Add role to the member
		member.roles.add(role);

		//CHANNEL OWNER
		let embed = new Discord.RichEmbed()
		.setDescription("CHANNEL OWNER: 2500000 Coins [$buy OwnChan]")
		.setColor("#FFFFFF")
		message.channel.send(embed)
		let role = message.guild.roles.cache.find(r => r.id === "778011400277852221");
		// The member you want to add the role to
		let member = message.mentions.members.first();
		// Add role to the member
		member.roles.add(role);

		//VC OWNER
		let embed = new Discord.RichEmbed()
		.setDescription("VC OWNER: 2500000 Coins [$buy OwnVC]")
		.setColor("#FFFFFF")
		message.channel.send(embed)
		let role = message.guild.roles.cache.find(r => r.id === "778011569333338132");
		// The member you want to add the role to
		let member = message.mentions.members.first();
		// Add role to the member
		member.roles.add(role);

		//Ranks 1-30
		let embed = new Discord.RichEmbed()
		.setDescription("Rank 1: 5000 Coins [$buy Rank 1]")
		.setColor("#FFFFFF")
		message.channel.send(embed)
		let role = message.guild.roles.cache.find(r => r.id === "632231861585707039");
		// The member you want to add the role to
		let member = message.mentions.members.first();
		// Add role to the member
		member.roles.add(role);

		let embed = new Discord.RichEmbed()
		.setDescription("Rank 2: 6500 Coins [$buy Rank 2]")
		.setColor("#FFFFFF")
		message.channel.send(embed)
		let role = message.guild.roles.cache.find(r => r.id === "632232076858621984");
		// The member you want to add the role to
		let member = message.mentions.members.first();
		// Add role to the member
		member.roles.add(role);

		let embed = new Discord.RichEmbed()
		.setDescription("Rank 3: 6500 Coins [$buy Rank 3]")
		.setColor("#FFFFFF")
		message.channel.send(embed)
		let role = message.guild.roles.cache.find(r => r.id === "632232304080715796");
		// The member you want to add the role to
		let member = message.mentions.members.first();
		// Add role to the member
		member.roles.add(role);

		let embed = new Discord.RichEmbed()
		.setDescription("Rank 4: 6500 Coins [$buy Rank 4]")
		.setColor("#FFFFFF")
		message.channel.send(embed)
		let role = message.guild.roles.cache.find(r => r.id === "632237997596606484");
		// The member you want to add the role to
		let member = message.mentions.members.first();
		// Add role to the member
		member.roles.add(role);

		let embed = new Discord.RichEmbed()
		.setDescription("Rank 5: 6500 Coins [$buy Rank 5]")
		.setColor("#FFFFFF")
		message.channel.send(embed)
		let role = message.guild.roles.cache.find(r => r.id === "632238159828221984");
		// The member you want to add the role to
		let member = message.mentions.members.first();
		// Add role to the member
		member.roles.add(role);

		let embed = new Discord.RichEmbed()
		.setDescription("Rank 6: 6500 Coins [$buy Rank 6]")
		.setColor("#FFFFFF")
		message.channel.send(embed)
		let role = message.guild.roles.cache.find(r => r.id === "632238189737803805");
		// The member you want to add the role to
		let member = message.mentions.members.first();
		// Add role to the member
		member.roles.add(role);

		let embed = new Discord.RichEmbed()
		.setDescription("Rank 7: 6500 Coins [$buy Rank 7]")
		.setColor("#FFFFFF")
		message.channel.send(embed)
		let role = message.guild.roles.cache.find(r => r.id === "632238220486246409");
		// The member you want to add the role to
		let member = message.mentions.members.first();
		// Add role to the member
		member.roles.add(role);

		let embed = new Discord.RichEmbed()
		.setDescription("Rank 8: 6500 Coins [$buy Rank 8]")
		.setColor("#FFFFFF")
		message.channel.send(embed)
		let role = message.guild.roles.cache.find(r => r.id === "632238245039833088");
		// The member you want to add the role to
		let member = message.mentions.members.first();
		// Add role to the member
		member.roles.add(role);

		let embed = new Discord.RichEmbed()
		.setDescription("Rank 9: 6500 Coins [$buy Rank 9]")
		.setColor("#FFFFFF")
		message.channel.send(embed)
		let role = message.guild.roles.cache.find(r => r.id === "632238267701526529");
		// The member you want to add the role to
		let member = message.mentions.members.first();
		// Add role to the member
		member.roles.add(role);

		let embed = new Discord.RichEmbed()
		.setDescription("Rank 10: 6500 Coins [$buy Rank 10]")
		.setColor("#FFFFFF")
		message.channel.send(embed)
		let role = message.guild.roles.cache.find(r => r.id === "632238291130777630");
		// The member you want to add the role to
		let member = message.mentions.members.first();
		// Add role to the member
		member.roles.add(role);

		let embed = new Discord.RichEmbed()
		.setDescription("Rank 11: 6500 Coins [$buy Rank 11]")
		.setColor("#FFFFFF")
		message.channel.send(embed)
		let role = message.guild.roles.cache.find(r => r.id === "637781215482740737");
		// The member you want to add the role to
		let member = message.mentions.members.first();
		// Add role to the member
		member.roles.add(role);

		let embed = new Discord.RichEmbed()
		.setDescription("Rank 12: 6500 Coins [$buy Rank 12]")
		.setColor("#FFFFFF")
		message.channel.send(embed)
		let role = message.guild.roles.cache.find(r => r.id === "637781211212939265");
		// The member you want to add the role to
		let member = message.mentions.members.first();
		// Add role to the member
		member.roles.add(role);

		let embed = new Discord.RichEmbed()
		.setDescription("Rank 13: 6500 Coins [$buy Rank 13]")
		.setColor("#FFFFFF")
		message.channel.send(embed)
		let role = message.guild.roles.cache.find(r => r.id === "637781198852325378");
		// The member you want to add the role to
		let member = message.mentions.members.first();
		// Add role to the member
		member.roles.add(role);

		let embed = new Discord.RichEmbed()
		.setDescription("Rank 14: 6500 Coins [$buy Rank 14]")
		.setColor("#FFFFFF")
		message.channel.send(embed)
		let role = message.guild.roles.cache.find(r => r.id === "637781219500883978");
		// The member you want to add the role to
		let member = message.mentions.members.first();
		// Add role to the member
		member.roles.add(role);

		let embed = new Discord.RichEmbed()
		.setDescription("Rank 15: 6500 Coins [$buy Rank 15]")
		.setColor("#FFFFFF")
		message.channel.send(embed)
		let role = message.guild.roles.cache.find(r => r.id === "637781218338930688");
		// The member you want to add the role to
		let member = message.mentions.members.first();
		// Add role to the member
		member.roles.add(role);

		let embed = new Discord.RichEmbed()
		.setDescription("Rank 16: 6500 Coins [$buy Rank 16]")
		.setColor("#FFFFFF")
		message.channel.send(embed)
		let role = message.guild.roles.cache.find(r => r.id === "637781216682049561");
		// The member you want to add the role to
		let member = message.mentions.members.first();
		// Add role to the member
		member.roles.add(role);

		let embed = new Discord.RichEmbed()
		.setDescription("Rank 17: 6500 Coins [$buy Rank 17]")
		.setColor("#FFFFFF")
		message.channel.send(embed)
		let role = message.guild.roles.cache.find(r => r.id === "637781207706370048");
		// The member you want to add the role to
		let member = message.mentions.members.first();
		// Add role to the member
		member.roles.add(role);

		let embed = new Discord.RichEmbed()
		.setDescription("Rank 18: 6500 Coins [$buy Rank 18]")
		.setColor("#FFFFFF")
		message.channel.send(embed)
		let role = message.guild.roles.cache.find(r => r.id === "637781213070884885");
		// The member you want to add the role to
		let member = message.mentions.members.first();
		// Add role to the member
		member.roles.add(role);

		let embed = new Discord.RichEmbed()
		.setDescription("Rank 19: 6500 Coins [$buy Rank 19]")
		.setColor("#FFFFFF")
		message.channel.send(embed)
		let role = message.guild.roles.cache.find(r => r.id === "637781214413193216");
		// The member you want to add the role to
		let member = message.mentions.members.first();
		// Add role to the member
		member.roles.add(role);

		let embed = new Discord.RichEmbed()
		.setDescription("Rank 20: 6500 Coins [$buy Rank 20]")
		.setColor("#FFFFFF")
		message.channel.send(embed)
		let role = message.guild.roles.cache.find(r => r.id === "637781209585549323");
		// The member you want to add the role to
		let member = message.mentions.members.first();
		// Add role to the member
		member.roles.add(role);

		let embed = new Discord.RichEmbed()
		.setDescription("Rank 21: 6500 Coins [$buy Rank 21]")
		.setColor("#FFFFFF")
		message.channel.send(embed)
		let role = message.guild.roles.cache.find(r => r.id === "645473626182909962");
		// The member you want to add the role to
		let member = message.mentions.members.first();
		// Add role to the member
		member.roles.add(role);

		let embed = new Discord.RichEmbed()
		.setDescription("Rank 22: 6500 Coins [$buy Rank 22]")
		.setColor("#FFFFFF")
		message.channel.send(embed)
		let role = message.guild.roles.cache.find(r => r.id === "645473615382577153");
		// The member you want to add the role to
		let member = message.mentions.members.first();
		// Add role to the member
		member.roles.add(role);

		let embed = new Discord.RichEmbed()
		.setDescription("Rank 23: 6500 Coins [$buy Rank 23]")
		.setColor("#FFFFFF")
		message.channel.send(embed)
		let role = message.guild.roles.cache.find(r => r.id === "645473613998325760");
		// The member you want to add the role to
		let member = message.mentions.members.first();
		// Add role to the member
		member.roles.add(role);

		let embed = new Discord.RichEmbed()
		.setDescription("Rank 24: 6500 Coins [$buy Rank 24]")
		.setColor("#FFFFFF")
		message.channel.send(embed)
		let role = message.guild.roles.cache.find(r => r.id === "645473616988995605");
		// The member you want to add the role to
		let member = message.mentions.members.first();
		// Add role to the member
		member.roles.add(role);

		let embed = new Discord.RichEmbed()
		.setDescription("Rank 25: 6500 Coins [$buy Rank 25]")
		.setColor("#FFFFFF")
		message.channel.send(embed)
		let role = message.guild.roles.cache.find(r => r.id === "645473618180177941");
		// The member you want to add the role to
		let member = message.mentions.members.first();
		// Add role to the member
		member.roles.add(role);

		let embed = new Discord.RichEmbed()
		.setDescription("Rank 26: 6500 Coins [$buy Rank 26]")
		.setColor("#FFFFFF")
		message.channel.send(embed)
		let role = message.guild.roles.cache.find(r => r.id === "645473619681607682");
		// The member you want to add the role to
		let member = message.mentions.members.first();
		// Add role to the member
		member.roles.add(role);

		let embed = new Discord.RichEmbed()
		.setDescription("Rank 27: 6500 Coins [$buy Rank 27]")
		.setColor("#FFFFFF")
		message.channel.send(embed)
		let role = message.guild.roles.cache.find(r => r.id === "645473621304803366");
		// The member you want to add the role to
		let member = message.mentions.members.first();
		// Add role to the member
		member.roles.add(role);

		let embed = new Discord.RichEmbed()
		.setDescription("Rank 28: 6500 Coins [$buy Rank 28]")
		.setColor("#FFFFFF")
		message.channel.send(embed)
		let role = message.guild.roles.cache.find(r => r.id === "645473622420619264");
		// The member you want to add the role to
		let member = message.mentions.members.first();
		// Add role to the member
		member.roles.add(role);

		let embed = new Discord.RichEmbed()
		.setDescription("Rank 29: 6500 Coins [$buy Rank 29]")
		.setColor("#FFFFFF")
		message.channel.send(embed)
		let role = message.guild.roles.cache.find(r => r.id === "645473623712333864");
		// The member you want to add the role to
		let member = message.mentions.members.first();
		// Add role to the member
		member.roles.add(role);

		let embed = new Discord.RichEmbed()
		.setDescription("Rank 30: 6500 Coins [$buy Rank 30]")
		.setColor("#FFFFFF")
		message.channel.send(embed)
		let role = message.guild.roles.cache.find(r => r.id === "645473624945328128");
		// The member you want to add the role to
		let member = message.mentions.members.first();
		// Add role to the member
		member.roles.add(role);
	}
module.exports.help = {
  name:"store",
  aliases: ["st"]
}