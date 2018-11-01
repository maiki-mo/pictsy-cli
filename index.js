const minimist = require('minimist');

module.exports = () => {
    const args = minimist(process.argv.slice(2));
    const cmd = args._[0];
    const second = args._[1];
    switch (cmd) {
        case 'version':
            require('./cmds/version.js')(args);
            break
        case 'help':
            require('./cmds/help.js')(args);
            break
        case 'show':
            require('./cmds/show.js')(args);
            break
        case 'download':
            require('./cmds/download.js')(args);
            break
        case 'upload':
            require('./cmds/upload.js')(args);
            break
        case 'list':
            require('./cmds/list.js')(args);
            break
        case 'delete':
            require('./cmds/delete.js')(args);
            break
        case 'delete-all':
            require('./cmds/delete-all.js')(args);
            break
        case 'serve':
            require('./cmds/server.js')(args);
            break
        case ('GET'):
            if (second === 'list') {
                require('./cmds/get-list.js');
            } else if (second === 'show') {
                require('./cmds/get-show.js');
            } else {
            console.error(`"${cmd}" requires another command!`)
            }
            break
        default:
            console.error(`"${cmd}" is not a valid command!`);
            break
    }
};
