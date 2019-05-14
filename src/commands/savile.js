const { RichEmbed } = require('discord.js');

module.exports = {
    name: 'savile',
    execute(client, message, raw){
        var img = "";
        var embed = new RichEmbed()
            .setColor("feffff") 
            .setFooter("Tomi developed and maintained by Bachoo#0001")
            .setDescription("+ 5% Max health +12% Run speed +8% Evade -8% Cooldowns  -- Purchased from Savile in the Plaza for 5 gems. This alteration will overwrite all other effects from the outfit you are currently wearing. Pride outfit cannot be modified. This effect will disappear after your next run, and the outfit will return to normal.")
            .setThumbnail(client.user.displayAvatarURL)
            .setTitle(raw)

        message.channel.send(embed);       
    }
}