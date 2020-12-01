const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith('$'))return;  

  let user = message.author;

  function isOdd(num) { 
	if ((num % 2) == 0) return false;
	else if ((num % 2) == 1) return true;
}
    
let colour = args[0];
let coin = parseInt(args[1]);
let coindb = await db.fetch(`coin_${message.guild.id}_${user.id}`)

let random = Math.floor(Math.random() * 37);

let coinhelp = new Discord.RichEmbed()
.setColor("#FFFFFF")
.setDescription(`<:Cross:618736602901905418> Specify an amount to gamble | m!roulette <color> <amount>`);

let coinmore = new Discord.RichEmbed()
.setColor("#FFFFFF")
.setDescription(`<:Cross:618736602901905418> You are betting more than you have`);

let colorbad = new Discord.RichEmbed()
.setColor("#FFFFFF")
.setDescription(`<:Cross:618736602901905418> Specify a color | Red [1.5x] Black [2x] Green [15x]`);


    if (!colour)  return message.channel.send(colorbad);
    colour = colour.toLowerCase()
    if (!coin) return message.channel.send(coinhelp); 
    if (coin > coindb) return message.channel.send(coinmore);
    
    if (colour == "b" || colour.includes("black")) colour = 0;
    else if (colour == "r" || colour.includes("red")) colour = 1;
    else if (colour == "g" || colour.includes("green")) colour = 2;
    else return message.channel.send(colorbad);
    
    
    
    if (random == 0 && colour == 2) { // Green
        coin *= 15
        db.add(`coin_${message.guild.id}_${user.id}`, coin)
        let coinEmbed1 = new Discord.RichEmbed()
        .setColor("#FFFFFF")
        .setDescription(`<:Green:618767721361833995> You won ${coin} :chickCoin: \n\nMultiplier: 15x`);
        message.channel.send(coinEmbed1)
        console.log(`${message.author.tag} Won ${coin} on green`)
    } else if (isOdd(random) && colour == 1) { // Red
        coin = parseInt(coin * 1.5)
        db.add(`coin_${message.guild.id}_${user.id}`, coin)
        let coinEmbed2 = new Discord.RichEmbed()
        .setColor("#FFFFFF")
        .setDescription(`<:Red:618767705444450342> You won ${coin} :chickCoin: \n\nMultiplier: 1.5x`);
        message.channel.send(coinEmbed2)
    } else if (!isOdd(random) && colour == 0) { // Black
        coin = parseInt(coin * 2)
        db.add(`coin_${message.guild.id}_${user.id}`, coin)
        let coinEmbed3 = new Discord.RichEmbed()
        .setColor("#FFFFFF")
        .setDescription(`<:Black:618767682996666408> You won ${coin} :chickCoin: \n\nMultiplier: 2x`);
        message.channel.send(coinEmbed3)
    } else { // Wrong
        db.subtract(`coin_${message.guild.id}_${user.id}`, coin)
        let coinEmbed4 = new Discord.RichEmbed()
        .setColor("#FFFFFF")
        .setDescription(`<:Cross:618736602901905418> You lost ${coin} :chickCoin: \n\nMultiplier: 0x`);
        message.channel.send(coinEmbed4)
    }
}

  
  module.exports.help = {
    name:"roulette",
    aliases: ["roul"]
  }