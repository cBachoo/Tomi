const request = require('request-promise');
const cheerio = require('cheerio');
const { RichEmbed } = require('discord.js');

module.exports = {
    name: "default",
    execute(client, message, args, temp, rawAuto) {
        const baseurl = "https://wizardoflegend.gamepedia.com";
        const titles = args;
        var query = `/api.php?action=query&format=json&prop=imageinfo%7Crevisions&titles=File:${titles}.png|${titles}&iiprop=url&iilimit=5&rvprop=content&rvslots=main&rvsection=1`
        //quickly send the base url
        var apirequest = baseurl + query;
        message.channel.send(`<https://wizardoflegend.gamepedia.com/${titles}>`);
        // message.channel.send(apirequest);
        // console.log(apirequest);

        //begin making the api request
        var options = {
            uri: apirequest,
            transform: function (body) {
                return cheerio.load(body);
            }
        }

        request(options)
            .then(($)=> {
                var rawinfo = $('body').text();
                var body = JSON.parse(rawinfo);
                
                //var pageids = body.query.pages.pageids;
                var obj = body.query.pages,
                    key = Object.keys(obj)[0],
                    imgkey = Object.keys(obj)[1],
                    descPageId = obj[key].pageid; //need page ids in order to advance into json object
                    imgPageId = obj[imgkey].pageid;

                var desc = body.query.pages[descPageId].revisions[0].slots.main["*"]; //final description of query
                var img = body.query.pages[imgPageId].imageinfo[0].url; //final image of query

                //send the embed
                var embed = new RichEmbed()
                    .setColor("99cff")
                    .setTitle("You searched for: " + temp + "... I indexed: " + rawAuto) //enable for autocorrect
                    .setFooter("Tomi developed and maintained by Bachoo#0001")
                    .setDescription("**Result**: " + desc)
                    .setThumbnail(img);

                    //send the embed
                    message.channel.send(embed);
            })
            .catch((err)=>{
                console.error(err);
            })
    }
}