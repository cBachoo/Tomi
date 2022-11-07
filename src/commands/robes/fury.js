const { EmbedBuilder } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('fury')
        .setDescription('the fury robe'),
    name: "fury",
    async execute(interaction){
        var img = 'https://static.wikia.nocookie.net/wizardoflegend_gamepedia_en/images/4/46/Fury.png/revision/latest?cb=20190323215033';
        const embed = new EmbedBuilder()
            .setColor(0xf9941c) 
            .setFooter({text: 'Tomi developed and maintained by Bachoo#0001'})
            .setDescription('+ 20% Signature charge rate + 25% Signature damage')
            .setThumbnail(img)
            .setTitle('Fury');

        await interaction.reply({embeds: [embed] });
    }
}