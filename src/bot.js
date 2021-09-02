require('dotenv').config();
// Require the Bolt package (github.com/slackapi/bolt)
const { App } = require("@slack/bolt");

const {
    openFeatureModal,
    handleAddLabelField,
    handleFeatureSubmit,
    callingEchoBase,
    getHelp,
    getScene,
    sayHelloThere,
    tellDadJoke,
} = require('./commands');

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    socketMode: true,
    appToken: process.env.SLACK_APP_TOKEN
});

// Listens to incoming messages that contain the ":wave:" emoji
app.message(':wave:', sayHelloThere);
app.message('!hello', sayHelloThere);

// Echos the input of the user
app.message('!echo', callingEchoBase);

// Gets help data for each supported command
app.message('!help', getHelp);
// app.message(':rebel_alliance:', getHelp);

// Gets random movie scene starring Obi Wan in gif format
app.message('!scene', getScene);
app.message(':clapper:', getScene);

// Tells jokes only a dad could love
app.message('!dadjoke', tellDadJoke);
// app.message('!dj', tellDadJoke);

// Adds new features as a Github issue on specified repo
app.command('/add-feature', openFeatureModal);
app.action('repo_select_input', handleAddLabelField);
app.view('add-feature-view', handleFeatureSubmit);

module.exports = app;
