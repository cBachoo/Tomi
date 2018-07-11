/**
 * @author Bachoo
 * @description Main entry file - a discord bot that fetches information from the wizard of legend wiki
 * @version 0.0.5
 */

//libraries
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const request = require('request-promise');
const cheerio = require('cheerio');

//variables
const { prefix, token } = require('./botconfig.json');
const helptxt = fs.readFileSync("./help.txt");


//called when bot logs in
client.on('ready', () => {
    console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
    console.log(`Successfully logged in as ${client.user.tag}!`);
    client.user.setActivity(`Serving ${client.guilds.size} servers! <3`);
});

//called when the bot joins a guild.
client.on("guildCreate", guild => {
    console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
    client.user.setActivity(`Serving ${client.guilds.size} servers! <3`);
});

//called when the bot is removed from a guild.
client.on("guildDelete", guild => {
    console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
    client.user.setActivity(`Serving ${client.guilds.size} servers! <3`);
});


//message handler
client.on('message', message => {
    //basic checks
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const rawmessage = message.content.slice(prefix.length); //raw input with no editing

    var rawarry = rawmessage.toLocaleLowerCase().split(' ');
    for (var x = 0; x < rawarry.length; x++) {
        if (rawarry[x].valueOf() === 'of') {
            //do nothing
        } else {
            rawarry[x] = rawarry[x].charAt(0).toLocaleUpperCase() + rawarry[x].substr(1);
        }
    }
    var raw = rawarry.join(' '); //properly uppercased formatted input

    if (message.content.slice(prefix.length) === "") return;
    const args = raw.replace(/ /g, "_"); //turn normalized input into something that works for the apirequest
    //log the command
    console.log(`\nCOMMAND - ${message.content}`);
    //================ COMMANDS START HERE ====================================
    if (message.content === `${prefix}restart`) {
        client.destroy();
        client.login(token);
        return;
    } else if (message.content === `${prefix}patch` || message.content === `${prefix}patchnotes`) {
        var patch = fs.readFileSync("./patch.txt");
        var pembed = new Discord.RichEmbed()
            .setColor("99cff")
            .setFooter("Tomi developed and maintained by Bachoo#0001")
            .setDescription(patch)
            .setThumbnail(client.user.displayAvatarURL)

        message.channel.send(pembed);
    } else if (message.content === `${prefix}invite`) {
        message.channel.send("Invite me to your server with this link!: <https://discordapp.com/oauth2/authorize?client_id=453371651611033600&permissions=19456&scope=bot>");
    } else if (message.content === `${prefix}help`) {
        var hembed = new Discord.RichEmbed()
            .setColor("99cff")
            .setFooter("Tomi developed and maintained by Bachoo#0001")
            .setDescription(helptxt)
            .setThumbnail(client.user.displayAvatarURL);

        message.channel.send(hembed);

    } else { //any command for finding relics/arcana, default command essentially
        //api request starts here
        const baseurl = "https://wizardoflegend.gamepedia.com";
        const query = "/api.php?action=query&format=json&prop=revisions%7Cpageimages&indexpageids=1&rvprop=content&rvsection=1&rvparse&piprop=original&titles="
        var titles = args;
        //final request
        var apirequest = baseurl + query + titles;

        //quickly send the link to the wiki they wanted.
        message.channel.send("<https://wizardoflegend.gamepedia.com/" + args + ">");

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
                var desc = rawdesc.slice(idf + 33, lidf - 3);
                //finished image
                var img = body.query.pages[pageid].original.source;

                //checks
                if (idf === -1 || lidf === -1 || desc === "") {
                    console.log("Description error");
                    message.channel.send("Couldn't grab description data! Check the link above!");
                } else {
                    var embed = new Discord.RichEmbed()
                        .setColor("99cff")
                        .setTitle("You searched for: " + raw)
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
});

//should always be at the bottom of our code
//log in using our secret token of secrets
client.login(token);