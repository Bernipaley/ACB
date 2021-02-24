const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');


module.exports = class WarnCommand extends BaseCommand {
 constructor() {
   super('warn', 'fun', []);
 }

 async run(client, message, args) {
   const messageToSay = args.join(" ")
   const warnEmbed = new Discord.MessageEmbed()
   .setTitle('warn')
   .setDescription(`${messageToSay}`)
      message.delete();

   try {
     await message.channel.send(warnEmbed);
     
  }  catch(err) {
    console.log(err)
    message.channel.send('I am not able to say that warn');
  }
 }
}
