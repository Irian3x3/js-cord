module.exports = class Command {
    async new(options = {}, asyncs) {
        const {
            name,
            description,
            aliases,
            nsfw,
            guildOnly,
            ownerOnly
        } = options;

        /**
         * The name of the command.
         * @type {String}
         */
        this.name = name;

        /**
         * A description of the command.
         * @type {CommandDescription|String}
         */
        this.description = description

        /**
         * Other command names.
         * @type {String|String[]}
         */
        this.aliases = aliases;

        /**
         * Whether the command is NSFW.
         * @type {Boolean}
         */
        this.nsfw = nsfw;

        /**
         * Whether the command can only be used in guilds.
         * @type {Boolean}
         */
        this.guildOnly = guildOnly;

        /**
         * Whether the command can only be used by the bot owner.
         * @type {Boolean}
         */
        this.ownerOnly = ownerOnly;
    };
};