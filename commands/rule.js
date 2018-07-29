module.exports = {
    name: 'rule',
    execute(message, Discord, raw){
        var img = "https://d1u5p3l4wpay3k.cloudfront.net/wizardoflegend_gamepedia_en/a/ac/Rule.png?version=4dcd18aadf3edeeff2dd3e3dae059330";
        var embed = new Discord.RichEmbed()
            .setColor("64a0a9") //default TODO - CHANGE COLOR TO ROBE COLOR
            .setFooter("Tomi developed and maintained by Bachoo#0001")
            .setDescription("+ 10% Damage + 4% Armor")
            .setThumbnail(img)
            .setTitle(raw)

        message.channel.send(embed);
    }
}