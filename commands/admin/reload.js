const { config, util } = require("../../index.js");

module.exports.execute = async (client, message, args) => {

    if (!args[0]) return message.reply("⚠️ Specify a command to reload!");
    const cmd = args[0].toLowerCase();
    const res = util.reloadCommand(cmd);

    switch (res) {
        case "Command Loaded": {
            message.reply(`✅ Command \`${cmd}\` reloaded successfully!`);
            break;
        }
        case "Command Not Loaded": {
            message.reply(`⚠️ Command \`${cmd}\` was never loaded! Use \`${config.prefix}load ${cmd}\` to load it!`);
            break;
        }
        case "Unknown Command": {
            message.reply("⚠️ The command provided does not exist!");
            break;
        }
        case "Error": {
            message.reply("⚠️ An unknown an error has occurred when reloding the command!");
            break;
        }
    }

}

module.exports.help = {
    name: "reload",
    aliases: ["rl"]
}