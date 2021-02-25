const BaseCommand = require('../../utils/structures/BaseCommand');
const discord = require('discord.js')

module.exports = class UnmuteCommand extends BaseCommand {
  constructor() {
    super('unmute', 'moderation', []);
  }

  async run(client, message, args) {
    const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class MuteCommand extends BaseCommand {
  constructor() {
    super('mute', 'moderation', []);
  }

  async run(client, message, args) {
    if (!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send('🛑YOU DONT HAVE PERMISSION TO USE THIS COMMAND🛑');
    if (!message.guild.me.hasPermission("MUTE_MEMBERS")) return message.channel.send('🛑YOU DONT HAVE PERMISSION TO USE THIS COMMAND🛑');
    let reason = args.slice(1).join(" ");
    const muteRole = message.guild.roles.cache.get('814105079845879838');
    const memberRole = message.guild.roles.cache.get('801623868787785738');
    const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    const unmuteEmbed = new Discord.MessageEmbed()
      .setTitle(`You were unmuted at ${message.guild.name}`)
      .setDescription(`Reason: ${reason}`)
      .setColor('RANDOM')
      .setTimestamp()
      .setFooter("Aviation Club Bot, Created by Bernardo Paley")
    const sEmbed = new Discord.MessageEmbed()
      .setTitle('Member muted');


    if (!args[0]) return message.channel.send('🛑\`¿unmute @user reason\`🛑 ');
    if (!mentionedMember) return message.channel.send('🛑I dont find the member🛑');
    if (!mentionedMember.user.id == message.author.id) return message.channel.send('🛑You cannot inmute yourself🛑')
    if (!mentionedMember.user.id == client.user.id) return message.channel.send('🛑You cannot unmute me with my own command 🛑');
    if (!reason) reason = 'No reason given';
    if (mentionedMember.roles.cache.has(muteRole)) return message.channel.send('🛑This member is already unmuted🛑');
    if (message.member.roles.highest.postition <= mentionedMember.roles.highest.postition) return message.channel.send('🛑You cannot unmute someone with the same role or higher then you.🛑')


    await mentionedMember.send(unmuteEmbed).catch(err => console.log(err));
    await mentionedMember.roles.add(memberRole).catch(err => console.log(err).then(message.channel.send('🛑There was an issue while tring to add the member role to the member🛑')));
    await mentionedMember.roles.remove(muteRole).catch(err => console.log(err).then(message.channel.send('🛑There was an issue while trying to remove the muted roles to the user🛑')));



  }
} 
  }
}