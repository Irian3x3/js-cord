const { Message, Structures } = require('discord.js');

module.exports = Structures.extend("Message", Message => {
    /**
     * JSCord message class.
     * Nothing too special.
     */
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
	
	return JSCMessage;
});