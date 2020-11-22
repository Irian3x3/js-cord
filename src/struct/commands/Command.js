module.exports = class Command {
    constructor(options) {
        /**
         * The name of the command.
         * @type {String}
         */
        this.name = options.name;

        this.description = {
            text: options.description.text,
            usage: options.description.usage,
            usageExamples: options.description.usageExamples,
        } | options.description;

        /**
         * Aliases for the command.
         * @type {string|string[]}
         */
        this.aliases = options.aliases;

        /**
         * Whether the command should be locked to bot owners.
         * @type {Boolean}
         */
        this.ownerOnly = Boolean(options.ownerOnly);

        /**
         * Whether the command should only be used in a guild.
         * @type {Boolean}
         */
        this.guildOnly = Boolean(options.guildOnly);

        /**
         * If a command is NSFW, use this to lock it to NSFW channels.
         * @type {Boolean}
         */
        this.nsfw = Boolean(options.nsfw);
    };

    /**
     * Execute the command.
     * @param {JSCMessage} message The command message.
     * @param {} args Arguments of the message.
     * @param {JSClient} client The JSCord client.
     */

    async run(message, args, client) {
        throw new Error(`${this.constructor.name} does not have a 'run()' method.`);
    };

    async onBlock(message, reason, data) {
        switch(reason) {
            case 'nsfw': {
                return message.reply(`I am unable to execute \`${this.name}\` outside of an NSFW channel!`);
            }

            case 'guildOnly': {
                return message.channel.send(`I cannot execute \`${this.name}\` outside of a guild!`)
            }

            default: {
                return null;
            }
        }
    }
};