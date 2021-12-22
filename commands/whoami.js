const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
   data: new SlashCommandBuilder().setName('whoami').setDescription('gives info about you'),
   async execute(interaction){
      const usr = interaction.member;
      await usr.fetch();
      await interaction.reply(
         `User: ${interaction.user.tag}
         Server name: ${interaction.guild.name}
         Channel: ${interaction.channel.name}
         Joined Discord on: <t:${Math.floor(interaction.user.createdAt.getTime()/1000)}> 
         Joined server on: <t:${Math.floor(usr.joinedAt.getTime()/1000)}>
         Bannable: ${usr.bannable}
         Kickable: ${usr.kickable}
         Also known as: ${usr.nickname === null ? 'No other Names found' : usr.nickname} 
         Role: ${usr.roles.highest.name}
         ${interaction.user.id === '368796563063177217' ? '***Summary: total Idiot***' :''}`.replace(/\n\s*/g, '\n'))//regex nonesense
   },
};
