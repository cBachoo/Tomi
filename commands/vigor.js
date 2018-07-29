module.exports = {
    name: 'vigor',
    execute(message, Discord, raw){
        var img = "https://d1u5p3l4wpay3k.cloudfront.net/wizardoflegend_gamepedia_en/f/f4/Vigor.png?version=725f2fa47ce6e5a9d76e2bf3acebfbb1";
        var embed = new Discord.RichEmbed()
            .setColor("4ea2c7") //default TODO - CHANGE COLOR TO ROBE COLOR
            .setFooter("Tomi developed and maintained by Bachoo#0001")
            .setDescription("+ 10% Max health + 1 Defense")
            .setThumbnail(img)
            .setTitle(raw)

        message.channel.send(embed);        
    }
}