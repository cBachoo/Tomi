const { RichEmbed } = require('discord.js');

module.exports = {
    name: 'hope',
    execute(client, message, raw){
        var img = "https://c-4tvylwolbz88x24nhtlwlkphx2ejbyzljkux2ejvt.g00.gamepedia.com/g00/3_c-4dpghykvmslnluk.nhtlwlkph.jvt_/c-4TVYLWOLBZ88x24oaawzx3ax2fx2fnhtlwlkph.jbyzljku.jvtx2fdpghykvmslnluk_nhtlwlkph_lux2f8x2f85x2fOvwl.wunx3fclyzpvux3dh253j6jmm652h412kh795j9ml5j2292j_$/$/$/$/$?i10c.ua=1&i10c.dv=21";
        var embed = new RichEmbed()
            .setColor("a8282f") 
            .setFooter("Tomi developed and maintained by Bachoo#0001")
            .setDescription("+ 5% Max health + 8% Run speed + 5% Damage + 6% Crit chance -- Has no effect until you unlock the Vigor, Venture, Pace, Awe, and Rule outfits.")
            .setThumbnail(img)
            .setTitle(raw)

        message.channel.send(embed);       
    }
};