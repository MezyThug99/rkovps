const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "1";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});

client.on('ready', async() => {
var server = "506750722151415808"; // ايدي السررفر
var channel = "514882597248172033";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**rko , rko , rko , rko , rko , rko , rko , rko , rko , rko , rko , rko , rko , rko , rko , rko , rko , rko , **')
    },305);
})

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

 
client.login(process.env.'NTE0ODQ3MjE0NDgxMTc4NjQ1.DtgIZg.FJDny9xy6Zku_yM2T4NpXKMK2TY');
