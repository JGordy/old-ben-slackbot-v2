const callingEchoBase = async ({ message, say }) => {
    const echo = message.text.replace('!echo', '');

    await say({ text: echo });
}

module.exports = callingEchoBase;
