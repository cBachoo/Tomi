const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'venture',
    execute(client, message, raw){
        var img = "https://c-4tvylwolbz88x24nhtlwlkphx2ejbyzljkux2ejvt.g00.gamepedia.com/g00/3_c-4dpghykvmslnluk.nhtlwlkph.jvt_/c-4TVYLWOLBZ88x24oaawzx3ax2fx2fnhtlwlkph.jbyzljku.jvtx2fdpghykvmslnluk_nhtlwlkph_lux2fmx2fmkx2fCluabyl.wunx3fclyzpvux3d49kl86mki79ij77i12838j90092h4ihl_$/$/$/$/$?i10c.ua=1&i10c.dv=21";
        var embed = new MessageEmbed()
            .setColor("3d525c") 
            .setFooter("Tomi developed and maintained by Bachoo#0001")
            .setDescription("+ 10% Damage + 10% Run speed - 10% Cooldowns  - 40% Max health  -- Becomes available for purchase after defeating a council member for the first time. If Savile is used in the trials, max health will **not** be affected.")
            .setThumbnail(img)
            .setTitle(raw)

        message.channel.send(embed);
    }
}