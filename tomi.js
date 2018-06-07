/**
 * @author Bachoo
 * @description Main entry file - a discord bot that fetches information from the wizard of legend wiki
 */

//libraries
const Discord = require('discord.js');
const client = new Discord.Client();

//variables
const { prefix, token } = require('./botconfig.json');
const request = require('request');

//called when bot logs in
client.on('ready', () => {
    console.log(`Successfully logged in as ${client.user.tag}!`);
    client.user.setActivity(`Serving ${client.guilds.size} servers! <3`);
});
//log in using our secret token of secrets
client.login(token);

//message handler
client.on('message', message => {
    //basic checks
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const raw = message.content.slice(prefix.length); //raw input that is normalized
    const args = raw.replace(/ /g, "_"); //turn normalized input into something that works for the apirequest
    

    if (message.content !== `${prefix}help`) {
        //api request starts here
        const baseurl = "https://wizardoflegend.gamepedia.com";
        const query = "/api.php?action=query&format=json&prop=revisions%7Cpageimages&rvprop=content&rvsection=1&rvparse&piprop=original&titles="
        var titles = args;
        //final request
        var apirequest = baseurl + query + titles;

        //quickly send the link to the wiki they wanted.
        message.channel.send("<https://wizardoflegend.gamepedia.com/" + args + ">");

        //grab stuff from wiki
        request({
            url: apirequest,
        }, function (error, response, body) {
            if (!error) {
                //description
                var idf = body.indexOf("<p>"); //idf = indexof
                var lidf = body.lastIndexOf("\\n"); //lidf = lastindeof
                //images
                var imidf = body.indexOf("original"); //imidf = image index of
                var imlidf = body.lastIndexOf("width");//imlidf = image last index of

                //checks
                if (idf === -1 || lidf === -1) {
                    console.log("description error");
                    message.channel.send("Couldn't grab description data! Check the link above!")
                } else if (imidf === -1 || imlidf === -1) {
                    console.log("image error");
                    message.channel.send("Couldn't grab image data!");
                } else {
                    //extract texts
                    var desc = body.slice(idf + 3, lidf);
                    var img = body.slice(imidf + 21, imlidf - 3);
                    //put it all together
                    var embed = new Discord.RichEmbed()
                        .setColor("99cff")
                        .setTitle("You searched for: " + raw)
                        .setFooter("Tomi developed by Bachoo#0001")
                        .setDescription("**Result**: " + desc)
                        .setThumbnail(img);

                    //send the embed
                    message.channel.send(embed);
                }
            }
        });
    } else {
        message.channel.send("Having trouble looking stuff up? Make sure spelling is correct!\nSome wiki links just don't have descriptions!\nIf problem persists please contact **Bachoo#0001**");
    }

    if (message.content === `${prefix}restart`){
        message.channel.send("Resetting...")
        client.destroy();
        client.login(token);
    }
});