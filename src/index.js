
const { Client } = require('discord.js');
const { registerCommands, registerEvents } = require('./utils/registry');
const config = require('../slappey.json');
const client = new Client();

(async () => {
  client.commands = new Map();
  client.events = new Map();
  client.prefix = config.prefix;
  await registerCommands(client, '../commands');
  await registerEvents(client, '../events');
  await client.login(config.token);
  /////////////////////////ZEEW//////////////////////////////////
  
})();
client.on("guildMemberAdd", async member => {
  let wel = new Zeew.Bienvenida()
  .token("60304d278e9410cb62c5eb11")
  .estilo("classic")
  .avatar(member.user.displayAvatarURL({format: 'png'}))
  .fondo("https://i.ibb.co/5BwMy7w/FOTO-BANNER-1024-X450.jpg")
  .colorTit("#B32020")
  .titulo("Welcome" +member.user.tag)
  .colorDesc("#B32020")
  .descripcion("Now we are "+member.guild.memberCount+ "At the server!");

  let img = await Zeew.WelcomeZeew(wel);
  let attachment = new MessageAttachment(img, "FOTO BIENVENIDA ZEEW.gif");
  client.channels.resolve("812699579954757672").send(attachment);
});

client.on("guildMemberRemove", async member => {
  let wel = new Zeew.Bienvenida()
  .token("60304d278e9410cb62c5eb11")
  .estilo("classic")
  .avatar(member.user.displayAvatarURL({format: 'png'}))
  .fondo("https://i.ibb.co/5BwMy7w/FOTO-BANNER-1024-X450.jpg")
  .colorTit("#B32020")
  .titulo("We are going to miss you, ")
  .colorDesc("#B32020")
  .descripcion("+member.displayName+")

  let img = await Zeew.WelcomeZeew(wel);
  let attachment = new MessageAttachment(img, "zeewapi-img.gif");
  client.channels.resolve("812699696195043378").send(attachment)
})

