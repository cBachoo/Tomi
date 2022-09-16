var fs = require('fs');
const stdin = fs.readFileSync('./src/misc/legion.txt');
const legion = stdin.toString();
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('legion')
        .setDescription('LEGION'),
    name: 'legion',
    async execute(client, message, raw) {
        message.channel.send(legion);
    }
}