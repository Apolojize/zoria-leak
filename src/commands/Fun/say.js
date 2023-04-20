const { ApplicationCommandOptionType, PermissionsBitField } = require('discord.js');
const { Success } = require('../../utils/Success')
const { Error } = require('../../utils/Error')

const notAuthorized = ["@everyone", "@here"]

module.exports = {
    name: "say",
    permissions: ["UseApplicationCommands"],
    usage: "/say `[texte: texte]`",
    example: "/say `[texte: Bonjour !]`",
    category: "🥳 Fun",
    description: "Permet de dire un texte que vous souhaitez !",
    options: [
        {
            name: "texte",
            description: "Texte",
            type: ApplicationCommandOptionType.String,
            required: true
        }
    ],
    async execute(client, interaction) {
        saytext = interaction.options.getString("texte")

        if(notAuthorized.includes(saytext)) return Error(interaction, "Je ne ping pas `@everyone`ou `@here` !")

        Success(interaction, "Message envoyé !")

        interaction.channel.send(`${saytext} - **${interaction.user.tag}**`)
    }
}