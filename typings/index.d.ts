declare module 'js-cord' {
    import { Channel, Client, ClientOptions, Collection, DMChannel, Emoji, Guild, GuildChannel, GuildMember, GuildResolvable, Message, MessageAttachment, MessageEmbed, MessageMentions, MessageOptions, MessageAdditions, MessageReaction, PermissionResolvable, PermissionString, ReactionEmoji, Role, Snowflake, StringResolvable, TextChannel, User, UserResolvable, VoiceState, Webhook } from 'discord.js';

    export class JSCMessage extends Message {
        // Methods
        public create(content: any): Promise<void>;
        
        // Properties
        public ping: Number;
    }

    export class JSClient extends Client {
        public constructor(options?);

        public start(token: String): Promise<void>;
    }

    export interface JSClientOptions {
        owners: Snowflake|Snowflake[]
        
    }

    export class Command {
        public constructor(options: CommandOptions);

        public run(message: JSCMessage, args: String | String[]): Promise<any>;
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
}