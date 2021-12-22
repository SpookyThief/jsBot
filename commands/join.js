const { SlashCommandBuilder } = require('@discordjs/builders');
const { joinVoiceChannel, createAudioPlayer } = require('@discordjs/voice');

module.exports = {
   data: new SlashCommandBuilder().setName('join').setDescription('joins your voice channel'),
   async execute(interaction){
      await interaction.reply(`Joining ${interaction.user} in ${interaction.member.voice.channel}`);
      const connection = joinVoiceChannel({
         channelId: interaction.member.voice.channelId,
         guildId: interaction.guildId,
         adapterCreator: interaction.guild.voiceAdapterCreator,
      });
      const player = createAudioPlayer();
      connection.subscribe(player);

   },
};
