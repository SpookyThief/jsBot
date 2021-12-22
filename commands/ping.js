const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
   data: new SlashCommandBuilder().setName('ping').setDescription('it\'s obvious'),
   async execute(interaction){
      await interaction.reply('pong');
   },
};
