const fs = require('fs');
const { SlashCommandBuilder } = require('@discordjs/builders');
const {sounds} = require('../getSounds.js');

module.exports = {
   data: new SlashCommandBuilder().setName('play')
      .setDescription('Plays specified sound')
      .addStringOption(option => option.setName('sound')
         .setDescription('Specifies sound to play')),
   async execute(interaction){
      const sound = interaction.option.getString('sound');
      interaction.reply('moin');

      if(!sound) return;
      else interaction.reply(sound);
      //const sound = interaction.option.getString('sound');
      //interaction.reply(`Sounds: ${sounds}`);
      //if (!value) return;

   },
};
