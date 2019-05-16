module.exports = async (client, message) => {
    //basic checks
    if (!message.content.startsWith(client.config.prefix) || message.author.bot || message.content.slice(client.config.prefix.length) === "") return;

    const args = message.content.slice(client.config.prefix.length).toLowerCase().split(/ +/);
    //format args for API link -- default tomi command
    for (var x = 0; x < args.length; x++) {
        if (args[x].valueOf() === 'of' || args[x].valueOf() === 'the' || args[x].valueOf === 'on' || args[x].valueOf === 'and') {
            //do nothing, we dont want this capitalized
        } else {
            //capitalise things for the link
            args[x] = args[x].charAt(0).toLocaleUpperCase() + args[x].substr(1);
        }
    }
    var temp = args.join(' ');
    console.log(temp);
    var titles = args.join(' ').replace(/ /g, "_");
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