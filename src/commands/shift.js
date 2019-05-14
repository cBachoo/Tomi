const { RichEmbed } = require('discord.js');

module.exports = {
    name: 'shift',
    execute(client, message, raw){
        var img = "https://c-4tvylwolbz88x24nhtlwlkphx2ejbyzljkux2ejvt.g00.gamepedia.com/g00/3_c-4dpghykvmslnluk.nhtlwlkph.jvt_/c-4TVYLWOLBZ88x24oaawzx3ax2fx2fnhtlwlkph.jbyzljku.jvtx2fdpghykvmslnluk_nhtlwlkph_lux2f7x2f77x2fZopma.wunx3fclyzpvux3d5l58kh0788m7h6640lj72i292j53j0m7_$/$/$/$/$?i10c.ua=1&i10c.dv=21";
        var embed = new RichEmbed()
            .setColor("562ca8") 
            .setFooter("Tomi developed and maintained by Bachoo#0001")
            .setDescription("+ 10% Evade + 6% Crit chance")
            .setThumbnail(img)
            .setTitle(raw)

        message.channel.send(embed);        
    }
}