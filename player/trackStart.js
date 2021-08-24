module.exports = (client, message, track) => {
    message.channel.send(`${client.emotes.music} - Now playing ${track.title} into ${message.member.voice.channel.name} ...`).then(msg => msg.delete({timeout: 3000})).catch((err) => { console.log(err.message) });
};