const { MessageEmbed } = require('discord.js');
const fs = require('fs');
const helptxt = fs.readFileSync("./src/misc/help.txt");
//todo REWORK HELP COMMAND
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('lists all the available commands'),
    name: 'help',
    async execute(client, message, temp){
        var hembed = new MessageEmbed()
            .setTitle("My current commands are:")
            .setColor("99cff")
            .setFooter("Tomi developed and maintained by Bachoo#0001")
            .setDescription(helptxt)
            .setThumbnail(client.user.displayAvatarURL);

        message.channel.send(hembed);
    }
}