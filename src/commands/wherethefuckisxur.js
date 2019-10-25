const { RichEmbed } = require('discord.js');
const rp = require('request-promise');
const $ = require('cheerio');

const url = 'https://wherethefuckisxur.com';

module.exports = {
    name: 'wherethefuckisxur',
    execute(client, message, raw) {
        console.log(message.guild.id)
        if (message.guild.id != '624252756336574481') return;
        // scrape website
        rp(url)
            .then(function (html) {
                //success
                var title = $('.page-title', html).text()
                //console.log(title);
                //console.log($('#map', html).length)
                if ($('#map', html).length >= 1) {
                    //map
                    var map = url + $('#map', html).attr().src
                    //console.log(map);
                    //make discord embed
                    var embed = new RichEmbed()
                        .setColor('99cff')
                        .setFooter("Tomi developed and maintained by Bachoo#0001")
                        .setDescription('There the fuck is xur')
                        .setTitle(title)
                        .setImage(map);

                    message.channel.send(embed);
                } else {
                    //no map
                    message.channel.send('no map')
                }
            })
            .catch(function (e) {
                //handle error
            });
    }
}