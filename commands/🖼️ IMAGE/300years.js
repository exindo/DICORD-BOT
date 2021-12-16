const Discord = require("discord.js")
module.exports = {
  name: "3000yr",
  aliases: ["3000yrs", "3000"],
  execute: async(client, message, args, data, db) => {
 
const user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
 
		const res = await fetch(encodeURI("3000years", { url:https://api-alphabot.herokuapp.com/api/image_editor/3000years?apikey=Alphabot&url=user.displayAvatarURL({ format: "png", size: 512 }) });
		const attachment = new Discord.MessageAttachment(buffer, "approved.png");
	
		message.channel.send(attachment);

	}
}
  module.exports.help = {
    name: "3000yrs",
    description: "Sends a 3000yrs photo of mentioned person ",
    usage: "3000yrs",
    type: "Image" 
}
