const axios = require('axios');
const prettyjson = require('prettyjson');
const { db } = require('./../config/keys');

exports.module = async function getList(){
    await axios.get(`https://api.mlab.com/api/1/databases/pictsy-db/collections/images?apiKey=${db.api_key}`).then((data) => {
        console.log(prettyjson.render(data.data));
    }).catch((err) => {
        console.log('Connection Refused:', err);
    })
};
