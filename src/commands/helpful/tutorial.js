const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('tutorial')
        .setDescription('a quick tutorial on how to become god'),
    name: 'tutorial',
    async execute(interaction) {
        await interaction.reply(`1. Replay tutorial via mirror NPC in your house\n2. You’ll arrive in your house and will be able to drop relics, so you can equip up to 12 from the start \n3. Go nuts <:taffy:441425555787874314>`);
    }
}