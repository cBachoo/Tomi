const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('update')
        .setDescription('tells you when the next update is'),
    name: 'update',
    execute(client, message, raw) { 
        message.channel.send("https://cdn.discordapp.com/attachments/421800263167246341/713732116621426779/IllTellYou.gif")
    }
}
