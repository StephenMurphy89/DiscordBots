const Discord = require('discord.js')
const client = new Discord.Client()

// Get your bot's secret token from:
// https://discordapp.com/developers/applications/
// Click on your application -> Bot -> Token -> "Click to Reveal Token"
bot_secret_token = "[secret_token]"

client.login(bot_secret_token)

client.on('message', (receivedMessage) => {
    var generalChannel = client.channels.cache.get('[client_channel]')
    if (receivedMessage.author == client.user) {
        return
    }
    if(receivedMessage.content.startsWith('!play'))
    	receivedMessage.channel.send("Hey man, we have a music channel for that");
})


