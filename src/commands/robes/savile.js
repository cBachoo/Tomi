const { EmbedBuilder } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('savile')
        .setDescription('the savile robe'),
    name: 'savile',
    async execute(interaction){
        // var img = "";
        const embed = new EmbedBuilder()
            .setColor(0xfeffff) 
            .setFooter({text: 'Tomi developed and maintained by Bachoo#0001'})
            .setDescription('+ 5% Max health +10% Run speed +5% Evade -10% Cooldowns  -- Purchased from Savile in the Plaza for 5 gems. This alteration will overwrite all other effects from the outfit you are currently wearing. Pride outfit cannot be modified. This effect will disappear after your next run, and the outfit will return to normal.')
            .setThumbnail(interaction.client.user.displayAvatarURL())
            .setTitle('Savile Special');

        await interaction.reply({embeds: [embed] });      
    }
}