const { RichEmbed } = require('discord.js');

module.exports = {
    name: "level",
    execute(client, message, raw){
        var img = "https://gamepedia.cursecdn.com/wizardoflegend_gamepedia_en/3/3d/Level.png?version=f42eb63d86cce4089aa2184416bdfda4"
        var embed = new RichEmbed()
            .setColor("49486c") 
            .setFooter("Tomi developed and maintained by Bachoo#0001")
            .setDescription("-50% Max health, -50% Damage, -50% Signature charge rate. Each enemy you defeat increases the stats of the robe, up to a maximum of +50% of the former negative stats. With saville upgrade, the maximum is increases to +75% of the former negative stats!!!")
            .setThumbnail(img)
            .setTitle(raw)

        message.channel.send(embed);  
    }
}