const cloudinary = require('cloudinary');
const keys = require('./../config/keys');

cloudinary.config(keys.cloudinary);

module.exports = () => {
    cloudinary.v2.api.delete_all_resources((err, res) => {
        console.log(res);
    });
};
