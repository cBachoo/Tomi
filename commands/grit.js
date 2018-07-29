module.exports = {
    name: 'grit',
    execute(message, Discord, raw){
        var img = "https://d1u5p3l4wpay3k.cloudfront.net/wizardoflegend_gamepedia_en/1/17/Grit.png?version=eed9290d397b0dcbf8fe1850a031e67a";
        var embed = new Discord.RichEmbed()
            .setColor("a18a73") //default TODO - CHANGE COLOR TO ROBE COLOR
            .setFooter("Tomi developed and maintained by Bachoo#0001")
            .setDescription("+ 8% Armor + 1 Defense  -- Armor and Defense are not the same stats.")
            .setThumbnail(img)
            .setTitle(raw)

        message.channel.send(embed);        
    }
}