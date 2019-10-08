var fs = require('fs');
const stdin = fs.readFileSync('./src/misc/legion.txt');
const legion = stdin.toString();
module.exports = {
    name: 'legion',
    execute(client, message, raw) {
        message.channel.send(legion);
    }
}