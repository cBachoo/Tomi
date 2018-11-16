module.exports = {
    name: 'countdown',
    execute(message, Discord, client) {
        var countdownDate = new Date("Dec 31, 2018 12:00:00").getTime();

        var now = new Date().getTime();

        var distance = countdownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));


        var embed = new Discord.RichEmbed()
            .setTitle("Countdown to the Wizard of Legend DLC")
            .setColor("99cff")
            .setFooter("Tomi developed and maintained by Bachoo#0001")
            .setDescription("\n" + days + "d " + hours + "h " + minutes + "m ")
            .setThumbnail(client.user.displayAvatarURL);

        message.channel.send("NOTICE -- It's set to Jan 1st because there is **NO CONFIRMED** date of the dlc yet.")
        message.channel.send(embed);
    }
}