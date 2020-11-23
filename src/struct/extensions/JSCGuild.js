const { Structures } = require('discord.js');

module.exports = Structures.extend("Guild", Guild => {
    /**
     * JSCord's guild class with easy utilities.
     */

    class JSCGuild extends Guild {

        /**
         * Creates a role.
         * @param {JSRoleOptions} options Options for the role.
         */
        createRole(options = {}) {
            return this.roles.create({
                data: {
                    name: options.name,
                    color: options.color,
                    mentionable: options.mention,
                    permissions: options.permissions,
                    hoist: options.hoisted,
                    position: options.position
                }
            });
        };

        /**
         * Returns a link for an embed with online members.
         */
        get embedOnlineMembers() {
            return `https://img.shields.io/discord/${this.id}?color=7289da&logo=discord&logoColor=white`
        };

        /**
         * Returns a better-looking region.
         */
        get betterRegion() {
            let reg;
            if (this.region === "russia") {
                reg = 'Russia'
            } else if (this.region === 'hongkong') {
                reg = "Hong Kong"
            } else if (this.region === "brazil") {
                reg = 'Brazil'
            } else if (this.region === "europe") {
                reg = 'Europe'
            } else if (this.region === "sydney") {
                reg = 'Sydney'
            } else if (this.region === "southafrica") {
                reg = 'South Africa'
            } else if (this.region === "singapore") {
                reg = "Singapore"
            } else if (this.region === "us-south") {
                reg = "US South"
            } else if (this.region === "us-central") {
                reg = 'US Central'
            } else if (this.region === "us-west") {
                reg = 'US West'
            } else if (this.region === "us-east") {
                reg = 'US East'
            } else if (this.region === "india") {
                reg = "India"
            } else if (this.region === "japan") {
                reg = 'Japan'
            };

            return reg;
        };
    };

    return JSCGuild;
});