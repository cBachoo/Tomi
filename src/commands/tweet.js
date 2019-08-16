const { RichEmbed } = require('discord.js');
const GoogleSpreadsheet = require('google-spreadsheet');
const { promisify } = require('util');
const fs = require('fs');

const channelid = "520003258329071646";
const creds = require('../../tomi_secret.json');

module.exports = {
    name: 'tweet',
    execute(client, message, raw){
        
        async function openSheet() {
            const doc = new GoogleSpreadsheet('1zY98UElfLZ0WLoA5wtKj87jIp86Ac9mRkUlWEP_cixQ');
            await promisify(doc.useServiceAccountAuth)(creds);
            const info = await promisify(doc.getInfo)();
            const sheet = info.worksheets[0];

            var a1 = await promisify(sheet.getCells)();
            var data = a1[0].value; //grabbed the actual tweet info
            //extracting timestamped using string functions
            var tstart = data.indexOf('||');
            var timestamp = data.slice(tstart+3)
            //final output 
            var tweet = data.slice(0, tstart);
            //grab the tweetdate file
            var tweetdate = JSON.parse(fs.readFileSync('./src/misc/tweetdate.json'));
            
            //compare timestamps/dates to see if its a new tweet
            if(timestamp === tweetdate.date) {
                console.log('not a new tweet')
            } else {
                //its a new tweet, make sure we're sending it to the right channel
                if (message.channel.id === channelid) { //==========================
                    //right channel, allow the command to go through
                    message.channel.send(tweet);
                } else {
                    console.log('wrong channel');
                }
                //message.channel.send(tweet);
                fs.writeFileSync('./src/misc/tweetdate.json',`{"date" : "${timestamp}"}`);  
            }

            //then write tweet to a json file for comparison, the date shouldn't change unless its a new tweet
            //and if its a new tweet, update the json after it gets sent out
            fs.writeFileSync('./src/misc/tweetdate.json',`{"date" : "${timestamp}"}`);
        }

        //starts monitoring and checking for new tweets every minute
        if(message.channel.id === channelid) {
            message.channel.send("I have begun monitoring new tweets");
        } else {
            message.channel.send("Nice, try, but not allowed.");
        }
        var interval = setInterval(function(){
            console.log('ping');
            openSheet();
        }, 60000);
        
    }
}