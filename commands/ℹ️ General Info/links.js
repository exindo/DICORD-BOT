const Discord = require("discord.js");
const cnf = require('../../config.js');

module.exports = {
  name: "links",
  aliases: ["getlinks", "support", "link"],
  execute: async(client, message, args, data, db) => {

const embed = new Discord.MessageEmbed()
  .setTitle("Invite the bot")
  .setColor('RANDOM')
  .addField("Invite to Discord server", "[Invite the bot here (Recomended!)](https://discord.com/oauth2/authorize?client_id=915145140488777730&scope=bot%20applications.commands&permissions=2147483647)\n[Invite the bot here (Admin Perm)](https://discord.com/oauth2/authorize?client_id=915145140488777730&scope=bot%20applications.commands&permissions=2147483647)")
  .addField("Support", `[Join to official server](https://discord.io/FTHPLAYZ)`)
  .setFooter("Bot created by " + `FTH PLAYZ`)
  .setImage(`https://images-ext-1.discordapp.net/external/eWe3DimWXdYRwGPHx_ai-sOKVNdS6YPc7s2ofj2Vbco/%3Fsize%3D1024/https/cdn.discordapp.com/icons/866236742739034120/a_5acf299e4ee75656b404686db3d1d2ff.gif`)
  .setTimestamp()
message.channel.send({embed})


}
  }



module.exports.help = {
    name: "links",
    description: "Sends a Important Linksvof bot",
    usage: "links",
    type: "General"  
}