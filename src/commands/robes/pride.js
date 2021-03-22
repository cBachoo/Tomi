const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'pride',
    execute(client, message, raw){
        var img = "https://c-4tvylwolbz88x24nhtlwlkphx2ejbyzljkux2ejvt.g00.gamepedia.com/g00/3_c-4dpghykvmslnluk.nhtlwlkph.jvt_/c-4TVYLWOLBZ88x24oaawzx3ax2fx2fnhtlwlkph.jbyzljku.jvtx2fdpghykvmslnluk_nhtlwlkph_lux2fix2fi0x2fWypkl.wunx3fclyzpvux3d838i8i02m63i045li1k0i766i60h8217_$/$/$/$/$?i10c.ua=1&i10c.dv=21";
        var embed = new MessageEmbed()
            .setColor("658294") 
            .setFooter("Tomi developed and maintained by Bachoo#0001")
            .setDescription("The Chad Robe; Reduces max health to 1, Shields disabled.  -- Available for purchase upon defeating *Master Sura*")
            .setThumbnail(img)
            .setTitle(raw)

        message.channel.send(embed);      
    }
}