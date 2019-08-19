module.exports = {
    name: 'status',
    execute(client, message, raw) {
        client.user.setPresence({
            game: { name: `Use ${client.config.prefix}help! <3`},
            status: `online`
        });
        console.log("Updated status");
    }
}