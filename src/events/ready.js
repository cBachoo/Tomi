module.exports = client => client.user.setPresence({
    //set status 
    game: { name: `Do ${client.config.prefix}help! Serving ${client.guilds.size} servers! <3`},
    status: `online`
})