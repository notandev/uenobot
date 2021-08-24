const { MessageEmbed, Message } = require('discord.js')
const axios = require('axios')

module.exports = {
    name: 'awoo',
    aliases: [],
    category: 'Fun',

    utilisation: '{prefix}awoo',
    async execute(client, message, args) {
      const user = message.mentions.members.first() || message.member;
const avatar = user.user.displayAvatarURL({ dynamic: false, size: 2048 })
        axios.get(`https://nekobot.xyz/api/imagegen?type=awooify&url=${avatar} `)
        .then((res) => {
            const embed = new MessageEmbed()
            .setAuthor('awoo')
            .setImage(res.data.message)
            .setDescription(`AWOO`)
            .setTimestamp()
            .setFooter('awoo')
            .setColor('RANDOM')
            message.channel.send(embed)
console.log()
        })
    }
}
