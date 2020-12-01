const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('$'))return;  
  
    if (args[0] == 'VIP') {    
      let embed = new Discord.RichEmbed()
      .setDescription("**VIP**\n\nBenefits: Self Promote Your Stream\n\nGain Access to the VIP Voice Chat\n\nEarn Bonus :chickCoin: Daily\n\n Ability to Purchase Your Very Own VC, Channel, and Category! **All Chickster rules apply**")
      .setColor("#FFFFFF")
      message.channel.send(embed)
    } else if(args[0] == 'Category Owner') {
      	let embed = new Discord.RichEmbed()
      	.setDescription("**Category Owner**\n\nBenefits: Own your own category like the enforcers.")
      	.setColor("#FFFFFF")
      	message.channel.send(embed)
    } else if(args[0] == 'Channel Owner') {
     	 let embed = new Discord.RichEmbed()
      	.setDescription("**Channel Owner**\n\nBenefits: Own a channel.")
      	.setColor("#FFFFFF")
      	message.channel.send(embed)
  } else if(args[0] == 'VC Owner') {
    	let embed = new Discord.RichEmbed()
    	.setDescription("**VC Owner**\n\nBenefits: Own a VC.")
    	.setColor("#FFFFFF")
    	message.channel.send(embed)
  }else if(args[0] == 'Rank 1') {
    	let embed = new Discord.RichEmbed()
    	.setDescription("**Rank 1**\n\nBenefits: You will be able to invite your friends to the server!")
    	.setColor("#FFFFFF")
    	message.channel.send(embed)
  }else if(args[0] == 'Rank 2') {
    	let embed = new Discord.RichEmbed()
    	.setDescription("**Rank 2**")
    	.setColor("#FFFFFF")
    	message.channel.send(embed)
  }else if(args[0] == 'Rank 3') {
    	let embed = new Discord.RichEmbed()
    	.setDescription("**Rank 3**")
    	.setColor("#FFFFFF")
    	message.channel.send(embed)
  }else if(args[0] == 'Rank 4') {
    	let embed = new Discord.RichEmbed()
    	.setDescription("**Rank 4**")
    	.setColor("#FFFFFF")
    	message.channel.send(embed)
  }else if(args[0] == 'Rank 5') {
    	let embed = new Discord.RichEmbed()
    	.setDescription("**Rank 5**\n\nBenefits: Use external emojis.")
    	.setColor("#FFFFFF")
    	message.channel.send(embed)
  }else if(args[0] == 'Rank 6') {
    	let embed = new Discord.RichEmbed()
    	.setDescription("**Rank 6**")
    	.setColor("#FFFFFF")
    	message.channel.send(embed)
  }else if(args[0] == 'Rank 7') {
    	let embed = new Discord.RichEmbed()
    	.setDescription("**Rank 7**")
    	.setColor("#FFFFFF")
    	message.channel.send(embed)
  }else if(args[0] == 'Rank 8') {
    	let embed = new Discord.RichEmbed()
    	.setDescription("**Rank 8**\n\nBenefits: Add reactions.")
    	.setColor("#FFFFFF")
    	message.channel.send(embed)
  }else if(args[0] == 'Rank 9') {
    	let embed = new Discord.RichEmbed()
    	.setDescription("**Rank 9**")
    	.setColor("#FFFFFF")
   		message.channel.send(embed)
  }else if(args[0] == 'Rank 10') {
    	let embed = new Discord.RichEmbed()
    	.setDescription("**Rank 10**\n\nBenefits: Go live")
    	.setColor("#FFFFFF")
    	message.channel.send(embed)
  }else if(args[0] == 'Rank 11') {
    	let embed = new Discord.RichEmbed()
    	.setDescription("**Rank 11**\n\nBenefits: Additional 500 :chickCoin: daily.")
    	.setColor("#FFFFFF")
    	message.channel.send(embed)
  }else if(args[0] == 'Rank 12') {
    	let embed = new Discord.RichEmbed()
    	.setDescription("**Rank 12**\n\nBenefits: Additional 1000 :chickCoin: daily.")
    	.setColor("#FFFFFF")
    	message.channel.send(embed)
  }else if(args[0] == 'Rank 13') {
    	let embed = new Discord.RichEmbed()
    	.setDescription("**Rank 13**\n\nBenefits: Additional 1500 :chickCoin: daily.")
    	.setColor("#FFFFFF")
    	message.channel.send(embed)
  }else if(args[0] == 'Rank 14') {
    	let embed = new Discord.RichEmbed()
    	.setDescription("**Rank 14**\n\nBenefits: Additional 2000 :chickCoin: daily.")
    	.setColor("#FFFFFF")
    	message.channel.send(embed)
  }else if(args[0] == 'Rank 15') {
    	let embed = new Discord.RichEmbed()
    	.setDescription("**Rank 15**\n\nBenefits: Additional 2500 :chickCoin: daily.")
    	.setColor("#FFFFFF")
    	message.channel.send(embed)
  }else if(args[0] == 'Rank 16') {
    	let embed = new Discord.RichEmbed()
    	.setDescription("**Rank 16**\n\nBenefits: Additional 3000 :chickCoin: daily.")
    	.setColor("#FFFFFF")
    	message.channel.send(embed)
  }else if(args[0] == 'Rank 17') {
    	let embed = new Discord.RichEmbed()
    	.setDescription("**Rank 17**\n\nBenefits: Additional 3500 :chickCoin: daily.")
    	.setColor("#FFFFFF")
    	message.channel.send(embed)
  }else if(args[0] == 'Rank 18') {
    	let embed = new Discord.RichEmbed()
    	.setDescription("**Rank 18**\n\nBenefits: Additional 4000 :chickCoin: daily.")
    	.setColor("#FFFFFF")
    	message.channel.send(embed)
  }else if(args[0] == 'Rank 19') {
    	let embed = new Discord.RichEmbed()
    	.setDescription("**Rank 19**\n\nBenefits: Additional 4500 :chickCoin: daily.")
    	.setColor("#FFFFFF")
    	message.channel.send(embed)
  }else if(args[0] == 'Rank 20') {
    	let embed = new Discord.RichEmbed()
    	.setDescription("**Rank 20**\n\nBenefits: Additional 5000 :chickCoin: daily.")
    	.setColor("#FFFFFF")
   	 	message.channel.send(embed)
  }else if(args[0] == 'Rank 21') {
    	let embed = new Discord.RichEmbed()
    	.setDescription("**Rank 21**\n\nBenefits: Additional 5500 :chickCoin: daily.")
    	.setColor("#FFFFFF")
    	message.channel.send(embed)
  }else if(args[0] == 'Rank 22') {
    	let embed = new Discord.RichEmbed()
    	.setDescription("**Rank 22**\n\nBenefits: Additional 6000 :chickCoin: daily.")
    	.setColor("#FFFFFF")
    	message.channel.send(embed)
  }else if(args[0] == 'Rank 23') {
    	let embed = new Discord.RichEmbed()
    	.setDescription("**Rank 23**\n\nBenefits: Additional 6500 :chickCoin: daily.")
    	.setColor("#FFFFFF")
    	message.channel.send(embed)
  }else if(args[0] == 'Rank 24') {
    	let embed = new Discord.RichEmbed()
    	.setDescription("**Rank 24**\n\nBenefits: Additional 7000 :chickCoin: daily.")
    	.setColor("#FFFFFF")
    	message.channel.send(embed)
  }else if(args[0] == 'Rank 25') {
    	let embed = new Discord.RichEmbed()
    	.setDescription("**Rank 25**\n\nBenefits: Additional 7500 :chickCoin: daily.")
    	.setColor("#FFFFFF")
    	message.channel.send(embed)
  }else if(args[0] == 'Rank 26') {
    	let embed = new Discord.RichEmbed()
    	.setDescription("**Rank 26**\n\nBenefits: Additional 8000 :chickCoin: daily.")
    	.setColor("#FFFFFF")
    	message.channel.send(embed)
  }else if(args[0] == 'Rank 27') {
    	let embed = new Discord.RichEmbed()
    	.setDescription("**Rank 27**\n\nBenefits: Additional 8500 :chickCoin: daily.")
    	.setColor("#FFFFFF")
    	message.channel.send(embed)
  }else if(args[0] == 'Rank 28') {
    	let embed = new Discord.RichEmbed()
    	.setDescription("**Rank 28**\n\nBenefits: Additional 9000 :chickCoin: daily.")
    	.setColor("#FFFFFF")
    	message.channel.send(embed)
  }else if(args[0] == 'Rank 29') {
    	let embed = new Discord.RichEmbed()
    	.setDescription("**Rank 29**\n\nBenefits: Additional 9500 :chickCoin: daily.")
    	.setColor("#FFFFFF")
    	message.channel.send(embed)
  }else if(args[0] == 'Rank 30') {
    	let embed = new Discord.RichEmbed()
    	.setDescription("**Rank 30**\n\nBenefits: Additional 10000 :chickCoin: daily.")
    	.setColor("#FFFFFF")
    	message.channel.send(embed)
  	}
  }
  module.exports.help = {
    name:"storeinfo",
    aliases: ["si"]
  }