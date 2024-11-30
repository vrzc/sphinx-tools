/// <reference types="node" />
import EventEmitter from "events";
import { Client } from "discord.js-selfbot-v13";
import JsonDB from "../utils/DB";
import { AutoReactionOptions, LevelingOptions, VoiceStayOptions } from "../Interfaces/UserInterfaces";
/**
 * Class for handling user-related auto-reactions and leveling interactions.
 */
declare class UserRelatedClass extends EventEmitter {
    private client;
    private levelingOn;
    private levelingOptions?;
    db: JsonDB;
    /**
     * Initializes a new instance of UserRelatedClass.
     * @param client - The Discord client instance.
     */
    constructor(client: Client);
    private _0x7a41;
    private _0x48d1;
    /**
     * Initiates the automatic reaction feature based on provided options.
     * @param {string} [options.sessionid="cdcbf8c16f0221eb1c147700f95e0038"] - The session ID for component interactions.
     * @param {string[]} [options.customBotID=[]] - Array of custom bot IDs to monitor for interactions.
     * @param {string} [options.reactionName] - The reaction emoji name to use, if applicable.
     * @param {number} [options.timeout=5000] - Delay in milliseconds before auto-reacting or interacting.
     * @param {string[]} [options.blacklistedwords=[]] - Array of words to ignore in message content or embed titles.
     * @param {string} [options.ownerId] - Optional ID of the owner for tracking and handling.
     */
    autoreaction(options?: AutoReactionOptions): Promise<void>;
    /**
     * @param message - The message indicating a win.
     * @param ownerId - The owner ID.
     */
    private handleWin;
    /**
     * Handles component interactions in messages.
     * @param message - The message containing components.
     * @param sessionid - The session ID for interaction.
     * @param timeout - The delay before interacting.
     * @param blacklistedwords - Words to ignore in the interaction.
     */
    private handleComponentInteraction;
    /**
     * Handles reacting to a message based on specified conditions.
     * @param message - The message to react to.
     * @param timeout - The delay before reacting.
     * @param blacklistedwords - Words to avoid in reactions.
     */
    private handleReactions;
    /**
     * Stops the leveling process by setting `levelingOn` to false.
     */
    stopLeveling(): void;
    /**
     * Restarts the leveling process with the last known options.
     */
    restartLeveling(): void;
    /**
     * Initiates the leveling process.
     * @param {string} [options.channel] - channel that the bot will spam in.
     * @param {boolean} [options.randomLetters] - Wether it's random letters or not.
     * @param {number} [options.time] - Timeout between each message.
     * @param {LevelingLanguage} [options.type] - Language "ar | eng"
     */
    leveling(options?: LevelingOptions): Promise<void>;
    /**
     * Initiates the VoiceStay process.
     * @param {string} [options.guild] - The guild
     * @param {string} [options.channel] - The channel
     */
    VoiceStay(options: VoiceStayOptions): Promise<void>;
}
export = UserRelatedClass;
