const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb'); //Definimos db
module.exports.run = async (bot, message, args) => {
//Si el usuario está guardado en la blacklist manda esto

  let db_muterole = new db.crearDB("canal_rolemute"); //obtenemos la db
        
          let permiso = message.member.hasPermission("ADMINISTRATOR"); //DEFINIMOS QUE NECESITA PERMISOS
          if(!permiso) return message.reply('no tienes perms.');
        
          let role = message.mentions.roles.first(); //DEFINIMOS QUE TIENE QUE MENCIONAR UN ROLE
          if (!role) return message.channel.send("menciona un role");
        
          db_muterole.establecer(`${message.guild.id}`, `${role.id}`); //Aquí estableceremos el role mute al servidor
          message.channel.send({ //CREAMOS UN EMBED
            embed: {
              color: "00f00f",
              title: "Mute Role Updated.",
              description: `Role: <@&${role.id}>`
            }
          });
        }//CERRAMOS