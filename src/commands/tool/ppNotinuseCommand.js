const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class ppCommand extends BaseCommand {
  constructor() {
    super('pp', 'tool', []);
  }

  async run(client, message, args) {
     if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send ("🛑 I DONT HAVE MANAGE ROLES PERMISSION 🛑");

     const role = message.guild.roles.cache.get('801586636651626518');  message.channel.send ("Private pilot role added")

     await message.member.roles.add(role.id).catch(err => console.log(err));
  }
}