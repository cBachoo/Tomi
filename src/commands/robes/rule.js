const { EmbedBuilder } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('rule')
        .setDescription('the rule robe'),
    name: 'rule',
    async execute(interaction){
        var img = 'https://static.wikia.nocookie.net/wizardoflegend_gamepedia_en/images/a/ac/Rule.png/revision/latest?cb=20180512004015';
        const embed = new EmbedBuilder()
            .setColor(0x64a0a9)
            .setFooter({text: 'Tomi developed and maintained by Bachoo#0001'})
            .setDescription('+ 10% Damage + 10% Armor')
            .setThumbnail(img)
            .setTitle('Rule');

        await interaction.reply({embeds: [embed] });
    }
}