const fetchDadJoke = require('./fetchDadJoke');
const { createIssue, getUserData, getRepo } = require('./fetchGithub');

module.exports = {
    createIssue,
    fetchDadJoke,
    getRepo,
    getUserData,
};