const { EmbedBuilder } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('tempo')
        .setDescription('the tempo robe'),
    name: 'tempo',
    async execute(interaction){
        var img = 'https://static.wikia.nocookie.net/wizardoflegend_gamepedia_en/images/f/fa/Tempo.png/revision/latest?cb=20210801123714';
        const embed = new EmbedBuilder()
            .setColor(0x62b678) 
            .setFooter({text: 'Tomi developed and maintained by Bachoo#0001'})
            .setDescription('- 15% Cooldowns + 10% Run speed')
            .setThumbnail(img)
            .setTitle('Tempo')

        await interaction.reply({embeds: [embed] });
    }
}