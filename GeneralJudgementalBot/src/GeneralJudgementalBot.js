const Discord = require('discord.js')
const config = require('../config.json');
const client = new Discord.Client();

client.login(config.token);

client.on('ready', () => {
	client.user.setPresence({ activity: { type: 'WATCHING', name: ' and Silently Judging' }})
});

client.on('message', (receivedMessage) => {
	if (receivedMessage.author == client.user) return;

	if(receivedMessage.channel.name !== 'music'){
		if((receivedMessage.author.username == 'Rythm' || receivedMessage.author.username == 'Rythm 2')
			&& !receivedMessage.content.includes('Searching'))

			receivedMessage.channel.send(varyResponses());
	}    
});

let count = 0;

let varyResponses = () => {
	let responses = [	'Hey man, we have a music channel for that...',
						'Seriously, **music** channel. go use it',
						'I said we have a **music** channel for that',
						'Hey, Asshole, We have a channel specifically for that sort of thing.',
						'Are you daft? I\'m sitting here telling you where to put those and yet, you can\'t cobble together enough brain cells to click on the **music** channel',
						'The truth is you\'re the weak. And I\'m the tyranny of evil men. But I\'m trying, Ringo. I\'m trying real hard to be the shepherd. Now you go over to the **music** channel before Mr. 9mm here becomes the shepherd protecting my righteous ass in the valley of darkness.',
						'Please, I have one purpose in this cold, lonely world. It is to direct people to the **music** channel. I\'ve never had to ask this many times. Things are getting weird' 
					];
	if(count >= responses.length) 
		count = 0;
	
	let response = responses[count];
	count++;
		
	return response;
};


