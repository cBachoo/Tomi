const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "avarice",
    execute(client, message, raw){
        var img = "https://gamepedia.cursecdn.com/wizardoflegend_gamepedia_en/5/52/Avarice.png?version=49a8a9d99ec0ac73443350fc37c2f005"
        var embed = new MessageEmbed()
            .setColor("a59e97") 
            .setFooter("Tomi developed and maintained by Bachoo#0001")
            .setDescription("+15% Gold gain, +1% gem gain")
            .setThumbnail(img)
            .setTitle(raw)

        message.channel.send(embed);  
    }
}