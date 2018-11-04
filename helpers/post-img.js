const axios = require('axios');
const { db } = require('./../config/keys');

module.exports = async (imgData) => {
    await axios({
        url: `${db.url}${db.key_param}${db.api_key}`,
        method: 'post',
        data: {
            id: imgData.public_id,
            name: imgData.name,
            url: imgData.url,
        }
    }).then((response) => {
        console.log('Stored in Mongo with id:', response.data._id);
    })
};
