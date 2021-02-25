const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class HelpFinishedCommand extends BaseCommand {
  constructor() {
    super('helpFinished', 'tool', []);
  }

  async run(client, message, args) {
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send('🛑YOU DONT HAVE PERMISSION TO USE THIS COMMAND🛑');
    if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send('🛑YOU DONT HAVE PERMISSION TO USE THIS COMMAND🛑');
    let reason = args.slice(1).join(" ");
    const helpRole = message.guild.roles.cache.get('814552414065393704');
    const memberRole = message.guild.roles.cache.get('801623868787785738');
    const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    const helpfinishedEmbed = new Discord.MessageEmbed()
      .setTitle(`HELP FINISHED AT  ${message.guild.name}`)
      .setDescription(`Reason: ${reason}`)
      .setColor('RANDOM')
      .setTimestamp()
      .setFooter("Aviation Club Bot, Created by Bernardo Paley");


    if (!args[0]) return message.channel.send('🛑\`¿unhelp @user reason\`🛑 ');
    if (!mentionedMember) return message.channel.send('🛑I dont find the member🛑');
    if (!mentionedMember.user.id == message.author.id) return message.channel.send('🛑You cannot unhelp yourself🛑')
    if (!mentionedMember.user.id == client.user.id) return message.channel.send('🛑You cannot unhelp me with my own command 🛑');
    if (!reason) reason = 'No reason given';
    if (mentionedMember.roles.cache.has(helpRole)) return message.channel.send('🛑This member, has already finished her/his help🛑');
    if (message.member.roles.highest.postition <= mentionedMember.roles.highest.postition) return message.channel.send('🛑You cannot unhelp someone with the same role or higher then you.🛑')


    await mentionedMember.send(helpfinishedEmbed).catch(err => console.log(err));
    await mentionedMember.roles.remove(helpRole).catch(err => console.log(err).then(message.channel.send('🛑There was an issue while tring to unhelp role to the member🛑')));
    }
} 