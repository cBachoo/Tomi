const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('bruh')
        .setDesciption('replies with bruh'),
    name: 'bruh',
    async execute(client, message, raw) {
        message.channel.send("bruh...");
    },
};