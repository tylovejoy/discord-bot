const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');

const commands = [
	new SlashCommandBuilder()
		.setName('submitmap')
		.setDescription('Submit maps!')
		.addStringOption(option =>
			option
				.setName('code')
				.setDescription('Workshop share code.')
				.setRequired(true))
		.addStringOption(option =>
			option
				.setName('map')
				.setDescription('Name of the map.')
				.setRequired(true))
		.addStringOption(option =>
			option
				.setName('maptype')
				.setDescription('Type(s) of the map.')
				.setRequired(true))
		.addStringOption(option =>
			option
				.setName('creator')
				.setDescription('Creator(s) of the map.')
				.setRequired(true))
		.addStringOption(option =>
			option
				.setName('description')
				.setDescription('Description of the map.')
				.setRequired(false)),
].map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
	try {
		await rest.put(
			Routes.applicationGuildCommands(clientId, guildId),
			{ body: commands },
		);

		console.log('Successfully registered application commands.');
	}
	catch (error) {
		console.error(error);
	}
})();