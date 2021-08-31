
const sayHello = async ({ message, say }) => {
    // say() sends a message to the channel where the event was triggered
    // await say(`Hey there <@${message.user}>!`);
    await say({
        blocks: [
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": `Hey there <@${message.user}>!`
                },
                // "accessory": {
                //     "type": "button",
                //     "text": {
                //         "type": "plain_text",
                //         "text": "Click Me"
                //     },
                //     "action_id": "button_click"
                // }
            }
        ],
        text: `Hey there <@${message.user}>!`
    });
};

module.exports = sayHello;