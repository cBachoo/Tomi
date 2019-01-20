/**
 * @author Bachoo
 * @description Main entry file - a discord bot that fetches information farom the wizard of legend wiki
 * @version 1.7
 */

//libraries
const fs = require('fs');
const request = require('request-promise');
const cheerio = require('cheerio');

//discord stuff
const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
//command stuff
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

//variables
const { prefix, token } = require('./botconfig.json');
const patch = fs.readFileSync('./patch.txt');
const helptxt = fs.readFileSync('./help.txt');
const meleetxt = fs.readFileSync('./melee.txt');

//called when bot logs in
client.on('ready', () => {
    console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
    console.log(`Successfully logged in as ${client.user.tag}!`);
    client.user.setActivity(`Use t!help! Serving ${client.guilds.size} servers! <3`);
});

//called when the bot joins a guild.
client.on("guildCreate", guild => {
    console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
    client.user.setActivity(`Use t!help! Serving ${client.guilds.size} servers! <3`);
});

//called when the bot is removed from a guild.
client.on("guildDelete", guild => {
    console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
    client.user.setActivity(`Use t!help! Serving ${client.guilds.size} servers! <3`);
});

//message handler
client.on('message', message => {
    //basic checks
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const rawmessage = message.content.slice(prefix.length); //raw input with no editing

    var rawarry = rawmessage.toLocaleLowerCase().split(' ');
    for (var x = 0; x < rawarry.length; x++) {
        if (rawarry[x].valueOf() === 'of' || rawarry[x].valueOf() === 'the' || rawarry[x].valueOf === 'on' || rawarry[x].valueOf === 'and') {
            //do nothing, we dont want this capitalized
        } else {
            //capitalise things for the link
            rawarry[x] = rawarry[x].charAt(0).toLocaleUpperCase() + rawarry[x].substr(1);
        }
    }
    var raw = rawarry.join(' '); //properly uppercased formatted input
    if (message.content.slice(prefix.length) === "") return;
    const args = raw.replace(/ /g, "_"); //turn normalized input into something that works for the apirequest
    //log the command
    console.log(`\nCOMMAND - ${message.content}`);
    //============ COMMANDS START HERE =========================
    if (message.content.toLowerCase() === `${prefix}restart`) {
        client.destroy();
        client.login(token);
        return;
    } else if (message.content.toLowerCase() === `${prefix}help`) {
        client.commands.get('help').execute(message, Discord, client, helptxt)
    } else if (message.content.toLowerCase() === `${prefix}countdown`) {
        client.commands.get('countdown').execute(message, Discord, client);
    } else if (message.content.toLocaleLowerCase() === `${prefix}invite`) {
        client.commands.get('invite').execute(message);
    } else if (message.content.toLocaleLowerCase() === `${prefix}melee`) {
        client.commands.get('melee').execute(message, Discord, meleetxt);
    } else if (message.content.toLowerCase() === `${prefix}patch`) {
        client.commands.get('patch').execute(message, Discord, client, patch);
        // ===================== ROBE STUFF =========================================        
    } else if (message.content.toLowerCase() === `${prefix}hope`) {
        client.commands.get('hope').execute(message, Discord, raw);
    } else if (message.content.toLowerCase() === `${prefix}patience`) {
        client.commands.get('patience').execute(message, Discord, raw);
    } else if (message.content.toLowerCase() === `${prefix}vigor`) {    
        client.commands.get('vigor').execute(message, Discord, raw);
    } else if (message.content.toLowerCase() === `${prefix}grit`) {
        client.commands.get('grit').execute(message, Discord, raw);
    } else if (message.content.toLowerCase() === `${prefix}tempo`) {
        client.commands.get('tempo').execute(message, Discord, raw);
    } else if (message.content.toLowerCase() === `${prefix}pace`) {
        client.commands.get('pace').execute(message, Discord, raw);
    } else if (message.content.toLowerCase() === `${prefix}shift`) {
        client.commands.get('shift').execute(message, Discord, raw);
    } else if (message.content.toLowerCase() === `${prefix}awe`) {
        client.commands.get('awe').execute(message, Discord, raw);
    } else if (message.content.toLowerCase() === `${prefix}rule`) {
        client.commands.get('rule').execute(message, Discord, raw);
    } else if (message.content.toLowerCase() === `${prefix}venture`) {
        client.commands.get('venture').execute(message, Discord, raw);
    } else if (message.content.toLowerCase() === `${prefix}pride`) {
        client.commands.get('pride').execute(message, Discord, raw);
    } else if (message.content.toLowerCase() === `${prefix}savile` || message.content === `${prefix}savile special`) {
        client.commands.get('savile').execute(message, Discord, client, raw);
        // ====================================== DEFAULT COMMMAND --> SEARCHING THROUGH WIKI ===================    
    } else {
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
                var unformdesc = rawdesc.slice(idf + 33, lidf - 3);
                var desc = unformdesc.replace(/\\n/g, '.');
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