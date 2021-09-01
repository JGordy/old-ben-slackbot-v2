const inputIds = {
    repo: {
        block_id: 'repo_select',
        action_id: 'repo_select_input',
    },
    title: {
        block_id: 'feature_title',
        action_id: 'title_input',
    },
    body: {
        block_id: 'feature_body',
        action_id: 'body_input',
    },
}

const viewConfig = {
    type: 'modal',
    // View identifier
    callback_id: 'add-feature-view',
    title: {
        type: 'plain_text',
        text: 'Add your feature'
    },
    blocks: [
        {
            type: 'section',
            block_id: inputIds.repo.block_id,
            text: {
                type: 'mrkdwn',
                text: 'Which repo to post feature to?',
            },
            accessory: {
                type: 'static_select',
                placeholder: {
                    type: 'plain_text',
                    text: 'Select a repo',
                    emoji: true,
                },
                options: [
                    {
                        text: {
                            type: 'plain_text',
                            text: 'Generosity-Market.github.io',
                            emoji: true,
                        },
                        value: 'Generosity-Market.github.io',
                    },
                    {
                        text: {
                            type: 'plain_text',
                            text: 'gm_prod_server',
                            emoji: true,
                        },
                        value: 'gm_prod_server',
                    },
                    {
                        text: {
                            type: 'plain_text',
                            text: 'old-ben-slackbot-v2',
                            emoji: true,
                        },
                        value: 'old-ben-slackbot-v2',
                    },
                ],
                action_id: inputIds.repo.action_id,
            }
        },
        {
            type: 'input',
            block_id: inputIds.title.block_id,
            label: {
                type: 'plain_text',
                text: 'What is the title of your feature?',
            },
            element: {
                type: 'plain_text_input',
                action_id: inputIds.title.action_id,
                multiline: false,
            }
        },
        {
            type: 'input',
            block_id: inputIds.body.block_id,
            label: {
                type: 'plain_text',
                text: 'How would you describe this feature?',
            },
            element: {
                type: 'plain_text_input',
                action_id: inputIds.body.action_id,
                multiline: true,
            }
        }
        // TODO: Add labels input
    ],
    submit: {
        type: 'plain_text',
        text: 'Submit Feature',
    },
};

module.exports = {
    viewConfig,
    inputIds,
};
