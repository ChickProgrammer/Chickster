const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith('$'))return;  

let user = message.mentions.members.first()
let targetuser = await db.fetch(`coin_${message.guild.id}_${user.id}`)
let author = await db.fetch(`rob_${message.guild.id}_${user.id}`)
let author2 = await db.fetch(`coin_${message.guild.id}_${user.id}`)

let timeout = 600000;

if (author !== null && timeout - (Date.now() - author) > 0) {
    let time = ms(timeout - (Date.now() - author));

    let timeEmbed = new Discord.RichEmbed()
    .setColor("#FFFFFF")
    .setDescription(`<:Cross:618736602901905418> You have already robbed someone\n\nTry again in ${time.minutes}m ${time.seconds}s `);
    message.channel.send(timeEmbed)
  } else {

let coinEmbed = new Discord.RichEmbed()
  .setColor("#FFFFFF")
  .setDescription(`<:Cross:618736602901905418> You need atleast 200 coins in your wallet to rob someone`);

if (author2 < 200) {
    return message.channel.send(coinEmbed)

}
let coinEmbed2 = new Discord.RichEmbed()
  .setColor("#FFFFFF")
  .setDescription(`<:Cross:618736602901905418> ${user.user.username} does not have anything you can rob`);
if (targetuser < 0) {
    return message.channel.send(coinEmbed2)
}



let vip = await db.fetch(`bronze_${user.id}`)
if(vip === true) random = Math.floor(Math.random() * 200) + 1;
if (vip === null) random = Math.floor(Math.random() * 100) + 1;

let embed = new Discord.RichEmbed()
.setDescription(`<:Check:618736570337591296> You robbed ${user} and got away with ${random} coins`)
.setColor("#FFFFFF")
message.channel.send(embed)

db.subtract(`coin_${message.guild.id}_${user.id}`, random)
db.add(`coin_${message.guild.id}_${user.id}`, random)
db.set(`rob_${message.guild.id}_${user.id}`, Date.now())
  
};
}

module.exports.help = {
  name:"rob",
  aliases: [""]
}