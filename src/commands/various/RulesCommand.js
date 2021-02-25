const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class RulesCommand extends BaseCommand {
  constructor() {
    super('rules', 'various', []);
  }

  run(client, message, args) {
    const rulesEmbed = new Discord.MessageEmbed()
    .setTitle("Rules")
    .addField("Rule 1","✅ Be respectful with everybody")
    .addField("Rule 2","✅ Be gentle with all members")
    .addField("Rule 3","✅ If something is going wrong with the Aviation Club Bot, please notify to a mod")
    .addField("Rule 4","✅ please notify the moderators if there is a problem.")
    .addField("Rule 5","✅ Use each channel for its respective theme")
    .addField("Rule 6","🚫Sharing content very out of place to what the group refers to(Mute for 6 hours)")
    .addField("Rule 7","🚫Insulting, attacking or carrying out any type of badly hurtful action towards any member of the server(Kick from the server")
    .addField("Rule 8","🚫Perform any SPAM class(Tempmute for 30 minutes)")
    .addField("Rule 9","🚫Abuse your role")
    .addField("///////////////VERIFICATION///////////////////////", "Send ¿pilot to <#812398101049770054>")
    .setFooter("Aviation Club Bot, Created by Bernardo Paley")
    .setTimestamp();
    message.delete()
    message.channel.send(rulesEmbed);
  }
}