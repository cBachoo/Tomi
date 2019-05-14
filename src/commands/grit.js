const { RichEmbed } = require('discord.js');

module.exports = {
    name: 'grit',
    execute(client, message, raw){
        var img = "https://d1u5p3l4wpay3k.cloudfront.net/wizardoflegend_gamepedia_en/1/17/Grit.png?version=eed9290d397b0dcbf8fe1850a031e67a";
        var embed = new RichEmbed()
            .setColor("a18a73") 
            .setFooter("Tomi developed and maintained by Bachoo#0001")
            .setDescription("+ 8% Armor + 1 Defense  -- Armor and Defense are not the same stats.")
            .setThumbnail(img)
            .setTitle(raw)

        message.channel.send(embed);        
    }
}