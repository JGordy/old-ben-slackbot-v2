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
    labels: {
        block_id: 'feature_labels',
        action_id: 'labels_input',
    },
}

const repoSelectInput = ([{
    type: 'section',
    block_id: inputIds.repo.block_id,
    text: {
        type: 'plain_text',
        text: 'Which repo to post feature to?',
    },
    accessory: {
        type: 'static_select',
        action_id: inputIds.repo.action_id,
        placeholder: {
            type: 'plain_text',
            text: 'Select a repo',
        },
        options: [
            {
                text: {
                    type: 'plain_text',
                    text: 'Application (Generosity-Market.github.io)',
                },
                value: 'Generosity-Market.github.io',
            },
            {
                text: {
                    type: 'plain_text',
                    text: 'Server (gm_prod_server)',
                },
                value: 'gm_prod_server',
            },
            {
                text: {
                    type: 'plain_text',
                    text: 'old-ben-slackbot-v2',
                },
                value: 'old-ben-slackbot-v2',
            },
        ],
    },
}]);

const featureTitleInput = ([{
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
}]);

const featureBodyInput = ([{
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
}]);

const viewConfig = {
    type: 'modal',
    // View identifier
    callback_id: 'add-feature-view',
    title: {
        type: 'plain_text',
        text: 'Add your feature'
    },
    blocks: [
        ...repoSelectInput,
        ...featureTitleInput,
        ...featureBodyInput,
    ],
    submit: {
        type: 'plain_text',
        text: 'Submit Feature',
    },
};

const createLabelBlock = (labels) => {

    const formattedOptions = labels.map(label => ({
        text: {
            type: "plain_text",
            text: label.name
        },
        value: label.name
    }));

    return ({
        type: 'section',
        block_id: inputIds.labels.block_id,
        text: {
            type: 'plain_text',
            text: 'Add labels',
        },
        accessory: {
            type: 'multi_static_select',
            action_id: inputIds.labels.action_id,
            placeholder: {
                type: 'plain_text',
                text: 'Select a label',
            },
            options: formattedOptions,
        },
    });
}

module.exports = {
    inputIds,
    createLabelBlock,
    viewConfig,
};
