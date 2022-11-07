const { EmbedBuilder } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('venture')
        .setDescription('the venture robe'),
    name: 'venture',
    async execute(interaction){
        var img = 'https://static.wikia.nocookie.net/wizardoflegend_gamepedia_en/images/f/fd/Venture.png/revision/latest?cb=20180512004017';
        const embed = new EmbedBuilder()
            .setColor(0x3d525c) 
            .setFooter({text: 'Tomi developed and maintained by Bachoo#0001'})
            .setDescription('+ 10% Damage + 10% Run speed - 10% Cooldowns  - 40% Max health  -- Becomes available for purchase after defeating a council member for the first time. If Savile is used in the trials, max health will **not** be affected.')
            .setThumbnail(img)
            .setTitle('Venture')

        await interaction.reply({embeds: [embed] });
    }
}