const Discord = require("discord.js")
module.exports = {
  name: "beautiful",
  aliases: [],
  execute: async(client, message, args, data, db) => {
 
const user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
 
		const res = await fetch(encodeURI("beautiful", { url:https://api-alphabot.herokuapp.com/api/image_editor/beautiful?apikey=Alphabot&url=user.displayAvatarURL({ format: "png", size: 512 }) });
		const attachment = new Discord.MessageAttachment(buffer, "beautiful.png");
	
		message.channel.send(attachment);

	}
}
  module.exports.help = {
    name: "beautiful",
    description: "Sends a beautiful photo of mentioned person ",
    usage: "beautiful",
    type: "Image" 
}
