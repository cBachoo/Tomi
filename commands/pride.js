module.exports = {
    name: 'pride',
    execute(message, Discord, raw){
        var img = "https://d1u5p3l4wpay3k.cloudfront.net/wizardoflegend_gamepedia_en/b/b3/Pride.png?version=ca18161b1336d780e315ae2ac508220c";
        var embed = new Discord.RichEmbed()
            .setColor("658294") //default TODO - CHANGE COLOR TO ROBE COLOR
            .setFooter("Tomi developed and maintained by Bachoo#0001")
            .setDescription("Reduces max health to 1, Shields disabled.  -- Available for purchase upon defeating *Master Sura*")
            .setThumbnail(img)
            .setTitle(raw)

        message.channel.send(embed);      
    }
}