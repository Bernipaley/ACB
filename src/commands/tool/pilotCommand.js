const BaseCommand = require('../../utils/structures/BaseCommand');
const discord = require('discord.js');

module.exports = class pilotCommand extends BaseCommand {
  constructor() {
    super('pilot', 'tool', []);
  }

  async run(client, message, args) {
    const pilotEmbed = new discord.MessageEmbed()
    .setTitle("Pilot Role Added!");
     if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send ("🛑 I DONT HAVE MANAGE ROLES PERMISSION 🛑");

     const role = message.guild.roles.cache.get('801623868787785738');  message.channel.send (pilotEmbed)

     await message.member.roles.add(role.id).catch(err => console.log(err));
  }
}