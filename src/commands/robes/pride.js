const { EmbedBuilder } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('pride')
        .setDescription('the pride robe'),
    name: 'pride',
    async execute(interaction){
        var img = 'https://static.wikia.nocookie.net/wizardoflegend_gamepedia_en/images/b/b3/Pride.png/revision/latest?cb=20180514042132';
        const embed = new EmbedBuilder()
            .setColor(0x658294) 
            .setFooter({text: 'Tomi developed and maintained by Bachoo#0001'})
            .setDescription("The Chad Robe; Reduces max health to 1, Shields disabled.  -- Available for purchase upon defeating *Master Sura*")
            .setThumbnail(img)
            .setTitle('Pride');

        await interaction.reply({embeds: [embed] });
    }
}