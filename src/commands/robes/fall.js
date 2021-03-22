const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "fall",
    execute(client, message, raw){
        var img = "https://c-8oqtgrjgwu0x24icogrgfkcx2eewtugefpx2eeqo.g00.gamepedia.com/g00/3_c-8ykbctfqhngigpf.icogrgfkc.eqo_/c-8OQTGRJGWU0x24jvvrux3ax2fx2ficogrgfkc.ewtugefp.eqox2fykbctfqhngigpf_icogrgfkc_gpx2f7x2f7fx2fHcnn.rpix3fx78gtukqpx3dg7255336078647dd50fd50820763c99c_$/$/$/$/$?i10c.ua=1&i10c.dv=6"
        var embed = new MessageEmbed()
            .setColor("bad1d4") 
            .setFooter("Tomi developed and maintained by Bachoo#0001")
            .setDescription("Reduces max health to 100 -- Max health can not be modified by relics. After 5 seconds of not taking damage, health will rapidly regenerate.")
            .setThumbnail(img)
            .setTitle(raw)

        message.channel.send(embed);  
    }
}