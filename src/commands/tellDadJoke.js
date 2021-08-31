const { fetchDadJoke } = require('../fetchers');

const tellDadJoke = async ({ message, say }) => {

    const jokeSubject = message.text.replace('!dadjoke', '') || null;

    const text = await fetchDadJoke(jokeSubject);

    console.log('[DadJoke] - ', text);

    await say({ text });
};

module.exports = tellDadJoke;
