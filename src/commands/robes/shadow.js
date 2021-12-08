const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'shadow',
    execute(client, message, raw){
        var img = "https://static.wikia.nocookie.net/wizardoflegend_gamepedia_en/images/8/8e/Shadow.png/revision/latest?cb=20210801124823";
        var embed = new MessageEmbed()
            .setColor("000100") 
            .setFooter("Tomi developed and maintained by Bachoo#0001")
            .setDescription("Copies the stats of your previously equipped robe, providing only a visual change. Starting the game when Shadow was previously equipped will cause it to have no stats.")
            .setThumbnail(img)
            .setTitle(raw)

        message.channel.send(embed);        
    }
}