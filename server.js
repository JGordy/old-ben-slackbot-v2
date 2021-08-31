require('dotenv').config();
const app = require('./src/index.js');

const port = process.env.PORT || 8001;

(async () => {
    // Start your app
    await app.start(port);

    console.log(`⚡️ Slack Bolt app is running on port ${port} ⚡️`);
})();