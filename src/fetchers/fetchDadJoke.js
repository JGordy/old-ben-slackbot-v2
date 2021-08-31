const fetch = require('node-fetch');

const headers = {
    method: "GET",
    accept: "application/json",
    "User-Agent": "https://github.com/JGordy/slackbot"
};

function fetchDadJoke(args) {
    let url = 'https://icanhazdadjoke.com/';
    let randomIndex;

    if (args) {
        url = url + `search?term=${args}`;
    }

    return fetch(url, { headers })
        .then(results => {
            return results.json()
        })
        .then(data => {
            if (data.joke) {
                return '"' + data.joke + '"';
            } else if (data.total_jokes !== 0) {
                randomIndex = Math.floor(Math.random() * (data.results.length));
                return '"' + data.results[randomIndex].joke + '"';
            } else {
                let messages = [":wave: " + args + " is not the term you're looking for.",
                ":rebel_alliance: The Jedi archives contain nothing on the term " + '"' + args + '"',
                ":bluelightsaber: " + args + " not found. You'll never win Darth.",
                ":wave: " + args + " is not the term you're looking for."];
                randomIndex = Math.floor(Math.random() * messages.length);

                console.log('No dadjokes returned');

                return `${messages[randomIndex]}`
            }
        })
        .catch(err => {
            return "Error fetching dad jokes: " + err;
        });
};

module.exports = fetchDadJoke;