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
    const memberRole = message.guild.roles.cache.get('813034318053507094', '801623868787785738', '801586686516789248', '801586636651626518', '801586503129104454');
    const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    const muteEmbed = new Discord.MessageEmbed()
      .setTitle(`You were muted at ${message.guild.name}`)
      .setDescription(`Reason: ${reason}`)
      .setColor('RANDOM')
      .setTimestamp()
      .setFooter("Aviation Club Bot, Created by Bernardo Paley")
    
 
    if(args[0]) return message.channel.send('🛑\`¿mute @user reason\`🛑 ');
    if(!mentionedMember) return message.channel.send('🛑I dont find the member🛑');
    if(!mentionedMember.user.id == message.author.id) return message.channel.send('🛑You cannot mute yourself🛑')
    if(!mentionedMember.user.id == client.user.id) return message.channel.send('🛑You cannot mute me with my own command 🛑');
    if (!reason) reason = 'No reason given';
    if (!mentionedMember.roles.cache.has(muteRole.id)) return message.channel.id('🛑This member is already muted🛑');
    if (message.member.roles.highest.position <= mentionedMember.roles.highest.position) return message.channel.send('🛑You cannot mute someone with the same role or higher then you.🛑')


    await mentionedMember.send(muteEmbed).catch(err => console.log(err));
    await mentionedMember.roles.add(muteRole.id).catch(err => console.log(err).then(message.channel.send('🛑There was an issue while tring to add the mute role to the member🛑')));
    await mentionedMember.roles.remove(memberRole.id).catch(err => console.log(err).then(message.channel.send('🛑There was an issue while trying to remove the member roles to the user🛑')));
    


  }
} 