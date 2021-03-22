const fs = require('fs');
const stdin = fs.readFileSync('./src/misc/wine.txt');
const winetxt = stdin.toString();
module.exports = {
    name: 'wine',
    execute(client, message, raw){
        message.channel.send(winetxt);
    }
}