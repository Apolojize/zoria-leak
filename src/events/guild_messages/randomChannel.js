const Logger = require('../../utils/Logger')
const { EmbedBuilder, ChannelType, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')

module.exports = {
    name: "guildCreate",
    once: false,
    async execute(client, guild) {
        const { members, channels } = guild;

        let channelToSend

        channels.cache.forEach(channel => {
            if(channel.type === ChannelType.GuildText && !channelToSend && channel.permissionsFor(members.me).has("SendMessages")) channelToSend = channel;
        })

        if(!channelToSend) return;

        const embed = new EmbedBuilder()
            .setColor(client.color)
            .setAuthor({ name: `Merci de m'avoir ajouté !`, iconURL: `${client.user.displayAvatarURL()}`})
            .setDescription(`Salut ! Je suis ${client.user.username} ! Merci de m'avoir invité dans ce serveur ! Je sert à ajouter des protections, du divertissement et de la modération !`)
            .setTimestamp()
            .setThumbnail(`${client.user.displayAvatarURL()}`)


        const buttons = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setStyle(ButtonStyle.Link)
                .setURL("https://discord.com/oauth2/authorize?client_id=1051512649810194472&permissions=8&scope=bot%20applications.commands")
                .setLabel("Inviter Protect")
                .setEmoji("📚"),

            new ButtonBuilder()
                .setStyle(ButtonStyle.Link)
                .setURL("https://soon.com/")
                .setLabel("Soon...")
                .setEmoji("💻"),

            new ButtonBuilder()
                .setStyle(ButtonStyle.Link)
                .setURL("https://discord.gg/")
                .setLabel("Serveur support")
                .setEmoji("👮")
        )

        channelToSend.send({ embeds: [embed], components: [buttons] })
    }
}