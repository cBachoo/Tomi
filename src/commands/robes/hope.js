const { EmbedBuilder } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('hope')
        .setDescription('the hope robe'),
    name: 'hope',
    async execute(interaction){
        var img = 'https://static.wikia.nocookie.net/wizardoflegend_gamepedia_en/images/1/18/Hope.png/revision/latest?cb=20180512004013';
        const embed = new EmbedBuilder()
            .setColor(0xa8282f) 
            .setFooter({text: 'Tomi developed and maintained by Bachoo#0001'})
            .setDescription('+ 5% Max health + 10% Run speed + 5% Damage + 5% Crit chance -- Has no effect until you unlock the Vigor, Venture, Pace, Awe, and Rule outfits.')
            .setThumbnail(img)
            .setTitle('Hope');

        await interaction.reply({embeds: [embed] });
    }
};