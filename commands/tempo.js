module.exports = {
    name: 'tempo',
    execute(message, Discord, raw){
        var img = "https://d1u5p3l4wpay3k.cloudfront.net/wizardoflegend_gamepedia_en/f/fa/Tempo.png?version=e18b0f53f38c387d85d0cb693854ed30";
        var embed = new Discord.RichEmbed()
            .setColor("62b678") //default TODO - CHANGE COLOR TO ROBE COLOR
            .setFooter("Tomi developed and maintained by Bachoo#0001")
            .setDescription("- 12% Cooldowns + 8% Run speed ")
            .setThumbnail(img)
            .setTitle(raw)

        message.channel.send(embed);        
    }
}