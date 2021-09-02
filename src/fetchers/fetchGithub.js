require('dotenv').config();
const { Octokit } = require("@octokit/rest");

const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
});

const getUserData = () => octokit.request("/user");

const getRepo = ({ owner, repo }) => octokit.rest.repos.get({
    owner,
    repo,
});

// List labels for a repository
const getRepoLabels = ({ owner, repo }) => octokit.rest.issues.listLabelsForRepo({
    owner,
    repo,
});

const createIssue = ({ repo, title, body, labels }) => {
    let owner = 'Generosity-Market';

    if (repo === 'old-ben-slackbot-v2') {
        owner = 'JGordy';
    }

    return octokit.rest.issues.create({
        owner,
        repo,
        title,
        body,
        labels,
    });
}

module.exports = {
    createIssue,
    getRepo,
    getRepoLabels,
    getUserData,
};