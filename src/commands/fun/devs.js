const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('devs')
        .setDescription('a message to the devs'),
    name: 'devs',
    async execute(interaction) {
        if (interaction.member.user.id === '236169260026560522' || interaction.member.user.id === '421801203970736128') {
            await interaction.reply("You're very cool, and I appreciate you creating me :heart:");
            console.log('real')
        } else {
            await interaction.reply("Sorry, you don't look like a dev to me!");
            console.log("fake")
        }
    }
}