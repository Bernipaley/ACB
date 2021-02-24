const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class apCommand extends BaseCommand {
  constructor() {
    super('ap', 'tool', []);
  }

  async run(client, message, args) {
     if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send ("🛑 I DONT HAVE MANAGE ROLES PERMISSION 🛑");

     const role = message.guild.roles.cache.get('801586686516789248');  message.channel.send ("Aspiring pilot role added")

     await message.member.roles.add(role.id).catch(err => console.log(err));
  }
}