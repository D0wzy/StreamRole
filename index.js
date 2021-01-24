const { Client } = require('discord.js');
const logs = require('discord-logs');
const client = new Client();
logs(client);

const config = {
    guildID: "",
    roleID: ""
};

client.on("voiceStreamingStart", (member, voiceChannel) => {
    if (member.guild.id !== config.guildID) return;
    member.roles.add(config.roleID);
});

client.on("voiceStreamingStop", (member, voiceChannel) => {
    if (member.guild.id !== config.guildID) return;
    member.roles.remove(config.roleID);
});

client.login("token")