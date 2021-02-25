const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class PingCommand extends BaseCommand {
  constructor() {
    super('ping', 'tool', []);
  }

  run(client, message, args) {
    module.exports = {
      minArgs: 0,
      maxArgs: 0,
      guildOnly: false,
      testOnly: false,
      name: 'ping', 
      category: 'misc',
      description: 'Tests the speed of the bot',
      commands: ['runping'], 
      aliases: ['p'], 
      callback: async ({message, args, text, client, prefix, instance}) => {
          const msg = await message.channel.send('Pinging...');
  
      const latency = msg.createdTimestamp - message.createdTimestamp;
      const choices = ['Is this really my ping?', 'Is this okay? I can\'t look!', 'I hope it isn\'t bad!'];
      const response = choices[Math.floor(Math.random() * choices.length)];
  
      msg.edit(`${response} \`${latency}ms\``);
    }
      }
  }
}