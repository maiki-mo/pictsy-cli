const axios = require('axios');
const { db } = require('./../config/keys');

module.exports = (args) => {
    axios.get(`https://api.mlab.com/api/1/databases/pictsy-db/collections/images/${args._[2]}?apiKey=${db.api_key}`).then((data) => {
        console.log(data.data);
    }).catch((err) => {
        console.log('Connection Refused:', err);
    });
};
