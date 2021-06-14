const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);

module.exports = {
  name: `ping`,
  description: `Gives you the ping of the Bot`,
  aliases: ["latency"],
  cooldown: 2,
  edesc: "Type this command to see how fast the Bot can response to your messages / commands inputs!",
  execute(message, args, client) {
    //react with approve emoji
    message.react("✅");
    //send the Ping embed
    message.reply(new MessageEmbed().setColor("#F0EAD6").setTitle(":ping_pong: `" + client.ws.ping + "ms`"));
  }
}