const BaseEvent = require('../../utils/structures/BaseEvent');

module.exports = class ReadyEvent extends BaseEvent {
  constructor() {
    super('ready');
  }
  async run (client) {
    console.log(`${client.user.tag} has logged in. Also im ready!, in ${client.guilds.cache.size} servers | and i help  ${client.users.cache.size} Users`);
    client.user.setPresence({
      activity: {
        name: 'X-Plane 11',
        type: "PLAYING"
        
      },
      status: 'online'
    })
    .catch(console.error);
  }
}