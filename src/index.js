
const { Client } = require('discord.js');
const { registerCommands, registerEvents } = require('./utils/registry');
const config = require('../slappey.json');
const client = new Client();
const zeew = require("zeew");


(async () => {
  client.commands = new Map();
  client.events = new Map();
  client.prefix = config.prefix;
  await registerCommands(client, '../commands');
  await registerEvents(client, '../events');
  await client.login(config.token);
  
})();
client.on("guildMemberAdd", member => {
  client.channels.resolve("813425008068001810").send(`Holly Molly! How is there? Its ${member.displayName}. Enjoy your stay and remember to visit the <#801587064712855562>!`)
});

client.on("guildMemberRemove", member => {
  client.channels.resolve("812699696195043378").send(`Too bad you have to go ${member.displayName} hope you enjoy your stay at the server :((`)
})
