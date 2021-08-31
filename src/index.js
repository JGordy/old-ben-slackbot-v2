require('dotenv').config();
// Require the Bolt package (github.com/slackapi/bolt)
const { App } = require("@slack/bolt");

const {
    callingEchoBase,
    getHelp,
    sayHelloThere,
    tellDadJoke,
} = require('./commands');

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    socketMode: true,
    appToken: process.env.SLACK_APP_TOKEN
});

// app.action('button_click', async ({ body, ack, say }) => {
//     // Acknowledge the action
//     await ack();
//     await say(`<@${body.user.id}> clicked the button`);
// });

// Listens to incoming messages that contain the ":wave:" emoji
app.message(':wave:', sayHelloThere);

app.message('!echo', callingEchoBase);

// Gets help data for each supported command
app.message('!help', getHelp);

// Tells jokes only a dad could love
app.message('!dadjoke', tellDadJoke);
// app.message('!dj', tellDadJoke);

module.exports = app;
