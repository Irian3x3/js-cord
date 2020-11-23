declare module 'javascript-cord' {
    import { Channel, Client, ClientOptions, Collection, DMChannel, Emoji, Guild, GuildChannel, GuildMember, GuildResolvable, Message, MessageAttachment, MessageEmbed, MessageMentions, MessageOptions, MessageAdditions, MessageReaction, PermissionResolvable, PermissionString, ReactionEmoji, Role, Snowflake, StringResolvable, TextChannel, User, UserResolvable, VoiceState, Webhook, MessageEmbedOptions } from 'discord.js';

    export class JSCMessage extends Message {
        // Methods
        public create(content: any): Promise<any>;
        
        // Properties
        public ping: Number;
    }

    export class JSClient extends Client {
        public constructor(options?: JSClientOptions);

        public start(token: String): Promise<void>;
    }

    export interface JSClientOptions {
        owners: Snowflake|Snowflake[]
    }

    export class JSCEmbed extends MessageEmbed {
        public constructor(options?)
    }

    export interface JSCEmbedOptions extends MessageEmbedOptions {
        randomColor?: Boolean,
    }

    export class Command {
        public constructor(options: CommandOptions);

        public run(message: JSCMessage, args: String | String[], client: JSClient): Promise<any>;
    }

    export interface CommandOptions {
        name: String,
        description?: CommandDescription|String,
        aliases?: String[]|String,
        ownerOnly?: Boolean,
        guildOnly?: Boolean,
        nsfw?: Boolean;
    }

    export interface CommandDescription {
        text?: String,
        usage?: String,
        usageExamples?: String|String[];
    }

    export class JSCError extends Error {
        public constructor(...message: any);
        public get name(): string;
    }
}