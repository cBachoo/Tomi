const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('invite')
        .setDescription('grabs the bot invite link'),
    name: 'invite',
    async execute(interaction) {
        // Link has minimum required scope and permissions, may need to be changed
        await interaction.reply("Invite me to your server with this link!: <https://discord.com/api/oauth2/authorize?client_id=1038966595072032809&permissions=2147534848&scope=bot%20applications.commands>");
    }
}