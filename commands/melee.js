module.exports = {
    name: "melee",
    execute(message, Discord, meleetext){
        message.channel.send("<https://wizardoflegend.gamepedia.com/Category:Melee_arcana>");
        var img = "https://d1u5p3l4wpay3k.cloudfront.net/wizardoflegend_gamepedia_en/0/0e/Dark_Katana.png?version=8de6d45f28b103f0ce70141e14bdfe13"
        var embed = new Discord.RichEmbed()
            .setTitle('All melee arcana:')
            .setColor("99cff")
            .setFooter("Tomi developed and maintained by Bachoo#0001")
            .setDescription(meleetext)
            .setThumbnail(img);

        message.channel.send(embed);
    }
}