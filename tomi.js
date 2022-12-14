require('dotenv').config();
const fs = require('fs');
const { Client, Collection, GatewayIntentBits } = require('discord.js');
const { REST } = require('@discordjs/rest');

const client = new Client({
    intents: [
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessages
    ]
});

client.commands = new Collection();
const commandFolders = fs.readdirSync('./src/commands');

//rest config stuff for slash commands
const rest = new REST({version: '10'}).setToken(process.env.TOKEN);

//add commands from the directory
for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./src/commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./src/commands/${folder}/${file}`);
		client.commands.set(command.data.name, command);
	}
}

//add events from the directory
const path = require('path');
const eventsPath = path.join(__dirname, '/src/events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

process.on(`unhandledRejection`, console.error);

//login
client.login(process.env.TOKEN)
	.then(console.log(`Tomi has started~ prefix: "${process.env.PREFIX}"`));

//config = require('./dev-config.json');
//client.login(config.token)