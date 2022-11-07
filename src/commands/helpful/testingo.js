const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	name: 'ping',
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};