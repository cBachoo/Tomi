const request = require('request-promise');
const cheerio = require('cheerio');
const { RichEmbed } = require('discord.js');

module.exports = async (client, message) => {
    //basic checks
    if (!message.content.startsWith(client.config.prefix) || message.author.bot || message.content.slice(client.config.prefix.length) === "") return;

    const args = message.content.slice(client.config.prefix.length).toLowerCase().split(/ +/);
    //format args for API link
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
        const baseurl = "https://wizardoflegend.gamepedia.com";
        const query = "/api.php?action=query&format=json&prop=revisions%7Cpageimages&indexpageids=1&rvprop=content&rvsection=1&rvparse&piprop=original&titles=";
        //final request
        var apirequest = baseurl + query + titles;
        //quickly send the link to the wiki they wanted.
        message.channel.send("<https://wizardoflegend.gamepedia.com/" + titles + ">");

        //grab stuff from wiki
        var options = { //the options for the actual request that we're making
            uri: apirequest, //uri is the site we wanna scrape
            transform: function (body) {
                return cheerio.load(body);
            }
        };
        //the request
        request(options)
            .then(($) => {
                var rawinfo = $('body').text(); //raw pull info
                var body = JSON.parse(rawinfo); //still raw info but its now an object that I can manipulate
                var pageid = body.query.pageids; //needed to go furthur into the object

                //grab description data
                var rawdesc = JSON.stringify(body.query.pages[pageid].revisions);
                var idf = rawdesc.indexOf("Description");
                var lidf = rawdesc.indexOf("}]");
                //finished description
                var unformdesc = rawdesc.slice(idf + 33, lidf - 3);
                var desc = unformdesc.replace(/\\n/g, '.');
                //finished image
                var img = body.query.pages[pageid].original.source;

                //checks
                if (idf === -1 || lidf === -1 || desc === "" || idf == null || lidf == null) {
                    console.log("Description error");
                    message.channel.send("Couldn't grab description data! Check the link above!");
                } else {
                    var embed = new RichEmbed()
                        .setColor("99cff")
                        .setTitle("You searched for: " + temp)
                        .setFooter("Tomi developed and maintained by Bachoo#0001")
                        .setDescription("**Result**: " + desc)
                        .setThumbnail(img);

                    //send the embed
                    message.channel.send(embed);
                }
            })
            .catch((err) => {
                console.error(err);
            })
    }
}