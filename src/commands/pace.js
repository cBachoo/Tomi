const { RichEmbed } = require('discord.js');

module.exports = {
    name: 'pace',
    execute(client, message, raw){
        var img = "https://c-4tvylwolbz88x24nhtlwlkphx2ejbyzljkux2ejvt.g00.gamepedia.com/g00/3_c-4dpghykvmslnluk.nhtlwlkph.jvt_/c-4TVYLWOLBZ88x24oaawzx3ax2fx2fnhtlwlkph.jbyzljku.jvtx2fdpghykvmslnluk_nhtlwlkph_lux2f1x2f1ix2fWhjl.wunx3fclyzpvux3dhk275jkkl251m521337k32931538j30j_$/$/$/$/$?i10c.ua=1&i10c.dv=21";
        var embed = new RichEmbed()
            .setColor("798e43") 
            .setFooter("Tomi developed and maintained by Bachoo#0001")
            .setDescription("+ 16% Run speed + 5% Evade")
            .setThumbnail(img)
            .setTitle(raw)

        message.channel.send(embed);     
    }
}