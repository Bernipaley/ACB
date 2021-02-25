const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class HelpFinishedCommand extends BaseCommand {
  constructor() {
    super('helpFinished', 'tool', []);
  }

  run(client, message, args) {
    message.channel.send('helpFinished command works');
  }
}