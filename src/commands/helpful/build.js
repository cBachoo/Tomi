const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('build')
        .setDescription('a good staring build for wizard of legend'),
    name: 'build',
    async execute(interaction) {
        await interaction.reply("A good starting build is to go the `Awe Robe` + `Vampire's Eyeglasses` and a high DPS basic arcana");
    }
}