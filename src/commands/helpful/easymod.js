const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('easymod')
        .setDescription('a very small and brief tutorial on how to add you own robes to the game'),
    name: 'easymod',
    async execute(interaction) {
        await interaction.reply(`
        This is not how you add robes and relics and stuff, this is for bumping numbers and editing what spawns when.
        \`\`\`
        1. Download DnSpy : https://github.com/dnSpy/dnSpy/releases
        2. Open Local Files via Steam
        3. Find the Assembly-CSharp.dll file
        4. Drag and Drop the dll File onto the Sidebar on Spy
        5. You now have Access to the Game files! 
        6. The Arcana and Relics are in under the {} - Directory
        7. To Edit the Code, Simply right click and Select Edit Class or Edit Method\`\`\``);
    }
}