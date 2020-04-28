const Discord = require('discord.js')
const config = require('./config.json');
const client = new Discord.Client()

client.login(config.token)

client.on('ready', () => {
    client.user.setPresence({ activity: { type: 'WATCHING', name: ' and Silently Judging' }})
});

client.on('message', (receivedMessage) => {
	if (receivedMessage.author == client.user) return;
	
	if(receivedMessage.channel.name !== 'music'){
		if((receivedMessage.author.username == 'Rythm' || receivedMessage.author.username == 'Rythm 2')
			&& !receivedMessage.content.includes('Searching'))
		
			receivedMessage.channel.send(varyResponses());
    };    
});

let varyResponses = () => {
	// todo: Actually vary responses
	let responses = ['Hey man, we have a music channel for that...'];
	
	return responses[0];
};


