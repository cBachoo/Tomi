const { MessageEmbed } = require('discord.js');

const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('saville')
        .setDescription('the saville robe'),
    name: 'savile',
    async execute(client, message, raw){
        var img = "";
        var embed = new MessageEmbed()
            .setColor("feffff") 
            .setFooter("Tomi developed and maintained by Bachoo#0001")
            .setDescription("+ 5% Max health +10% Run speed +5% Evade -10% Cooldowns  -- Purchased from Savile in the Plaza for 5 gems. This alteration will overwrite all other effects from the outfit you are currently wearing. Pride outfit cannot be modified. This effect will disappear after your next run, and the outfit will return to normal.")
            .setThumbnail(client.user.displayAvatarURL)
            .setTitle(raw)

        message.channel.send(embed);       
    }
}