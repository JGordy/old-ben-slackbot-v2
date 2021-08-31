const allCommands = ['`!help`', '`!echo`', '`!dadjoke`', '`!gif`', '`!enhancement`', '`!bug`'];

const defaultMessage = "*Here are the supported commands:*\n" + allCommands.join("\n") + "\n\nYou can see what each command does by typing `!help` followed by the command you want to see details of. \n\n*For example:* `!help !dadjoke` will show you the details of the dadjoke command.";

const getMessage = (args) => {
    if (args === 'echo') {
        return '`echo` Mimics any text after the !echo command';
    } else if (args === 'help') {
        return '`help` Lists all currently supported commands. \n\nYou can also add the name of the command after !help to get specifics for that command. \n\nTry using `!help` !dadjoke or `!help` !feature';
    } else if (args === 'dadjoke') {
        return '`dadjoke` replies with a randomly chosen dad joke. Try adding a term behind the command to get specific jokes. I.E `!dadjoke` batman';
    } else if (args === 'gif') {
        return '`gif` currently in the works. Try back later.';
    } else if ((args === 'enhancement') || (args === 'bug')) {
        return '`enhancement` or `bug` Adds an issue in the specified repository. \n\n*Repo options available are:* \n```!frontend for front_end_POC, \n!backend for back_end_POC, \n!api for the official api, \n!site for Generosity-Market.github.io, \n!slackbot for myself, Old Ben.``` \n\nAfter specifying the repo, you can then specify title, and the issues main text in the format below. \nNote the use of semicolons bewtween the title and text.  \n\n`!enhancement !frontend title;text` or `!bug !site title;text`';
    } else {
        return null;
    }
}

const getHelp = async ({ message, say }) => {
    let text = defaultMessage;

    const command = message.text.replace('!help ', '') || null;

    if (message.text !== '!help' || (command && command !== '!help')) {
        text = getMessage(command);
    }

    await say({ text });
};

module.exports = getHelp;
