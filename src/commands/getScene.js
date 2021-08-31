const obiWanGifs = require('../consts/gifs');

const getScene = async ({ message, say }) => {
    const gifKeys = Object.keys(obiWanGifs);
    const index = Math.floor(Math.random() * gifKeys.length);

    await say({
        blocks: [
            {
                "type": "image",
                "title": {
                    "type": "plain_text",
                    "text": 'Obi-Wan\'s Greatest Hit\'s',
                    "emoji": true
                },
                "image_url": obiWanGifs[gifKeys[index]],
                "alt_text": "Obi-Wan\'s Greatest Hit\'s",
            }
        ],
    });
}

module.exports = getScene;
