const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class modcommandsCommand extends BaseCommand {
  constructor() {
    super('modcommands', 'various', []);
  }

  run(client, message, args) {
    const rulesEmbed = new Discord.MessageEmbed()
    .setTitle("Moderation commands")
    .addField('N-1','¿ban')
    .addField('how to use it?','Simple! \`¿ban @user reason (//why you do want to ban this member//)\` the member will receive a DM with the info of his/her ban')
    .addField('N-2','¿tempban')
    .addField('how to use it?','Simple! \` ¿tempban @user because he didnt behave with the server 30m\` //the member will receive a DM with the info of his/her tempban')
    .addField('N-3','¿kick')
    .addField('how to use it?',' \`¿kick @user reason (//why you do want to kick this member//)\`the member will receive a DM with the info of his/her kick')
    .addField('N-4','¿lock')
    .addField('how to use it?',' \`¿lock\` (you have to put that, in the channel you want to lock. For exaple i go to <#801648069564825640> and i put ¿lock when you send that nobody will be able to write at that channel')
    .addField('N-5','¿unlock')
    .addField('how to use it?',' \`¿unlock\` (you have to put that, in the channel you want to unlock. For exaple i go to <#801648069564825640> and i put ¿unlock when you send that everyone will be able to write at that channel')
    .addField('N-6','¿nickname')
    .addField('how to use it?',' \`¿nickname @user new nickname\` If someone have an offensive nickname, you must change it to another one')
    .addField('N-7','¿purge')
    .addField('how to use it?',' \`¿purge 1-100 (messages do you want to delete)\` If someone spam, you must use this command and use tempban it for 24hs as the rules say')
    .setTimestamp();
    message.delete()
    message.channel.send(rulesEmbed);
  }
}