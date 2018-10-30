const minimist = require('minimist');

module.exports = () => {
    const args = minimist(process.argv.slice(2));
    const cmd = args._[0];

    switch (cmd) {
        case 'today':
            require('./cmds/today.js')(args)
            break
        case 'version':
            require('./cmds/version.js')(args)
            break
        case 'help':
            require('./cmds/help.js')(args)
            break
        case 'forecast':
            require('./cmds/forecast.js')(args)
            break
        case 'server':
            require('./cmds/server.js');
            break
        default:
            console.error(`"${cmd}" is not a valid command!`);
            break
    }
}
