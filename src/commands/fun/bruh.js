const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('bruh')
        .setDescription('replies with bruh'),
    name: 'bruh',
    async execute(interaction) {
        await interaction.reply("bruh...");
    },
};