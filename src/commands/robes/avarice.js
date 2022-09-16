const { MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('avarice')
        .setDescription('the avarice robe'),
    name: "avarice",
    async execute(client, message, raw){
        var img = "https://gamepedia.cursecdn.com/wizardoflegend_gamepedia_en/5/52/Avarice.png?version=49a8a9d99ec0ac73443350fc37c2f005"
        var embed = new MessageEmbed()
            .setColor("a59e97") 
            .setFooter("Tomi developed and maintained by Bachoo#0001")
            .setDescription("+10% Gold gain, +1 Gem Gain")
            .setThumbnail(img)
            .setTitle(raw)

        message.channel.send(embed);  
    }
}