const { RichEmbed } = require('discord.js');

module.exports = {
    name: "fury",
    execute(client, message, raw){
        var img = "https://c-8oqtgrjgwu0x24icogrgfkcx2eewtugefpx2eeqo.g00.gamepedia.com/g00/3_c-8ykbctfqhngigpf.icogrgfkc.eqo_/c-8OQTGRJGWU0x24jvvrux3ax2fx2ficogrgfkc.ewtugefp.eqox2fykbctfqhngigpf_icogrgfkc_gpx2f6x2f68x2fHwta.rpix3fx78gtukqpx3dd19h9h9gc588eh79d2f66cg90140g807_$/$/$/$/$?i10c.ua=1&i10c.dv=6"
        var embed = new RichEmbed()
            .setColor("f9941c") 
            .setFooter("Tomi developed and maintained by Bachoo#0001")
            .setDescription("+ 20% Signature charge rate + 25% Signature damage")
            .setThumbnail(img)
            .setTitle(raw)

        message.channel.send(embed);  
    }
}