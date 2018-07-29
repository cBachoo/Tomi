module.exports = {
    name: "patch",
    execute(message, Discord, client, patch){
        var pembed = new Discord.RichEmbed()
            .setColor("99cff")
            .setFooter("Tomi developed and maintained by Bachoo#0001")
            .setDescription(patch)
            .setThumbnail(client.user.displayAvatarURL)

        message.channel.send(pembed);        
    }
}