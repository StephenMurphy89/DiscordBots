const Discord = require('discord.js')
const client = new Discord.Client()

// Get your bot's secret token from:
// https://discordapp.com/developers/applications/
// Click on your application -> Bot -> Token -> "Click to Reveal Token"
bot_secret_token = "[secret_token]"

client.login(bot_secret_token)

client.on('message', (receivedMessage) => {
	if (receivedMessage.author == client.user) return
	
	if(receivedMessage.channel.name !== 'music'){
		if((receivedMessage.author.username == 'Rythm' || receivedMessage.author.username == 'Rythm 2')
			&& !receivedMessage.content.includes('Searching'))
		
			receivedMessage.channel.send(varyResponses());
    }    
});

let varyResponses = () => {
	// todo: Actually vary responses
	let responses = ['Hey man, we have a music channel for that...'];
	
	return responses[0];
}


