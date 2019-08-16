module.exports = client => {
    client.user.setPresence({
        game: { name: `Use ${client.config.prefix}help! <3`},
        status: `online`
    });
}