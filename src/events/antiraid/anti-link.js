const config = require('../../models/antiraid')

module.exports = {
    name: "messageCreate",
    once: false,
    async execute(client, message) {
        const data = await config.findOne({ Guild: message.guildId })
        if(!data) return

        if(data.Link !== true) return

        if(message.author.bot) return;
            
        if(message.content.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g))) {
            if(message.member.permissions.has("ModerateMembers")) return;
            await message.delete()

            try {await message.member.send(`⚠️ Avertissement :\n> Les liens ne sont pas autorisé dans le serveur **${message.guild.name}**.`)} catch(err) {}
        }
    }
}