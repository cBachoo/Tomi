const { EmbedBuilder } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('patience')
        .setDescription('the patience robe'),
    name: 'patience',
    async execute(interaction){
        var img = 'https://static.wikia.nocookie.net/wizardoflegend_gamepedia_en/images/b/bf/Patience.png/revision/latest?cb=20180512004014';
        const embed = new EmbedBuilder()
            .setColor(0x32679f) 
            .setFooter({text: 'Tomi developed and maintained by Bachoo#0001'})
            .setDescription('+ 5% Max health + 10% Run speed + 5% Armor + 5% Evade  -- Has no effect until you unlock the Vigor, Venture, Grit, Shift, and Tempo outfits')
            .setThumbnail(img)
            .setTitle('Patience');

        await interaction.reply({embeds: [embed] });
    }
}