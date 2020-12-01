const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith('$'))return;  
  let ownerID = 'Your ID'
  if(message.author.id !== ownerID) return;

  let user = message.mentions.members.first() || message.author;

    if (isNaN(args[1])) return;
    db.subtract(`coin_${message.guild.id}_${user.id}`, args[1])
    let bal = await db.fetch(`coin_${message.guild.id}_${user.id}`)

    let coinEmbed = new Discord.RichEmbed()
    .setColor("#FFFFFF")
    .setDescription(`<:Check:618736570337591296> Removed ${args[1]} coins\n\nNew Balance: ${bal}`);
    message.channel.send(coinEmbed)

};


module.exports.help = {
  name:"remove",
  aliases: ["rm"]
}
