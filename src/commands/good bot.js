module.exports = {
    name: 'Good Bot',
    execute(client, message, raw) {
        message.channel.send(`good human`)
            .then(message.channel.send('<a:abachoopat:633353219975938058>'));
    }
}