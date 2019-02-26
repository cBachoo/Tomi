module.exports = {
    name: 'rule',
    execute(message, Discord, raw){
        var img = "https://c-4tvylwolbz88x24nhtlwlkphx2ejbyzljkux2ejvt.g00.gamepedia.com/g00/3_c-4dpghykvmslnluk.nhtlwlkph.jvt_/c-4TVYLWOLBZ88x24oaawzx3ax2fx2fnhtlwlkph.jbyzljku.jvtx2fdpghykvmslnluk_nhtlwlkph_lux2fhx2fhjx2fYbsl.wunx3fclyzpvux3dkll01610km57503i5566153l6mklm19h_$/$/$/$/$?i10c.ua=1&i10c.dv=21";
        var embed = new Discord.RichEmbed()
            .setColor("64a0a9") //default TODO - CHANGE COLOR TO ROBE COLOR
            .setFooter("Tomi developed and maintained by Bachoo#0001")
            .setDescription("+ 10% Damage + 4% Armor")
            .setThumbnail(img)
            .setTitle(raw)

        message.channel.send(embed);
    }
}