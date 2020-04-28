const Discord = require('discord.js')
const client = new Discord.Client()

// Get your bot's secret token from:
// https://discordapp.com/developers/applications/
// Click on your application -> Bot -> Token -> "Click to Reveal Token"
bot_secret_token = "NzA0NDc2MDUyNDc4NjIzNzg1.Xqd3Qg.OA467Ph2IUdr3zhihDM1dqW-ZUk"

client.login(bot_secret_token)

client.on('message', (receivedMessage) => {
    var generalChannel = client.channels.cache.get('457989533611458592')
    if (receivedMessage.author == client.user) {
        return
    }
    if(receivedMessage.content.startsWith('!play'))
    	receivedMessage.channel.send("Hey man, we have a music channel for that");
})


