const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'vigor',
    execute(client, message, raw){
        var img = "https://c-4tvylwolbz88x24nhtlwlkphx2ejbyzljkux2ejvt.g00.gamepedia.com/g00/3_c-4dpghykvmslnluk.nhtlwlkph.jvt_/c-4TVYLWOLBZ88x24oaawzx3ax2fx2fnhtlwlkph.jbyzljku.jvtx2fdpghykvmslnluk_nhtlwlkph_lux2f8x2f84x2fNypa.wunx3fclyzpvux3d6031lmiklh1jk018i179i2m8413826l0_$/$/$/$/$?i10c.ua=1&i10c.dv=21";
        var embed = new MessageEmbed()
            .setColor("4ea2c7") 
            .setFooter("Tomi developed and maintained by Bachoo#0001")
            .setDescription("+ 10% Max health - 10% Cooldowns")
            .setThumbnail(img)
            .setTitle(raw)

        message.channel.send(embed);        
    }
}