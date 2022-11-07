const { EmbedBuilder } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('spirit')
        .setDescription('the spirit robe'),
    name: "spirit",
    async execute(interaction){
        var img = 'https://static.wikia.nocookie.net/wizardoflegend_gamepedia_en/images/9/97/Spirit.png/revision/latest?cb=20190323215035';
        const embed = new EmbedBuilder()
            .setColor(0xac65a5) 
            .setFooter({text: 'Tomi developed and maintained by Bachoo#0001'})
            .setDescription('+ 20% Max health + 10% Crit heal')
            .setThumbnail(img)
            .setTitle('Spirit')

        await interaction.reply({embeds: [embed] });
    }
}