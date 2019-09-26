var path = './src/misc/dict.txt'
var autocorrect = require('autocorrect')({dictionary: path})

module.exports = async (client, message) => {
    //basic checks
    if (!message.content.startsWith(client.config.prefix) || message.author.bot || message.content.slice(client.config.prefix.length) === "") return;
    //raw message from the user, removing the prefix and splitting on spaces
    const args = message.content.slice(client.config.prefix.length).toLowerCase().split(/ +/);
    //format args for API link -- turns things into uppercase
    for (var x = 0; x < args.length; x++) {
        if (args[x].valueOf() === 'of' || args[x].valueOf() === 'the' || args[x].valueOf === 'on' || args[x].valueOf === 'and') {
            //do nothing, we dont want this capitalized
        } else {
            //capitalise things for the link
            args[x] = args[x].charAt(0).toLocaleUpperCase() + args[x].substr(1);
        }
    }
    var temp = args.join(' ');
    //console.log("Command invoked - " + temp); 
    var rawAuto = autocorrect(args.join(' '));
    var titles = rawAuto.replace(/ /g, "_");

    //commandName removes first index in array
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName);

    if (command) {
        command.execute(client, message, temp);
    } else {
        //default tomi search command
        client.commands.get('!default').execute(client, message, titles, temp);
    }
}