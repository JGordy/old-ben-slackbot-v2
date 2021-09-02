const obiWanGifs = require('../constants/gifs');

const errorGifs = ['dontTryIt', 'iHaveFailedYou', 'nooo', 'nope', 'smh', 'soUncivilized'];

const sendError = async ({ say, error, client, channel }) => {

    const index = Math.floor(Math.random() * errorGifs.length);

    const errorMessage = `\`[Error] - ${error}\``;
    const errorGif = ([
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
    ]);

    if (say) {
        say(errorMessage,);


        say({
            blocks: errorGif,
        });
    } else {
        await client.chat.postMessage({
            channel,
            text: errorMessage,
        });

        await client.chat.postMessage({
            channel,
            blocks: errorGif,
        });
    }
};

module.exports = sendError;