const { JSCError } = require(`../index`);
const { Client } = require('discord.js');

/**
 * The JSCord client.
 * @param {Options} options Options for the client.
 */

module.exports = class JSClient extends Client {
    constructor(options = {}) {
        super(options);
        const { owners = '' } = options;

        /**
         * Owner(s) of the bot by ID.
         * @type {Snowflake|Snowflake[]}
         */
        this.owners = owners;
    };

    /**
     * Login to the bot.
     * @param {String} token The token of the bot.
     */

    async start(token) {
        await this.login(token);
    };

    get commands() {
        
    }
};