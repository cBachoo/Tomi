module.exports = {
    name : "test",
    execute(client, message, raw) {
        if (client.config.dev === true) {
            message.channel.send('works!');
        } else {
            return;
        }
    }
}