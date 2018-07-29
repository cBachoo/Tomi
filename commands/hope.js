module.exports = {
    name: 'hope',
    execute(message, Discord, raw){
        var img = "https://d1u5p3l4wpay3k.cloudfront.net/wizardoflegend_gamepedia_en/1/18/Hope.png?version=74fcbc3e2b7bb4b28ec83d96aeef19c3";
        var embed = new Discord.RichEmbed()
            .setColor("a8282f") //default TODO - CHANGE COLOR TO ROBE COLOR
            .setFooter("Tomi developed and maintained by Bachoo#0001")
            .setDescription("+ 5% Max health + 8% Run speed + 5% Damage + 6% Crit chance -- Has no effect until you unlock the Vigor, Venture, Pace, Awe, and Rule outfits.")
            .setThumbnail(img)
            .setTitle(raw)

        message.channel.send(embed);       
    }
};