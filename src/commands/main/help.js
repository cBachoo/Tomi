const { EmbedBuilder } = require('discord.js');
const fs = require('fs');
const stdin = fs.readFileSync("./src/misc/help.txt");
const helptxt = stdin.toString();
//TODO possibly rework into pages or other format
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('lists all the available commands'),
    name: 'help',
    async execute(interaction){
        const hembed = new EmbedBuilder()
            .setTitle("My current commands are:")
            .setColor(0x99cff)
            .setFooter({text: 'Tomi developed and maintained by Bachoo#0001'})
            .setDescription(helptxt)
            .setThumbnail(interaction.client.user.displayAvatarURL());

        await interaction.reply({embeds: [hembed] });
    }
}