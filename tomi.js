const fs = require('fs');
const { Client, Collection } = require('discord.js');
const config = require("./config.json");

const client = new Client();
client.config = config;
client.commands = new Collection();

fs.readdir(`./src/commands/`, (err, files) => {
    if (err) throw err;
    files.forEach(file => {
        const fileName = file.split(`.`)[0];
        const props = require(`./src/commands/${file}`);
        client.commands.set(fileName, props);
    });
});

fs.readdir(`./src/events/`, (err, files) => {
    if (err) throw err;
    files.forEach(file => {
        const eventName = file.split(`.`)[0];
        const func = require(`./src/events/${file}`);
        client.on(eventName, func.bind(null, client));
    });
});

process.on(`unhandledRejection`, console.error);

//run locally = config.token
client.login(process.env.TOKEN)
    .then(console.log(`Tomi has started~`));