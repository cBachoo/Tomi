module.exports = {
    name: 'status',
    execute(client, message, raw) {
        client.user.setActivity(`Use ${client.config.prefix}help! <3`);
        console.log("Updated status");
    }
}