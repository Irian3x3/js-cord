const { Message, Structures } = require('discord.js');

/**
 * JSCord message class.
 * Nothing too special.
 */

module.exports = Structures.extend("Message", Message => {
    class JSCMessage extends Message {
        /**
         * Creates/sends a message
         * @param {any} content 
         */
        async create(content) {
            this.channel.send(content)
        };
    
        ping = Date.now() - this.createdTimestamp;
    };
});