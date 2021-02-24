const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');


module.exports = class SayCommand extends BaseCommand {
 constructor() {
   super('say', 'fun', []);
 }

 async run(client, message, args) {
   const messageToSay = args.join(" ")
   const warnEmbed = new Discord.MessageEmbed()
   .setTitle('warn')
   .setDescription(`${messageToSay}`)
      message.delete();

   try {
     await message.channel.send(sayEmbed);
     
  }  catch(err) {
    console.log(err)
    message.channel.send('I am not able to say that warn');
  }
 }
}
