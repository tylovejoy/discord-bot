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
				.setName('map_name_1')
				.setDescription('Name of the map (1 of 2)')
				.setRequired(false)
				.addChoice('Ayutthaya', 'ayutthaya')
				.addChoice('Black Forest', 'blackforest')
				.addChoice('Blizzard Wworld', 'blizzardworld')
				.addChoice('Busan', 'busan')
				.addChoice('Chateau Guillard', 'chateauguillard')
				.addChoice('Dorado', 'dorado')
				.addChoice('Ecopoint: Antarctica', 'ecopointantarctica')
				.addChoice('Eichenwalde', 'eichenwalde')
				.addChoice('Hanamura', 'hanamura')
				.addChoice('Havana', 'havana')
				.addChoice('Hollywood', 'hollywood')
				.addChoice('Horizon Lunar Colony', 'horizonlunarcolony')
				.addChoice('Ilios', 'ilios')
				.addChoice('Junkertown', 'junkertown')
				.addChoice('Kanezaka', 'kanezaka')
				.addChoice('King\'s Row', 'kingsrow')
				.addChoice('Lijiang Tower', 'lijiangtower')
				.addChoice('Malevento', 'malevento')
				.addChoice('Necropolis', 'necropolis')
				.addChoice('Nepal', 'nepal')
				.addChoice('Numbani', 'numbani')
				.addChoice('Oasis', 'oasis')
				.addChoice('Paris', 'paris')
				.addChoice('Petra', 'petra')
				.addChoice('Practice Range', 'practicerange'))
		.addStringOption(option =>
			option
				.setName('map_name_2')
				.setDescription('Name of the map (2 of 2)')
				.setRequired(false)
				.addChoice('Rialto', 'rialto')
				.addChoice('Route 66', 'route66')
				.addChoice('Temple of Anubis', 'templeofanubis')
				.addChoice('Volskaya Industries', 'volskayaindustries')
				.addChoice('Watchpoint Gibraltar', 'watchpointgibraltar')
				.addChoice('Workshop Chamber', 'workshopchamber')
				.addChoice('Workshop Expanse', 'workshopexpanse')
				.addChoice('Workshop Greenscreen', 'workshopgreenscreen')
				.addChoice('Workshop Island', 'workshopisland')
				.addChoice('Framework', 'framework')),
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