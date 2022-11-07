const fs = require('fs');
const stdin = fs.readFileSync('./src/misc/wine.txt');
const winetxt = stdin.toString();
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('wine')
        .setDescription('ever wanted to learn how to make wine?'),
    name: 'wine',
    async execute(interaction){
        await interaction.reply(winetxt);
    }
}