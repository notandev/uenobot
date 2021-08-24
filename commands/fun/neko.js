const { MessageEmbed, Message } = require('discord.js')
const axios = require('axios')

module.exports = {
    name: 'neko',
    aliases: ['cat'],
    category: 'Fun',

    utilisation: '{prefix}neko',
    async execute(client, message, args) {
        axios.get('https://nekos.life/api/v2/img/neko')
        .then((res) => {
            const embed = new MessageEmbed()
            .setAuthor('Neko')
            .setImage(res.data.url)
            .setDescription(`your Random Neko :3`)
            .setTimestamp()
            .setFooter('Random Neko')
            .setColor('RANDOM')
            message.channel.send(embed)
        })
    }
}