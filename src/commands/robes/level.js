const { EmbedBuilder } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('level')
        .setDescription('the level robe'),
    name: "level",
    async execute(interaction){
        var img = 'https://static.wikia.nocookie.net/wizardoflegend_gamepedia_en/images/3/3d/Level.png/revision/latest?cb=20210801123848';
        const embed = new EmbedBuilder()
            .setColor(0x49486c) 
            .setFooter({text: 'Tomi developed and maintained by Bachoo#0001'})
            .setDescription('-50% Max health, -50% Damage, -50% Signature charge rate. Each enemy you defeat increases the stats of the robe, up to a maximum of +50% of the former negative stats. With saville upgrade, the maximum is increases to +75% of the former negative stats!!!')
            .setThumbnail(img)
            .setTitle('Level');

        await interaction.reply({embeds: [embed] });
    }
}