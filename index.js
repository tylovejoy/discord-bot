const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS]});

client.once('ready', () => {
	console.log('Ready!');
});


client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'submitmap') {
		const code = interaction.options.getString('code');
		const map = interaction.options.getString('map');
		const maptype = interaction.options.getString('maptype');
		const creator = interaction.options.getString('creator');
		const description = interaction.options.getString('description');
		await interaction.reply({ content: `Code: ${code}, Map: ${map}, Maptype: ${maptype}, Creator: ${creator}, Description: ${description}`, ephemeral: true });
	}
});

client.login(token);