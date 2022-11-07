const { EmbedBuilder } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('pace')
        .setDescription('the pace robe'),
    name: 'pace',
    async execute(interaction){
        var img = 'https://static.wikia.nocookie.net/wizardoflegend_gamepedia_en/images/4/4b/Pace.png/revision/latest?cb=20180512004014';
        const embed = new EmbedBuilder()
            .setColor(0x798e43) 
            .setFooter({text: 'Tomi developed and maintained by Bachoo#0001'})
            .setDescription('+ 16% Run speed - 30% Sprint delay')
            .setThumbnail(img)
            .setTitle('Pace');

        await interaction.reply({embeds: [embed] });
    }
}