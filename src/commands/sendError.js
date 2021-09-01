const obiWanGifs = require('../constants/gifs');

const errorGifs = ['dontTryIt', 'iHaveFailedYou', 'nooo', 'nope', 'smh', 'soUncivilized'];

const sendError = async ({ say, error }) => {

    say(`\`[Error] - ${error}\``);

    const index = Math.floor(Math.random() * errorGifs.length);

    say({
        blocks: [
            {
                "type": "image",
                "title": {
                    "type": "plain_text",
                    "text": 'Obi-Wan\'s Uh Oh\'s',
                    "emoji": true
                },
                "image_url": obiWanGifs[errorGifs[index]],
                "alt_text": "Obi-Wan\'s Uh Oh\'s",
            }
        ],
    });
};

module.exports = sendError;