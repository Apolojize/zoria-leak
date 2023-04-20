const DB = require('../../models/logsModel')
const { EmbedBuilder } = require('discord.js')

module.exports = {
    name: "emojiDelete",
    once: false,
    async execute(client, emoji) {
        const { guild, id } = emoji

        const data = await DB.findOne({ Guild: guild.id }).catch(err => { })

        if(!data) return;
        const logsChannel = await guild.channels.cache.get(data.channelId)
        if(!logsChannel) return

        return logsChannel.send({
            embeds: [
                new EmbedBuilder()
                    .setColor(client.color)
                    .setTitle("⚙️ | Emoji supprimer")
                    .setAuthor({ name: `Protect'Logs`, iconURL: `${client.user.displayAvatarURL()}` })
                    .setDescription(`Un emoji vient d'être supprimer, voici ses informations :\n\n> **Emoji :** ${emoji} \`${emoji.name} - ${id}\``)
                    .setFooter({
                        text: client.footer,
                        iconURL: client.user.displayAvatarURL({dynamic: true})
                    })
                ]
        })
    }
};