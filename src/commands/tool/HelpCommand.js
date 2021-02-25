const BaseCommand = require('../../utils/structures/BaseCommand');
const discord = require('discord.js')

module.exports = class HelpCommand extends BaseCommand {
  constructor() {
    super('help', 'tool', []);
  }
  async run(client, message, args) {
    const helpEmbed = new discord.MessageEmbed()
    .setTitle('Got it')
    .setDescription('please send your problem to <#813099806649221200>')
    .setFooter('Aviation Club Bot, created by Bernardo Paley.')
     if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send ("🛑 I DONT HAVE MANAGE ROLES PERMISSION 🛑");

     const role = message.guild.roles.cache.get('814552414065393704');  message.channel.send (helpEmbed)

     await message.member.roles.add(role.id).catch(err => console.log(err));
  }
}