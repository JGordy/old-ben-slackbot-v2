const { getRepoLabels, createIssue } = require('../fetchers');
const sendError = require('./sendError');
const { viewConfig, inputIds, createLabelBlock } = require('../constants/featureView');

const {
    repo: repoIds,
    title: titleIds,
    body: bodyIds,
    labels: labelIds,
} = inputIds;

const openFeatureModal = async ({ ack, body, client }) => {
    await ack();

    try {
        const channel = 'channel_id=' + body.channel_id.toString();
        console.log({ channel });
        // Call views.open with the built-in client
        await client.views.open({
            // Pass a valid trigger_id within 3 seconds of receiving it
            trigger_id: body.trigger_id,
            notify_on_close: true,
            // View payload
            view: {
                ...viewConfig,
                private_metadata: `${channel}`,
            },
        });
    }
    catch (error) {
        console.error('[Error] - Couldn\'t open feature modal ', error);
    }
}

const handleAddLabelField = async ({ ack, client, body }) => {
    await ack();

    const { state } = body.view;
    let owner = 'Generosity-Market';

    const repo = state.values[repoIds.block_id][repoIds.action_id].selected_option.value;

    if (repo === 'old-ben-slackbot-v2') {
        owner = 'JGordy';
    };

    const { data: labels } = await getRepoLabels({ owner, repo });

    try {
        // const channel_id = body.view.private_metadata.toString();
        // Call views.update with the built-in client
        await client.views.update({
            // Pass the view_id
            view_id: body.view.id,
            // Pass the current hash to avoid race conditions
            hash: body.view.hash,
            // View payload with updated blocks
            view: {
                // Previous view
                ...viewConfig,
                // private_metadata: `${channel_id}`,
                blocks: [
                    // Previous blocks
                    ...viewConfig.blocks,
                    // New block based on the specific repos returned labels
                    { ...createLabelBlock(labels) },
                ]
            }
        });
    }
    catch (error) {
        console.error(error);
    }
};

const handleFeatureSubmit = async ({ ack, view, body: commandBody, client }) => {
    await ack();

    const {
        state: {
            values,
        }
    } = view;

    const repo = values[repoIds.block_id][repoIds.action_id].selected_option.value;
    const title = values[titleIds.block_id][titleIds.action_id].value;
    const body = values[bodyIds.block_id][bodyIds.action_id].value;
    const labelValues = values[labelIds.block_id][labelIds.action_id].selected_options;

    // Format labels to send in request
    const labels = labelValues.map(label => label.value);

    // Github create issue request
    const response = await createIssue({ repo, title, body, labels });

    // console.log({ body });
    // console.log({ view });
    // console.log('view.private_metadata: ', view.private_metadata);
    // const channel = view.private_metadata.split('=');
    // console.log({ channel });

    // if (response.status !== 201) {
    //     await sendError({ say, error: response.data.message, channel, client });
    // } else {
    //     await client.chat.postMessage({
    //         channel,
    //         text: `<@${commandBody.user.id}> success!! \n\n See your feature at this issue link: \n${response.data.url}`
    //     });
    // }
};

module.exports = {
    openFeatureModal,
    handleAddLabelField,
    handleFeatureSubmit,
};
