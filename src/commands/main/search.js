const request = require('request-promise');
const cheerio = require('cheerio');
var path = './src/misc/dict.txt'
var autocorrect = require('autocorrect')({dictionary: path})
const { EmbedBuilder } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('search')
        .setDescription('the default tomi search command, this is the one that searches the wiki')
        .addStringOption(option =>
            option.setName('input')
            .setDescription('the arcana or relic to search')
            .setRequired(true)
        ),
    name: "search",
    async execute(interaction) {
        const baseurl = "https://wizardoflegend.gamepedia.com";
        const args = interaction.options.getString('input').toLowerCase().split(/ +/);
        for (var x = 0; x < args.length; x++) {
            if (args[x].valueOf() === 'of' || args[x].valueOf() === 'the' || args[x].valueOf === 'on' || args[x].valueOf === 'and') {
                //do nothing, we dont want these specific words capitalized
            } else {
                //capitalise other words for the link
                args[x] = args[x].charAt(0).toLocaleUpperCase() + args[x].substr(1);
            }
        }
        var temp = args.join(' ');
        console.log(temp);
        var rawAuto = autocorrect(args.join(' '));
        var titles = rawAuto.replace(/ /g, "_").trim();

        var query = `/api.php?action=query&format=json&prop=imageinfo%7Crevisions&titles=File:${titles}.png|${titles}&iiprop=url&iilimit=5&rvprop=content&rvslots=main&rvsection=1`
        
        var apirequest = baseurl + query;

        //begin making the api request
        var options = {
            uri: apirequest,
            transform: function (body) {
                return cheerio.load(body);
            }
        }

        // console.log(options);

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
                const embed = new EmbedBuilder()
                    .setColor(0x99cff)
                    .setTitle("You searched for: " + temp + "... I indexed: " + rawAuto) //enable for autocorrect
                    .setFooter({text: 'Tomi developed and maintained by Bachoo#0001'})
                    .setDescription("**Result**: " + desc + "\n\n" + `<https://wizardoflegend.gamepedia.com/${titles}>`)
                    .setThumbnail(img);

                    //send the embed
                    interaction.reply({embeds: [embed] });
            })
            .catch((err)=>{
                console.error(err);
            })
    }
}