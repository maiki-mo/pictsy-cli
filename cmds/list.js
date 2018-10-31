const cloudinary = require('cloudinary');
const keys = require('./../config/keys');

cloudinary.config(keys.cloudinary);

module.exports = () => {
    cloudinary.v2.api.resources({ type: 'upload' }, (err, res) => {
        console.log(res);
    });
};
