const { getUserData, getRepo, createIssue } = require('../fetchers');
const sendError = require('./sendError');
const { viewConfig, inputIds } = require('../constants/featureView');

const {
    repo: repoIds,
    title: titleIds,
    body: bodyIds,
} = inputIds;

const openFeatureModal = async ({ ack, body, client }) => {
    await ack();

    try {
        // Call views.open with the built-in client
        await client.views.open({
            // Pass a valid trigger_id within 3 seconds of receiving it
            trigger_id: body.trigger_id,
            notify_on_close: true,
            // View payload
            view: viewConfig,
        });
    }
    catch (error) {
        console.error('[Error] - Couldn\'t open feature modal ', error);
    }
}

const handleFeatureSubmit = async ({ ack, view, message, say, body: commandBody }) => {
    await ack();

    const {
        state: {
            values,
        }
    } = view;

    const repo = values[repoIds.block_id][repoIds.action_id].selected_option.value;
    const title = values[titleIds.block_id][titleIds.action_id].value;
    const body = values[bodyIds.block_id][bodyIds.action_id].value;

    const response = await createIssue({ repo, title, body });

    if (response.status !== 201) {
        await sendError({ say, error: response.data.message });
    } else {
        await say({ text: `<@${commandBody.user.id}> success!! \n\n See your feature at this issue link: \n${response.data.url}` });
    }
};

module.exports = {
    openFeatureModal,
    handleFeatureSubmit,
};
