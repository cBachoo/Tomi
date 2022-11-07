const { EmbedBuilder } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('shift')
        .setDescription('the shift robe'),
    name: 'shift',
    async execute(interaction){
        var img = 'https://static.wikia.nocookie.net/wizardoflegend_gamepedia_en/images/0/00/Shift.png/revision/latest?cb=20180512004016';
        const embed = new EmbedBuilder()
            .setColor(0x562ca8) 
            .setFooter({text: 'Tomi developed and maintained by Bachoo#0001'})
            .setDescription('+ 10% Evade + 5% Crit chance')
            .setThumbnail(img)
            .setTitle('Shift');

        await interaction.reply({embeds: [embed] });
    }
}