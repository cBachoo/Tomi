module.exports = {
    name: 'venture',
    execute(message, Discord, raw){
        var img = "https://d1u5p3l4wpay3k.cloudfront.net/wizardoflegend_gamepedia_en/f/fd/Venture.png?version=627b7537c0d93bae909bbcd6aa8b01c2";
        var embed = new Discord.RichEmbed()
            .setColor("3d525c") //default TODO - CHANGE COLOR TO ROBE COLOR
            .setFooter("Tomi developed and maintained by Bachoo#0001")
            .setDescription("+ 10% Damage + 16% Run speed - 12% Cooldowns  - 40% Max health  -- Becomes available for purchase after defeating a council member for the first time. If Savile is used in the trials, max health will **not** be affected.")
            .setThumbnail(img)
            .setTitle(raw)

        message.channel.send(embed);
    }
}