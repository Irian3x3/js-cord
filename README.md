<div align="center">
    <h1>JavaScript-Cord (JSCord)</h1>
</div>

## Table of contents
- [About](#about)
- [Installation](#installation)
- [Examples](#examples)
    - [Basic](#basic)
    - [Commands](#commands)
- [Links](#links)
- [Contributing](#contributing)
## About
JSCord is a discord.js framework to easily maintain discord bots.  
***Note: This is still in beta and some features may not be working***
## Installation
Node.js 12.0.0+ is required. Install with npm:
```bash
$ npm i javascript-cord
```

## Examples
<!--*Examples will come out soon while I figure out more ways to make this package good.*-->

#### Basic
```js
const JSC = require('javascript-cord');

const client = new JSC.JSClient(); // Declaring the new client

client.on("message", (msg) => {
    if (msg.content === "!hello") {
        msg.create("Hello world!")
    } else if (msg.content === "!ping") {
        msg.create(`Pong! ${msg.ping}!`)
    }
});

client.start("TOKEN"); // Start your bot, replacing TOKEN with your bot's token, remember to NEVER share your token with ANYONE.
```

#### Commands
```js
const JSC = require("javascript-cord");

const client = new JSC.JSClient();

let prefix = "?";

client.on("message", async (message) => {
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const cmd = args.shift().toLowerCase();

    if (cmd === "hi") {
        message.create("Hi!")
    } else if (cmd === "bye") {
        message.create("Oh okay, bye")
    } else if (cmd === "foo") {
        message.create("bar")
    }
});

client.start("TOKEN")
```

## Contributing
- Fork [the repo](https://github.com/Irian3x3/js-cord), [clone the fork](https://git-scm.com/docs/git-clone "git-scm.com/docs/git-clone")
- Make and commit your changes
- Make a pull request and I'll see :)
## Links
- [GitHub](https://github.com/Irian3x3/js-cord)
- [NPM](https://npmjs.com/package/javascript-cord)
- [Support Server](https://discord.gg/ZfZSjcC9bP)