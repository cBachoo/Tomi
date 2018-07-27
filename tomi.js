/**
 * @author Bachoo
 * @description Main entry file - a discord bot that fetches information from the wizard of legend wiki
 * @version 1.6
 */

//libraries
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const request = require('request-promise');
const cheerio = require('cheerio');

//variables
const { prefix, token } = require('./botconfig.json');
const helptxt = fs.readFileSync("text_stuff/help.txt");


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

        //================ ROBE/OUTFITS COMMANDS HERE =============================
    } else if (message.content.toLowerCase() === `${prefix}hope`) { //hope
        var img = "https://d1u5p3l4wpay3k.cloudfront.net/wizardoflegend_gamepedia_en/1/18/Hope.png?version=74fcbc3e2b7bb4b28ec83d96aeef19c3";
        var embed = new Discord.RichEmbed()
            .setColor("a8282f") //default TODO - CHANGE COLOR TO ROBE COLOR
            .setFooter("Tomi developed and maintained by Bachoo#0001")
            .setDescription("+ 5% Max health + 8% Run speed + 5% Damage + 6% Crit chance -- Has no effect until you unlock the Vigor, Venture, Pace, Awe, and Rule outfits.")
            .setThumbnail(img)
            .setTitle(raw)

        message.channel.send(embed);
    } else if (message.content.toLowerCase() === `${prefix}patience`) { //patience
        var img = "https://d1u5p3l4wpay3k.cloudfront.net/wizardoflegend_gamepedia_en/b/bf/Patience.png?version=e2605c5acf4a49256b1c397e256b63fd";
        var embed = new Discord.RichEmbed()
            .setColor("32679f") //default TODO - CHANGE COLOR TO ROBE COLOR
            .setFooter("Tomi developed and maintained by Bachoo#0001")
            .setDescription("+ 5% Max health + 8% Run speed + 4% Armor + 5% Evade  -- Has no effect until you unlock the Vigor, Venture, Grit, Shift, and Tempo outfits")
            .setThumbnail(img)
            .setTitle(raw)

        message.channel.send(embed);
    } else if (message.content.toLowerCase() === `${prefix}vigor`) { //vigor
        var img = "https://d1u5p3l4wpay3k.cloudfront.net/wizardoflegend_gamepedia_en/f/f4/Vigor.png?version=725f2fa47ce6e5a9d76e2bf3acebfbb1";
        var embed = new Discord.RichEmbed()
            .setColor("4ea2c7") //default TODO - CHANGE COLOR TO ROBE COLOR
            .setFooter("Tomi developed and maintained by Bachoo#0001")
            .setDescription("+ 10% Max health + 1 Defense")
            .setThumbnail(img)
            .setTitle(raw)

        message.channel.send(embed);
    } else if (message.content.toLowerCase() === `${prefix}grit`) { //grit
        var img = "https://d1u5p3l4wpay3k.cloudfront.net/wizardoflegend_gamepedia_en/1/17/Grit.png?version=eed9290d397b0dcbf8fe1850a031e67a";
        var embed = new Discord.RichEmbed()
            .setColor("a18a73") //default TODO - CHANGE COLOR TO ROBE COLOR
            .setFooter("Tomi developed and maintained by Bachoo#0001")
            .setDescription("+ 8% Armor + 1 Defense  -- Armor and Defense are not the same stats.")
            .setThumbnail(img)
            .setTitle(raw)

        message.channel.send(embed);
    } else if (message.content.toLowerCase() === `${prefix}tempo`) { //tempo
        var img = "https://d1u5p3l4wpay3k.cloudfront.net/wizardoflegend_gamepedia_en/f/fa/Tempo.png?version=e18b0f53f38c387d85d0cb693854ed30";
        var embed = new Discord.RichEmbed()
            .setColor("62b678") //default TODO - CHANGE COLOR TO ROBE COLOR
            .setFooter("Tomi developed and maintained by Bachoo#0001")
            .setDescription("- 12% Cooldowns + 8% Run speed ")
            .setThumbnail(img)
            .setTitle(raw)

        message.channel.send(embed);
    } else if (message.content.toLowerCase() === `${prefix}pace`) { //pace
        var img = "https://d1u5p3l4wpay3k.cloudfront.net/wizardoflegend_gamepedia_en/4/4b/Pace.png?version=843bb7a1beed282e1a28bfcf397618bc";
        var embed = new Discord.RichEmbed()
            .setColor("798e43") //default TODO - CHANGE COLOR TO ROBE COLOR
            .setFooter("Tomi developed and maintained by Bachoo#0001")
            .setDescription("+ 16% Run speed + 5% Evade")
            .setThumbnail(img)
            .setTitle(raw)

        message.channel.send(embed);
    } else if (message.content.toLowerCase() === `${prefix}shift`) { //shift
        var img = "https://d1u5p3l4wpay3k.cloudfront.net/wizardoflegend_gamepedia_en/0/00/Shift.png?version=7164ccfacfd59c320734a40057030b35";
        var embed = new Discord.RichEmbed()
            .setColor("562ca8") //default TODO - CHANGE COLOR TO ROBE COLOR
            .setFooter("Tomi developed and maintained by Bachoo#0001")
            .setDescription("+ 10% Evade + 6% Crit chance")
            .setThumbnail(img)
            .setTitle(raw)

        message.channel.send(embed);
    } else if (message.content.toLowerCase() === `${prefix}awe`) { //awe
        var img = "https://d1u5p3l4wpay3k.cloudfront.net/wizardoflegend_gamepedia_en/e/e3/Awe.png?version=8c6d23ce365021828644df18461d0ca9";
        var embed = new Discord.RichEmbed()
            .setColor("f4c41c") //default TODO - CHANGE COLOR TO ROBE COLOR
            .setFooter("Tomi developed and maintained by Bachoo#0001")
            .setDescription("+ 12% Crit chance + 20% Crit damage")
            .setThumbnail(img)
            .setTitle(raw)

        message.channel.send(embed);
    } else if (message.content.toLowerCase() === `${prefix}rule`) { //rule
        var img = "https://d1u5p3l4wpay3k.cloudfront.net/wizardoflegend_gamepedia_en/a/ac/Rule.png?version=4dcd18aadf3edeeff2dd3e3dae059330";
        var embed = new Discord.RichEmbed()
            .setColor("64a0a9") //default TODO - CHANGE COLOR TO ROBE COLOR
            .setFooter("Tomi developed and maintained by Bachoo#0001")
            .setDescription("+ 10% Damage + 4% Armor")
            .setThumbnail(img)
            .setTitle(raw)

        message.channel.send(embed);
    } else if (message.content.toLowerCase() === `${prefix}venture`) { //venture
        var img = "https://d1u5p3l4wpay3k.cloudfront.net/wizardoflegend_gamepedia_en/f/fd/Venture.png?version=627b7537c0d93bae909bbcd6aa8b01c2";
        var embed = new Discord.RichEmbed()
            .setColor("3d525c") //default TODO - CHANGE COLOR TO ROBE COLOR
            .setFooter("Tomi developed and maintained by Bachoo#0001")
            .setDescription("+ 10% Damage + 16% Run speed - 12% Cooldowns  - 40% Max health  -- Becomes available for purchase after defeating a council member for the first time. If Savile is used in the trials, max health will **not** be affected.")
            .setThumbnail(img)
            .setTitle(raw)

        message.channel.send(embed);
    } else if (message.content.toLowerCase() === `${prefix}pride`) { //pride
        var img = "https://d1u5p3l4wpay3k.cloudfront.net/wizardoflegend_gamepedia_en/b/b3/Pride.png?version=ca18161b1336d780e315ae2ac508220c";
        var embed = new Discord.RichEmbed()
            .setColor("658294") //default TODO - CHANGE COLOR TO ROBE COLOR
            .setFooter("Tomi developed and maintained by Bachoo#0001")
            .setDescription("Reduces max health to 1, Shields disabled.  -- Available for purchase upon defeating *Master Sura*")
            .setThumbnail(img)
            .setTitle(raw)

        message.channel.send(embed);
    } else if (message.content.toLowerCase() === `${prefix}savile special` || message.content.toLowerCase() === `${prefix}saville special`) {
        var img = "";
        var embed = new Discord.RichEmbed()
            .setColor("feffff") //default TODO - CHANGE COLOR TO ROBE COLOR
            .setFooter("Tomi developed and maintained by Bachoo#0001")
            .setDescription("+ 5% Max health +12% Run speed +8% Evade -8% Cooldowns  -- Purchased from Savile in the Plaza for 5 gems. This alteration will overwrite all other effects from the outfit you are currently wearing. Pride outfit cannot be modified. This effect will disappear after your next run, and the outfit will return to normal.")
            .setThumbnail(client.user.displayAvatarURL)
            .setTitle(raw)

        message.channel.send(embed);
    } else if (message.content.toLowerCase() === `${prefix}patch` || message.content.toLowerCase() === `${prefix}patchnotes`) {
        var patch = fs.readFileSync("text_stuff/patch.txt");
        var pembed = new Discord.RichEmbed()
            .setColor("99cff")
            .setFooter("Tomi developed and maintained by Bachoo#0001")
            .setDescription(patch)
            .setThumbnail(client.user.displayAvatarURL)

        message.channel.send(pembed);
    } else if (message.content.toLowerCase() === `${prefix}invite`) {
        message.channel.send("Invite me to your server with this link!: <https://discordapp.com/oauth2/authorize?client_id=453371651611033600&permissions=19456&scope=bot>");
    } else if (message.content.toLowerCase() === `${prefix}help`) {
        var hembed = new Discord.RichEmbed()
            .setColor("99cff")
            .setFooter("Tomi developed and maintained by Bachoo#0001")
            .setDescription(helptxt)
            .setThumbnail(client.user.displayAvatarURL);

        message.channel.send(hembed);
        // ====================================== DEFAULT COMMMAND --> SEARCHING THROUGH WIKI ===================
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
                        .setFooter("Guide developed and maintained by Bachoo#0001")
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