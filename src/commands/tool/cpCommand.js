const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class cpCommand extends BaseCommand {
  constructor() {
    super('cp', 'tool', []);
  }

  async run(client, message, args) {
     if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send ("🛑 I DONT HAVE MANAGE ROLES PERMISSION 🛑");

     const role = message.guild.roles.cache.get('801586503129104454');  message.channel.send ("Private pilot role added")

     await message.member.roles.add(role.id).catch(err => console.log(err));
  }
}