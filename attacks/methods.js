const Discord = require("discord.js");


exports.run = async (client, message, args) => {
const config = require('../config.json');
var room = config.commandroom;
var secondary_room = config.secondary_commandroom;
	if (message.channel.id != room && message.channel.id != secondary_room) {
		return;
	}
	message.reply("```PHƯƠNG PHÁP TẤN CÔNG:\n\nJoin (1.8.X - 1.20.X)\nMotd (1.8.X - 1.20.X\nJoinMotd (1.8.X - 1.20.X)\nNullPing (1.8.X - 1.20.X)\nRandom (1.8.X - 1.20.X)\nBypass (1.8.X - 1.20.X)\nName (1.8.X - 1.20.X)\nBotJoiner (1.8.X - 1.20.X)```");
}

exports.conf = {
  aliases: []
};

exports.help = {
  name: "methods"
};