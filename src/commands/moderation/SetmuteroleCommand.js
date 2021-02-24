const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class SetmuteroleCommand extends BaseCommand {
  constructor() {
    super('setmuterole', 'moderation', []);
  }

  run(client, message, args) {
    message.channel.send('setmuterole command works');
  }
}