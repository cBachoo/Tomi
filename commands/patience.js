module.exports = {
    name: 'patience',
    execute(message, Discord, raw){
        var img = "https://d1u5p3l4wpay3k.cloudfront.net/wizardoflegend_gamepedia_en/b/bf/Patience.png?version=e2605c5acf4a49256b1c397e256b63fd";
        var embed = new Discord.RichEmbed()
            .setColor("32679f") //default TODO - CHANGE COLOR TO ROBE COLOR
            .setFooter("Tomi developed and maintained by Bachoo#0001")
            .setDescription("+ 5% Max health + 8% Run speed + 4% Armor + 5% Evade  -- Has no effect until you unlock the Vigor, Venture, Grit, Shift, and Tempo outfits")
            .setThumbnail(img)
            .setTitle(raw)

        message.channel.send(embed);
    }
}