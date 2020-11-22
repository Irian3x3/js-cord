/// <reference path="index.d.ts"/>
import { JSCMessage, JSClient, Command } from 'javascript-cord';

const test = new JSClient();

const token = `very-secret-token`;

test.start(token);

class TestCommand extends Command {
    constructor() {
        super({
            name: "test",
            description: {

            }
        })
    };

    public async run(message: JSCMessage) {
        message.create(`Hello!`)
    }
};