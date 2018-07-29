module.exports = {
    name: 'pace',
    execute(message, Discord, raw){
        var img = "https://d1u5p3l4wpay3k.cloudfront.net/wizardoflegend_gamepedia_en/4/4b/Pace.png?version=843bb7a1beed282e1a28bfcf397618bc";
        var embed = new Discord.RichEmbed()
            .setColor("798e43") //default TODO - CHANGE COLOR TO ROBE COLOR
            .setFooter("Tomi developed and maintained by Bachoo#0001")
            .setDescription("+ 16% Run speed + 5% Evade")
            .setThumbnail(img)
            .setTitle(raw)

        message.channel.send(embed);     
    }
}