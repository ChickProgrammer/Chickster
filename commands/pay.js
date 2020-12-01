const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith('$'))return;  

  let user = message.mentions.members.first() 

  let member = db.fetch(`coin_${message.guild.id}_${message.author.id}`)

  let embed1 = new Discord.RichEmbed()
  .setColor("#FFFFFF")
  .setDescription(`<:Cross:618736602901905418> Mention someone to pay`);

  if (!user) {
      return message.channel.send(embed1)
  }
  let embed2 = new Discord.RichEmbed()
  .setColor("#FFFFFF")
  .setDescription(`<:Cross:618736602901905418> Specify an amount to pay`);
  
  if (!args[1]) {
      return message.channel.send(embed2)
  }
  let embed3 = new Discord.RichEmbed()
  .setColor("#FFFFFF")
  .setDescription(`<:Cross:618736602901905418> You can't pay someone negative coin`);

  if (message.content.includes('-')) { 
      return message.channel.send(embed3)
  }
  let embed4 = new Discord.RichEmbed()
  .setColor("#FFFFFF")
  .setDescription(`<:Cross:618736602901905418> You don't have that much coin`);

  if (member < args[1]) {
      return message.channel.send(embed4)
  }

  let embed5 = new Discord.RichEmbed()
  .setColor("#FFFFFF")
  .setDescription(`<:Check:618736570337591296> You have payed ${user.user.username} ${args[1]} coins`);

  message.channel.send(embed5)
  db.add(`coin_${message.guild.id}_${user.id}`, args[1])
  db.subtract(`coin_${message.guild.id}_${message.author.id}`, args[1])

}

module.exports.help = {
  name:"pay",
  aliases: [""]
}