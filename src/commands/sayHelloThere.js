
const sayHello = async ({ message, say }) => {
    await say({
        blocks: [
            {
                "type": "image",
                "title": {
                    "type": "plain_text",
                    "text": 'Hello there',
                    "emoji": true
                },
                "image_url": "https://media.giphy.com/media/3ornk57KwDXf81rjWM/giphy.gif?cid=ecf05e47184rp3s6zrxmehgic5cby3e9bi0mqg3mvc55wt19&rid=giphy.gif&ct=g",
                "alt_text": "Obi-Wan Hello There",
            }
        ],
    });

    await say(`Hello there <@${message.user}>!`)
};

module.exports = sayHello;
