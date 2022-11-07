const { EmbedBuilder } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('awe')
        .setDescription('the awe robe'),
    name: "awe",
    async execute(interaction){
        var img = 'https://static.wikia.nocookie.net/wizardoflegend_gamepedia_en/images/e/e3/Awe.png/revision/latest?cb=20180512004011';
        const embed = new EmbedBuilder()
            .setColor(0xf4c41c)
            .setFooter({text: 'Tomi developed and maintained by Bachoo#0001'})
            .setDescription('+ 10% Crit chance + 25% Crit damage')
            .setThumbnail(img)
            .setTitle('Awe');
        
        await interaction.reply({embeds: [embed] });
    }
}