const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args, prefix) => {

  message.delete().then(() => {
    let help = new Discord.RichEmbed()
            .addField("**PLANETRIX™** | **Help**", "8ball \n" +
                               "avatar \n" +
                               "help \n" +
                               "love \n" +
                               "server \n" +
                               "userinfo \n" +
                               "                                                                            ", true)

            .setColor("0x#FF0000")

    message.channel.send(help)

  })
}

module.exports.help = {
    name: "help"
}
