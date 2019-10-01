const request = require('request-promise');
const cheerio = require('cheerio');
const { RichEmbed } = require('discord.js');

module.exports = {
    name: "bachoo-default",
    execute(client, message, args, temp, rawAuto){
        const baseurl = "https://wizardoflegend.gamepedia.com";
        const query = "/api.php?action=query&format=json&prop=revisions%7Cpageimages&indexpageids=1&rvprop=content&rvsection=1&rvparse&piprop=original&titles=";
        const titles = args;
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
                if (rawdesc === undefined || rawdesc === "" || rawdesc === null) return; // don't bother doing the rest of the steps
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
                        .setTitle("You searched for: " + temp + "... I indexed: " + rawAuto)
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