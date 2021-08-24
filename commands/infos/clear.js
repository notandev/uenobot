module.exports = {
    name: 'clear',
    aliases: ['c','del','delete'],
    category: 'Infos',
    utilisation: '{prefix}clear',
    description: 'Delete amount of message',
    async execute(client, message, args) {
        if (!args.length) {
            message.delete({timeout: 3000});
            message.channel.send('Please, provide the number!').then(msg => msg.delete({timeout: 3000}));
        } else {
            message.delete();
        message.channel.bulkDelete(args[0]);
        message.channel.send('messages has been terminated!').then(msg => msg.delete({timeout: 3000})).catch((err) => { console.log(err.message) });
        }
    }
}