const axios = require('axios');
const { db } = require('./../config/keys');

module.exports = async (args, imgData) => {
    await axios({
        url: `${db.url}/${img}${db.key_param}${db.api_key}`,
        method: 'delete',
    }).then((response) => {
        console.log('Deleted in Mongo with id:', response.data._id);
    })
};
