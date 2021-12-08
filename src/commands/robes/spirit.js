const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "spirit",
    execute(client, message, raw){
        var img = "https://c-8oqtgrjgwu0x24icogrgfkcx2eewtugefpx2eeqo.g00.gamepedia.com/g00/3_c-8ykbctfqhngigpf.icogrgfkc.eqo_/c-8OQTGRJGWU0x24jvvrux3ax2fx2ficogrgfkc.ewtugefp.eqox2fykbctfqhngigpf_icogrgfkc_gpx2f1x2f19x2fUrktkv.rpix3fx78gtukqpx3dc574dd646g5d8902dde3cc6983g3f1fh_$/$/$/$/$?i10c.ua=1&i10c.dv=6"
        var embed = new MessageEmbed()
            .setColor("ac65a5") 
            .setFooter("Tomi developed and maintained by Bachoo#0001")
            .setDescription("+ 20% Max health + 10% Crit heal")
            .setThumbnail(img)
            .setTitle(raw)

        message.channel.send(embed);  
    }
}