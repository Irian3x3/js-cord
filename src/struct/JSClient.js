const { JSCError, Command } = require(`../index`);
const { Client } = require('discord.js');
const fetcher = require("node-fetch");

/**
 * The JSCord client.
 * @param {ClientOptions} options Options for the client.
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
            try {
                await this.login(token);
            } catch (error) {
                if (error.message === 'An invalid token was provided.') {
                    throw new JSCError("The provided token is invalid.");
                };
            };
    };

    /*get commands() {
        
    };*/

    async getApi(url) {
        if (!url) { 
            throw new JSCError("A URL was not provided.");
        };

        const res = await fetcher(`${url}`);
        const json = await res.json();
        return json;
    };
};