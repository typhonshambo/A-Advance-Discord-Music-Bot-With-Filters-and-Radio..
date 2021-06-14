const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
  approveemoji,
  denyemoji 
} = require(`../config.json`);

module.exports = {
  name: `help`,
  description: `Gives you a list of all help Commands`,
  aliases: ["h","commands"],
  cooldown: 3,
  edesc: "Type help to get a short preview of all Commands, Type help <COMMANDNAME> to get extended information about this one command!",
  execute(message,args,client) {
     
    let commands = message.client.commands.array();
 
    let helpEmbed = new MessageEmbed()
    .setTitle("HELP MENU 🔰 Commands")
    .addField('Prefix Information', `Prefix: \`${PREFIX}\`\nYou can also mention ${client.user} to get prefix info.`, false)
    .addField("• Developer", `\`\`\`yml\nName: KABU#8148 [821095540569407508]\nName Ξ Kabir Jaipal [821095540569407508]\`\`\``)
    .addField("• Important Links", `**[Invite Link](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot)\`|\`[Support Server](https://discord.gg/KRX2tgNA7R)\`|\`[Youtube](https://www.youtube.com/channel/UCINCfgiBYCykOemiuVhqtIQ/)\`**`)
    .addField(`All Commands is Below `)
      .setFooter( client.user.username +`Type: ${PREFIX}help <Command>  for more information!`)
      .setColor("#F0EAD6");

      let ifargstruedothis = -1;
      
      switch(args[0]){
          case "filter":
           ifargstruedothis=0;
          break;
          case "loop":
            ifargstruedothis=1;
          break;
          case "lyrics":
            ifargstruedothis=2
          break;
          case "nowplaying":
            ifargstruedothis=3
          break;
          case "pause":
            ifargstruedothis=4
          break;
          case "play":
            ifargstruedothis=5
          break;
          case "playlist":
            ifargstruedothis=6
          break;
          case "queue":
            ifargstruedothis=7
          break;
          case "radio":
            ifargstruedothis=8
          break;
          case "remove":
            ifargstruedothis=9
          break;
          case "resume":
            ifargstruedothis=10
          break;
          case "search":
            ifargstruedothis=11
          break;
          case "shuffle":
            ifargstruedothis=12
          break;
          case "skip":
            ifargstruedothis=13
          break;
          case "skipto":
            ifargstruedothis=14
          break;
          case "stop":
            ifargstruedothis=15
          break;
          case "volume":
            ifargstruedothis=16
          break;
          case "help":
            ifargstruedothis=17
          break;    
          case "invite":
            ifargstruedothis=18
          break;
          case "ping":
            ifargstruedothis=19
          break;
          case "prefix":
            ifargstruedothis=20
          break;
          case "uptime":
            ifargstruedothis=21
          break;
          case "botlist":
            ifargstruedothis=22
          break;
          default:        
            commands.forEach((cmd) => {
              helpEmbed.addField(
                `**${message.client.prefix}${cmd.name}**`,
                `${cmd.description}`,
                true
              );
            });
          if(!message.guild) {
            if(!args[0]) {message.react(approveemoji);return message.channel.send(helpEmbed);}
            return
            }
            message.channel.send(helpEmbed);
           
        break;
       }
     
       if(ifargstruedothis>=0){
         let aliases = commands[ifargstruedothis].aliases;
         if(aliases === undefined || !aliases) aliases="No Aliases!";
         let cooldown = commands[ifargstruedothis].cooldown;
         if(cooldown === undefined || !cooldown) cooldown="No Cooldown!";


        helpEmbed.addField(
          `**${message.client.prefix}${commands[ifargstruedothis].name}**`,
          `\`\`\`fix\n${commands[ifargstruedothis].edesc}\n\`\`\`\n\`${commands[ifargstruedothis].description}\``
        );
        helpEmbed.addField(
          `**:notes: Aliases:**`,
          `\`${aliases}\``
        );
        helpEmbed.addField(
          `**:wrench: Cooldown:**`,
          `\`${cooldown}\``
        );
        if(!message.guild) return message.channel.send(helpEmbed);
          message.channel.send(helpEmbed);
       }

}
}