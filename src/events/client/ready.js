const Logger = require('../../utils/Logger')
const { ActivityType } = require("discord.js");


module.exports = {
    name: "ready",
    once: true,
    async execute(client) {
        Logger.client("Bot initialiser et prêt a être utilisé ! (" + client.user.tag + ")");
        let guildsCount = await client.guilds.fetch();
        let usersCount = client.guilds.cache.reduce((a, g) => a + g.memberCount, 0);
        Logger.client(`Connecté dans ${guildsCount.size} serveurs et prêt à être utiliser par ${usersCount} utilisateurs`)
       

        client.user.setActivity("Protect V3 by karma", {
            type: ActivityType.Streaming,
            url : "https://twitch.tv/ "
          });
        client.application.commands.set(client.commands.map(cmd => cmd));
        Logger.client("Commande deployé avec succès dans l'API de discord !")

        
        


    


    }
}