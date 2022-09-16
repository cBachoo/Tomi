const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('advice')
        .setDescription('gives you helpful, curated advice from the community'),
    name: 'advice', 
    execute(client, message, raw) {
        var options = ["Just dont get hit", "Damage the enemy a lot", "Dont die", "doing damage from a distance makes sure you can do damage from a distance", "dying means that you lose", "if the enemy kills you, you die", "the mitochondria is the powerhouse of the cell", "eat food to not starve", "make sure your hp does not go down to 0" ]
        //Math.floor(Math.random() * options.length)
        message.channel.send(options[Math.floor(Math.random() * options.length)] + " <:taffy:441425555787874314>");
    }
}