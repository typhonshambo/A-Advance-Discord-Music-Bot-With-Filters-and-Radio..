module.exports = { 
    name: "leave", 
    description: "Leave the current channel", 
    execute(message) {
         const { channel } = message.member.voice; 
         const serverQueue = message.client.queue.get(message.guild.id); 
         if (!channel) return message.reply("You need to join a voice channel first!").catch(console.error); 
         if (!message.guild.me.voice.channel) return message.reply("I am not in a voice channel!").catch(console.error); 
         if (channel.id !== message.guild.me.voice.channel.id) return message.reply("I am not in your voice channel!").catch(console.error); 
         if(serverQueue) { 
             serverQueue.connection.dispatcher.destroy(); 
             channel.leave(); 
             message.client.queue.delete(message.guild.id); 
             serverQueue.textChannel.send('I have left the channel. See you again.').catch(console.error); 
             return 
            }
            channel.leave(); 
            
    message.client.queue.delete(message.guild.id); 
    message.channel.send('I have left the channel. See you again.').catch(console.error); } };