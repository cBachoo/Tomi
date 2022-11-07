const { EmbedBuilder } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('vigor')
        .setDescription('the vigor robe'),
    name: 'vigor',
    async execute(interaction){
        var img = 'https://static.wikia.nocookie.net/wizardoflegend_gamepedia_en/images/f/f4/Vigor.png/revision/latest?cb=20180512004018';
        const embed = new EmbedBuilder()
            .setColor(0x4ea2c7) 
            .setFooter({text: 'Tomi developed and maintained by Bachoo#0001'})
            .setDescription('+ 10% Max health - 10% Cooldowns')
            .setThumbnail(img)
            .setTitle('Vigor')

        await interaction.reply({embeds: [embed] });       
    }
}