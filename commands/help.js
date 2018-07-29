module.exports = {
    name: 'help',
    execute(message, Discord, client, helptxt){
        var hembed = new Discord.RichEmbed()
            .setTitle("My current commands are:")
            .setColor("99cff")
            .setFooter("Tomi developed and maintained by Bachoo#0001")
            .setDescription(helptxt)
            .setThumbnail(client.user.displayAvatarURL);

        message.channel.send(hembed);
    }
}