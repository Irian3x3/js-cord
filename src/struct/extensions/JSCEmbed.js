const { MessageEmbed } = require('discord.js');

/**
* JSCord's embed class.
*/

module.exports = class JSCEmbed extends MessageEmbed {
    constructor(JSCEmbedOptions = {}) {
        super(JSCEmbedOptions);

        if (JSCEmbedOptions.randomColor) {
            this.setColor('RANDOM');
        };
    };
};