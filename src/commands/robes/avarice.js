const { EmbedBuilder } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('avarice')
        .setDescription('the avarice robe'),
    name: "avarice",
    async execute(interaction){
        var img = 'https://static.wikia.nocookie.net/wizardoflegend_gamepedia_en/images/5/52/Avarice.png/revision/latest?cb=20200116203626';
        const embed = new EmbedBuilder()
            .setColor(0xa59e97)
            .setFooter({text: 'Tomi developed and maintained by Bachoo#0001'})
            .setDescription('+ 10% Gold gain, + 1 Gem gain')
            .setThumbnail(img)
            .setTitle('Avarice');
        
        await interaction.reply({embeds: [embed] });
    }
}