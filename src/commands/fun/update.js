const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('update')
        .setDescription('tells you when the next update is'),
    name: 'update',
    async execute(interaction) { 
        await interaction.reply("https://cdn.discordapp.com/attachments/421800263167246341/713732116621426779/IllTellYou.gif");
    }
}
