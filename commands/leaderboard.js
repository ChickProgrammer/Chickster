const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('$'))return;  

    const embed = new Discord.RichEmbed()
    .setDescription(`**Input a Leaderboard Option**\n\nCoin Leaderboard: m!leaderboard coins\nFresh Nikes Leaderboard: m!leaderboard nikes\nCar Leaderboard: m!leaderboard car\nMansion Leaderboard: m!leaderboard mansion`)
    .setColor("#FFFFFF")


  if(!args[0]) return message.channel.send(embed)

    if (args[0] == 'coins') {
    let coin = db.startsWith(`coin_${message.guild.id}`, { sort: '.data'})
    let content = "";

    for (let i = 0; i < coin.length; i++) {
        let user = bot.users.get(coin[i].ID.split('_')[2]).username

      

        content += `${i+1}. ${user} ~ ${coin[i].data}\n`
    
      }

    const embed = new Discord.RichEmbed()
    .setDescription(`**${message.guild.name}'s Coin Leaderboard**\n\n${content}`)
    .setColor("#FFFFFF")

    message.channel.send(embed)
  } else if(args[0] == 'nikes') {
    let nike = db.startsWith(`nikes_${message.guild.id}`, { sort: '.data'})
    let content = "";

    for (let i = 0; i < nike.length; i++) {
        let user = bot.users.get(nike[i].ID.split('_')[2]).username

        content += `${i+1}. ${user} ~ ${nike[i].data}\n`
    }

    const embed = new Discord.RichEmbed()
    .setDescription(`**${message.guild.name}'s Fresh Nikes Leaderboard**\n\n${content}`)
    .setColor("#FFFFFF")

    message.channel.send(embed)
  } else if(args[0] == 'car') {
    let cars = db.startsWith(`car_${message.guild.id}`, { sort: '.data'})
    let content = "";

    for (let i = 0; i < cars.length; i++) {
        let user = bot.users.get(cars[i].ID.split('_')[2]).username

        content += `${i+1}. ${user} ~ ${cars[i].data}\n`
    }

    const embed = new Discord.RichEmbed()
    .setDescription(`**${message.guild.name}'s Car Leaderboard**\n\n${content}`)
    .setColor("#FFFFFF")

    message.channel.send(embed)
  } else if(args[0] == 'mansion') {
    let mansions = db.startsWith(`house_${message.guild.id}`, { sort: '.data'})
    let content = "";

    for (let i = 0; i < mansions.length; i++) {
        let user = bot.users.get(mansions[i].ID.split('_')[2]).username

        content += `${i+1}. ${user} ~ ${mansions[i].data}\n`
    }

    const embed = new Discord.RichEmbed()
    .setDescription(`**${message.guild.name}'s Mansion Leaderboard**\n\n${content}`)
    .setColor("#FFFFFF")

    message.channel.send(embed)
  }

}
module.exports.help = {
  name:"leaderboard",
  aliases: ["leader"]
}