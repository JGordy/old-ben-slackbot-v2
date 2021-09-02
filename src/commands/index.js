const callingEchoBase = require('./callingEchoBase');
const getHelp = require('./getHelp');
const getScene = require('./getScene');
const sayHelloThere = require('./sayHelloThere');
const tellDadJoke = require('./tellDadJoke');
const sendError = require('./sendError');
const {
    openFeatureModal,
    handleFeatureSubmit,
    handleAddLabelField,
} = require('./addNewFeature');

module.exports = {
    openFeatureModal,
    handleFeatureSubmit,
    handleAddLabelField,
    callingEchoBase,
    getHelp,
    getScene,
    sayHelloThere,
    sendError,
    tellDadJoke,
};
