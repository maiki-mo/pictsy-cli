const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

module.exports = (args) => {
    app.listen(args._[1] || 3000, (req, res) => {
        console.log(`Server up and running on port ${args._[1] || 3000}`);
    });
};
