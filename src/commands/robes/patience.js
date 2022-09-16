const { MessageEmbed } = require('discord.js');

const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('patience')
        .setDescription('the patience robe'),
    name: 'patience',
    async execute(client, message, raw){
        var img = "https://c-4tvylwolbz88x24nhtlwlkphx2ejbyzljkux2ejvt.g00.gamepedia.com/g00/3_c-4dpghykvmslnluk.nhtlwlkph.jvt_/c-4TVYLWOLBZ88x24oaawzx3ax2fx2fnhtlwlkph.jbyzljku.jvtx2fdpghykvmslnluk_nhtlwlkph_lux2fix2fimx2fWhaplujl.wunx3fclyzpvux3di996kkji41m181102491hk39j136lj3l_$/$/$/$/$?i10c.ua=1&i10c.dv=21";
        var embed = new MessageEmbed()
            .setColor("32679f") 
            .setFooter("Tomi developed and maintained by Bachoo#0001")
            .setDescription("+ 5% Max health + 10% Run speed + 5% Armor + 5% Evade  -- Has no effect until you unlock the Vigor, Venture, Grit, Shift, and Tempo outfits")
            .setThumbnail(img)
            .setTitle(raw)

        message.channel.send(embed);
    }
}