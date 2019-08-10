module.exports = client => client.user.setPresence({
    //set status 
    game: { name: `Use ${client.config.prefix}help! <3`},
    status: `online`
})