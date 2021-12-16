const db = require('quick.db')
const Discord = require('discord.js')
const ms = require("parse-ms");

    module.exports = {
  name: "work",
  aliases: [],
  execute: async(client, message, args) => {

    let user = message.author;
    let author = await db.fetch(`work_${message.author.id}`)

    let timeout = 300000;
    
    if (author !== null && timeout - (Date.now() - author) > 0) {
        let time = ms(timeout - (Date.now() - author));
    
        let timeEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`:x:  You have already worked recently\n\nTry again in ${time.minutes}m ${time.seconds}s `);
        message.channel.send(timeEmbed)
      } else {

        let replies = ['Programmer','Builder','Waiter','Busboy','Chief','Pilots','Chef','Real Estate Business','Meme Creator','Youtuber','Streamer']

        let result = Math.floor((Math.random() * replies.length));
        let amount = Math.floor(Math.random() * 80) + 1;
        let embed1 = new Discord.MessageEmbed()
        .setColor("03fff7")
        .setDescription(`:white_check_mark: You worked as a ${replies[result]} and earned ${amount} coins`);
        message.channel.send(embed1)
        
        db.add(`money_${message.author.id}`, amount)
        db.set(`work_${message.author.id}`, Date.now())
    };
}


    }
module.exports.help = {
    name: "work",
    description: "Work as a Programmer, Builder, Waiter, Many More and get money",
    usage: "work",
    type: "Economy"  
}

