const fs = require('fs');
const { Client, Collection } = require('discord.js');

var config;
//get the right config based on enviromental variables
if (process.env.NODE_ENV == "dev") {
    config = require('./dev-config.json');
} else {
    config = require('./config.json');
}

const client = new Client();
client.config = config;
client.commands = new Collection();
const commandFolders = fs.readdirSync('./src/commands');

//add commands from the directory
for (const folder of commandFolders) {
	fs.readdir(`./src/commands/${folder}`, (err, files) => {
		if (err) throw err;
		files.forEach(file => {
			const fileName = file.split(`.`)[0];
			const props = require(`./src/commands/${folder}/${file}`);
			//console.log(fileName, props);
			client.commands.set(fileName, props);
		});
	});
}
//add events from the directory
fs.readdir(`./src/events/`, (err, files) => {
    if (err) throw err;
    files.forEach(file => {
        const eventName = file.split(`.`)[0];
        const func = require(`./src/events/${file}`);
        client.on(eventName, func.bind(null, client));
    });
});

process.on(`unhandledRejection`, console.error);

//login using either hidden local token, or heroku's token on the cloud
if (config.dev === true) {
    client.login(config.token)
    .then(console.log(`Tomi has started~ prefix: "${config.prefix}"`));
} else {
    client.login(process.env.TOKEN)
    .then(console.log(`Tomi has started~ prefix: "${config.prefix}"`));
}

// config = require('./dev-config.json');
// client.login(config.token)