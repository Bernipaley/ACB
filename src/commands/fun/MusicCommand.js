const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class MusicCommand extends BaseCommand {
  constructor() {
    super('music', 'fun', []);
  }

  run(client, message, args) {
    message.channel.send('music command works');
  }
}