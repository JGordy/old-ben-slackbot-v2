const fetchDadJoke = require('./fetchDadJoke');
const { createIssue, getUserData, getRepo, getRepoLabels } = require('./fetchGithub');

module.exports = {
    fetchDadJoke,
    // Github related requests
    createIssue,
    getRepo,
    getRepoLabels,
    getUserData,
};