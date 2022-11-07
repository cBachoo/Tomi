const { EmbedBuilder } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('fall')
        .setDescription('the fall robe'),
    name: "fall",
    async execute(interaction){
        var img = 'https://static.wikia.nocookie.net/wizardoflegend_gamepedia_en/images/5/5d/Fall.png/revision/latest?cb=20190324000646';
        const embed = new EmbedBuilder()
            .setColor(0xbad1d4) 
            .setFooter({text: 'Tomi developed and maintained by Bachoo#0001'})
            .setDescription('Reduces max health to 100 -- Max health can not be modified by relics. After 5 seconds of not taking damage, health will rapidly regenerate.')
            .setThumbnail(img)
            .setTitle('Fall');

        await interaction.reply({embeds: [embed] });
    }
}