declare module 'javascript-cord' {
    import { Channel, Client, ClientOptions, Collection, DMChannel, Emoji, Guild, GuildChannel, GuildMember, GuildResolvable, Message, MessageAttachment, MessageEmbed, MessageMentions, MessageOptions, MessageAdditions, MessageReaction, PermissionResolvable, PermissionString, ReactionEmoji, Role, Snowflake, StringResolvable, TextChannel, User, UserResolvable, VoiceState, Webhook, MessageEmbedOptions, ColorResolvable } from 'discord.js';

    export class JSCMessage extends Message {
        // Methods
        public create(content: any): Promise<any>;
        
        // Properties
        public ping: Number;
    }

    export class JSClient extends Client {
        public constructor(options?: JSClientOptions);

        public start(token: String): Promise<void>;
        //public get commands()

        public getApi(url: String): Promise<any>;


        // Events
        public on(event: 'message', listener: (message: JSCMessage) => void): this;
        public on(event: 'channelCreate', listener: (channel: Channel) => void): this;
		public on(event: 'channelDelete', listener: (channel: Channel) => void): this;
		public on(event: 'channelPinsUpdate', listener: (channel: Channel, time: Date) => void): this;
		public on(event: 'channelUpdate', listener: (oldChannel: Channel, newChannel: Channel) => void): this;
		public on(event: 'debug', listener: (info: string) => void): this;
		public on(event: 'disconnect', listener: (event: any) => void): this;
		public on(event: 'emojiCreate', listener: (emoji: Emoji) => void): this;
		public on(event: 'emojiDelete', listener: (emoji: Emoji) => void): this;
		public on(event: 'emojiUpdate', listener: (oldEmoji: Emoji, newEmoji: Emoji) => void): this;
		public on(event: 'error', listener: (error: Error) => void): this;
		public on(event: 'guildBanAdd', listener: (guild: Guild, user: User) => void): this;
		public on(event: 'guildBanRemove', listener: (guild: Guild, user: User) => void): this;
		public on(event: 'guildCreate', listener: (guild: Guild) => void): this;
		public on(event: 'guildDelete', listener: (guild: Guild) => void): this;
		public on(event: 'guildMemberAdd', listener: (member: GuildMember) => void): this;
		public on(event: 'guildMemberAvailable', listener: (member: GuildMember) => void): this;
		public on(event: 'guildMemberRemove', listener: (member: GuildMember) => void): this;
		public on(event: 'guildMembersChunk', listener: (members: Collection<Snowflake, GuildMember>, guild: Guild) => void): this;
		public on(event: 'guildMemberSpeaking', listener: (member: GuildMember, speaking: boolean) => void): this;
		public on(event: 'guildMemberUpdate', listener: (oldMember: GuildMember, newMember: GuildMember) => void): this;
		public on(event: 'guildUnavailable', listener: (guild: Guild) => void): this;
		public on(event: 'guildUpdate', listener: (oldGuild: Guild, newGuild: Guild) => void): this;
		public on(event: 'messageDelete', listener: (message: JSCMessage) => void): this;
		public on(event: 'messageDeleteBulk', listener: (messages: Collection<Snowflake, JSCMessage>) => void): this;
		public on(event: 'messageReactionAdd', listener: (messageReaction: MessageReaction, user: User) => void): this;
		public on(event: 'messageReactionRemove', listener: (messageReaction: MessageReaction, user: User) => void): this;
		public on(event: 'messageReactionRemoveAll', listener: (message: JSCMessage) => void): this;
		public on(event: 'messageUpdate', listener: (oldMessage: JSCMessage, newMessage: JSCMessage) => void): this;
		public on(event: 'presenceUpdate', listener: (oldMember: GuildMember, newMember: GuildMember) => void): this;
		public on(event: 'ready', listener: () => void): this;
		public on(event: 'reconnecting', listener: () => void): this;
		public on(event: 'roleCreate', listener: (role: Role) => void): this;
		public on(event: 'roleDelete', listener: (role: Role) => void): this;
		public on(event: 'roleUpdate', listener: (oldRole: Role, newRole: Role) => void): this;
		public on(event: 'typingStart', listener: (channel: Channel, user: User) => void): this;
		public on(event: 'typingStop', listener: (channel: Channel, user: User) => void): this;
		public on(event: 'userNoteUpdate', listener: (user: UserResolvable, oldNote: string, newNote: string) => void): this;
		public on(event: 'userUpdate', listener: (oldUser: User, newUser: User) => void): this;
		public on(event: 'voiceStateUpdate', listener: (oldState: VoiceState | undefined, newState: VoiceState) => void): this;
		public on(event: 'warn', listener: (info: string) => void): this;
    }

    export interface JSClientOptions {
        owners: Snowflake|Snowflake[],
        prefix: any|any[]
    }

    export class JSCGuild extends Guild {
        public createRole(options?: JSRoleOptions): Promise<Role>
        public get betterRegion(): String
    }

    export interface JSRoleOptions {
        name?: String,
        color?: ColorResolvable,
        hoisted?: Boolean,
        position?: Number,
        permissions?: PermissionResolvable,
        mention?: Boolean
    }

    export class JSCEmbed extends MessageEmbed {
        public constructor(options?: JSCEmbedOptions)
    }

    export interface JSCEmbedOptions extends MessageEmbedOptions {
        randomColor?: Boolean,
    }

    export class Command {
        public new(options: CommandOptions, asyncs: (message: JSCMessage, args, client: JSClient) => void): this;
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