module.exports = {
    name: 'awe',
    execute(message, Discord, raw){
        var img = "https://d1u5p3l4wpay3k.cloudfront.net/wizardoflegend_gamepedia_en/e/e3/Awe.png?version=8c6d23ce365021828644df18461d0ca9";
        var embed = new Discord.RichEmbed()
            .setColor("f4c41c") //default TODO - CHANGE COLOR TO ROBE COLOR
            .setFooter("Tomi developed and maintained by Bachoo#0001")
            .setDescription("+ 12% Crit chance + 20% Crit damage")
            .setThumbnail(img)
            .setTitle(raw)

        message.channel.send(embed);
    }
}