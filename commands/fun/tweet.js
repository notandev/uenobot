const axios = require('axios')
const { MessageEmbed, Message } = require('discord.js')

module.exports = {
    name: 'tweet',
    aliases: [],
    category: 'Fun',

    utilisation: '{prefix}tweet',
    async execute(client, message, args) {
        axios.get(`https://nekobot.xyz/api/imagegen?type=tweet&username=${message.author.username}&text=${args.join(" ")} `)
        .then(res=> {
          const embed = new MessageEmbed()
            .setImage(res.data.message)
            .setTimestamp()
            .setColor('RANDOM')
            message.channel.send(embed)
})
        
       
    }
}