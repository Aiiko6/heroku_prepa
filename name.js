const discord = require('discord.js');
const client = new discord.Client();



client.on("ready", () => {
  var servers = client.guilds.array().map(g => g.name).join(',');
  console.log("--------------------------------------");
  console.log('[!]Connexion en cours... \n[!]Veuillez Patienté! \n[!]Les évenement sont après ! :)  \n[!]Les préfix actuelle:  ' + prefix + "\n[!]Mentions = " + mention);
  client.user.setGame("#test", "http://twitch.tv/highwaytraffic"); //Joue à ...
});

client.on('message', message =>{
  if(message.content.startsWith('#test'){
      message.reply('yes');
     }
});

//identification
var dt = process.env.DISCORD_TOKEN || process.argv[2];

if (!dt) {
    console.log('votretoken');
}

client.login(dt);
