const { EmbedBuilder } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('grit')
        .setDescription('the grit robe'),
    name: 'grit',
    async execute(interaction){
        var img = 'https://static.wikia.nocookie.net/wizardoflegend_gamepedia_en/images/1/17/Grit.png/revision/latest?cb=20210801123801';
        const embed = new EmbedBuilder()
            .setColor(0xa18a73) 
            .setFooter({text: 'Tomi developed and maintained by Bachoo#0001'})
            .setDescription('+ 10% Armor + 10% Healing received')
            .setThumbnail(img)
            .setTitle('Grit');

        await interaction.reply({embeds: [embed] });
    }
}