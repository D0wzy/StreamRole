const { Client } = require('discord.js');
const logs = require('discord-logs');
const client = new Client();
logs(client);

const config = {
    guildID: "Guild ID",
    roleID: "Role ID"
};

client.on("ready", () => {
    console.log(`${client.user.tag} is ready !`);
});

client.on("voiceStreamingStart", (member, voiceChannel) => {
    if (member.guild.id !== config.guildID) return;
    member.roles.add(config.roleID);
});

client.on("voiceStreamingStop", (member, voiceChannel) => {
    if (member.guild.id !== config.guildID) return;
    member.roles.remove(config.roleID);
});

client.login("token")
