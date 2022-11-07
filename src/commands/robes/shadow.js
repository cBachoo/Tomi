const { EmbedBuilder } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('shadow')
        .setDescription('the shadow robe'),
    name: 'shadow',
    async execute(interaction){
        var img = "https://static.wikia.nocookie.net/wizardoflegend_gamepedia_en/images/8/8e/Shadow.png/revision/latest?cb=20210801124823";
        const embed = new EmbedBuilder()
            .setColor(0x000100) 
            .setFooter({text: 'Tomi developed and maintained by Bachoo#0001'})
            .setDescription('Copies the stats of your previously equipped robe, providing only a visual change. Starting the game when Shadow was previously equipped will cause it to have no stats.')
            .setThumbnail(img)
            .setTitle('Shadow');

        await interaction.reply({embeds: [embed] });
    }
}