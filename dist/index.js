"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const User_1 = __importDefault(require("./Classes/User"));
const Bot_1 = __importDefault(require("./Classes/Bot"));
module.exports = { user: User_1.default, bot: Bot_1.default };
