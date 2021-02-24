const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class PilotCommand extends BaseCommand {
  constructor() {
    super('pilot', 'tool', []);
  }

  async run(client, message, args) {
     if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send ("🛑 I DONT HAVE MANAGE ROLES PERMISSION 🛑");

     const role = message.guild.roles.cache.get('801623868787785738');  message.channel.send ("Pilot role added")

     await message.member.roles.add(role.id).catch(err => console.log(err));
  }
}