"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
function helloWorld(req, res) {
    var user = CreateUser_1.default({
        email: 'rr@gmail.com',
        password: 'qwe123',
        techs: ['VueJS', 'React Native', 'React JS',
            { title: 'Javascript', experience: 60 }
        ],
        passions: ['Farming', 'Sports']
    });
    return res.json({ msg: 'Hello' });
}
exports.helloWorld = helloWorld;
