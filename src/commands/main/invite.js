module.exports = {
    name: 'invite',
    execute(client, message, raw){
        message.channel.send("Invite me to your server with this link!: <https://discordapp.com/oauth2/authorize?client_id=453371651611033600&permissions=19456&scope=bot>")
    }
}