const { RichEmbed } = require('discord.js');
const fs = require('fs');
const helptxt = fs.readFileSync("./src/misc/help.txt");
//todo REWORK HELP COMMAND
module.exports = {
    name: 'help',
    execute(client, message, temp){
        var hembed = new RichEmbed()
            .setTitle("My current commands are:")
            .setColor("99cff")
            .setFooter("Tomi developed and maintained by Bachoo#0001")
            .setDescription(helptxt)
            .setThumbnail(client.user.displayAvatarURL);

        message.channel.send(hembed);
    }
}