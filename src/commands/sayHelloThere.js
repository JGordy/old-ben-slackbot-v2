const obiWanGifs = require('../consts/gifs');

const helloThereGifs = ['helloThereYoung', 'helloThereOld', 'mustacheYoung', 'mustacheOld', 'onEdge', 'joyful', 'what', 'nope'];

const sayHello = async ({ message, say }) => {

    await say(`Hello there <@${message.user}>!`)

    const index = Math.floor(Math.random() * helloThereGifs.length);

    await say({
        blocks: [
            {
                "type": "image",
                "title": {
                    "type": "plain_text",
                    "text": 'Hello there',
                    "emoji": true
                },
                "image_url": obiWanGifs[helloThereGifs[index]],
                "alt_text": "Obi-Wan Hello There",
            }
        ],
    });

};

module.exports = sayHello;
