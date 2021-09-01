const callingEchoBase = require('./callingEchoBase');
const getHelp = require('./getHelp');
const getScene = require('./getScene');
const sayHelloThere = require('./sayHelloThere');
const tellDadJoke = require('./tellDadJoke');
const { openFeatureModal, handleFeatureSubmit } = require('./addNewFeature');
const sendError = require('./sendError');

module.exports = {
    openFeatureModal,
    handleFeatureSubmit,
    callingEchoBase,
    getHelp,
    getScene,
    sayHelloThere,
    sendError,
    tellDadJoke,
};
