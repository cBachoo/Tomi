module.exports = {
    name: 'shift',
    execute(message, Discord, raw){
        var img = "https://d1u5p3l4wpay3k.cloudfront.net/wizardoflegend_gamepedia_en/0/00/Shift.png?version=7164ccfacfd59c320734a40057030b35";
        var embed = new Discord.RichEmbed()
            .setColor("562ca8") //default TODO - CHANGE COLOR TO ROBE COLOR
            .setFooter("Tomi developed and maintained by Bachoo#0001")
            .setDescription("+ 10% Evade + 6% Crit chance")
            .setThumbnail(img)
            .setTitle(raw)

        message.channel.send(embed);        
    }
}