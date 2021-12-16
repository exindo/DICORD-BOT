const currentGames = {};
const Discord = require("discord.js"),
module.exports = {
  name: "stupid-calc",
  aliases: ["calc-stupid", "stupidcalc", "calcstupid"],
  execute: async(client, message, args) => {
	const firstMember = message.mentions.members.filter(m => m.id !== message.author.id).first();
		if (!firstMember)
			return message.channel.send("MISSING MEMBER");
		const secondMember =
			message.mentions.members
				.filter(m => m.id !== firstMember.id)
				.filter(m => m.id !== message.author.id)
				.first() || message.member;
		
		const members = [firstMember, secondMember].sort(
			(a, b) => parseInt(a.id, 10) - parseInt(b.id, 10)
		);
		
		);

		const string = hash
			.split("")
			.filter(e => !isNaN(e))
			.join("");
		const percent = parseInt(string.substr(0, 2), 10);

		const embed = new Discord.MessageEmbed()
			.setAuthor("Stupid Calc")
			.setDescription(`${firstMember.user.username} ${percent}% `)
			.setColor("PINK")
	    .setFooter("Look He's Really Stupid (Do not take it seriously)")
      .setThumbnail("https://cdn.discordapp.com/emojis/819410218382917662.gif?v=1")

		message.channel.send(embed);


  }
}