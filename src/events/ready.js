const { Events } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);

		// TODO fix presence not showing, although we've moved away from prefixes...
        client.user.setPresence({
            game: { name: `Use ${process.env.PREFIX}help! <3`},
            status: `online`
	    });
    }
}
