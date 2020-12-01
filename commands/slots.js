const slotItems = ["<:Grape:618765748940177421>", "<:Watermelon:618765904318038027>", "<:Orange:618765805596835880>", "<:Apple:618765871862513695>", "<:7_:618765717499805706>", "<:Strawberry:618765828929617930>", "<:Cherry:618765778094784513>"];
const db = require("quick.db");
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('$'))return;  

    let user = message.author;
    let coindb = await db.fetch(`coin_${message.guild.id}_${user.id}`)
    let coin = parseInt(args[0]);
    let win = false;

    let coinmore = new Discord.RichEmbed()
    .setColor("#FFFFFF")
    .setDescription(`<:Cross:618736602901905418> You are betting more than you have`);

    let coinhelp = new Discord.RichEmbed()
    .setColor("#FFFFFF")
    .setDescription(`<:Cross:618736602901905418> Specify an amount`);

    if (!coin) return message.channel.send(coinhelp);
    if (coin > coindb) return message.channel.send(coinmore);

    let number = []
    for (i = 0; i < 3; i++) { number[i] = Math.floor(Math.random() * slotItems.length); }

    if (number[0] == number[1] && number[1] == number[2]) { 
        coin *= 9
        win = true;
    } else if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) { 
        coin *= 2
        win = true;
    }
    if (win) {
        let slotsEmbed1 = new Discord.RichEmbed()
            .setDescription(`${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}\n\nYou won ${coin} :chickCoin:`)
            .setColor("#FFFFFF")
        message.channel.send(slotsEmbed1)
        db.add(`coin_${message.guild.id}_${user.id}`, coin)
    } else {
        let slotsEmbed = new Discord.RichEmbed()
            .setDescription(`${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}\n\nYou lost ${coin} :chickCoin:`)
            .setColor("#FFFFFF")
        message.channel.send(slotsEmbed)
        db.subtract(`coin_${message.guild.id}_${user.id}`, coin)
    }

}
  
  module.exports.help = {
    name:"slots",
    aliases: ["sl"]
  }