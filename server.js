require('dotenv').config();
const app = require('./src/bot.js');

const port = process.env.PORT || 8001;

app.error((error) => {
    // Check the details of the error to handle cases where you should retry sending a message or stop the app
    console.error(error);
});

(async () => {
    // Start your app
    await app.start(port);

    console.log(`⚡️ Slack Bolt app is running on port ${port} ⚡️`);
})();